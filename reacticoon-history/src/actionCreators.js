// Note: redux-redo expect index to be on the root on action, not on `payload` so we can't use
// `createAction`
import {
  getUndoType,
  getRedoType,
  getJumpType,
  getJumpToPastType,
  getJumpToFutureType,
  getClearHistoryType,
} from './utils'

export const createUndo = historyType => () =>
  createAction(getUndoType(historyType), { historyType })

export const createRedo = historyType => () => ({ type: getRedoType(historyType) })

export const createJumpToFuture = historyType => index => ({
  type: getJumpType(historyType),
  index,
})

export const createJumpToPast = historyType => index => ({
  type: getJumpToPastType(historyType),
  index,
})

export const createJump = historyType => index => ({
  type: getJumpToFutureType(historyType),
  index,
})

export const createClearHistory = historyType => () => ({
  type: getClearHistoryType(historyType),
})
