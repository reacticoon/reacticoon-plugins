//
// We define the form module, that handles the form data and form options.
//

import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'

const FormModule = createModule('ReacticoonPluginForm::FormModule', {
  actions,
  reducer,
  selectors,
})

export default FormModule
