import { getStore } from 'reacticoon/store'
import { addFlashMessage, removeFlashMessage } from './modules/flashMessages/actions'
import { MessageType } from './modules/flashMessages/constants'
import { EventManager } from 'reacticoon/event'
import { getConfiguredTypes } from './config'

import noop from 'lodash/noop'

export { MessageType as FlashMessageType } from './modules/flashMessages/constants'

let nextFlashMessageId = 1

/**
 * Adds a FlashMessage to the Redux Store and removes it after the
 * duration, if the duration is not false.
 *
 * @param type The type of message that is added
 * @param duration How long the message should stay in the Redux store. False for when it never should be removed.
 * @param text The text to render inside the message
 * @param {function} onClick The callback which will be executed when the flash message is clicked, empty by default.
 * @param data The extra data which can be passed to the renderer of the flash message.
 */
export function addFlashMessageOfType(type, duration, text, onClick, data) {
  const dispatch = getStore().dispatch
  const id = nextFlashMessageId
  const flashMessage: FlashMessage = { id, type, duration, text, onClick, data }

  if (!MessageType[type] && !getConfiguredTypes().indexOf(type) === -1) {
    EventManager.dispatch(EventManager.Event.LOG_WARN, {
      type: 'FlashMessage',
      detail: `Type ${type} not registered`,
    })
  }

  dispatch(addFlashMessage(flashMessage))

  if (duration !== false) {
    setTimeout(() => {
      dispatch(removeFlashMessage(id))
    }, duration)
  }

  nextFlashMessageId += 1
}

/**
 * Adds a flash message of the type 'ERROR' on the flash message queue
 * in Redux.
 *
 * @param {FlashMessageConfig} { text, onClick, data }
 */
export function addErrorFlashMessage({ text, onClick, data, duration = 10000 }) {
  addFlashMessageOfType(MessageType.ERROR, duration, text, onClick, data)
}

/**
 * Adds a flash message of the type 'WARNING' on the flash message queue
 * in Redux. After 7000 milliseconds it will automatically be removed
 * from the queue.
 *
 * @param {FlashMessageConfig} { text, onClick, data }
 */
export function addWarningFlashMessage({ text, onClick, data, duration = 7000 }) {
  addFlashMessageOfType(MessageType.WARNING, duration, text, onClick, data)
}

/**
 * Adds a flash message of the type 'SUCCESS' on the flash message queue
 * in Redux. After 2000 milliseconds it will automatically be removed
 * from the queue.
 *
 * @param {FlashMessageConfig} { text, onClick, data }
 */
export function addSuccessFlashMessage({ text, onClick, data, duration = 2000 }) {
  addFlashMessageOfType(MessageType.SUCCESS, duration, text, onClick, data)
}

/**
 * Adds a flash message of the type 'INFO' on the flash message queue
 * in Redux. After 5000 milliseconds it will automatically be removed
 * from the queue.
 *
 * @param {FlashMessageConfig} { text, onClick, data }
 */
export function addInfoFlashMessage({ text, onClick, data, duration = 5000 }) {
  addFlashMessageOfType(MessageType.INFO, duration, text, onClick, data)
}

// This export is purely for unit testing
export function resetNextFlashMessageId() {
  nextFlashMessageId = 1
}
