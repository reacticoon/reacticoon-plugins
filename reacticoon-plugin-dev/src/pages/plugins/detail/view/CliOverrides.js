import React from "react";

import Typography from "@material-ui/core/Typography";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import LaunchEditorButton from "reacticoon-plugin-dev/components/LaunchEditorButton";
import LoadingButton from "reacticoon-plugin-dev/components/LoadingButton";
import Pre from "reacticoon-plugin-dev/components/Pre";

const CliOverride = ({ overridesData }) =>
  !overridesData.hasOverrides ? (
    <Typography>No override for this plugin.</Typography>
  ) : (
    <div>
      <LaunchEditorButton
        src={overridesData.filepath}
        label="Open overrides code on your IDE"
        variant="outlined"
      />

      <CommandContainer
        manualRun
        command="READ_FILE"
        id={"cli_plugin_overrides"}
        payload={{
          filepath: overridesData.filepath
        }}
      >
        {({ runCommand, data, isFetching }) => (
          <div style={{ marginTop: 16 }}>
            <LoadingButton
              onClick={runCommand}
              isLoading={isFetching}
              loadingText="Fetching override code"
              variant="outlined"
              size="small"
            >
              Display override code
            </LoadingButton>

            {data && <Pre code={data} type="js" style={{ marginTop: 16 }} />}
          </div>
        )}
      </CommandContainer>
    </div>
  );

export default CliOverride;
