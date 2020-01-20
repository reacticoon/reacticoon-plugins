import React from "react";

import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import Page from "../../components/Page";
import Section from "../../components/Section";
import UnitTestsView from "./views/UnitTestsView";
import CoverageTestsView from "./views/CoverageTestsView";
import IntegrationTestsView from "./views/IntegrationTestsView";
import AllureReportView from "./views/AllureReportView";

class TestingDashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle={`Testing`}>
        <Section.Container>
          <Section title="Unit tests">
            <UnitTestsView />
          </Section>

          <Section title="Coverage">
            <CoverageTestsView />
          </Section>

          <Section title="Integration tests">
            <IntegrationTestsView />
          </Section>

          <Section title="Allure report">
            <AllureReportView />
          </Section>

          <Section title=".vscode/launch.json">
            Vscode extension: https://github.com/jest-community/vscode-jest
            <br />
            <br />
            <br />
            <br />
            <CommandContainer
              command="READ_FILE"
              id="vscode/launch.template.json"
              payload={{
                // TODO:
                filepath:
                  "/home/loic/dev/reacticoon/create-reacticoon-app/cli-test-utils/vscode/launch.template.json"
              }}
            >
              {({ data }) => data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </CommandContainer>
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default TestingDashboardPage;
