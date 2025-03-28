// Gitcoin Passport API has known limits by default, so we need to consider that when implementing this module.
// For example, allow to run getScore and submitPassport only once per X minutes.
// By default X will be 2 minutes.
// More about rate limits here:
// https://docs.passport.xyz/building-with-passport/passport-api/api-reference#rate-limits

import LRUCache from "lru-cache";
import { z } from "zod";
import { ServiceManager } from "../../common/ServiceManager.js";
import { FetchUtil } from "../../utils/FetchUtil.js";
import { faucetConfig } from "../../config/FaucetConfig.js";
import { zodSchemaBodyValidation } from "../../utils/zodSchemaBodyValidation.js";
import { FaucetLogLevel, FaucetProcess } from "../../common/FaucetProcess.js";
import { isValidAddress } from "ethereumjs-util";
import { FaucetError } from "../../common/FaucetError.js";
import { checkEnabled } from "./checkEnabled.decorator.js";
import { makeGitcoinClaimerError } from "./makeGitcoinClaimerError.js";
import * as Sentry from "@sentry/node";
type Address = string;

type ScoreResponse = {
  address: Address;
  score: string;
  status: "DONE" | "PROCESSING";
  last_score_timestamp: string;
  expiration_date: string;
  evidence: {
    type: string;
    success: boolean;
    rawScore: string;
    threshold: string;
  } | null;
  error: string | null;
  stamp_scores: Record<string, string> | null;
};

const zodGitcoinSigningMessage = z.object({
  message: z.string(),
  nonce: z.string(),
});

type GitcoinSigningMessage = Required<z.infer<typeof zodGitcoinSigningMessage>>;

const zodPassportSubmitData = z.object({
  address: z.string(),
});

type PassportSubmitData = Required<z.infer<typeof zodPassportSubmitData>>;

// Cache for Gitcoin scores. We need it to avoid multiple requests to the Gitcoin API.
const GitcoinScoreCache = new LRUCache<Address, number>({
  ttl: 1000 * 60 * 2, // 2 minutes
  ttlAutopurge: true,
});

const GitcoinPassportSubmissions = new LRUCache<
  Address,
  {
    timestamp: number;
  }
>({
  ttl: 1000 * 60 * 5, // 5 minutes
  ttlAutopurge: true,
});

class GitcoinAPI {
  private baseUrl: string = "https://api.scorer.gitcoin.co";
  private accessToken: string;
  private scorerId: string;
  private headers: Record<string, string>;

  constructor(accessToken: string, scorerId: string) {
    if (!accessToken)
      throw new FaucetError(
        "GITCOIN_API_ERROR",
        "Gitcoin API access token is required"
      );
    if (!scorerId)
      throw new FaucetError(
        "GITCOIN_API_ERROR",
        "Gitcoin API scorer ID is required"
      );
    this.accessToken = accessToken;
    this.scorerId = scorerId;
    this.headers = {
      "Content-Type": "application/json",
      "x-api-key": `${this.accessToken}`,
    };
  }

  public async getScore(address: Address): Promise<{
    value: number;
    needToSubmit: boolean;
  }> {
    const cachedScore = GitcoinScoreCache.get(address);

    ServiceManager.GetService(FaucetProcess).emitLog(
      FaucetLogLevel.INFO,
      `Cached Gitcoin Score for ${address}: ${cachedScore}`
    );

    if (cachedScore) {
      return {
        value: cachedScore,
        needToSubmit: false,
      };
    }

    const headers = this.headers;
    const url = `${this.baseUrl}/registry/score/${this.scorerId}/${address}`;
    const response = await FetchUtil.fetch(url, {
      headers,
      method: "GET",
    });

    // Handle errors
    if (response.status !== 200) {
      let reason = response.statusText;
      try {
        const respBody = (await response.json()) as any;
        if (respBody.detail && typeof respBody.detail === "string") {
          reason = respBody.detail;
        }
      } catch (e) {}

      return { value: 0, needToSubmit: true };
    }

    const score = (await response.json()) as ScoreResponse;
    // Delete error property if it's null
    // Since it's being recognized by Grafana as error log
    if (score.error == null) {
      delete score.error;
    }

    ServiceManager.GetService(FaucetProcess).emitLog(
      FaucetLogLevel.INFO,
      `Score from Gitcoin for ${address}: ${JSON.stringify(score)}`
    );

    const scoreNumber = Number(score.score);
    GitcoinScoreCache.set(address, scoreNumber);
    return {
      value: scoreNumber,
      needToSubmit: false,
    };
  }

  public async getSigningMessage(): Promise<GitcoinSigningMessage> {
    const url = `${this.baseUrl}/registry/score/${this.scorerId}/signing-message`;
    const response = await FetchUtil.fetch(url, {
      headers: this.headers,
      method: "GET",
    });

    // Not ok
    if (response.status !== 200) {
      const errorMessage = `Failed to get Gitcoin signing message: ${response.statusText}`;
      ServiceManager.GetService(FaucetProcess).emitLog(
        FaucetLogLevel.ERROR,
        errorMessage
      );
      Sentry.captureMessage(errorMessage);
      throw new FaucetError("GITCOIN_API_ERROR", errorMessage);
    }

    const signingMessage = (await response.json()) as GitcoinSigningMessage;
    return signingMessage;
  }

