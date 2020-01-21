const ROUTE_PREFIX = "/_rc/material-ui";

export default api => [
  {
    name: "MATERIAL_UI_DASHBOARD",
    path: ROUTE_PREFIX,
    handler: api.createAsyncPage(() =>
      import(
        /*  webpackChunkName: "MATERIAL_UI_DASHBOARD" */ "../pages/DevPluginMaterialUIDashboard"
      )
    )
  }
];
