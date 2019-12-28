import { runCommand } from "../command/actions";
import { getStore } from "reacticoon/store";
import { getRoutes } from 'reacticoon/routing'
import { getPlugins } from 'reacticoon/plugin'

// our identifier on the web dev server
let _clientId = null

function sseAllListener(event, dispatch) {
  console.info(`[sse] event ${event.eventName}`);

  switch (event.eventName) {
    case "INIT":
      // TODO: on init maybe we could add a date of last received "REACTICOON::CONFIGURATION" to avoid
      // sending it each time.
      _clientId = event.payload.clientId
      getStore().dispatch(
        runCommand("_", "REACTICOON::CONFIGURATION", {
          queryParams: { clientId: _clientId },
          payload: {
            routes: getRoutes(),
            plugins: getPlugins()
          }
        })
      );
      break;
  }
}

export default sseAllListener;