  private clearScoreCache(address: Address, timeout: number = 0) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Clear the cache record
        try {
          GitcoinScoreCache.delete(address);
          ServiceManager.GetService(FaucetProcess).emitLog(
            FaucetLogLevel.INFO,
            `Clearing Gitcoin score cache for ${address}`
          );
        } catch (e) {
          ServiceManager.GetService(FaucetProcess).emitLog(
            FaucetLogLevel.WARNING,
            `Could not clear Gitcoin score cache for ${address}`
          );
        }
        resolve();
      }, timeout);
    });
  }

  public async submitPassport(
    passport: Omit<PassportSubmitData, "scorer_id">
  ): Promise<{ result: "success" | "error" }> {
    const url = `${this.baseUrl}/registry/submit-passport`;

    const response = await FetchUtil.fetch(url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        address: passport.address,
        scorer_id: this.scorerId,
      }),
    });

    // Not ok
    if (response.status !== 200) {
      const errorMessage = `Failed to submit Gitcoin passport for address ${passport.address}: ${response.statusText}`;
      ServiceManager.GetService(FaucetProcess).emitLog(
        FaucetLogLevel.ERROR,
        errorMessage
      );
      Sentry.captureMessage(errorMessage);
      return { result: "error" };
    }

    try {
      const respBody = (await response.json()) as any;
      ServiceManager.GetService(FaucetProcess).emitLog(
        FaucetLogLevel.INFO,
        JSON.stringify(respBody)
      );
    } catch (error) {
      ServiceManager.GetService(FaucetProcess).emitLog(
        FaucetLogLevel.ERROR,
        'Something went wrong while parsing response from "submit-passport" endpoint'
      );
      Sentry.captureException(error, { extra: { origin: "submitPassport" } });
      return { result: "error" };
    }

    // Cache the submission
    GitcoinPassportSubmissions.set(passport.address, {
      timestamp: Date.now(),
    });

    // Clear the score cache, fire and forget
    this.clearScoreCache(passport.address, 1000 * 5);

    return { result: "success" };
  }
}

export class GitcoinClaimer {
  private _isEnabled: boolean = false;
  private _gitcoinApi: GitcoinAPI;

  public async initialize(): Promise<void> {
    // Check if the Gitcoin claimer is enabled
    this._isEnabled = faucetConfig.gitcoinClaimerEnabled ?? false;

    const gitcoinApiToken = faucetConfig.gitcoinApiToken;
    const gitcoinScorerId = faucetConfig.gitcoinScorerId;
    if (this._isEnabled && !gitcoinApiToken)
      throw makeGitcoinClaimerError("noApiToken");
    if (this._isEnabled && !gitcoinScorerId)
      throw makeGitcoinClaimerError("noScorerId");

    this._gitcoinApi = new GitcoinAPI(gitcoinApiToken, gitcoinScorerId);
  }

  @checkEnabled
  public async getAddressScore(address: string): Promise<{
    value: number;
    needToSubmit: boolean;
  }> {
    return this._gitcoinApi.getScore(address);
  }

  @checkEnabled
  public async getSingingMessage(): Promise<GitcoinSigningMessage> {
    return this._gitcoinApi.getSigningMessage();
  }

  @checkEnabled
  public async checkPassportSubmitCache(body: Buffer): Promise<{
    canSubmitAgainAt: number;
  }> {
    const validated = zodSchemaBodyValidation(
      body,
      zodPassportSubmitData
    ) as PassportSubmitData;

    const cachedSubmission = GitcoinPassportSubmissions.get(validated.address);

    if (cachedSubmission) {
      const canSubmitAgainAt = cachedSubmission.timestamp + 1000 * 60 * 5; // 5 minutes from the last submission
      return {
        canSubmitAgainAt,
      };
    }

    return {
      canSubmitAgainAt: Date.now() - 1000,
    };
  }

  @checkEnabled
  public async submitPassport(body: Buffer): Promise<{
    canSubmitAgainAt: number;
  }> {
    const validated = zodSchemaBodyValidation(
      body,
      zodPassportSubmitData
    ) as PassportSubmitData;

    // Validate address
    if (!isValidAddress(validated.address)) {
      throw new FaucetError(
        "GITCOIN_ADDRESS_ERROR",
        "Invalid address for Gitcoin passport submission"
      );
    }

    const cachedSubmission = GitcoinPassportSubmissions.get(validated.address);

    ServiceManager.GetService(FaucetProcess).emitLog(
      FaucetLogLevel.INFO,
      `Cached passport submit for ${validated.address}: ${JSON.stringify(
        cachedSubmission
      )}. ${
        cachedSubmission?.timestamp
          ? `Submitted: ${
              (Date.now() - cachedSubmission.timestamp) / 1000
            } seconds ago`
          : ""
      }`
    );

    if (cachedSubmission) {
      const canSubmitAgainAt = cachedSubmission.timestamp + 1000 * 60 * 5; // 5 minutes from the last submission
      return {
        canSubmitAgainAt,
      };
    }

    const response = await this._gitcoinApi.submitPassport(validated);
    return {
      ...response,
      canSubmitAgainAt: Date.now() + 1000 * 60 * 5, // 5 minutes from now
    };
  }
}
