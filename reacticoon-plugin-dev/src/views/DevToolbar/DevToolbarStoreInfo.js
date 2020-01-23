import React from "react";

import get from "lodash/get";

import { getStore } from "reacticoon/store";
import { StateContainer } from "reacticoon/view";

import Section from "reacticoon-plugin-dev/components/Section";
import JsonView from "reacticoon-plugin-dev/components/JsonView";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const DevToolbarStoreInfo = () => (
  <Section.Container>
    <Section xs={6}>
      <pre style={{ overflow: "scroll", height: "80vh", width: "40vw" }}>
        <JsonView json={getStore().getState()} />
      </pre>
    </Section>

    <Section item xs={6}>
      <StateContainer
        defaultState={{ input: `App::CircleModule`, followed: [] }}
      >
        {({ state, setState }) => (
          <div>
            <TextField
              value={state.input}
              onChange={e => setState({ input: e.target.value })}
            />

            <Button
              onClick={() =>
                setState({
                  followed: [
                    ...state.followed,
                    {
                      path: state.input
                    }
                  ]
                })
              }
            >
              Follow this path
            </Button>

            <div>
              {state.followed.map(follow => (
                <div>
                  <div>{follow.path}</div>

                  <JsonView json={get(getStore().getState(), follow.path)} />
                </div>
              ))}
            </div>
          </div>
        )}
      </StateContainer>
    </Section>
  </Section.Container>
);

export default DevToolbarStoreInfo;
