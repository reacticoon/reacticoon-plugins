import isEmpty from 'lodash/isEmpty'
import { getPluginConfig } from 'reacticoon/plugin'
import { createEventListener, ReacticoonEvents } from 'reacticoon/event'
import { isWarnLogLevel } from 'reacticoon/environment'

import Logger from '../logger'

const onAppInit = createEventListener(ReacticoonEvents.ON_APP_INIT, () => {
  const config = getPluginConfig('reacticoonPluginSentry')

  if (config) {
    if (isEmpty(config.sentryUrl)) {
      if (isWarnLogLevel) {
        console.warn(`Can't configure sentry. Missing 'sentryUrl' config.`)
      }
    } else {
      // configure sentry logger
      Logger.configure({
        sentryUrl: config.sentryUrl,
        displayReportDialog: config.displayReportDialog || true,
        appVersion: config.appVersion || 'N/A',
      })
    }
  }
})

export default onAppInit
