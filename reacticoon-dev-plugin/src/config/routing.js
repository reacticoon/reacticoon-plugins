const ROUTE_PREFIX = "/_rc";

export default api => [
  {
    name: "REACTICOON_DASHBOARD",
    path: `${ROUTE_PREFIX}`,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_DASHBOARD" */ "../pages/dashboard"
      )
    )
  },
  {
    name: "REACTICOON_BUILD",
    path: `${ROUTE_PREFIX}/build`,
    handler: api.createAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_BUILD" */ "../pages/build")
    )
  },
  {
    name: "REACTICOON_TESTING",
    path: `${ROUTE_PREFIX}/testing`,
    handler: api.createAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_TESTING" */ "../pages/testing")
    )
  },
  {
    name: "REACTICOON_PLUGIN",
    path: `${ROUTE_PREFIX}/plugins`,
    handler: api.createAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_PLUGIN" */ "../pages/plugin")
    )
  },
  {
    name: "REACTICOON_PLUGINS",
    path: `${ROUTE_PREFIX}/plugins/:pluginName`,
    handler: api.createAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_PLUGINS" */ "../pages/plugins")
    )
  },
  {
    name: "REACTICOON_ROUTING",
    path: `${ROUTE_PREFIX}/routing`,
    handler: api.createAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_ROUTING" */ "../pages/routing")
    )
  },
  {
    name: "REACTICOON_REPORTS",
    path: `${ROUTE_PREFIX}/reports`,
    handler: api.createAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_REPORTS" */ "../pages/reports")
    )
  },
  {
    name: "REACTICOON_MY_APP",
    path: `${ROUTE_PREFIX}/app`,
    handler: api.createAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_MY_APP" */ "../pages/my-app")
    )
  },
  {
    name: "REACTICOON_MODULE",
    path: `${ROUTE_PREFIX}/modules/:moduleName`,
    handler: api.createAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_MODULE" */ "../pages/module")
    )
  },
  {
    name: "REACTICOON_REPORT_CHECKUP",
    path: `${ROUTE_PREFIX}/reports/checkup`,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_REPORT_CHECKUP" */ "../pages/checkup"
      )
    )
  },
  {
    name: "REACTICOON_REPORT_CLI_PLUGINS",
    path: `${ROUTE_PREFIX}/reports/cli-plugins`,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_REPORT_CLI_PLUGINS" */ "../pages/cli-plugins"
      )
    )
  },
  {
    name: "REACTICOON_REPORT_ANALYZE_BUILD",
    path: `${ROUTE_PREFIX}/reports/analyze-build`,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_REPORT_ANALYZE_BUILD" */ "../pages/analyze-build"
      )
    )
  },
  {
    name: "REACTICOON_REPORT_ANALYZE_BUNDLE_PHOBIA",
    path: `${ROUTE_PREFIX}/reports/analyze-bundle-phobia`,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_REPORT_ANALYZE_BUNDLE_PHOBIA" */ "../pages/analyze-bundle-phobia"
      )
    )
  },

  {
    name: "REACTICOON_PAGE_NOT_FOUND",
    path: `${ROUTE_PREFIX}/*`,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_PAGE_NOT_FOUND" */ "../pages/error/PageNotFoundPage"
      )
    )
  }
];
