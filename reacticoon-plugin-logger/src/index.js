import { ReacticoonEvents, createEventHandler } from 'reacticoon/event'
import { createPlugin } from 'reacticoon/plugin'

import Logger from './logger'

const createLogEventHandler = (actionType, loggerAction) => {
  return createEventHandler(actionType, event => loggerAction(event.data))
}

const ReacticoonPluginExample = createPlugin({
  name: 'ReacticoonLogger',
  modules: [],
  eventsHandler: [
    createLogEventHandler(ReacticoonEvents.LOG_WARN, Logger.warn),
    createLogEventHandler(ReacticoonEvents.LOG_NOT_IMPLEMENTED, Logger.notImplemented),
    createLogEventHandler(ReacticoonEvents.LOG_ERROR, Logger.error),
    createLogEventHandler(ReacticoonEvents.LOG_EXCEPTION, Logger.logException),
    createLogEventHandler(ReacticoonEvents.LOG_COMPONENT_DID_CATCH, Logger.componentDidCatch),
  ],
})

export default ReacticoonPluginExample
