import React from "react";

import Page from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Page";
import Section from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Section";
import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import CiRepositoryView from "./views/CiRepositoryView";
import BuildView from "./views/BuildView";
import ProjectState from "./views/ProjectState";

class ReacticoonPluginCi__DashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Continuous integration">
        <CommandContainer command="CI::PROJECT::STATE">
          {({ data }) => (
            <Section.Container>
              <Section title="Project Ci">
                <ProjectState projectState={data} />
              </Section>
            </Section.Container>
          )}
        </CommandContainer>

        <CommandContainer
          id="reacticoon"
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
                <BuildView
                  buildId={data.repo.lastBuildId}
                  ownerName={"reacticoon"}
                  repoName={"reacticoon"}
                />
              </Section>
            </Section.Container>
          )}
        </CommandContainer>

        {/*  */}
        <CommandContainer
          id="create-reacticoon-app"
          command="CI::REPOSITORY::INFOS"
          payload={{
            ownerName: "reacticoon",
            repoName: "create-reacticoon-app"
          }}
        >
          {({ data }) => (
            <Section.Container>
              <Section title="create-reacticoon-app CI data">
                <CiRepositoryView data={data} />
              </Section>

              <Section title="create-reacticoon-app last build">
                <BuildView
                  buildId={data.repo.lastBuildId}
                  ownerName={"reacticoon"}
                  repoName={"create-reacticoon-app"}
                />
              </Section>
            </Section.Container>
          )}
        </CommandContainer>
      </Page>
    );
  }
}

export default ReacticoonPluginCi__DashboardPage;
