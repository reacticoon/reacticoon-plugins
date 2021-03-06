const ROUTE_PREFIX = '/_rc'

export default api => [
  {
    name: 'REACTICOON_DASHBOARD',
    path: `${ROUTE_PREFIX}`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_DASHBOARD" */ '../pages/dashboard')
    ),
  },
  {
    name: 'REACTICOON_BUILD',
    path: `${ROUTE_PREFIX}/build`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_BUILD" */ '../pages/build')
    ),
  },
  {
    name: 'REACTICOON_TESTING',
    path: `${ROUTE_PREFIX}/testing`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_TESTING" */ '../pages/testing')
    ),
  },

  {
    name: 'REACTICOON_PLUGIN_SEARCH',
    path: `${ROUTE_PREFIX}/plugins/search`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_PLUGIN_SEARCH" */ '../pages/plugins/search')
    ),
  },
  {
    name: 'REACTICOON_PLUGIN',
    path: `${ROUTE_PREFIX}/plugins/:pluginName`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_PLUGIN" */ '../pages/plugins/detail')
    ),
  },
  {
    name: 'REACTICOON_PLUGINS',
    path: `${ROUTE_PREFIX}/plugins`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_PLUGINS" */ '../pages/plugins/list')
    ),
  },
  {
    name: 'REACTICOON_ROUTING',
    path: `${ROUTE_PREFIX}/routing`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_ROUTING" */ '../pages/routing')
    ),
  },
  {
    name: 'REACTICOON_REPORTS',
    path: `${ROUTE_PREFIX}/reports`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_REPORTS" */ '../pages/reports')
    ),
  },
  {
    name: 'REACTICOON_MY_APP',
    path: `${ROUTE_PREFIX}/app`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_MY_APP" */ '../pages/my-app')
    ),
  },
  {
    name: 'REACTICOON_MODULE',
    path: `${ROUTE_PREFIX}/modules/:moduleName`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_MODULE" */ '../pages/module')
    ),
  },
  {
    name: 'REACTICOON_REPORT_CHECKUP',
    path: `${ROUTE_PREFIX}/reports/checkup`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_REPORT_CHECKUP" */ '../pages/checkup')
    ),
  },
  {
    name: 'REACTICOON_REPORT_CLI_PLUGINS',
    path: `${ROUTE_PREFIX}/reports/cli-plugins`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_REPORT_CLI_PLUGINS" */ '../pages/cli-plugins')
    ),
  },
  {
    name: 'REACTICOON_REPORT_ANALYZE_BUILD',
    path: `${ROUTE_PREFIX}/reports/analyze-build`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_REPORT_ANALYZE_BUILD" */ '../pages/analyze-build')
    ),
  },
  {
    name: 'REACTICOON_REPORT_ANALYZE_BUNDLE_PHOBIA',
    path: `${ROUTE_PREFIX}/reports/analyze-bundle-phobia`,
    handler: api.createDevToolAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_REPORT_ANALYZE_BUNDLE_PHOBIA" */ '../pages/analyze-bundle-phobia'
      )
    ),
  },

  {
    name: 'REACTICOON_DEPENDENCIES_INSTALLED',
    path: `${ROUTE_PREFIX}/dependencies`,
    handler: api.createDevToolAsyncPage(() =>
      import(
        /*  webpackChunkName: "REACTICOON_DEPENDENCIES_INSTALLED" */ '../pages/dependencies/installed'
      )
    ),
  },

  {
    name: 'REACTICOON_DEPENDENCY_SEARCH',
    path: `${ROUTE_PREFIX}/dependencies/search`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_DEPENDENCY_SEARCH" */ '../pages/dependencies/search')
    ),
  },

  {
    name: 'REACTICOON_DEPENDENCY_DETAIL',
    path: `${ROUTE_PREFIX}/dependencies/:dependencyName`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_DEPENDENCY_DETAIL" */ '../pages/dependencies/detail')
    ),
  },

  {
    name: 'REACTICOON_PAGE_NOT_FOUND',
    path: `${ROUTE_PREFIX}/*`,
    handler: api.createDevToolAsyncPage(() =>
      import(/*  webpackChunkName: "REACTICOON_PAGE_NOT_FOUND" */ '../pages/error/PageNotFoundPage')
    ),
  },
]
