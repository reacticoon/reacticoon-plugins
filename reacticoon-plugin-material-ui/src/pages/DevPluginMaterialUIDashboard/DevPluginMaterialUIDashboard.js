import React from "react";

import JsonView from "reacticoon-plugins/reacticoon-plugin-dev/src/components/JsonView";
import { getPluginConfig } from "reacticoon/plugin";
import getTheme from "../../utils/getTheme";
import Page from "reacticoon-plugins/reacticoon-plugin-dev/src/components/Page";
import Section from "reacticoon-plugins/reacticoon-plugin-dev/src/components/Section";

class DevPluginMaterialUIDashboard extends React.Component {
  render() {
    const appTheme = getPluginConfig("reacticoon-plugin-material-ui").theme;

    return (
      <Page pageTitle="Material UI">
        <Section.Container>
          <Section title="Info">
            <div>
              <div>MaterialUI version TODO</div>
              <div>
                <a
                  href="https://material-ui.com/components/material-icons/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://material-ui.com/components/material-icons/
                </a>
              </div>
              <div>
                <a
                  href="https://material-ui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://material-ui.com/
                </a>
              </div>
              <div>
                <a
                  href="https://material.io/tools/icons/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Icons
                </a>
              </div>
            </div>
          </Section>
          <Section title="App theme" grid={{ sm: 6 }}>
            <JsonView json={appTheme} />
          </Section>
          <Section title="Theme" grid={{ sm: 6 }}>
            <JsonView json={getTheme()} />
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default DevPluginMaterialUIDashboard;
