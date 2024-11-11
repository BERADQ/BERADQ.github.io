<script lang="ts">
  const { data, children } = $props();
  import "uno.css";
  import "$lib";
</script>

<div grid grid-cols="[15rem_1fr]" h-full overflow-hidden>
  <nav b-gray-9 b-2 b-solid mr-4 h-full box-border>
    <ul>
      {#each data.routes as route}
        <li class:current-route={data.currentRouteId === route.id}>
          <a href={route.path}>{route.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <main overflow-auto>
    {@render children?.()}
  </main>
</div>

<style lang="postcss">
  .current-route::marker {
    content: ">  ";
    font-weight: bold;
  }
</style>