import { createPlugin } from 'reacticoon/plugin'

import onAppInit from './events/onAppInit'
import routing from './config/routing'
import commandModule from './modules/command'
import userContextModule from './modules/userContext'
import DevToolbar from './views/DevToolbar'

//
// Dev plugin for reacticoon. Provides pages and debug utils.
//
// Can be override (using the plugin config 'extendPlugins')
// {
//   plugin: 'ReacticoonDev',
//   config: {
//     devToolbar: { // extend dev toolbar
//       tabs: [ // add a new tab to the dev toolbar
//         {
//           name: 'Api mock', // tab name
//           view: DevPluginToolbarTab // tab view content
//         }
//       ]
//     }
//   },
// }
//
const ReacticoonDevPlugin = createPlugin({
  // The plugin name. Must be unique. All Reacticoon plugins have the 'Reacticoon' prefix.
  name: 'reacticoon-plugin-dev',
  description: 'Reacticoon plugin displayed on development.',
  // list of the modules that the plugin register.
  // optionnal.
  modules: [
    commandModule,
    require('./modules/debug').default,
    require('./modules/events').default,
    require('./modules/devToolBar').default, // ReacticoonDevToolbarModule
    require('./modules/sse').default,
    userContextModule,
  ],
  // Describe listeners for a particular event.
  // optionnal.
  eventsHandler: [onAppInit],
  routing,
  layoutViews: [DevToolbar],
})

export default ReacticoonDevPlugin
