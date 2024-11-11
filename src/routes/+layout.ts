interface Route {
  path: string;
  title: string;
  id: number;
}
function route(path: string, title: string, id = 0): Route {
  return { path, title, id };
}
function routeFrom(routes: [string, string][]): Route[] {
  return routes.map(([path, title], i) => route(path, title, i));
}
const routes: Route[] = routeFrom([
  ["/", "主页"],
  ["/css-intrinsic-sizes-transition", "css 固有尺寸过渡?"],
]);
/* [
  route("/", "主页"),
  route("/css-intrinsic-sizes-transition", "css 固有尺寸过渡?"),
] */

export function load({ route }) {
  return {
    routes,
    currentRouteId: routes.findIndex((r) => route.id === r.path),
  };
}
