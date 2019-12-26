import { Route, createRoutingEnum } from "reacticoon/routing";
import createAsyncPage from "reacticoon-plugins/reacticoon-dev-plugin/src/views/createAsyncPage";

const ROUTE_PREFIX = "/_rc/ci";

const routingEnum = createRoutingEnum({
  REACTICOON_PLUGIN_CI_DASHBOARD: new Route(
    "REACTICOON_PLUGIN_CI_DASHBOARD",
    `${ROUTE_PREFIX}`
  )
});

const routes = [
  {
    definition: routingEnum.REACTICOON_PLUGIN_CI_DASHBOARD,
    handler: createAsyncPage(() =>
      import(
        /*  webpackChunkName: "ReacticoonPluginCi__DashboardPage" */ "../pages/dashboard"
      )
    )
  }
];

export default {
  routes,
  routingEnum
};
