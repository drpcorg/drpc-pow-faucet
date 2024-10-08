import "mocha";
import sinon from "sinon";
import { expect } from "chai";
import {
  bindTestStubs,
  unbindTestStubs,
  loadDefaultTestConfig,
} from "./common.js";
import { ServiceManager } from "../src/common/ServiceManager.js";
import { FaucetDatabase } from "../src/db/FaucetDatabase.js";
import { ModuleManager } from "../src/modules/ModuleManager.js";
import { faucetConfig } from "../src/config/FaucetConfig.js";
import { MODULE_CLASSES } from "../src/modules/modules.js";
import { FaucetProcess } from "../src/common/FaucetProcess.js";
import { BaseModule } from "../src/modules/BaseModule.js";
import { FakeProvider } from "./stubs/FakeProvider.js";
import { IMainnetWalletConfig } from "../src/modules/mainnet-wallet/MainnetWalletConfig.js";

describe("Faucet Module Management", () => {
  let globalStubs;
  let fakeProvider;

  beforeEach(async function () {
    this.timeout(5000);
    globalStubs = bindTestStubs();
    fakeProvider = new FakeProvider();
    fakeProvider.injectResponse("net_version", "5");
    loadDefaultTestConfig();
    await ServiceManager.GetService(FaucetDatabase).initialize();
  });
  afterEach(async () => {
    let dbService = ServiceManager.GetService(FaucetDatabase);
    await ServiceManager.DisposeAllServices();
    await dbService.closeDatabase();
    await unbindTestStubs(globalStubs);
  });

  it("Load & unload modules", async () => {
    let moduleManager = ServiceManager.GetService(ModuleManager);
    await moduleManager.initialize();

    let allModules = Object.keys(MODULE_CLASSES);
    allModules.forEach((module) => {
      faucetConfig.modules[module] = { enabled: true };
      switch (module) {
        case "mainnet-wallet":
          (faucetConfig.modules[module] as IMainnetWalletConfig).rpcHost =
            fakeProvider;
          break;
      }
    });
    faucetConfig.modules["inv_al_id"] = { enabled: true };
    ServiceManager.GetService(FaucetProcess).emit("reload");
    await moduleManager.getLoadingPromise();
    ServiceManager.GetService(FaucetProcess).emit("reload");
    await moduleManager.getLoadingPromise();
    allModules.forEach((module) => {
      let modObj = moduleManager.getModule<BaseModule>(module);
      expect(!!modObj).to.equal(true, "module not loaded: " + module);
      expect(modObj.isEnabled()).to.equal(
        true,
        "module not enabled: " + module
      );
      expect(modObj.getModuleName()).to.equal(
        module,
        "module name missmatch: " + module
      );
      faucetConfig.modules[module].enabled = false;
    });
    ServiceManager.GetService(FaucetProcess).emit("reload");
    await moduleManager.getLoadingPromise();
    allModules.forEach((module) => {
      let modObj = moduleManager.getModule<BaseModule>(module);
      expect(!!modObj).to.equal(false, "module still loaded: " + module);
    });
  }).timeout(5000);
});
