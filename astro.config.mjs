import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://withmtml.github.io",
  base: "/",
  trailingSlash: "always",
});
