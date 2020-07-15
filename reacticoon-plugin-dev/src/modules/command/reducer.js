import { createApiObjectReducer } from 'reacticoon/reducer'
import { runCommand } from './actions'

const CommandModuleReducer = createApiObjectReducer(runCommand, action => [
  action.payload.command,
  action.payload.id,
])

export default CommandModuleReducer
