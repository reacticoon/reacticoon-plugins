import React from "react";

import Page from "reacticoon-plugin-dev/components/Page";
import Section from "reacticoon-plugin-dev/components/Section";
import FileTreeView from "reacticoon-plugin-dev/views/FileTreeView";

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
