interface Route {
  path: string;
  title: string;
  id: string;
  subRoutes?: Route[] | null;
}

type RouteArray = [string, string, RouteArray?][];