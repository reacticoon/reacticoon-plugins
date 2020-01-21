import React from "react";

import Button from "@material-ui/core/Button";
import { Link } from "reacticoon/routing";
import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import SseLogViewer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/sse/view/SseLogViewer";

const BuildInfo = ({ buildInfo }) => (
  <div>
    <div>Your last build has been made the {buildInfo.builtAtFormatted}</div>
    <div>Build id: {buildInfo.hash}</div>
    <div>
      <CommandContainer manualRun command="BUILD::SERVER">
        {({ runCommand, data }) =>
          data ? (
            <div>
              Server is running:
              <br />
              <br />
              Local server:{" "}
              <Link href={data.localAddress} newTab>
                {data.localAddress}
              </Link>
              <br />
              <br />
              Local network:{" "}
              <Link href={data.networkAddress} newTab>
                {data.networkAddress}
              </Link>
            </div>
          ) : (
            <Button onClick={runCommand}>Run server for your build</Button>
          )
        }
      </CommandContainer>
    </div>
  </div>
);

const BuildInfoView = () => (
  <CommandContainer command="BUILD::INFO">
    {({ data }) => (
      <div>
        {data.hasBuild ? (
          <BuildInfo buildInfo={data.buildInfo} />
        ) : (
          <p>You do not have any build yet</p>
        )}

        <div>
          <CommandContainer manualRun command="BUILD::BUILD">
            {({ runCommand, data }) => (
              <React.Fragment>
                {data && data.taskId ? (
                  <SseLogViewer
                    eventName={data.sseEventName}
                    taskId={data.taskId}
                  />
                ) : (
                  <Button onClick={runCommand}>Build the project</Button>
                )}
              </React.Fragment>
            )}
          </CommandContainer>
        </div>
      </div>
    )}
  </CommandContainer>
);

export default BuildInfoView;
