import { Route, createRoutingEnum } from "reacticoon/routing";
import createAsyncPage from "reacticoon-plugins/reacticoon-dev-plugin/src/views/createAsyncPage";

const ROUTE_PREFIX = "/_rc/marketplace";

const routingEnum = createRoutingEnum({
  REACTICOON_PLUGINS_MARKETPLACE_DASHBOARD: new Route(
    "REACTICOON_PLUGINS_MARKETPLACE_DASHBOARD",
    `${ROUTE_PREFIX}`
  ),
  REACTICOON_PLUGINS_MARKETPLACE_PLUGIN_HOMEPAGE: new Route(
    "REACTICOON_PLUGINS_MARKETPLACE_PLUGIN_HOMEPAGE",
    `${ROUTE_PREFIX}/:pluginId`
  )
});

const routes = [
  {
    definition: routingEnum.REACTICOON_PLUGINS_MARKETPLACE_DASHBOARD,
    handler: createAsyncPage(() =>
      import(
        /*  webpackChunkName: "ReacticoonPluginsMarketplacePlugin__DashboardPage" */ "../pages/dashboard"
      )
    )
  },
  {
    definition: routingEnum.REACTICOON_PLUGINS_MARKETPLACE_PLUGIN_HOMEPAGE,
    handler: createAsyncPage(() =>
      import(
        /*  webpackChunkName: "ReacticoonPluginsMarketplacePlugin__PluginHomepage" */ "../pages/pluginHomepage"
      )
    )
  }
];

export default {
  routes,
  routingEnum
};
