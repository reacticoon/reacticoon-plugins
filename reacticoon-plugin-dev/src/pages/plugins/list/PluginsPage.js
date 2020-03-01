import React from 'react'

import Page from 'reacticoon-plugin-dev/components/Page'
import ButtonLink from 'reacticoon-plugin-dev/components/ButtonLink'
import AddIcon from '@material-ui/icons/Add'
import Section from 'reacticoon-plugin-dev/components/Section'
import ActivePlugins from './view/ActivePlugins'
import ActiveCliPlugins from './view/ActiveCliPlugins'

class PluginsPage extends React.Component {
  render() {
    return (
      <Page
        pageTitle="Plugins"
        pageAction={
          <ButtonLink to="REACTICOON_PLUGIN_SEARCH" size="small" color="secondary">
            <AddIcon /> Install plugin
          </ButtonLink>
        }
      >
        <Section.Container>
          <Section title="Active plugins">
            <ActivePlugins />
          </Section>

          <Section title="CLI plugins">
            <ActiveCliPlugins />
          </Section>
        </Section.Container>
      </Page>
    )
  }
}

export default PluginsPage
