export const endpointsConfig = {
  auth: {
    signin: { path: "/auth/signin", method: "POST" as const },
    signup: { path: "/auth/signup", method: "POST" as const },
    resetPassword: { path: "/auth/reset-password", method: "POST" as const },
    confirmResetPassword: { path: "/auth/confirm-reset-password", method: "POST" as const },
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
