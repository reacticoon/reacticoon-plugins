import { ReacticoonEvents, createEventListener } from 'reacticoon/event'
import { getRoute } from 'reacticoon/routing'
import RoutingDebugger from 'reacticoon-plugin-dev/RoutingDebugger'

const onAppInit = createEventListener(ReacticoonEvents.ON_APP_INIT, () => {
  if (__DEV__) {
    // TODO: move on end-to-end plugin
    // test adding Reacticoon
    window.ReacticoonTesting = {
      test: () => 42,
      getRoute,
      getCurrentRoute: RoutingDebugger.getCurrentRoute,
    }
  }
})

export default onAppInit
