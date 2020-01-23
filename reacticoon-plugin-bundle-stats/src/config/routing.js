const ROUTE_PREFIX = "/_rc/bundle-stats";

export default api => [
  {
    name: "REACTICOON_PLUGIN_BUNDLE_STATS__DASHBOARD",
    path: ROUTE_PREFIX + "/",
    disabled: false,
    authRequired: false,
    handler: api.createDevToolAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_PLUGIN_BUNDLE_STATS__DASHBOARD" */ "../pages/dashboard"
      )
    )
  }
];
