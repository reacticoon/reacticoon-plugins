import { createSelector, getStateForModule } from 'reacticoon/selector'

const getState = getStateForModule('ReacticoonFlashMessagesModule')

export const getFlashMessages = createSelector(
  getState,
  state => {
    const flashMessages = state.get('flashMessages', [])
    return flashMessages.toJS()
  }
)
