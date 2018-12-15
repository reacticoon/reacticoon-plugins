# reacticoon-history

This plugin use [redux-undo](https://github.com/omnidan/redux-undo) under the hood
and add default configuration and more capatibilies:

- not unique. By default `redux-undo` can handle only one reducer.
  We modify the `redux-undo` config to handle one reducer per `createUndoableReducer`.
- add logging in `__DEV__` (disable it with the `debug` option set to false)

## Usage

### reducer.js

Use `createUndoableReducer` that takes the following parameters:

- historyType {string} name of the history. Must be unique for your app. Also used to create the actions.
- options {object} see [redux-undo options](https://github.com/omnidan/redux-undo#configuration)
- reducer {function}

You can use any [redux-undo options](https://github.com/omnidan/redux-undo#configuration) except
the *Type, since reacticoon already rewrite them to make the created reducer unique (by default redux-undo 
works only for one reducer).

```javascript
import { createReducer } from 'reacticoon/reducer'
import { createUndoableReducer } from 'reacticoon-history'


const myHistoryReducer = createUndoableReducer(
  'MY_HISTORY',
  {
    // the list of options available is on the redux-undo documentation
    // https://github.com/omnidan/redux-undo#configuration

    debug: true,

  },
  createReducer(
    [customAction]: handleCustomAction,
  )
)
```

### actions.js

The actions that will allow you to manipulate the history have to be 
create by the corresponding function. Each creator function will return
a function, to be used as action:

- `createUndo(historyType)` => `undo()`
- `createRedoType(historyType)` => `redo()`
- `createJump(historyType)` => `jump(index)`
- `createJumpToPast(historyType)` => `jumpToPast(index)`
- `createJumpToFuture(historyType)` => `jumpToFuture(index)`
- `createClearHistory(historyType)` => `clearHistory(index)`

```javascript
const { createUndo, createRedo } from 'reacticoon-history'

export const undo = createUndo('MY_HISTORY')

export const redo = createRedo('MY_HISTORY')
```

## Links

- https://redux.js.org/recipes/implementing-undo-history
- [redux-undo](https://github.com/omnidan/redux-undo)