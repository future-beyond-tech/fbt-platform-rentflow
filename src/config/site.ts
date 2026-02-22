export const siteConfig = {
  name: "RentFlow",
  description:
    "World's first usage-based property management platform. Eliminate 35 hours of monthly admin work with zero-friction operations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rentflow.in",
  ogImage: "/og.png",
  links: {
    main: "/",
    waitlist: "/waitlist",
    login: "/login",
    register: "/register",
    dashboard: "/dashboard",
  },
} as const;
