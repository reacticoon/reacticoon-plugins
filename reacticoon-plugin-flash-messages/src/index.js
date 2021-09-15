import { createPlugin } from "reacticoon/plugin";

import FlashMessagesModule from "./modules/flashMessages";

const ReacticoonFlashMessagesPlugin = createPlugin({
  name: "ReacticoonFlashMessagesPlugin",
  modules: [FlashMessagesModule],
  eventsHandler: [],
  extendPlugins: []
});

export default ReacticoonFlashMessagesPlugin;
