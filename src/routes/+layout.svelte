<script lang="ts">
  const { data, children } = $props();
  import "uno.css";
  import "$lib";
  import Routes from "$lib/component/Routes.svelte";
</script>

<title>{data.currentRoute.title}</title>
<div id="mainapp" grid grid-cols="[auto_1fr]" h-full>
  <nav mr-4 h-full box-border min-w-0 relative w-60 class="border border-color">
    <div
      id="toggle"
      absolute
      w-8
      h-8
      justify-center
      items-center
      box-border
      b-2
      bg-white
      b-solid
      right="-8"
      text-xl
      z-10
      hidden
      class="border-color"
    >
      =
    </div>
    <ul mr-3>
      <Routes routes={data.routes} currentRouteId={data.currentRoute.id} />
    </ul>
  </nav>
  <main overflow-auto>
    <div
      w-full
      flex
      gap-3
      justify-between
      b-0
      b-b-2
      b-solid
      p-2
      box-border
      flex-wrap
      class="top border-color"
    >
      <div class="not-by-ai-zh not-by-ai"></div>
      <div class="not-by-ai-en not-by-ai"></div>
      <div class="not-by-ai-jp not-by-ai"></div>
      <div class="not-by-ai-su not-by-ai"></div>
    </div>
    <div data-pagefind-body>
      {@render children?.()}
    </div>
  </main>
</div>

<style lang="postcss">
  .border {
    @apply b-solid b-2;
  }
  .border-color {
    border-color: var(--border-color);
  }
  .not-by-ai {
    width: 131px;
    height: 42px;
  }
  .not-by-ai-en {
    background-image: url("/not_ai/Written-By-Human-Not-By-AI-Badge-white-en.svg");
  }
  .not-by-ai-jp {
    background-image: url("/not_ai/Written-By-Human-Not-By-AI-Badge-white-jp.svg");
  }
  .not-by-ai-zh {
    background-image: url("/not_ai/Written-By-Human-Not-By-AI-Badge-white-zh.svg");
  }
  .not-by-ai-su {
    background-image: url("/not_ai/Written-By-Human-Not-By-AI-Badge-white-su.svg");
  }
  @media (prefers-color-scheme: dark) {
    .not-by-ai-en {
      background-image: url("/not_ai/Written-By-Human-Not-By-AI-Badge-black-en.svg");
    }
    .not-by-ai-zh {
      background-image: url("/not_ai/Written-By-Human-Not-By-AI-Badge-black-zh.svg");
    }
    .not-by-ai-jp {
      background-image: url("/not_ai/Written-By-Human-Not-By-AI-Badge-black-jp.svg");
    }
    .not-by-ai-su {
      background-image: url("/not_ai/Written-By-Human-Not-By-AI-Badge-black-su.svg");
    }
  }
  @media (max-width: 600px) {
    nav {
      @apply w-0;
      & > ul {
        @apply hidden;
      }
      &:hover {
        @apply w-60;
        & > ul {
          @apply block;
        }
      }
      & > #toggle {
        @apply flex;
      }
    }
  }
</style>
