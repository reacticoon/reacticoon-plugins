import { createPlugin } from 'reacticoon/plugin'

import FlashMessagesModule from './modules/flashMessages'

const ReacticoonFlashMessagesPlugin = createPlugin({
  name: 'ReacticoonFlashMessages',
  modules: [FlashMessagesModule],
  eventsHandler: [],
  extendPlugins: [],
})

export default ReacticoonFlashMessagesPlugin
