import React from "react";

import { getProjectSrcPath } from "reacticoon/environment";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import Button from "@material-ui/core/Button";

const LaunchEditorButton = ({ src, label, ...otherProps }) => (
  <CommandContainer
    manualRun
    command="DEV_TOOLS::LAUNCH_EDITOR"
    payload={{
      fileName: src[0] === "/" ? src : `${getProjectSrcPath()}/${src}`
    }}
  >
    {({ runCommand }) => (
      <Button onClick={runCommand} {...otherProps}>
        {label || "Open"}
      </Button>
    )}
  </CommandContainer>
);

export default LaunchEditorButton;
