const ROUTE_PREFIX = "/_rc/api-mock";

export default api => [
  {
    name: "API_MOCK_DASHBOARD",
    path: ROUTE_PREFIX,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "API_MOCK_DASHBOARD" */ "../pages/DevPluginApiMockDashboard"
      )
    )
  }
];
