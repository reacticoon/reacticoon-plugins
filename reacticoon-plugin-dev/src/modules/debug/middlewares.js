import get from 'lodash/get'
import createMiddleware from 'reacticoon/middleware/createMiddleware'
import { EventManager } from 'reacticoon/event'

//
// Allow to add the `debug` action payload value to true to trace the action
//

const shouldStackTraceEvent = action => get(action, 'payload.debug', false) === true

export const stackTraceActionMiddleware = createMiddleware(
  'stackTraceActionMiddleware',
  shouldStackTraceEvent,
  ({ action }) => {
    const head = `[trace][action] ${action.type}`

    console.group(head)
    console.log(action)
    console.log(action.debugData)
    // console.trace(`trace`)
    console.groupEnd(head)

    // send reacticoon event
    EventManager.dispatch(EventManager.Event.LOG_DEBUG, {
      type: 'ACTION_DEBUG',
      detail: { action },
    })
  }
)
