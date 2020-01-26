import React from "react";

import LoadingButton from "reacticoon-plugin-dev/components/LoadingButton";
import { Link } from "reacticoon/routing";
import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import SseLogViewer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/sse/view/SseLogViewer";
import MessageBlock from "reacticoon-plugin-dev/components/MessageBlock";

const BuildInfo = ({ buildInfo }) => (
  <div>
    <MessageBlock.Info>
      <div>
        Your last build has been made {buildInfo.builtAtDiffFormatted} (
        {buildInfo.builtAtFormatted})
        <br />
        Build id: {buildInfo.hash}
      </div>
    </MessageBlock.Info>
    <div>
      <CommandContainer manualRun command="BUILD::SERVER">
        {({ runCommand, data, isFetching }) =>
          data ? (
            <MessageBlock.Info>
              <div>
                Server is running:
                <br />
                Local server:{" "}
                <Link href={data.localAddress} newTab>
                  {data.localAddress}
                </Link>
                <br />
                Local network:{" "}
                <Link href={data.networkAddress} newTab>
                  {data.networkAddress}
                </Link>
              </div>
            </MessageBlock.Info>
          ) : (
            <LoadingButton
              isLoading={isFetching}
              onClick={runCommand}
              variant="outlined"
              style={{ marginTop: 16 }}
            >
              Run server for your build
            </LoadingButton>
          )
        }
      </CommandContainer>
    </div>
  </div>
);

const BuildInfoView = () => {
  const [isBuilding, setIsBuilding] = React.useState(false);

  return (
    <CommandContainer command="BUILD::INFO">
      {({ data }) => (
        <div>
          {data.hasBuild ? (
            <BuildInfo buildInfo={data.buildInfo} />
          ) : (
            <MessageBlock.Warning>
              You do not have any build yet
            </MessageBlock.Warning>
          )}

          <div>
            <CommandContainer manualRun command="BUILD::BUILD">
              {({ runCommand, data, isFetching }) => (
                <React.Fragment>
                  {data && data.taskId && (
                    <div style={{ marginTop: 16 }}>
                      <SseLogViewer
                        eventName={data.sseEventName}
                        taskId={data.taskId}
                        onEnded={() => setIsBuilding(false)}
                      />
                    </div>
                  )}

                  <LoadingButton
                    onClick={() => {
                      runCommand();
                      setIsBuilding(true);
                    }}
                    isLoading={isFetching || isBuilding}
                    variant="outlined"
                    style={{ marginTop: 16 }}
                    loadingText="Building the project"
                  >
                    Build the project
                  </LoadingButton>
                </React.Fragment>
              )}
            </CommandContainer>
          </div>
        </div>
      )}
    </CommandContainer>
  );
};

export default BuildInfoView;
