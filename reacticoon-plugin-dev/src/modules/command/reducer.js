import Immutable from "immutable";

import { createReducer } from "reacticoon/reducer";

import { runCommand } from "./actions";

const INITIAL_STATE = Immutable.fromJS({});

export const handleCommandRequest = (state, action) => {
  // uncomment to test circular reference error handling
  // action.request.request = action.request
  // action.next = action
  // const a = Immutable.fromJS(action)

  // throw new Error('Example of exception for reducer handler function')

  return state.mergeIn(
    [action.data.command, action.data.id],
    Immutable.fromJS({ isFetching: true, data: null })
  );
};

export const handleCommandSuccess = (state, action) =>
  state.mergeIn(
    [action.data.command, action.data.id],
    Immutable.fromJS({
      isFetching: false,
      data: action.response
    })
  );

export const handleCommandFailure = (state, action) =>
  state.mergeIn(
    [action.data.command, action.data.id],
    Immutable.fromJS({
      isFetching: false,
      data: null,
      error: action.apiError
    })
  );

const CommandModuleReducer = createReducer(INITIAL_STATE, {
  [runCommand.REQUEST]: handleCommandRequest,
  [runCommand.SUCCESS]: handleCommandSuccess,
  [runCommand.FAILURE]: handleCommandFailure
});

export default CommandModuleReducer;
