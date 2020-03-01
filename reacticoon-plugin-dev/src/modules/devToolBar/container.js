import React, { Component } from 'react'

import { DevToolbarRoute } from './constants'
import ReacticoonDevToolbarModule from './index'

class DevToolbarContainer extends Component {
  render() {
    const { children, ...otherProps } = this.props

    return children({
      ...otherProps,
      DevToolbarRoute,
      // TODO: remove after tests
      // route: DevToolbarRoute.infos
    })
  }
}

export default ReacticoonDevToolbarModule.connect(
  {
    route: 'getRoute',
  },
  'displayDevToolbarRoute'
)(DevToolbarContainer)
