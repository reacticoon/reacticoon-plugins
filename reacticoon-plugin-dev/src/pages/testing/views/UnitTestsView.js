import React from "react";

import { getProcessEnv } from "reacticoon/environment";
import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import SseLogViewer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/sse/view/SseLogViewer";
import Button from "@material-ui/core/Button";

const UnitTestsView = () => (
  <CommandContainer manualRun command="TESTS::UNIT::RUN">
    {({ runCommand: runUnitTest, data: unitTestData }) => (
      <CommandContainer
        manualRun
        command="READ_FILE"
        id={
          (unitTestData && unitTestData.junitUnitTestsReport) ||
          getProcessEnv("junitUnitTestsReportPath")
        }
        payload={{
          format: "json", // transform xml to json
          filepath:
            (unitTestData && unitTestData.junitUnitTestsReport) ||
            getProcessEnv("junitUnitTestsReportPath")
        }}
      >
        {({
          runCommand: getJunitUnitTestsReport,
          data: junitUnitTestsReport
        }) => (
          <React.Fragment>
            {unitTestData && unitTestData.taskId ? (
              <SseLogViewer
                eventName={unitTestData.sseEventName}
                taskId={unitTestData.taskId}
                onEnded={getJunitUnitTestsReport}
              />
            ) : (
              <Button onClick={runUnitTest}>Run unit tests</Button>
            )}

            <Button onClick={getJunitUnitTestsReport}>
              Display last unit tests results
            </Button>

            {junitUnitTestsReport && (
              <pre>{JSON.stringify(junitUnitTestsReport, null, 2)}</pre>
            )}
          </React.Fragment>
        )}
      </CommandContainer>
    )}
  </CommandContainer>
);

export default UnitTestsView;
