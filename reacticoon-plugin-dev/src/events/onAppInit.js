import map from 'lodash/map'
import forEach from 'lodash/forEach'
import { EventManager, ReacticoonEvents, createEventListener } from 'reacticoon/event'
import { getPlugins, getPluginConfig } from 'reacticoon/plugin'
import { getModules } from 'reacticoon/module'
import { getRoutes } from 'reacticoon/routing'
import { initConsoleCatcher } from '../modules/proxyConsole'
import EventsDebugger from '../EventsDebugger'
import intiSse from '../modules/sse/initSse'
import initBrowserDevTools from '../modules/browserDevTools/initBrowserDevTools'

// add our EventsListener, that listen for all the events
// we must define it here, to handle the ON_APP_INIT event
// For other plugins, the recommanded way is to addListener on the ON_APP_INIT event handler
EventManager.addListener(EventsDebugger.getListener())

const onAppInit = createEventListener(ReacticoonEvents.ON_APP_INIT, () => {
  if (__DEV__) {
    //
    //
    //

    initBrowserDevTools()

    //
    //
    //

    initConsoleCatcher()

    //
    // Plugins
    //
    console.groupCollapsed('[Reacticoon][Plugin][registered]')
    getPlugins().forEach(({ plugin, config }) => {
      console.groupCollapsed(`${plugin.name} ${plugin.description}`)
      console.log(`[config]`, getPluginConfig(plugin.name))
      console.groupEnd()
    })
    console.groupEnd('[Plugin][registered]')

    //
    // Event - events
    //
    console.groupCollapsed('[Reacticoon][Event][Events]')
    console.table(
      map(EventManager.getEvents(), ({ type, description }, name) => ({
        name,
        description,
        type,
      }))
    )
    console.groupEnd('[Reacticoon][Event][Events]')

    //
    // Event - handlers
    //
    console.groupCollapsed('[Reacticoon][Event][handlers]')
    forEach(EventManager.getListeners(), (listeners, event) => {
      console.groupCollapsed(`${event} (${listeners.length} handlers)`)
      console.info(listeners)
      console.groupEnd()
    })
    console.groupEnd('[Reacticoon][Event][handlers]')

    //
    // Modules
    //
    console.groupCollapsed('[Reacticoon][Module]')
    forEach(getModules(), module => {
      console.groupCollapsed(`${module.name}`)
      console.log(module)
      console.groupEnd()
    })
    console.groupEnd()

    //
    // Routes
    //
    console.groupCollapsed('[Reacticoon][Routing]')
    getRoutes().forEach(route => {
      console.groupCollapsed(`${route.definition.name}`)
      console.table(route.definition)
      console.info(route)
      console.groupEnd()
    })
    console.groupEnd()

    //
    // TODO:
    // - middlewares on appMiddleware ?
    // - entities ?
    //

    //
    // SSE
    //
    // TODO: uncomment
    // intiSse()
  }
})

export default onAppInit
