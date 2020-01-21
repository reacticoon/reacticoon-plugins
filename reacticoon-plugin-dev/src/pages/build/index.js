import React from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import BuildInfoView from "./view/BuildInfoView";

class CheckupPage extends React.Component {
  render() {
    return (
      <Page pageTitle={`Build`}>
        <Section.Container>
          <Section>
            <BuildInfoView />
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default CheckupPage;
