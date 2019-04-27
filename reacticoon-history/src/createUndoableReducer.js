import undoable from 'redux-undo'
import { __DEV__ } from 'reacticoon/environment'
import {
  getUndoType,
  getRedoType,
  getJumpType,
  getJumpToPastType,
  getJumpToFutureType,
  getClearHistoryType,
} from './utils'

const getInitialState = () => ({
  past: [],
  // the present is initialized to null.
  // We could add an option to initialize with a given value
  present: null, 
  future: []
})
​
/**
 * 
 * @param {string} historyType name of the history. Must be unique for your app.
 *                            redux-undo handle only one action type by default. We use historyType
 *                            to create unique action for the created reducer.
 * @param {*} reducer 
 * @param {object} config     see https://github.com/omnidan/redux-undo/issues/117
 * 
 */
const createUndoableReducer = (historyType, config, reducer) => undoable(
  reducer, { 
    
    debug: __DEV__, // turn on debugging

    ...config,

    // handle multiple reducer with redux-undo
    // https://github.com/omnidan/redux-undo/issues/117
    // put after the config parameter to avoid override our types.
    undoType: getUndoType(historyType),
    redoType: getRedoType(historyType),
    jumpType: getJumpType(historyType),
    jumpToPastType: getJumpToPastType(historyType),
    jumpToFutureType: getJumpToFutureType(historyType),
    clearHistoryType: getClearHistoryType(historyType),
  })

export default createUndoableReducer
