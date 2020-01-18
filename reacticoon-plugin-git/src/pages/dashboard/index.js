import React from "react";

import Page from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Page";
import Section from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Section";
import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import GitInfo from "./views/GitInfo";
import GitNotInitView from "./views/GitNotInitView";
import GitWebUI from "./views/GitWebUI";

class ReacticoonPluginGit__DashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Continuous integration">
        <CommandContainer command="GIT::GIT_INFO">
          {({ data }) =>
            !data.isGitInit ? (
              <GitNotInitView />
            ) : (
              <Section.Container>
                <Section title="Git info">
                  <GitInfo info={data} />
                </Section>

                <Section title="Web ui">
                  <GitWebUI />
                </Section>
              </Section.Container>
            )
          }
        </CommandContainer>
      </Page>
    );
  }
}

export default ReacticoonPluginGit__DashboardPage;
