import React from "react";

import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";

const ProjectState = ({ projectState }) => (
  <div>
    {/* <pre>{JSON.stringify(projectState, null, 2)}</pre> */}

    {!projectState.hasCi && (
      <div>
        No ci found. Do you want to initiate travis CI ? TODO: with
        CommandContainer create ci config for project
      </div>
    )}

    {projectState.hasCi && (
      <div>
        <h3>Type</h3>
        <p>Type: {projectState.ciType}</p>

        <h3>Raw configuration</h3>
        <pre>{projectState.rawConfiguration}</pre>
      </div>
    )}
  </div>
);

export default ProjectState;
