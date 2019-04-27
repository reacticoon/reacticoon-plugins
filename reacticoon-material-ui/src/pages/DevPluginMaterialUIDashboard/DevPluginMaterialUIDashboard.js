import React from 'react'

import { getPluginConfig } from 'reacticoon/plugin'
import getTheme from '../../utils/getTheme'
import Page from 'reacticoon/reacticoon-dev-plugin/components/Page'
import Section from 'reacticoon/reacticoon-dev-plugin/components/Section'

class DevPluginMaterialUIDashboard extends React.Component {
  render() {
    const appTheme = getPluginConfig('ReacticoonMaterialUI').theme

    return (
      <Page title="Material UI">
        <Section.Container>
          <Section title="Info">
            <div>
              <div>MaterialUI version TODO</div>
              <div>
                <a href="https://material-ui.com/" target="_blank">
                  https://material-ui.com/
                </a>
              </div>
              <div>
                <a href="https://material.io/tools/icons/" target="_blank">
                  Icons
                </a>
              </div>
            </div>
          </Section>
          <Section title="App theme" grid={{ sm: 6 }}>
            <pre>{JSON.stringify(appTheme, null, 2)}</pre>
          </Section>
          <Section title="Theme" grid={{ sm: 6 }}>
            {/* TODO: use json view */}
            <pre>{JSON.stringify(getTheme(), null, 2)}</pre>
          </Section>
        </Section.Container>
      </Page>
    )
  }
}

export default DevPluginMaterialUIDashboard
