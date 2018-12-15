import { ReacticoonEvents, createEventHandler } from 'reacticoon/event'
import { createPlugin } from 'reacticoon/plugin'

import Logger from './logger'
import onAppInit from './events/onAppInit'

const ReacticoonPluginSentry = createPlugin({
  name: 'ReacticoonSentry',
  modules: [],
  eventsHandler: [
    onAppInit,
    createEventHandler(ReacticoonEvents.LOG_WARN, Logger.warning),
    createEventHandler(ReacticoonEvents.LOG_NOT_IMPLEMENTED, Logger.notImplemented),
    createEventHandler(ReacticoonEvents.LOG_ERROR, Logger.error),
    createEventHandler(ReacticoonEvents.LOG_EXCEPTION, Logger.logException),
    createEventHandler(ReacticoonEvents.LOG_COMPONENT_DID_CATCH, Logger.componentDidCatch),
  ],
})

export default ReacticoonPluginSentry
