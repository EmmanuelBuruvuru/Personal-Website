// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  // 1) Set the "base" to your repo name so all assets resolve correctly
  base: "/Personal-Website/",
  // 2) Tell Astro to emit into `docs/` instead of `dist/`
  outDir: "docs",

  // …any other existing settings…
});
 