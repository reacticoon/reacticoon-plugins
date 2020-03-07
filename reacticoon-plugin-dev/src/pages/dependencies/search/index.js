import React from 'react'

import Page from 'reacticoon-plugin-dev/components/Page'
import View from './View'

class DependencySearchPage extends React.Component {
  render() {
    const props = this.props

    return (
      <Page pageTitle={`Install dependency`}>
        <View />
      </Page>
    )
  }
}

export default DependencySearchPage
