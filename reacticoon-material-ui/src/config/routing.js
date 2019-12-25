import { Route, createRoutingEnum } from "reacticoon/routing";
import createAsyncPage from "reacticoon-plugins/reacticoon-dev-plugin/src/views/createAsyncPage";

const ROUTE_PREFIX = "/_rc/material-ui";

const routingEnum = createRoutingEnum({
  MATERIAL_UI_DASHBOARD: new Route("MATERIAL_UI::DASHBOARD", `${ROUTE_PREFIX}`)
});

const routes = [
  {
    definition: routingEnum.MATERIAL_UI_DASHBOARD,
    handler: createAsyncPage(() =>
      import(
        /*  webpackChunkName: "MaterialUI__DashboardPage" */ "../pages/DevPluginMaterialUIDashboard"
      )
    )
  }
];

export default {
  routes,
  routingEnum
};
