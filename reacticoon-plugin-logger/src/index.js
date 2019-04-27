import { ReacticoonEvents, createEventHandler } from 'reacticoon/event'
import { createPlugin } from 'reacticoon/plugin'

import Logger from './logger'

const ReacticoonPluginExample = createPlugin({
  name: 'ReacticoonLogger',
  modules: [],
  eventsHandler: [
    createEventHandler(ReacticoonEvents.LOG_WARN, Logger.warn),
    createEventHandler(ReacticoonEvents.LOG_NOT_IMPLEMENTED, Logger.notImplemented),
    createEventHandler(ReacticoonEvents.LOG_ERROR, Logger.error),
    createEventHandler(ReacticoonEvents.LOG_EXCEPTION, Logger.logException),
    createEventHandler(ReacticoonEvents.LOG_COMPONENT_DID_CATCH, Logger.componentDidCatch),
  ],
})

export default ReacticoonPluginExample
