import { createEventListener, createEvent } from 'reacticoon/event'

const onCustomEvent = createEventListener(
  createEvent(
    'ReacticoonPluginExample::Event::onCustomEvent', 
    'Example of a custom event'
  ),
  event => {
    console.info(`received onCustomEvent event (${event.type})`)
    console.info(event.data)
  }
)

export default onCustomEvent
