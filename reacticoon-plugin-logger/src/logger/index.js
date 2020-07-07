// avoid infinite loop
const getConsole = () => window.originalConsole || window.console
// const getConsole = () => console

export default class Logger {
  static notImplemented({ type, detail }) {
    getConsole().error(type, detail)
  }

  static warn({ type, detail }) {
    // TODO: fix when using server side rendering to render jsx to string using mui Button
    if (detail.indexOf("useLayoutEffect does nothing on the server") !== -1) {
      debugger
      return;
    }
    getConsole().warn(type, detail)
  }

  static error({ type, detail }) {
    getConsole().error(type, detail)
  }

  static deprecated({ type, detail }) {
    getConsole().warn('[DEPRECATED]', type, detail)
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
    getConsole().error('action exception', err)
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
    if (getConsole() && getConsole().error) {
      getConsole().error(ex)
    }
  }
}
