import { createSelector, getStateForModule } from 'reacticoon/selector'

// create the `getState` function, that will receive the state for the given module `reducer`.
// the module name is defined on `index.js` (first argument of `createModule`)
const getState = getStateForModule('ReacticoonPluginExample::TestModule')

export const getTestData = createSelector(
  [ getState ],
  state => state.toJS()
)