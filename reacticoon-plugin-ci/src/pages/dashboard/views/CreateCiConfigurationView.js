import React from "react";

import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CreateCiConfigurationView = () => (
  <div>
    <Typography>No ci found. Do you want to initiate travis CI ?</Typography>
    <CommandContainer
      command="CI::PROJECT::INITIATE"
      payload={{ ciType: "travis" }}
      manualRun
    >
      {({ runCommand }) => (
        <Button onClick={runCommand}>Initiate Travis CI.</Button>
      )}
    </CommandContainer>
  </div>
);

export default CreateCiConfigurationView;
