import RoutingDebugger from '../../RoutingDebugger'
import { EventManager, ReacticoonEvents, createEventHandler } from 'reacticoon/event'

import EventsContainer from 'reacticoon-plugin-dev/modules/events/container'

const initBrowserDevTools = () => {
  window.REACTICOON_APP = {
    RoutingDebugger,
    EventsContainer,
  }
}

export default initBrowserDevTools
