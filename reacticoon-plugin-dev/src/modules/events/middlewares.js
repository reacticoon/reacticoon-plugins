import { createMiddleware } from 'reacticoon/middleware'
import { addErrorFlashMessage } from 'reacticoon-plugin-flash-messages/service'
import { saveEvent } from './actions'
import { sendMessageToBrowserDevTools } from 'reacticoon-plugin-dev/modules/browserDevTools'

/**
 * Creates a flash message for the important Reacticoon events, such as exceptions.
 */
export const eventsMiddleware = createMiddleware('eventsMiddleware', saveEvent, ({ action }) => {
  sendMessageToBrowserDevTools('EVENT', action)

  const eventsToNotify = [
    'REACTICOON::LOG::EXCEPTION', // TODO: use constant
  ]

  const event = action.payload.event
  if (eventsToNotify.indexOf(event.type) !== -1) {
    switch (event.type) {
      case 'REACTICOON::LOG::EXCEPTION': // TODO: use constant
        addErrorFlashMessage({
          text: `${event.data.exceptionMessage}`,
          // TODO: event could have some circular on it, but should not
          data: event,
        })
        break
    }
  }
})
