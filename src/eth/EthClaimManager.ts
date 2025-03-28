import { IncomingMessage } from "http";
import { clearInterval } from "timers";
import { TransactionReceipt } from "web3";
import { WebSocket } from "ws";

import { FaucetError } from "../common/FaucetError.js";
import { FaucetLogLevel, FaucetProcess } from "../common/FaucetProcess.js";
import { ServiceManager } from "../common/ServiceManager.js";
import { faucetConfig } from "../config/FaucetConfig.js";
import { FaucetDatabase } from "../db/FaucetDatabase.js";
import { FaucetOutflowModule } from "../modules/faucet-outflow/FaucetOutflowModule.js";
import { GitcoinClaimStatus } from "../modules/gitcoin-claimer/GitcoinClaimerTypes.js";
import { ModuleHookAction, ModuleManager } from "../modules/ModuleManager.js";
import { FaucetStatsLog } from "../services/FaucetStatsLog.js";
import {
  FaucetSessionStatus,
  FaucetSessionStoreData,
} from "../session/FaucetSession.js";
import { nowSeconds } from "../utils/DateUtils.js";
import { FaucetHttpServer } from "../webserv/FaucetHttpServer.js";
import {
  EthClaimNotificationClient,
  IEthClaimNotificationData,
} from "./EthClaimNotificationClient.js";
import { EthWalletManager } from "./EthWalletManager.js";
import { EthWalletRefill } from "./EthWalletRefill.js";
import * as Sentry from "@sentry/node";
export enum ClaimTxStatus {
  QUEUE = "queue",
  PROCESSING = "processing",
  PENDING = "pending",
  CONFIRMED = "confirmed",
  FAILED = "failed",
}

export interface ClaimTxEvents {
  processing: () => void;
  pending: () => void;
  confirmed: () => void;
  failed: () => void;
}

export interface IQueuedClaimTx {
  time: number;
  target: string;
  amount: string;
  session: string;
}

export interface EthClaimInfo {
  session?: string; // for PoW
  userId?: string; // for Gitcoin
  gitcoinClaimRecordId?: string; // for Gitcoin
  target: string;
  amount: string;
  claim: EthClaimData;
}

export interface EthClaimData {
  claimIdx: number;
  claimStatus: ClaimTxStatus;
  claimTime: number;
  txHash?: string;
  txHex?: string;
  txNonce?: number;
  txBlock?: number;
  txFee?: string;
  txError?: string;
}

export class EthClaimManager {
  private initialized: boolean;
  private queueInterval: NodeJS.Timeout;
  private claimTxDict: { [session: string]: EthClaimInfo } = {};
  private claimTxQueue: EthClaimInfo[] = [];
  private pendingTxQueue: { [hash: string]: EthClaimInfo } = {};
  private historyTxDict: { [nonce: number]: EthClaimInfo } = {};
  private queueProcessing: boolean = false;
  private lastClaimTxIdx: number = 1;
  private lastProcessedClaimTxIdx: number = 0;
  private lastConfirmedClaimTxIdx: number = 0;
  private lastClaimNotification: IEthClaimNotificationData;

