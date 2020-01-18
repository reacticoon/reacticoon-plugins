import React from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import RoutesTable from "./views/RoutesTable";

class PluginsPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Routes">
        <Section.Container>
          <Section title="Routes">
            <RoutesTable />
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default PluginsPage;
