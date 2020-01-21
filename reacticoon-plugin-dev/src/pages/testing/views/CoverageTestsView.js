import React from "react";

import { getProcessEnv } from "reacticoon/environment";
import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import SseLogViewer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/sse/view/SseLogViewer";
import Button from "@material-ui/core/Button";

const CoverageTestsView = () => (
  <CommandContainer manualRun command="TESTS::COVERAGE::RUN">
    {({ runCommand: runCoverageTest, data: coverageTestData }) => (
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
          data: junitCoverageTestsReport
        }) => (
          <React.Fragment>
            {coverageTestData && coverageTestData.taskId ? (
              <SseLogViewer
                eventName={coverageTestData.sseEventName}
                taskId={coverageTestData.taskId}
                onEnded={getJunitCoverageTestsReport}
              />
            ) : (
              <Button onClick={runCoverageTest}>Run coverage tests</Button>
            )}

            <Button onClick={getJunitCoverageTestsReport}>
              Display last coverage tests results
            </Button>

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

export default CoverageTestsView;
