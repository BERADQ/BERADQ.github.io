import postcssPresetEnv from "postcss-preset-env";
import unoCSS from "@unocss/postcss";

export default {
  plugins: [
    unoCSS(),
    postcssPresetEnv({
      stage: 1,
      browsers: ">0.1%",
      preserve: true,
    }),
  ],
};
