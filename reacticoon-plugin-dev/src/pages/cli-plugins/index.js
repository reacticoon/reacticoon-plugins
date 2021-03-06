import React from 'react'

import Page from '../../components/Page'

import Section from '../../components/Section'
import PluginsView from './view/PluginsView'

class CliPluginsPage extends React.Component {
  render() {
    return (
      <Page pageTitle={`Cli Plugins`}>
        <Section.Container>
          <Section title="About">
            This report is equivalant to running the command: `yarn reacticoon debug-plugins`
          </Section>

          <Section title="Cli plugins">
            <PluginsView />
          </Section>
        </Section.Container>
      </Page>
    )
  }
}

export default CliPluginsPage
