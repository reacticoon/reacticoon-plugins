import { createMiddleware } from 'reacticoon/middleware'

import { testAction } from './actions'

//
// We catch the `testAction` and print the value that it contains
//
export const testActionMiddleware = createMiddleware(
  'testActionMiddleware', // middleware name. Used for debug purposes.
  //
  // action that the middleware will catch. The action must have been created via `createAction`.
  // Otherwise, you can pass the action type.
  //
  testAction, 
  // define middleware
  // it receive all the data the middleware needs:
  // - action
  // - dispatch
  // - next
  // - getState
  ({ action }) => {
    console.log('testActionMiddleware SUCCESS: ' + JSON.stringify(action.data))
  }
)
