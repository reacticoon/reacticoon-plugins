import React from "react";

import Page from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Page";
import Section from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Section";
import FileTreeView from "reacticoon-plugins/reacticoon-dev-plugin/src/views/FileTreeView";

class DevPluginApiMockDashboard extends React.Component {
  render() {
    return (
      <Page title="Api mock dashboard">
        <Section.Container>
          <Section title="Mocked files">
            <FileTreeView command="MOCKAPI::LIST_FILES" />
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default DevPluginApiMockDashboard;
