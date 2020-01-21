import { createEventHandler, ReacticoonEvents } from "reacticoon/event";
import { getPluginConfig } from "reacticoon/plugin";
import { __DEV__ } from "reacticoon/environment";

const onAppInit = createEventHandler(ReacticoonEvents.ON_APP_INIT, () => {
  if (__DEV__) {
    const config = getPluginConfig("reacticoon-plugin-material-ui");

    if (!config.theme) {
      console.warn("[reacticoon-plugin-material-ui] no theme configured.");
    }
  }
});

export default onAppInit;