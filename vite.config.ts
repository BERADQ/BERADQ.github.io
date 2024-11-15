import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import unocss from "unocss/vite";

export default defineConfig({
  plugins: [sveltekit(), unocss()],
  build: {
    target: "es2015",
    modulePreload: {
      polyfill: true,
    },
  },
});
