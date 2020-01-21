import Immutable from 'immutable'
import cloneDeep from 'lodash/cloneDeep'
import { createReducer } from 'reacticoon/reducer'
import { addFlashMessage, removeFlashMessage } from './actions'

const DEFAULT = Immutable.fromJS({
  flashMessages: [],
})

const onAddFlashMessage = (state, action) =>
  state.updateIn(['flashMessages'], flashMessages =>
    Immutable.fromJS([...cloneDeep(flashMessages), action.payload.flashMessage])
  )

const onRemoveFlashMessage = (state, action) =>
  state.updateIn(['flashMessages'], flashMessages =>
    flashMessages.filter(flashMessage => {
      return flashMessage.get('id') !== action.payload.flashMessageId
    })
  )

const reducer = createReducer(DEFAULT, {
  [addFlashMessage]: onAddFlashMessage,
  [removeFlashMessage]: onRemoveFlashMessage,
})

export default reducer
