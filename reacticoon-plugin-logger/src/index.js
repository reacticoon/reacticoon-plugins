import { ReacticoonEvents, createEventListener } from "reacticoon/event";
import { createPlugin } from "reacticoon/plugin";

import Logger from "./logger";

const createLogEventHandler = (actionType, loggerAction) => {
  return createEventListener(actionType, event => loggerAction(event.data));
};

const ReacticoonPluginLogger = createPlugin({
  name: "ReacticoonPluginLogger",
  modules: [],
  eventsHandler: [
    createLogEventHandler(ReacticoonEvents.LOG_WARN, Logger.warn),
    createLogEventHandler(ReacticoonEvents.LOG_DEPRECATION, Logger.deprecated),
    createLogEventHandler(
      ReacticoonEvents.LOG_NOT_IMPLEMENTED,
      Logger.notImplemented
    ),
    createLogEventHandler(ReacticoonEvents.LOG_ERROR, Logger.error),
    createLogEventHandler(ReacticoonEvents.LOG_EXCEPTION, Logger.logException),
    createLogEventHandler(
      ReacticoonEvents.LOG_COMPONENT_DID_CATCH,
      Logger.componentDidCatch
    )
  ]
});

export default ReacticoonPluginLogger;