  public async initialize(): Promise<void> {
    if (this.initialized) return;
    this.initialized = true;

    // restore saved claimTx queue
    let maxQueueIdx = 0;
    const storedSession = await ServiceManager.GetService(
      FaucetDatabase
    ).getSessions([FaucetSessionStatus.CLAIMING]);

    storedSession.forEach((sessionData) => {
      const claimInfo: EthClaimInfo = {
        session: sessionData.sessionId,
        target: sessionData.targetAddr,
        amount: sessionData.dropAmount,
        claim: sessionData.claim,
      };
      switch (claimInfo.claim.claimStatus) {
        case ClaimTxStatus.QUEUE:
        case ClaimTxStatus.PROCESSING:
          this.claimTxQueue.push(claimInfo);
          this.claimTxDict[claimInfo.session] = claimInfo;
          break;
        case ClaimTxStatus.PENDING:
          this.pendingTxQueue[claimInfo.claim.txHash] = claimInfo;
          this.claimTxDict[claimInfo.session] = claimInfo;
          this.awaitTxReceipt(
            claimInfo,
            ServiceManager.GetService(EthWalletManager).watchClaimTx(claimInfo)
          );
          break;
        default: {
          const msg =
            "Cannot restore claimTx: unexpected claim status '" +
            claimInfo.claim.claimStatus +
            "'";
          ServiceManager.GetService(FaucetProcess).emitLog(
            FaucetLogLevel.ERROR,
            msg
          );
          Sentry.captureMessage(msg, { extra: { claimInfo } });
          return;
        }
      }
      if (claimInfo.claim.claimIdx > maxQueueIdx)
        maxQueueIdx = claimInfo.claim.claimIdx;
    });

    this.claimTxQueue.sort((a, b) => a.claim.claimIdx - b.claim.claimIdx);
    this.lastClaimTxIdx = maxQueueIdx + 1;

    // register claim ws endpoint
    ServiceManager.GetService(FaucetHttpServer).addWssEndpoint(
      "claim",
      /^\/ws\/claim($|\?)/,
      (req, ws, ip) => this.processClaimNotificationWebSocket(req, ws, ip)
    );

    // start queue processing interval
    this.queueInterval = setInterval(() => this.processQueue(), 2000);
  }

  public dispose() {
    if (!this.initialized) return;
    this.initialized = false;

    EthClaimNotificationClient.resetClaimNotification();
    clearInterval(this.queueInterval);
  }

  private async processClaimNotificationWebSocket(
    req: IncomingMessage,
    ws: WebSocket,
    remoteIp: string
  ) {
    let sessionId: string;
    try {
      const urlParts = req.url.split("?");
      const url = new URLSearchParams(urlParts[1]);
      sessionId = url.get("session");

      let sessionInfo: FaucetSessionStoreData;
      if (
        !sessionId ||
        !(sessionInfo = await ServiceManager.GetService(
          FaucetDatabase
        ).getSession(sessionId))
      )
        throw new Error("session not found");

      if (sessionInfo.status !== FaucetSessionStatus.CLAIMING)
        throw new Error("session not claiming");

      new EthClaimNotificationClient(ws, sessionInfo.claim.claimIdx);
    } catch (ex) {
      ws.send(
        JSON.stringify({
          action: "error",
          data: {
            reason: ex.toString(),
          },
        })
      );
      ws.close();
      return;
    }
  }

  public getTransactionQueue(queueOnly?: boolean): EthClaimInfo[] {
    const txlist: EthClaimInfo[] = [];
    Array.prototype.push.apply(txlist, this.claimTxQueue);
    if (!queueOnly) {
      Array.prototype.push.apply(txlist, Object.values(this.pendingTxQueue));
      Array.prototype.push.apply(txlist, Object.values(this.historyTxDict));
    }
    return txlist;
  }

  public getQueuedAmount(): bigint | null {
    let totalPending = 0n;
    this.claimTxQueue.forEach((claimTx) => {
      totalPending += BigInt(claimTx.amount);
    });
    return totalPending;
  }

  public getLastProcessedClaimIdx(): number {
    return this.lastProcessedClaimTxIdx;
  }

  private updateClaimStatus(claimInfo: EthClaimInfo) {
    if (claimInfo.claim.claimStatus === ClaimTxStatus.CONFIRMED) {
      const moduleManager = ServiceManager.GetService(ModuleManager);
      moduleManager.processActionHooks([], ModuleHookAction.SessionClaimed, [
        claimInfo,
      ]);
      moduleManager
        .getModule<FaucetOutflowModule>("faucet-outflow")
        ?.updateState(null, BigInt(claimInfo.claim.txFee));
      ServiceManager.GetService(FaucetStatsLog).addClaimStats(claimInfo);
    }
    if (claimInfo.session) {
      ServiceManager.GetService(FaucetDatabase).updateClaimData(
        claimInfo.session,
        claimInfo.claim
      );
    }
  }

