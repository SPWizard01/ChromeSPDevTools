import type { BuildConfig } from "bun";
import { styleLoader } from "bun-style-plugin";
import { dynamicPathPlugin } from "bun-dynamic-path";

export const buildConfig: BuildConfig = {
  entrypoints: ["src/js/main.tsx"],
  sourcemap: "linked",
  outdir: "dist",
  splitting: true,
  naming: {
    asset: "assets/[name].[ext]",
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
