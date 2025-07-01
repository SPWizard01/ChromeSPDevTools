import { startBunDevServer } from "bun-dev-server";
import { buildConfig } from "./bun.config";
Bun.env.DEBUG = "true";
startBunDevServer(
  {
    buildConfig: {
      ...buildConfig,
      define: {
        ...buildConfig.define,
        DEBUG: JSON.stringify(true),
      }
    },
    cleanServePath: true,
    reloadOnChange: true,
    writeManifest: false,
    enableTSC: true,
    watchDelay: 1000,
    waitForTSCSuccessBeforeReload: false,
    broadcastBuildOutputToClient: false,
    broadcastTSCErrorToClient: true,
    watchDir: "src",
    hotReload: "plugin",
    port: 56789,
    tls: {
      cert: Bun.file("./wpcert.pem"),
      key: Bun.file("./wpcert.key"),
      rejectUnauthorized: false,
    },
    afterBuild(outpug, _env) {
      const f = Bun.file("./src/manifest.json");
      Bun.write("./dist/manifest.json", f);
    }
  },
  import.meta,
);




// const srv = serve({
//   routes: {
//     "/": myReactSinglePageApp,
//   },

//   tls: {
//     cert: Bun.file("./wpcert.pem"),
//     key: Bun.file("./wpcert.key"),
//     rejectUnauthorized: false,
//   }
// })

// console.log(`Server running at https://localhost:${srv.port}/`);