  public async createSessionClaim(
    sessionData: FaucetSessionStoreData
  ): Promise<EthClaimInfo> {
    if (sessionData.status !== FaucetSessionStatus.CLAIMABLE)
      throw new FaucetError(
        "NOT_CLAIMABLE",
        "cannot claim session: not claimable (state: " +
          sessionData.status +
          ")"
      );
    if (BigInt(sessionData.dropAmount) < BigInt(faucetConfig.minDropAmount)) {
      return;
    }

    let maxDropAmount = BigInt(faucetConfig.maxDropAmount);
    if (sessionData.data.overrideMaxDropAmount)
      maxDropAmount = BigInt(sessionData.data.overrideMaxDropAmount);
    if (BigInt(sessionData.dropAmount) > maxDropAmount)
      sessionData.dropAmount = maxDropAmount.toString();

    const claimInfo: EthClaimInfo = {
      session: sessionData.sessionId,
      target: sessionData.targetAddr,
      amount: sessionData.dropAmount,
      claim: sessionData.claim,
    };

    // This 'try' actually does nothing as there're no modules that add hooks for this action
    try {
      await ServiceManager.GetService(ModuleManager).processActionHooks(
        [],
        ModuleHookAction.SessionClaim,
        [claimInfo]
      );
    } catch (ex) {
      if (ex instanceof FaucetError) throw ex;
      else
        throw new FaucetError(
          "INTERNAL_ERROR",
          "claimSession failed: " + ex.toString()
        );
    }

    // prevent multi claim via race condition
    if (this.claimTxDict[sessionData.sessionId])
      throw new FaucetError(
        "RACE_CLAIMING",
        "cannot claim session: already claiming (race condition)"
      );

    claimInfo.claim = {
      claimIdx: this.lastClaimTxIdx++,
      claimStatus: ClaimTxStatus.QUEUE,
      claimTime: nowSeconds(),
    };
    sessionData.status = FaucetSessionStatus.CLAIMING;
    sessionData.dropAmount = claimInfo.amount;
    sessionData.claim = claimInfo.claim;
    ServiceManager.GetService(FaucetDatabase).updateSession(sessionData);

    this.claimTxQueue.push(claimInfo);
    this.claimTxDict[claimInfo.session] = claimInfo;
    return claimInfo;
  }

  public async processQueue() {
    if (this.queueProcessing) return;
    this.queueProcessing = true;

    const ethWalletManager = ServiceManager.GetService(EthWalletManager);
    try {
      const walletState = ethWalletManager.getWalletState();
      while (
        Object.keys(this.pendingTxQueue).length < faucetConfig.ethMaxPending &&
        this.claimTxQueue.length > 0
      ) {
        const gasLimit =
          await ethWalletManager.getApproximateGasLimitForClaimTx();

        if (
          faucetConfig.ethQueueNoFunds &&
          (!walletState.ready ||
            walletState.balance - BigInt(faucetConfig.spareFundsAmount) <
              BigInt(this.claimTxQueue[0].amount) ||
            walletState.nativeBalance <=
              BigInt(gasLimit) * BigInt(faucetConfig.ethTxMaxFee))
        ) {
          break; // skip processing (out of funds)
        }

        const claimTx = this.claimTxQueue.splice(0, 1)[0];
        this.lastProcessedClaimTxIdx = claimTx.claim.claimIdx;
        await this.processQueueTx(claimTx);
      }

      const now = nowSeconds();
      const walletRefreshTime = walletState.ready ? 600 : 10;
      if (
        Object.keys(this.pendingTxQueue).length === 0 &&
        now - ethWalletManager.getLastWalletRefresh() > walletRefreshTime
      ) {
        await ethWalletManager.loadWalletState();
      }

      if (faucetConfig.ethRefillContract && walletState.ready)
        await ServiceManager.GetService(EthWalletRefill).processWalletRefill();

      if (
        !this.lastClaimNotification ||
        this.lastClaimNotification.processedIdx !==
          this.lastProcessedClaimTxIdx ||
        this.lastClaimNotification.confirmedIdx !== this.lastConfirmedClaimTxIdx
      ) {
        this.lastClaimNotification = {
          processedIdx: this.lastProcessedClaimTxIdx,
          confirmedIdx: this.lastConfirmedClaimTxIdx,
        };
        EthClaimNotificationClient.broadcastClaimNotification(
          this.lastClaimNotification
        );
      }
    } catch (ex) {
      let stack;
      try {
        throw new Error();
      } catch (ex) {
        stack = ex.stack;
      }
      const stackTrace = ex && ex.stack ? ex.stack : stack;
      ServiceManager.GetService(FaucetProcess).emitLog(
        FaucetLogLevel.ERROR,
        "Exception in transaction queue processing: " +
          ex.toString() +
          `\r\n   Stack Trace: ${stackTrace}`
      );
      Sentry.captureException(ex, { extra: { stackTrace } });
    }
    this.queueProcessing = false;
  }

