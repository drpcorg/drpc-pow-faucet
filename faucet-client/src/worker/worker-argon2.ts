import { PoWWorker } from "./PoWWorker";
import {
  getArgon2,
  getArgon2ReadyPromise,
} from "../../../libs/argon2_wasm.cjs";
import { PoWHashAlgo } from "../common/FaucetConfig";

(() => {
  getArgon2ReadyPromise().then(() => {
    let argon2 = getArgon2();
    new PoWWorker({
      hashFn: (nonce, preimg, params) => {
        if (params.a !== PoWHashAlgo.ARGON2) return null;
        return argon2(
          nonce,
          preimg,
          params.l,
          params.i,
          params.m,
          params.p,
          params.t,
          params.v
        );
      },
    });
  });
})();
