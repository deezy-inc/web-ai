#!/usr/bin/env node

const fs = require("fs");
const esbuild = require("esbuild");

let common = {
  entryPoints: ["index.ts"],
  bundle: true,
  sourcemap: "external",
};

esbuild &&
  esbuild
    .build({
      ...common,
      outfile: "lib/esm/web-ai.mjs",
      format: "esm",
      packages: "external",
    })
    .then(() => {
      const packageJson = JSON.stringify({ type: "module" });
      fs.writeFileSync(
        `${__dirname}/lib/esm/package.json`,
        packageJson,
        "utf8"
      );

      console.log("esm build success.");
    });

esbuild &&
  esbuild
    .build({
      ...common,
      outfile: "lib/web-ai.cjs.js",
      format: "cjs",
      packages: "external",
    })
    .then(() => console.log("cjs build success."));

esbuild &&
  esbuild
    .build({
      ...common,
      outfile: "lib/web-ai.bundle.js",
      format: "iife",
      globalName: "WebAI",
      define: {
        window: "self",
        global: "globalThis",
        process: "{'env': {}}",
      },
    })
    .then(() => console.log("standalone build success."));
