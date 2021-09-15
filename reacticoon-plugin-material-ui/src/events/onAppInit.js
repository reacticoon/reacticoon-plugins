import { createEventListener, ReacticoonEvents } from 'reacticoon/event'
import { getPluginConfig } from 'reacticoon/plugin'
import { isDebugLogLevel } from 'reacticoon/environment'

const onAppInit = createEventListener(ReacticoonEvents.ON_APP_INIT, () => {
  if (isDebugLogLevel()) {
    const config = getPluginConfig('ReacticoonMaterialUIPlugin')

    if (!config.theme) {
      console.warn('[ReacticoonMaterialUIPlugin] no theme configured.')
    }
  }
})

export default onAppInit
