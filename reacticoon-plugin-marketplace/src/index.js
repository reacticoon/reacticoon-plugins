import { createPlugin } from "reacticoon/plugin";

import routing from "./config/routing";
import ReacticoonDevExtension from "./config/ReacticoonDevExtension";
import onAppInit from "./events/onAppInit";

const ReacticoonPluginsMarketplacePlugin = createPlugin({
  name: "reacticoon-plugin-marketplace",
  modules: [],
  eventsHandler: [onAppInit],
  routing,
  extendPlugins: [ReacticoonDevExtension]
});

export default ReacticoonPluginsMarketplacePlugin;