import { createPlugin } from "reacticoon/plugin";

import routing from "./config/routing";
import ReacticoonDevExtension from "./config/ReacticoonDevExtension";

const ReacticoonPluginBundleStats = createPlugin({
  name: "ReacticoonPluginBundleStats",
  modules: [],
  eventsHandler: [],
  routing,
  extendPlugins: [ReacticoonDevExtension]
});

export default ReacticoonPluginBundleStats;
