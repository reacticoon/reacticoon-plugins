import React from "react";

import Page from "reacticoon-plugins/reacticoon-plugin-dev/src/components/Page";
import Section from "reacticoon-plugins/reacticoon-plugin-dev/src/components/Section";
import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import BuildContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/components/BuildContainer";
import Button from "@material-ui/core/Button";

class ReacticoonPluginBundleStats__DashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Bundle stats">
        {/* TODO: allow to run on builded not dev env */}
        <Section.Container>
          <Section title="Report">
            <BuildContainer>
              <CommandContainer manualRun command="BUNDLE_STATS::REPORT">
                {({ data, runCommand }) =>
                  !data ? (
                    <Button onClick={runCommand}>
                      Run bundle stats report
                    </Button>
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

export default ReacticoonPluginBundleStats__DashboardPage;
