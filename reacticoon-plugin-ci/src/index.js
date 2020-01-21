import { createPlugin } from "reacticoon/plugin";

import routing from "./config/routing";
import ReacticoonDevExtension from "./config/ReacticoonDevExtension";

const ReacticoonPluginCi = createPlugin({
  name: "reacticoon-plugin-ci",
  modules: [],
  eventsHandler: [],
  routing,
  extendPlugins: [ReacticoonDevExtension]
});

export default ReacticoonPluginCi;
