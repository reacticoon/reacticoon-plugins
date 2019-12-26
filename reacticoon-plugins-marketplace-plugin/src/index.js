import { createPlugin } from "reacticoon/plugin";

import routing from "./config/routing";
import ReacticoonDevExtension from "./config/ReacticoonDevExtension";
import onAppInit from "./events/onAppInit";

const ReacticoonPluginsMarketplacePlugin = createPlugin({
  name: "ReacticoonPluginsMarketplacePlugin",
  modules: [],
  eventsHandler: [onAppInit],
  routing,
  extendPlugins: [ReacticoonDevExtension]
});

export default ReacticoonPluginsMarketplacePlugin;
