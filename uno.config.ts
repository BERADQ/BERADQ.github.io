import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
  presets: [presetAttributify(), presetIcons(), presetUno()],
  extractors: [extractorSvelte()],
});
