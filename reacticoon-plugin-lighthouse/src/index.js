import { createPlugin } from "reacticoon/plugin";

import routing from "./config/routing";
import ReacticoonDevExtension from "./config/ReacticoonDevExtension";

const ReacticoonPluginLighthouse = createPlugin({
  name: "reacticoon-plugin-lighthouse",
  modules: [],
  eventsHandler: [],
  routing,
  extendPlugins: [ReacticoonDevExtension]
});

export default ReacticoonPluginLighthouse;
