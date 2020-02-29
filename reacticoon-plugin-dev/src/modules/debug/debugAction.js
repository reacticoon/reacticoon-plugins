// TODO: find a way to make this API work.
// composer for actions to debug them
function debugAction(action) {
  debugger
  action.debug = true
  return action
}

export default debugAction
