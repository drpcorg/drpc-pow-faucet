import { TypedEmitter } from "tiny-typed-emitter";
import { PromiseDfd } from "../../utils/PromiseDfd";

export interface IClaimNotificationClientOptions {
  claimWsUrl: string;
  sessionId: string;
}

export interface IClaimNotificationUpdateData {
  processedIdx: number;
  confirmedIdx: number;
}

interface ClaimNotificationClientEvents {
  open: () => void;
  close: () => void;

  [command: string]: (message: any) => void;
}

enum ClaimNotificationClientStatus {
  CLOSED_IDLE = 0,
  CLOSED_RECONNECT = 1,
  CONNECTING = 2,
  READY = 3,
}

export class ClaimNotificationClient extends TypedEmitter<ClaimNotificationClientEvents> {
  private options: IClaimNotificationClientOptions;
  private clientSocket: WebSocket | null = null;
  private clientStatus: ClaimNotificationClientStatus;
  private readyDfd: PromiseDfd<void> | null = null;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private disconnectTimer: NodeJS.Timeout | null = null;

  public constructor(options: IClaimNotificationClientOptions) {
    super();
    this.options = options;
    this.clientStatus = ClaimNotificationClientStatus.CLOSED_IDLE;
  }

  public start() {
    this.clientStatus = ClaimNotificationClientStatus.CLOSED_RECONNECT;
    this.startClient();
  }

  public stop() {
    if (this.clientSocket) {
      this.clientSocket.close();
      this.clientSocket = null;
    }
    this.clientStatus = ClaimNotificationClientStatus.CLOSED_IDLE;
  }

  public isReady(): boolean {
    return this.clientStatus === ClaimNotificationClientStatus.READY;
  }

  public getReadyPromise(): Promise<void> {
    if (this.clientStatus === ClaimNotificationClientStatus.READY) {
      return Promise.resolve();
    }
    if (!this.readyDfd) {
      this.readyDfd = new PromiseDfd<void>();
    }
    return this.readyDfd.promise;
  }

  private startClient() {
    this.clientStatus = ClaimNotificationClientStatus.CONNECTING;
    this.clientSocket = new WebSocket(
      this.options.claimWsUrl + "?session=" + this.options.sessionId
    );
    this.clientSocket.addEventListener("open", (_evt) => {
      this.clientStatus = ClaimNotificationClientStatus.READY;
      this.onClientReady();
    });
    this.clientSocket.addEventListener("close", (_evt) => {
      this.onClientClose();
    });
    this.clientSocket.addEventListener("error", (_evt) => {
      this.onClientClose();
    });
    this.clientSocket.addEventListener("message", (evt) =>
      this.onClientMessage(evt)
    );
  }

  private reconnectClient() {
    if (this.reconnectTimer) {
      return;
    }
    this.reconnectTimer = setTimeout(
      () => {
        this.reconnectTimer = null;
        if (
          this.clientStatus === ClaimNotificationClientStatus.CLOSED_RECONNECT
        ) {
          this.startClient();
        }
      },
      5 * 1000 + 1000 * 5 * Math.random()
    );
  }

  private onClientClose() {
    this.clientSocket = null;
    if (this.clientStatus !== ClaimNotificationClientStatus.CLOSED_IDLE) {
      this.clientStatus = ClaimNotificationClientStatus.CLOSED_RECONNECT;
    }
    if (this.disconnectTimer) {
      clearTimeout(this.disconnectTimer);
      this.disconnectTimer = null;
    }
    this.emit("close");
    if (this.clientStatus === ClaimNotificationClientStatus.CLOSED_RECONNECT) {
      this.reconnectClient();
    }
  }

  private onClientMessage(evt: MessageEvent) {
    var message;
    try {
      message = JSON.parse(evt.data);
    } catch (ex) {
      // console.error(ex);
      return;
    }

    if (message.action !== "error") {
      this.emit(message.action, message);
    }
  }

  private onClientReady() {
    if (this.readyDfd) {
      this.readyDfd.resolve();
      this.readyDfd = null;
    }
    if (!this.disconnectTimer) {
      this.disconnectTimer = setTimeout(
        () => {
          this.disconnectTimer = null;
          // reconnect after 24h
          if (this.clientSocket) {
            this.clientSocket.close(1000, "24h reconnect");
          }
        },
        60 * 60 * 24 * 1000
      );
    }
    this.emit("open");
  }
}
