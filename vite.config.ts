import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import presetEnv from "postcss-preset-env";
export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  css: {
    postcss: {
      plugins: [
        presetEnv({
          stage: 0,
          browsers: "cover 99.5%",
        }),
      ],
    },
  },
});
