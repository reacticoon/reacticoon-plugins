import React from 'react'

import Page from 'reacticoon-plugin-dev/components/Page'
import Section from 'reacticoon-plugin-dev/components/Section'
import CommandContainer from 'reacticoon-plugin-dev/modules/command/view/CommandContainer'
import BuildContainer from 'reacticoon-plugin-dev/components/BuildContainer'
import LoadingButton from 'reacticoon-plugin-dev/components/LoadingButton'

class ReacticoonPluginLighthouse__DashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle="Lighthouse">
        <Section.Container>
          <Section title="Report">
            <BuildContainer>
              <CommandContainer manualRun command="LIGHTHOUSE::REPORT">
                {({ data, isPending, runCommand }) =>
                  !data ? (
                    <LoadingButton
                      isLoading={isPending}
                      onClick={runCommand}
                      variant="contained"
                      color="primary"
                    >
                      Run lighthouse report
                    </LoadingButton>
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
    )
  }
}

export default ReacticoonPluginLighthouse__DashboardPage
