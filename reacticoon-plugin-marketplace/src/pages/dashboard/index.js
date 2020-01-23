import React from "react";

import Page from "reacticoon-plugin-dev/components/Page";
import Section from "reacticoon-plugin-dev/components/Section";
import RegisteredFrontPlugins from "./views/RegisteredFrontPlugins";
import RegisteredCliPlugins from "./views/RegisteredCliPlugins";

class ReacticoonPluginsMarketplacePlugin__DashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Marketplace">
        <Section.Container>
          <Section title="Info">
            <div>
              <div>Reacticoon plugins marketplace</div>
            </div>
          </Section>

          <Section title="Registered cli plugins">
            <RegisteredCliPlugins />
          </Section>

          <Section title="Registered front plugins">
            <RegisteredFrontPlugins />
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default ReacticoonPluginsMarketplacePlugin__DashboardPage;
