export const endpointsConfig = {
  auth: {
    signin: { path: "/auth/signin", method: "POST" as const },
    logout: { path: "/auth/logout", method: "POST" as const },
  },
  order: {
    getDetail: { path: "/guest/order/:id", method: "GET" as const },
    create: { path: "/guest/order", method: "POST" as const },
  },
  account: {
    get: { path: "/guest/account", method: "GET" as const },
    updateProfile: { path: "/guest/account/profile", method: "POST" as const }
  }
} as const;
