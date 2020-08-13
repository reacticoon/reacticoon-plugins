import { createEventListener, ReacticoonEvents } from 'reacticoon/event'
import { getPluginConfig } from 'reacticoon/plugin'

const onAppInit = createEventListener(ReacticoonEvents.ON_APP_INIT, () => {
  if (FEATURE_REACTICOON_HEAVY_DEBUG) {
    const config = getPluginConfig('reacticoon-plugin-material-ui')

    if (!config.theme) {
      console.warn('[reacticoon-plugin-material-ui] no theme configured.')
    }
  }
})

export default onAppInit
