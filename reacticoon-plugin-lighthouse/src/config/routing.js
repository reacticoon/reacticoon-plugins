import { Route, createRoutingEnum } from "reacticoon/routing";
import createAsyncPage from "reacticoon-plugins/reacticoon-dev-plugin/src/views/createAsyncPage";

const ROUTE_PREFIX = "/_rc/lighthouse";

const routingEnum = createRoutingEnum({
  REACTICOON_PLUGIN_LIGHTHOUSE__DASHBOARD: new Route(
    "REACTICOON_PLUGIN_LIGHTHOUSE__DASHBOARD",
    `${ROUTE_PREFIX}`
  )
});

const routes = [
  {
    definition: routingEnum.REACTICOON_PLUGIN_LIGHTHOUSE__DASHBOARD,
    handler: createAsyncPage(() =>
      import(
        /*  webpackChunkName: "ReacticoonPluginLighthouse__DashboardPage" */ "../pages/dashboard"
      )
    )
  }
];

export default {
  routes,
  routingEnum
};
