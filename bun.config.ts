import { BuildConfig } from "bun";
import { styleLoader } from "bun-style-plugin";
import { dynamicPathPlugin } from "bun-dynamic-path";

export const buildConfig: BuildConfig = {
  entrypoints: ["src/scripts/actions/spCustomActions/app.tsx"],
  sourcemap: "linked",
  outdir: "dist",
  splitting: false,
  naming: {
    asset: "assets/[ext]/[name].[ext]",
    chunk: "js/chunk-[name]-[hash].[ext]",
    entry: "js/[name].[ext]",
  },
  define: {
    DEBUG: JSON.stringify(false),
  },
  loader: {
    ".scss": "file",
  },
  plugins: [
    styleLoader({
      processUrlImports: true,
      cssModules: false,
      autoInject: true,
      sassCompilerOptions: { loadPaths: ["node_modules"], silenceDeprecations: ["import", "global-builtin", "mixed-decls"] },
    }),
    dynamicPathPlugin({ fileExtensions: ["png", "woff", "woff2"] }),
  ],
};
