//
// We define a simple module that have only one action.
//
// The action will result in:
// - a state modification via the `reducer`
// - a log in the console from the `middleware` that catches this action
// 
// We provide a selector to retrieve the data from the store
//

import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import * as middlewares from './middlewares'
import reducer from './reducer'

const TestModule = createModule('ReacticoonPluginExample::TestModule', {
  actions,
  reducer,
  selectors,
  middlewares,
})

export default TestModule
