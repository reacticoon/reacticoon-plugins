import React from 'react'

import { StateContainer } from 'reacticoon/view'

import LogsView from 'reacticoon-plugin-dev/components/LogsView'
import Section from 'reacticoon-plugin-dev/components/Section'

const heightInVh = 80

const LogsViewPage = () => (
  <StateContainer defaultState={{ selected: null }}>
    {({ state, setState }) => (
      <Section.Container>
        <Section>
          <LogsView
            selected={state.selected}
            onSelect={event => setState({ selected: event })}
            heightInVh={heightInVh}
          />
        </Section>
      </Section.Container>
    )}
  </StateContainer>
)

export default LogsViewPage
