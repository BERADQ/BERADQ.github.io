import postcssPresetEnv from "postcss-preset-env";
import unoCSS from "@unocss/postcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    unoCSS(),
    postcssPresetEnv({
      stage: 0,
      browsers: "defaults",
    }),
    autoprefixer(),
  ],
};
