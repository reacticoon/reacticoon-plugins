const ROUTE_PREFIX = "/_rc/ci";

export default api => [
  {
    name: "REACTICOON_PLUGIN_CI_DASHBOARD",
    path: ROUTE_PREFIX,
    handler: api.createDevToolAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_PLUGIN_CI_DASHBOARD" */ "../pages/dashboard"
      )
    )
  }
];
