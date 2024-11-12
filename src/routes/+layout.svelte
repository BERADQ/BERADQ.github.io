<script lang="ts">
  const { data, children } = $props();
  import "uno.css";
  import "$lib";
</script>

<div id="mainapp" grid grid-cols="[auto_1fr]" h-full>
  <nav mr-4 h-full box-border min-w-0 relative w-60 class="border">
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
      b-gray-9
      b-solid
      right="-8"
      text-xl
      z-10
      hidden
    >
      =
    </div>
    <ul mr-3>
      {#each data.routes as route}
        <li class:current-route={data.currentRouteId === route.id}>
          <a href={route.path}>{route.title}</a>
        </li>
      {/each}
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
    >
      <img
        src="./not_ai/Written-By-Human-Not-By-AI-Badge-white-zh.svg"
        alt="not by ai"
      />
      <img
        src="./not_ai/Written-By-Human-Not-By-AI-Badge-white-en.svg"
        alt="not by ai"
      />
      <img
        src="./not_ai/Written-By-Human-Not-By-AI-Badge-white-jp.svg"
        alt="not by ai"
      />
      <img
        src="./not_ai/Written-By-Human-Not-By-AI-Badge-white-su.svg"
        alt="not by ai"
      />
    </div>
    <div data-pagefind-body>
      {@render children?.()}
    </div>
  </main>
</div>

<style lang="postcss">
  .border {
    @apply border-gray-9 b-solid b-2;
  }
  .current-route::marker {
    content: ">  ";
    font-weight: bold;
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
