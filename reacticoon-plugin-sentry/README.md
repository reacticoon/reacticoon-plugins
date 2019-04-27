# reacticoon-plugin-sentry

This plugin add and configure [sentry](https://docs.sentry.io/) on [`Reacticoon`](https://github.com/reacticoon/reacticoon).

It is configured to catch the `ReacticoonEvents.LOG_*` events.

You can directly call the sentry logging functions:

```js
import Logger from 'reacticoon-plugin-sentry/logger'

Logger.warn({
  type: 'moduleA',
  detail: 'This is a test warning from module A'
})
```

## Plugin configuration

```json
{
  sentryUrl: '',

  displayReportDialog: true,

  appVersion: '0.0.1'
}
```

### `sentryUrl`

The url provided by sentry.

Ex: `'https://<key>@sentry.io/<project>'`

See [sentry javascript sdk documentation](https://docs.sentry.io/clients/javascript/config/)

### `displayReportDialog`

Default: `true`

### `appVersion`
