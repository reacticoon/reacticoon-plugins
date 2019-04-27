import { createAction } from 'reacticoon/action'
// import uuidv4 from 'uuid/v4'

export const addFlashMessage = createAction(
  'ReacticoonFlashMessagesModule::addFlashMessage',
  flashMessage => ({
    flashMessage: {
      // id: uuidv4(),
      ...flashMessage,
    },
  })
)

export const removeFlashMessage = createAction(
  'ReacticoonFlashMessagesModule::removeFlashMessage',
  flashMessageId => ({
    flashMessageId,
  })
)
