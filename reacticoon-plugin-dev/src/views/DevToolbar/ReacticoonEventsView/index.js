import React from "react";

import { StateContainer } from "reacticoon/view";
// import EventsDebugger from '../../../EventsDebugger'

import Section from "reacticoon-plugin-dev/components/Section";
import EventsContainer from "../../../modules/events/container";
import ReacticoonEventRunner from "./ReacticoonEventRunner";
import Event from "./Event";
import EventDetail from "./EventDetail";

const ReacticoonEventsView = () => (
  <StateContainer defaultState={{ selectedEvent: null }}>
    {({ state, setState }) => (
      <Section.Container>
        <Section item xs={12}>
          <ReacticoonEventRunner />
        </Section>
        <Section item xs={6}>
          <EventsContainer>
            {({ events }) =>
              events.map((event, index) => (
                <Event
                  key={index}
                  event={event}
                  onClick={() =>
                    setState({
                      selectedEvent: event
                    })
                  }
                />
              ))
            }
          </EventsContainer>
          {/* {EventsDebugger.getEvents()} */}
        </Section>
        <Section item xs={6}>
          {state.selectedEvent && <EventDetail event={state.selectedEvent} />}
        </Section>
      </Section.Container>
    )}
  </StateContainer>
);

export default ReacticoonEventsView;
