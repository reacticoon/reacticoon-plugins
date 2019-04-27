import { EventManager } from 'reacticoon/event'
import { getPluginConfig } from 'reacticoon/plugin'
import onCustomEvent from './onCustomEvent'
import { ReacticoonEvents, createEventHandler } from 'reacticoon/event'

const onAppInit = createEventHandler(ReacticoonEvents.ON_APP_INIT, () => {
  console.info('received ON_APP_INIT event')
  console.info('ReacticoonPluginExample config: ', getPluginConfig('ReacticoonPluginExample'))

  EventManager.dispatch(
    onCustomEvent,
    {
    }
  )
})

export default onAppInit
