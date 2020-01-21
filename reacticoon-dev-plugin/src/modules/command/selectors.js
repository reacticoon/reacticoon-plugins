import {
  createSelector,
  createMakeSelector,
  getStateForModule
} from "reacticoon/selector";

// create the `getState` function, that will receive the state for the
// given module.
const getState = getStateForModule("ReacticoonDev::CommandModule");

const getPath = (state, props) => [props.command, props.id];
const getFormatter = (state, props) => props.formatter || (a => a);

export const makeGetCommandData = createMakeSelector(
  "getCommandData",
  [getState],
  [getPath, getFormatter],
  (state, path, formatter) => {
    const data = state.getIn([...path, "data"], null);

    try {
      return data ? formatter(data.toJS ? data.toJS() : data) : null;
    } catch (e) {
      debugger;
    }
  },
  true
);

export const makeIsFetchingCommandData = createMakeSelector(
  "isFetchingCommandData",
  [getState],
  [getPath],
  (state, path) => state.getIn([...path, "isFetching"], false)
);

export const makeGetCommandError = createMakeSelector(
  "getCommandError",
  [getState],
  [getPath],
  (state, path) => {
    const data = state.getIn([...path, "error"], null);

    try {
      return data ? (data.toJS ? data.toJS() : data) : null;
    } catch (e) {
      debugger;
    }
  }
);
