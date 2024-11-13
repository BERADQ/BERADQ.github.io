<script lang="ts">
  interface Props {
    routes: Route[];
    currentRouteId?: string;
  }
  const { routes, currentRouteId }: Props = $props();
  import Routes from "./Routes.svelte";
</script>

{#each routes as route}
  <li
    class:current-route={currentRouteId?.startsWith(route.id)}
    class:direct-current-route={route.id === currentRouteId}
  >
    <a href={route.path}>{route.title}</a>
    {#if route.subRoutes}
      <ul hidden>
        <Routes routes={route.subRoutes} {currentRouteId} />
      </ul>
    {/if}
  </li>
{/each}

<style lang="postcss">
  .current-route > ul {
    @apply block;
  }
  /* svelte-ignore css_unused_selector */
  .direct-current-route {
    @apply font-bold;
    &::marker {
      content: ">  ";
    }
  }
</style>