  private async processQueueTx(claimTx: EthClaimInfo) {
    const ethWalletManager = ServiceManager.GetService(EthWalletManager);
    const walletState = ethWalletManager.getWalletState();
    if (!walletState.ready) {
      claimTx.claim.claimStatus = ClaimTxStatus.FAILED;
      claimTx.claim.txError = "Network RPC is currently unreachable.";
      this.updateClaimStatus(claimTx);
      return;
    }
    const gasLimit = await ethWalletManager.getApproximateGasLimitForClaimTx();

    if (
      walletState.balance - BigInt(faucetConfig.spareFundsAmount) <
        BigInt(claimTx.amount) ||
      walletState.nativeBalance <=
        BigInt(gasLimit) * BigInt(faucetConfig.ethTxMaxFee)
    ) {
      claimTx.claim.claimStatus = ClaimTxStatus.FAILED;
      claimTx.claim.txError = "Faucet wallet is out of funds.";
      this.updateClaimStatus(claimTx);
      return;
    }

    try {
      claimTx.claim.claimStatus = ClaimTxStatus.PROCESSING;

      // send transaction
      const { txPromise } = await ethWalletManager.sendClaimTx(claimTx);
      this.pendingTxQueue[claimTx.claim.txHash] = claimTx;

      ServiceManager.GetService(FaucetProcess).emitLog(
        FaucetLogLevel.INFO,
        `Submitted claim transaction ${
          claimTx.session
            ? `, session ${claimTx.session}`
            : `user ${claimTx.userId}`
        }` +
          " [" +
          ethWalletManager.readableAmount(BigInt(claimTx.amount)) +
          "] to: " +
          claimTx.target +
          ": " +
          claimTx.claim.txHash
      );
      claimTx.claim.claimStatus = ClaimTxStatus.PENDING;
      this.updateClaimStatus(claimTx);

      this.awaitTxReceipt(claimTx, txPromise);
    } catch (ex) {
      claimTx.claim.claimStatus = ClaimTxStatus.FAILED;
      claimTx.claim.txError = "Processing Exception: " + ex.toString();
      this.updateClaimStatus(claimTx);
    }
  }

  private awaitTxReceipt(
    claimTx: EthClaimInfo,
    txPromise: Promise<{
      status: boolean;
      block: number;
      fee: bigint;
      receipt: TransactionReceipt;
    }>
  ) {
    // await transaction receipt
    txPromise
      .then((txData) => {
        claimTx.claim.txFee = txData.fee.toString();
        if (!txData.status) {
          throw new Error("transaction reverted");
        }

        delete this.pendingTxQueue[claimTx.claim.txHash];
        const dictKey = claimTx.session || "user-" + claimTx.userId;
        delete this.claimTxDict[dictKey];
        claimTx.claim.txBlock = txData.block;

        this.lastConfirmedClaimTxIdx = claimTx.claim.claimIdx;

        claimTx.claim.claimStatus = ClaimTxStatus.CONFIRMED;
        this.updateClaimStatus(claimTx);
      })
      .catch((error) => {
        ServiceManager.GetService(FaucetProcess).emitLog(
          FaucetLogLevel.WARNING,
          "Transaction for " + claimTx.target + " failed: " + error.toString()
        );
        delete this.pendingTxQueue[claimTx.claim.txHash];
        const dictKey = claimTx.session || "user-" + claimTx.userId;
        delete this.claimTxDict[dictKey];
        claimTx.claim.claimStatus = ClaimTxStatus.FAILED;
        claimTx.claim.txError = "Transaction Error: " + error.toString();
        this.updateClaimStatus(claimTx);
      })
      .then(() => {
        this.historyTxDict[claimTx.claim.txNonce] = claimTx;
        setTimeout(() => {
          delete this.historyTxDict[claimTx.claim.txNonce];
        }, 30 * 60 * 1000);
      });
  }
}
