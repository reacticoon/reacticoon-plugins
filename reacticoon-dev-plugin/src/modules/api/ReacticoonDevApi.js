export const URL = 'http://localhost:9191'

const ReacticoonDevApi = {
  command: (command, options) => ({
    url: URL,
    endpoint: '/commands',
    type: 'POST',
    query: {
      ...options.queryParams,
      command // not used on server but allow use to differentiate the requests on the dev tools
    },
    body: {
      command: command, // 'CHECKUP', 'PLUGINS'
      payload: options.payload,
    },
  }),
}

export default ReacticoonDevApi
