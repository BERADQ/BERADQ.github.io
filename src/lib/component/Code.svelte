<script lang="ts">
  interface Props {
    code: string;
    lang: string;
  }
  let { code, lang }: Props = $props();
  let grammar = window.Prism.languages[lang];
  let output = window.Prism.highlight(code, grammar, lang);
</script>

<pre class="language-{lang}"><code class="language-{lang}">{@html output}</code
  ></pre>
