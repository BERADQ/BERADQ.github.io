import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import unocss from "unocss/vite";

export default defineConfig({
  plugins: [sveltekit(), unocss()],
  build: {
    rollupOptions: {
      external: ["/_pagefind/pagefind.js"],
    },
  },
});
