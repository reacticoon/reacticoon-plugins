import Immutable from 'immutable'
import cloneDeep from 'lodash/cloneDeep'
import { createReducer } from 'reacticoon/reducer'
import { stringifyWithoutCircularReferences } from 'reacticoon/utils/circular'
import { saveEvent } from './actions'

const DEFAULT = Immutable.fromJS({
  events: [],
})

const onSaveEvent = (state, action) => {
  let event = { ...action.payload.event }

  try {
    // since the data can contain reference circular loop, we stringify it
    event.data = stringifyWithoutCircularReferences(event.data)

    return state.updateIn(['events'], events => Immutable.fromJS([...cloneDeep(events), event]))
  } catch (ex) {
    // avoid infinite loop, where our error is handle by 'createReducer', that dispatch an exception
    // event
    console.error(ex)
    debugger
  }
}

const reducer = createReducer(DEFAULT, {
  [saveEvent]: onSaveEvent,
})

export default reducer
