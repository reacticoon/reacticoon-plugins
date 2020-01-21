import { createPlugin } from "reacticoon/plugin";

import routing from "./config/routing";
import ReacticoonDevExtension from "./config/ReacticoonDevExtension";

const ReacticoonPluginGit = createPlugin({
  name: "reacticoon-plugin-git",
  modules: [],
  eventsHandler: [],
  routing,
  extendPlugins: [ReacticoonDevExtension]
});

export default ReacticoonPluginGit;
