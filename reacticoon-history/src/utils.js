//
// format the type of the actions with the given historyType
// redux-undo handle only one action type by default.
// We need to change the type for each reducer generated
//
export const getUndoType = historyType => `HISTORY_${historyType}_UNDO`
export const getRedoType = historyType => `HISTORY_${historyType}_REDO`
export const getJumpType = historyType => `HISTORY_${historyType}_JUMP`
export const getJumpToPastType = historyType => `HISTORY_${historyType}_JUMP_TO_PAST`
export const getJumpToFutureType = historyType => `HISTORY_${historyType}_JUMP_TO_FUTURE`
export const getClearHistoryType = historyType => `HISTORY_${historyType}_CLEAR_HISTORY`
