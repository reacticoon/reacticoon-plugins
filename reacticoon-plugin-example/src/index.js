import { createPlugin } from 'reacticoon/plugin'

import testModule from './modules/testModule'

import onAppInit from './events/onAppInit'
import onCustomEvent from './events/onCustomEvent'

//
// Create the plugin configuration
// `createPlugin` will verify that the given configuration is correct, and add default configuration
//
//
const ReacticoonPluginExample = createPlugin({
  // The plugin name. Must be unique. All Reacticoon plugins have the 'Reacticoon' prefix.
  name: 'ReacticoonPluginExample',
  // list of the modules that the plugin register.
  // optionnal.
  modules: [testModule],
  // Describe listeners for a particular event.
  // optionnal.
  eventsHandler: [onAppInit, onCustomEvent],
  // Describe custom events created by the plugin
  // Note: Any event name should be prefixed with the Plugin name.
  // e.g: 'ReacticoonPluginExample::Event::onCustomEvent'
  // optionnal.
  events: [onCustomEvent],
})

export default ReacticoonPluginExample
