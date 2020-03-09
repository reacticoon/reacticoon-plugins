import { createApiObjectReducer } from 'reacticoon/reducer'
import { runCommand } from './actions'

const CommandModuleReducer = createApiObjectReducer(runCommand, action => [
  action.data.command,
  action.data.id,
])

export default CommandModuleReducer
