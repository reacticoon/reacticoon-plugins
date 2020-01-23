const ROUTE_PREFIX = "/_rc/lighthouse";

export default api => [
  {
    name: "REACTICOON_PLUGIN_LIGHTHOUSE__DASHBOARD",
    path: ROUTE_PREFIX + "/",
    disabled: false,
    authRequired: false,
    handler: api.createDevToolAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_PLUGIN_LIGHTHOUSE__DASHBOARD" */ "../pages/dashboard"
      )
    )
  }
];
