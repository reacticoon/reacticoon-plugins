import { RequestStatus } from 'reacticoon/api/constants'
import { createApiObjectSelectors, getStateForModule } from 'reacticoon/selector'

// create the `getState` function, that will receive the state for the
// given module.
const getState = getStateForModule('ReacticoonDev::CommandModule')

const getPath = (state, props) => [props.command, props.id]

const getFormatter = props => props.formatter || (a => a)

export const selectors = createApiObjectSelectors(getState, getPath, (data, props) =>
  getFormatter(props)(data)
)

export const makeGetCommandData = selectors.makeGetData
export const makeIsPendingCommandData = selectors.makeIsPending
export const makeGetCommandError = selectors.makeGetError
export const makeGetRequest = selectors.makeGetRequest
