import React from "react";

import isFunction from "lodash/isFunction";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import SseLogViewer from "reacticoon-plugin-dev/modules/sse/view/SseLogViewer";
import MessageBlock from "reacticoon-plugin-dev/components/MessageBlock";
import LoadingButton from "reacticoon-plugin-dev/components/LoadingButton";

const BuildView = ({ buildData, isBuilded: isBuildedProp, children }) => {
  const [isBuilding, setIsBuilding] = React.useState(false);
  const [isBuilded, setIsBuilded] = React.useState(isBuildedProp);

  const MessageBlockView = isBuilded ? MessageBlock.Info : MessageBlock.Warning;

  return (
    <div>
      <CommandContainer manualRun command="BUILD::BUILD">
        {({ runCommand, data }) => (
          <React.Fragment>
            {data && data.taskId && isBuilding && (
              <div style={{ marginTop: 16 }}>
                <SseLogViewer
                  eventName={data.sseEventName}
                  taskId={data.taskId}
                  onEnded={() => {
                    setIsBuilding(false);
                    setIsBuilded(true);
                    // TODO: notify (browser notification + event)
                  }}
                />
              </div>
            )}

            <MessageBlockView>
              {isBuilded ? (
                isBuilding ? (
                  <span>Building the project</span>
                ) : (
                  <span>
                    Your last build has been made{" "}
                    {buildData.buildInfo.builtAtDiffFormatted} (
                    {buildData.buildInfo.builtAtFormatted})
                  </span>
                )
              ) : (
                <span>
                  No build found. You can use `yarn reacticoon build` or the
                  button bellow
                </span>
              )}

              <LoadingButton
                isLoading={isBuilding}
                loadingText="Building"
                onClick={() => {
                  runCommand();
                  setIsBuilding(true);
                }}
                variant="outlined"
                size="small"
              >
                Build the project
              </LoadingButton>
            </MessageBlockView>
          </React.Fragment>
        )}
      </CommandContainer>

      <div style={{ marginTop: 16 }}>
        {isBuilding ? null : isBuilded ? (
          isFunction(children) ? (
            children(isBuilded)
          ) : (
            children
          )
        ) : (
          <MessageBlock.Info>
            This action requires your project to be builded.
          </MessageBlock.Info>
        )}
      </div>
    </div>
  );
};

const Builded = ({ buildData, children }) => (
  <BuildView buildData={buildData} isBuilded>
    {children}
  </BuildView>
);

const NotBuilded = ({ children }) => (
  <BuildView isBuilded={false}>
    {() => (
      <CommandContainer command="BUILD::INFO">
        {({ data }) => data && <Builded buildData={data}>{children}</Builded>}
      </CommandContainer>
    )}
  </BuildView>
);

const BuildContainer = ({ children }) => (
  <CommandContainer command="BUILD::INFO">
    {({ data }) =>
      data && (
        <div>
          {!data.hasBuild ? (
            <NotBuilded>{children}</NotBuilded>
          ) : (
            <Builded buildData={data}>{children}</Builded>
          )}
        </div>
      )
    }
  </CommandContainer>
);

export default BuildContainer;
