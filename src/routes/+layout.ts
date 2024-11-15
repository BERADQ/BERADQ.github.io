export const prerender = true;
export const csr = true;

const idMap = new Map<string, string>();
const titleMap = new Map<string, string>();
function route(
  path: string,
  title: string,
  id = ":0",
  subRoutes?: Route[] | undefined,
): Route {
  idMap.set(path, id);
  titleMap.set(path, title);
  return { path, title, id, subRoutes };
}

function routeFrom(routes: undefined): void;
function routeFrom(
  routes: RouteArray,
  basePath?: string,
  baseId?: string,
): Route[];
function routeFrom(
  routes: RouteArray | undefined,
  basePath = "",
  baseId = "",
): Route[] | void {
  return routes?.map(([path, title, subRoutes], i) => {
    const pathname = `${basePath}${path}`;
    const id = `${baseId}:${i}`;
    return route(
      pathname,
      title,
      id,
      subRoutes && routeFrom(subRoutes, pathname, id),
    );
  });
}
const routes: Route[] = routeFrom([
  ["/", "主页"],
  ["/kokoro", "Kokoro", [["/kokoro-design", "Kokoro 设计"]]],
  [
    "/css",
    "CSS",
    [
      [
        "/intrinsic-sizing-transition",
        "CSS 固有尺寸过渡?",
        [["#grid", "Grid 布局动画"]],
      ],
    ],
  ],
  ["/gpui", "GPUI", [["/introduction", "导论"]]],
]);

const routeArray: RouteArray = [["/", "foo", [["/", "bar", [["/", "baz"]]]]]];

export function load({ route }) {
  const currentRouteId = route.id ? idMap.get(route.id) : undefined;
  const currentRouteTitle = route.id ? titleMap.get(route.id) : undefined;
  return {
    routes,
    currentRoute: {
      id: currentRouteId,
      title: currentRouteTitle,
      path: route.id,
    },
  };
}
