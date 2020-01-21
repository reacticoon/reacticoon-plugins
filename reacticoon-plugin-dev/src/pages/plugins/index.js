import React from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import ActivePlugins from "./view/ActivePlugins";

class PluginsPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Plugins">
        <Section.Container>
          <Section title="Active plugins">
            <ActivePlugins />
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default PluginsPage;
