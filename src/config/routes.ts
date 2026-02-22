export const routes = {
  home: "/",
  waitlist: "/waitlist",
  investors: "/investors",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
} as const;

export type RouteKey = keyof typeof routes;
