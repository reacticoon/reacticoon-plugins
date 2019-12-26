import React from "react";

import Page from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Page";
import Section from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Section";
import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import CiRepositoryView from "./views/CiRepositoryView";
import BuildView from "./views/BuildView";

class ReacticoonPluginCi__DashboardPage extends React.Component {
  render() {
    return (
      <Page title="Continuous integration">
        <CommandContainer
          command="CI::REPOSITORY::INFOS"
          payload={{
            ownerName: "reacticoon",
            repoName: "reacticoon"
          }}
        >
          {({ data }) => (
            <Section.Container>
              <Section title="Reacticoon CI data">
                <CiRepositoryView data={data} />
              </Section>

              <Section title="Reacticoon last build">
                <BuildView buildId={data.repo.lastBuildId} />
              </Section>
            </Section.Container>
          )}
        </CommandContainer>
      </Page>
    );
  }
}

export default ReacticoonPluginCi__DashboardPage;
