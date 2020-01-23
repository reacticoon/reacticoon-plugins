import React from "react";

import Section from "reacticoon-plugin-dev/components/Section";
import { StateContainer } from "reacticoon/view";
import { getEntries } from "reacticoon/performance";
import Button from "@material-ui/core/Button";

const Performance = () => (
  <Section.Container>
    <Section>
      <StateContainer defaultState={{ data: null }}>
        {({ state, setState }) => (
          <div>
            <Button
              onClick={() => {
                setState({
                  data: getEntries()
                });
              }}
            >
              Display
            </Button>
            <pre>{state.data && JSON.stringify(state.data, null, 2)}</pre>
          </div>
        )}
      </StateContainer>
    </Section>
  </Section.Container>
);

export default Performance;
