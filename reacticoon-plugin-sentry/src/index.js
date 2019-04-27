import { ReacticoonEvents, createEventHandler } from 'reacticoon/event'
import { createPlugin } from 'reacticoon/plugin'

import Logger from './logger'
import onAppInit from './events/onAppInit'

const createLogEventHandler = (actionType, loggerAction) => {
  return createEventHandler(actionType, event => loggerAction(event.data))
}

const ReacticoonPluginSentry = createPlugin({
  name: 'ReacticoonSentry',
  modules: [],
  eventsHandler: [
    onAppInit,
    createLogEventHandler(ReacticoonEvents.LOG_WARN, Logger.warning),
    createLogEventHandler(ReacticoonEvents.LOG_NOT_IMPLEMENTED, Logger.notImplemented),
    createLogEventHandler(ReacticoonEvents.LOG_ERROR, Logger.error),
    createLogEventHandler(ReacticoonEvents.LOG_EXCEPTION, Logger.logException),
    createLogEventHandler(ReacticoonEvents.LOG_COMPONENT_DID_CATCH, Logger.componentDidCatch),
  ],
})

export default ReacticoonPluginSentry
