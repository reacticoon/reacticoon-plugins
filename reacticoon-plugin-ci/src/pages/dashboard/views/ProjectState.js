import React from "react";

import CreateCiConfigurationView from "./CreateCiConfigurationView";

const ProjectState = ({ projectState }) => (
  <div>
    {/* <pre>{JSON.stringify(projectState, null, 2)}</pre> */}

    {!projectState.hasCi && <CreateCiConfigurationView />}

    {projectState.hasCi && (
      <div>
        <div>
          <h3>Type</h3>
          <p>Type: {projectState.ciType}</p>

          <h3>Raw configuration</h3>
          <pre>{projectState.rawConfiguration}</pre>
        </div>

        <div>

        </div>
      </div>
    )}
  </div>
);

export default ProjectState;
