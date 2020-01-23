const ROUTE_PREFIX = "/_rc/git";

export default api => [
  {
    name: "REACTICOON_PLUGIN_GIT__DASHBOARD",
    path: ROUTE_PREFIX,
    handler: api.createDevToolAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_PLUGIN_GIT__DASHBOARD" */ "../pages/dashboard"
      )
    )
  }
];
