import React from "react";

import Page from "reacticoon-plugin-dev/components/Page";
import Section from "reacticoon-plugin-dev/components/Section";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import BuildContainer from "reacticoon-plugin-dev/components/BuildContainer";
import Button from "@material-ui/core/Button";

class ReacticoonPluginLighthouse__DashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Lighthouse">
        <Section.Container>
          <Section title="Report">
            <BuildContainer>
              {/* TODO: allow to run on builded not dev env */}
              <CommandContainer manualRun command="LIGHTHOUSE::REPORT">
                {({ data, runCommand }) =>
                  !data ? (
                    <Button onClick={runCommand}>Run lighthouse report</Button>
                  ) : (
                    <React.Fragment>
                      {/* TODO: iframe this */}
                      {/* <div
                      dangerouslySetInnerHTML={{
                        __html: data.htmlContent
                      }}
                    /> */}
                      <pre>{JSON.stringify(data.jsonContent, null, 2)}</pre>
                    </React.Fragment>
                  )
                }
              </CommandContainer>
            </BuildContainer>
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default ReacticoonPluginLighthouse__DashboardPage;
