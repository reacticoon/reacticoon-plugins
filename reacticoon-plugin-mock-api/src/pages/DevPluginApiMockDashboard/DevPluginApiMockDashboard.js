import React from "react";

import Page from "reacticoon-plugins/reacticoon-plugin-dev/src/components/Page";
import Section from "reacticoon-plugins/reacticoon-plugin-dev/src/components/Section";
import FileTreeView from "reacticoon-plugins/reacticoon-plugin-dev/src/views/FileTreeView";

class DevPluginApiMockDashboard extends React.Component {
  render() {
    return (
      <Page pageTitle="Api mock dashboard">
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
