import { createModule } from 'reacticoon/module'

import * as middlewares from './middlewares'

const ReacticoonDevDebugModule = createModule('ReacticoonDevDebug', {
  noReducer: true,
  middlewares,
})

export default ReacticoonDevDebugModule
