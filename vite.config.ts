import { sveltekit } from "@sveltejs/kit/vite";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    unocss(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
