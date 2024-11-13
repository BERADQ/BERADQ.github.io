import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";
import lightPlus from "shiki/themes/light-plus.mjs";
import darkPlus from "shiki/themes/dark-plus.mjs";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";

const highlighter = await createHighlighter({
  themes: [darkPlus, lightPlus],
  langs: [
    "markdown",
    "postcss",
    "javascript",
    "typescript",
    "svelte",
    "html",
    "tsx",
    "rust",
    "kotlin",
  ],
  langAlias: {
    ts: "typescript",
    md: "markdown",
    mdx: "markdown",
    css: "postcss",
  },
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md", ".svx"],
      highlight: {
        highlighter: async (code, lang = "text") => {
          const html = escapeSvelte(
            highlighter.codeToHtml(code, {
              lang,
              themes: {
                light: lightPlus,
                dark: darkPlus,
              },
              transformers: [
                transformerNotationDiff(),
                transformerNotationHighlight(),
              ],
            }),
          );
          return `{@html \`${html}\` }`;
        },
      },
    }),
  ],
  extensions: [".svelte", ".svx", ".md"],
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
  },
};

export default config;
