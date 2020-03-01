import { ReacticoonEvents, createEventHandler } from 'reacticoon/event'

import { registerCustomApiCaller } from 'reacticoon/api/config'

const onAppInit = createEventHandler(ReacticoonEvents.ON_APP_INIT, () => {
  if (FEATURE_REACTICOON_HEAVY_DEBUG) {
    const mockApiCallApiCaller = require('../mockApiCallApiCaller').default
    registerCustomApiCaller(mockApiCallApiCaller)
  }
})

export default onAppInit
