import React from 'react'

import Page from 'reacticoon-plugin-dev/components/Page'
import Section from 'reacticoon-plugin-dev/components/Section'
import CommandContainer from 'reacticoon-plugin-dev/modules/command/view/CommandContainer'
import BuildContainer from 'reacticoon-plugin-dev/components/BuildContainer'
import LoadingButton from 'reacticoon-plugin-dev/components/LoadingButton'
import Pre from 'reacticoon-plugin-dev/components/Pre'

class ReacticoonPluginBundleStats__DashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Bundle stats">
        {/* TODO: allow to run on builded not dev env */}
        <Section.Container>
          <Section title="Report">
            <BuildContainer>
              <CommandContainer manualRun command="BUNDLE_STATS::REPORT">
                {({ data, runCommand, isPending }) => (
                  <React.Fragment>
                    <LoadingButton
                      isloading={isPending}
                      loadingText="Generating bundle stats report"
                      onClick={runCommand}
                      variant="outlined"
                    >
                      Run bundle stats report
                    </LoadingButton>

                    {data && (
                      <React.Fragment>
                        {/* TODO: iframe this */}
                        {/* <div
                      dangerouslySetInnerHTML={{
                        __html: data.htmlContent
                      }}
                    /> */}
                        <Pre content={data.jsonContent} />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </CommandContainer>
            </BuildContainer>
          </Section>
        </Section.Container>
      </Page>
    )
  }
}

export default ReacticoonPluginBundleStats__DashboardPage
