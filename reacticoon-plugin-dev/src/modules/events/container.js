import { createModuleContainer } from 'reacticoon/container'
import EventsModule from './'

const container = createModuleContainer('ReacticoonDevEventsContainer', EventsModule, {
  selectors: {
    events: 'getEvents',
    groupedEvents: 'getGroupedEvents',
  },
  actions: ['saveEvent'],
})

export default container
