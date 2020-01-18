import React from "react";

import Page from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Page";
import Section from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Section";
import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import Button from "@material-ui/core/Button";

class ReacticoonPluginLighthouse__DashboardPage extends React.Component {
  render() {
    return (
      <Page title="Lighthouse">
        {/* TODO: allow to run on builded not dev env */}
        <CommandContainer manualRun command="LIGHTHOUSE::REPORT">
          {({ data, runCommand }) => (
            <Section.Container>
              <Section title="Report">
                {!data ? (
                  <Button onClick={runCommand}>Run lighthouse report</Button>
                ) : (
                  <pre>{JSON.stringify(data.jsonContent, null, 2)}</pre>
                )}
              </Section>
            </Section.Container>
          )}
        </CommandContainer>
      </Page>
    );
  }
}

export default ReacticoonPluginLighthouse__DashboardPage;
