import { createPlugin } from "reacticoon/plugin";

import routing from "./config/routing";
import ReacticoonDevExtension from "./config/ReacticoonDevExtension";
import onAppInit from "./events/onAppInit";

const ReacticoonMaterialUIPlugin = createPlugin({
  name: "reacticoon-material-ui",
  modules: [],
  eventsHandler: [onAppInit],
  routing,
  extendPlugins: [ReacticoonDevExtension]
});

export default ReacticoonMaterialUIPlugin;
