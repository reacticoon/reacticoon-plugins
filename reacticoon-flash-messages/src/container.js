import { createModuleContainer } from 'reacticoon/container'
import FlashMessagesModule from './modules/flashMessages'

const container = createModuleContainer('FlashMessagesContainer', FlashMessagesModule, {
  selectors: { flashMessages: 'getFlashMessages' },
  actions: ['addFlashMessage', 'removeFlashMessage'],
})

export default container
