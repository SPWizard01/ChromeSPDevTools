import { buildConfig } from "./bun.config";
import { build, $, type BuildOutput, CryptoHasher } from "bun";

await $`rm -rf ${buildConfig.outdir}/*`.nothrow();
const output = await build(buildConfig);
const hasher = new CryptoHasher("sha1");
hasher.update(JSON.stringify(output.outputs.map((o) => o.path)));
const hashValue = hasher.digest("hex");

publishOutputLogs(output);
function publishOutputLogs(output: BuildOutput) {
  output.logs.forEach(console.log);
  const outTable = output.outputs
    .filter((o) => o.kind !== "sourcemap")
    .map((o) => {
      const a = Bun.pathToFileURL(o.path);
      const distPath = Bun.pathToFileURL(buildConfig.outdir ?? "./dist");
      const distPathHref = distPath.href;
      const lastDistIdx = distPathHref.lastIndexOf("/") + 1;
      const fileName = a.href.substring(a.href.lastIndexOf("/") + 1);
      const fileWithPath = a.href.substring(lastDistIdx);
      return {
        name: fileName,
        path: fileWithPath,
        size: convertBytes(o.size),
      };
    });
  console.table(outTable);
}
function convertBytes(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) {
    return "n/a";
  }
  const floored = Math.floor(Math.log(bytes) / Math.log(1024));
  const i = floored;
  if (i == 0) {
    return bytes + " " + sizes[i];
  }
  return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
}
