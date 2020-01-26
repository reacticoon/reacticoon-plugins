import React from "react";

import { getProcessEnv } from "reacticoon/environment";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import SseLogViewer from "reacticoon-plugin-dev/modules/sse/view/SseLogViewer";
import LoadingButton from "reacticoon-plugin-dev/components/LoadingButton";

const IntegrationTestsView = () => {
  const [isRunning, setRunning] = React.useState(false);
  return (
    <CommandContainer manualRun command="TESTS::INTEGRATION::RUN">
      {({
        runCommand: runIntegrationTest,
        data: integrationTestData,
        isFetching: integrationTestDataIsFetching
      }) => (
        <CommandContainer
          manualRun
          command="READ_FILE"
          id={
            (integrationTestData &&
              integrationTestData.junitIntegrationTestsReport) ||
            getProcessEnv("junitIntegrationTestsReportPath")
          }
          payload={{
            format: "json", // transform xml to json
            filepath:
              (integrationTestData &&
                integrationTestData.junitIntegrationTestsReport) ||
              getProcessEnv("junitIntegrationTestsReportPath")
          }}
        >
          {({
            runCommand: getJunitIntegrationTestsReport,
            data: junitIntegrationTestsReport,
            isFetching: junitIntegrationTestsReportIsFetching
          }) => (
            <React.Fragment>
              {integrationTestData && integrationTestData.taskId && (
                <div style={{ marginBottom: 16 }}>
                  <SseLogViewer
                    eventName={integrationTestData.sseEventName}
                    taskId={integrationTestData.taskId}
                    onEnded={() => {
                      getJunitIntegrationTestsReport();
                      setRunning(false);
                    }}
                  />
                </div>
              )}

              <LoadingButton
                onClick={() => {
                  runIntegrationTest();
                  setRunning(true);
                }}
                isLoading={integrationTestDataIsFetching || isRunning}
                loadingText="Running integration tests"
                variant="outlined"
              >
                Run integration tests
              </LoadingButton>

              <LoadingButton
                onClick={getJunitIntegrationTestsReport}
                disabled={integrationTestDataIsFetching || isRunning}
                isLoading={junitIntegrationTestsReportIsFetching}
                loadingText="Retrieving last integration tests results"
                variant="outlined"
                style={{
                  marginLeft: 16
                }}
              >
                Display last integration tests results
              </LoadingButton>

              {junitIntegrationTestsReport && (
                <pre>
                  {JSON.stringify(junitIntegrationTestsReport, null, 2)}
                </pre>
              )}
            </React.Fragment>
          )}
        </CommandContainer>
      )}
    </CommandContainer>
  );
};

export default IntegrationTestsView;
