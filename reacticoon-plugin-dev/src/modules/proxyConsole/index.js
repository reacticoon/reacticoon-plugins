import { EventManager } from 'reacticoon/event'

// TODO: handle more than %s
function parseLogWithArguments(str, argv) {
  if (str.includes('%s')) {
    let i = 0
    return str.replace(/%s/g, () => argv[i++])
  }
  return str
}

window.originalConsole = {}

/**
 * Creates a proxy console.
 */
function proxyConsole(type, callback) {
  if (typeof console !== 'undefined') {
    var orig = console[type]
    if (typeof orig === 'function') {
      // save original console to avoid infinite loop. See logger
      window.originalConsole[type] = orig
      console[type] = function __reacticoon_proxy_console__() {
        try {
          let _message = arguments[0]
          const argv = [].slice.call(arguments, 1)
          if (typeof _message === 'string') {
            _message = parseLogWithArguments(_message, argv)
            callback(_message, argv)
          } else {
            debugger
          }
        } catch (err) {
          // Warnings must never crash. Rethrow with a clean stack.
          setTimeout(function() {
            throw err
          })
        }
        return orig.apply(this, arguments)
      }
    }
  }
}

// Proxy console.
//
// Our goal is to catch some error messages and create a Reacticoon event for it, allowing to:
// - log it on reacticoon UI
// - display notification
// - list react errors
//
export const initConsoleCatcher = () => {
  //
  // proxy console.error.
  //
  proxyConsole('error', (message, ...otherProps) => {
    // TODO: allow plugins to add their own custom catcher ?
    // For example a plugin that abstract a library could use this feature.
    // But enforce good practice to send event directly AND console.x if possible.

    if (message && message.startsWith('Warning: Failed prop type:')) {
      EventManager.dispatch(EventManager.Event.LOG_WARN, {
        type: message,
        detail: '',
        label: 'warn PropType',
      })
    } else if (message && message.startsWith('Warning: Invalid DOM property')) {
      EventManager.dispatch(EventManager.Event.LOG_WARN, {
        type: message,
        detail: '',
        label: 'warn invalid DOM property',
      })
    } else if (message && message.startsWith('Warning')) {
      EventManager.dispatch(EventManager.Event.LOG_WARN, {
        type: message,
        detail: '',
        label: 'generic warn',
      })
    }

    // handle:
    // Warning: validateDOMNesting
    // Material-UI:
  })

  proxyConsole('warn', (message, ...otherProps) => {
    if (message && message.startsWith('Warning:')) {
      EventManager.dispatch(EventManager.Event.LOG_WARN, {
        type: message,
        detail: '',
        label: 'generic warn',
      })
    } else if (message && message.startsWith('Material-UI:')) {
      // TODO: make the material-ui plugin handle this
      EventManager.dispatch(EventManager.Event.LOG_WARN, {
        type: message,
        detail: '',
        label: 'Material-UI',
      })
    }
    // TODO: allow plugins to add their own custom catcher
    // For example a plugin that abstract a library could use this feature.
    // But enforce good practice to send event directly AND console.x if possible.
    // Plus allow to format the data (see events/format) and the display (see LogsView)
    // TODO: disabled for now since it infinite loop
    // if (message && message.startsWith('Warning: Failed prop type:')) {
    //   // TODO: log as event warning
    //   EventManager.dispatch(EventManager.Event.LOG_WARN, {
    //     type: message,
    //     detail: '',
    //   })
    // }
  })
}
