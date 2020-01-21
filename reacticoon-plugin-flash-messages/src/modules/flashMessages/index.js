import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'

const ReacticoonFlashMessagesModule = createModule('ReacticoonFlashMessagesModule', {
  actions,
  reducer,
  selectors,
})

export default ReacticoonFlashMessagesModule
