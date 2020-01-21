const ROUTE_PREFIX = "/_rc/marketplace";

export default api => [
  {
    name: "REACTICOON_PLUGINS_MARKETPLACE_DASHBOARD",
    path: `${ROUTE_PREFIX}`,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_PLUGINS_MARKETPLACE_DASHBOARD" */ "../pages/dashboard"
      )
    )
  },
  {
    name: "REACTICOON_PLUGINS_MARKETPLACE_PLUGIN_HOMEPAGE",
    path: `${ROUTE_PREFIX}/:pluginId`,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_PLUGINS_MARKETPLACE_PLUGIN_HOMEPAGE" */ "../pages/pluginHomepage"
      )
    )
  }
];
