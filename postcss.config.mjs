import postcssPresetEnv from "postcss-preset-env";
import unoCSS from "@unocss/postcss";

export default {
  plugins: [
    unoCSS(),
    postcssPresetEnv({
      stage: 0,
      browsers: "cover 99.5%",
    }),
  ],
};
