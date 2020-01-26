import React from "react";

import { getProcessEnv } from "reacticoon/environment";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import SseLogViewer from "reacticoon-plugin-dev/modules/sse/view/SseLogViewer";
import LoadingButton from "reacticoon-plugin-dev/components/LoadingButton";

const CoverageTestsView = () => {
  const [isRunning, setRunning] = React.useState(false);
  return (
    <CommandContainer manualRun command="TESTS::COVERAGE::RUN">
      {({
        runCommand: runCoverageTest,
        isFetching: coverageTestDataIsFetching,
        data: coverageTestData
      }) => (
        <CommandContainer
          manualRun
          command="READ_LOCAL_WEBSITE"
          id={getProcessEnv("junitCoverageTestsReportPath")}
          payload={{
            filepath: getProcessEnv("junitCoverageTestsReportPath")
          }}
        >
          {({
            runCommand: getJunitCoverageTestsReport,
            data: junitCoverageTestsReport,
            isFetching: junitCoverageTestsReportIsFetching
          }) => (
            <React.Fragment>
              {coverageTestData && coverageTestData.taskId && (
                <div style={{ marginBottom: 16 }}>
                  <SseLogViewer
                    eventName={coverageTestData.sseEventName}
                    taskId={coverageTestData.taskId}
                    onEnded={() => {
                      getJunitCoverageTestsReport();
                      setRunning(false);
                    }}
                  />
                </div>
              )}

              <LoadingButton
                isLoading={coverageTestDataIsFetching || isRunning}
                loadingText="Running coverage tests"
                onClick={() => {
                  runCoverageTest();
                  setRunning(true);
                }}
                variant="outlined"
              >
                Run coverage tests
              </LoadingButton>

              <LoadingButton
                isLoading={junitCoverageTestsReportIsFetching}
                disabled={coverageTestDataIsFetching || isRunning}
                loadingText="Retrieving last coverage tests results"
                onClick={getJunitCoverageTestsReport}
                variant="outlined"
                style={{
                  marginLeft: 16
                }}
              >
                Display last coverage tests results
              </LoadingButton>

              {junitCoverageTestsReport && (
                <iframe
                  src={junitCoverageTestsReport.url}
                  style={{
                    width: "100%",
                    height: "500px"
                  }}
                />
              )}
            </React.Fragment>
          )}
        </CommandContainer>
      )}
    </CommandContainer>
  );
};

export default CoverageTestsView;
