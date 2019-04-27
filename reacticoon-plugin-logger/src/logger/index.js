export default class Logger {
  static notImplemented({ type, detail }) {
    console.error(type, detail)
  }

  static warn({ type, detail }) {
    console.warn(type, detail)
  }

  static error({ type, detail }) {
    console.error(type, detail)
  }

  /**
   * Called when an exception is thrown during an action.
   *
   * See crashReporter.js
   *
   * @param  {[type]} err    exception thrown
   * @param  {[type]} action action dispatched when the error occured
   * @param  {[type]} state  current store state
   */
  static reduxException({ err, action, state }) {
    console.error('action exception', err)
  }

  static componentDidCatch({ error, info }) {}

  /**
   * Log an exception to the console and send it to our tracker (raven).
   * @see https://github.com/getsentry/raven-js/blob/master/docs/integrations/react.rst
   *
   * @param ex
   * @param context
   */
  static logException({ ex, context }) {
    /* eslint no-console:0 */
    if (window.console && console.error) {
      console.error(ex)
    }
  }
}
