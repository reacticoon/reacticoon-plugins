import React from 'react'

import Page from 'reacticoon-plugin-dev/components/Page'
import Section from 'reacticoon-plugin-dev/components/Section'
import CommandContainer from 'reacticoon-plugin-dev/modules/command/view/CommandContainer'
import CiRepositoryView from './views/CiRepositoryView'
import BuildView from './views/BuildView'
import ProjectState from './views/ProjectState'

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

        {/* 
          Display only when working on reacticoon or a reacticoon plugin. 
          The end user does not need those. 
        */}
        {FEATURE_REACTICOON_DEV_MODE && (
          <React.Fragment>
            <CommandContainer
              id="reacticoon"
              command="CI::REPOSITORY::INFOS"
              payload={{
                ownerName: 'reacticoon',
                repoName: 'reacticoon',
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
                      ownerName={'reacticoon'}
                      repoName={'reacticoon'}
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
                ownerName: 'reacticoon',
                repoName: 'create-reacticoon-app',
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
                      ownerName={'reacticoon'}
                      repoName={'create-reacticoon-app'}
                    />
                  </Section>
                </Section.Container>
              )}
            </CommandContainer>
          </React.Fragment>
        )}
      </Page>
    )
  }
}

export default ReacticoonPluginCi__DashboardPage
