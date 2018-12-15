import { createReducer } from 'reacticoon/reducer'

import { testAction } from './actions'

// reducer for the `testAction`.
const handleTestAction = (state, action) => {
  return state.merge(action.data)
}

// reducer default data
// createReducer will transform the default data to an Immutable object
const DEFAULT_STATE = {}

//
// create the reducer
//
const testReducer = createReducer(DEFAULT_STATE, {
  // we list the actions and the reducers for those actions
  [testAction]: handleTestAction
})

export default testReducer
