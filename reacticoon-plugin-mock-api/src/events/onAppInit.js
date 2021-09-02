import { ReacticoonEvents, createEventListener } from 'reacticoon/event'

import { registerCustomApiCaller } from 'reacticoon/api/config'
import { isDebugLogLevel } from 'reacticoon/environment'

const onAppInit = createEventListener(ReacticoonEvents.ON_APP_INIT, () => {
  if (isDebugLogLevel()) {
    const mockApiCallApiCaller = require('../mockApiCallApiCaller').default
    registerCustomApiCaller(mockApiCallApiCaller)
  }
})

export default onAppInit
