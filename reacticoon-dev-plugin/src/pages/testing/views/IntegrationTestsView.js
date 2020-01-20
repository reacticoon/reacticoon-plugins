import React from "react";

import { getProcessEnv } from "reacticoon/environment";
import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import SseLogViewer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/sse/view/SseLogViewer";
import Button from "@material-ui/core/Button";

const IntegrationTestsView = () => (
  <CommandContainer manualRun command="TESTS::INTEGRATION::RUN">
    {({ runCommand: runIntegrationTest, data: integrationTestData }) => (
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
          data: junitIntegrationTestsReport
        }) => (
          <React.Fragment>
            {integrationTestData && integrationTestData.taskId ? (
              <SseLogViewer
                eventName={integrationTestData.sseEventName}
                taskId={integrationTestData.taskId}
                onEnded={getJunitIntegrationTestsReport}
              />
            ) : (
              <Button onClick={runIntegrationTest}>
                Run integration tests
              </Button>
            )}

            <Button onClick={getJunitIntegrationTestsReport}>
              Display last integration tests results
            </Button>

            {junitIntegrationTestsReport && (
              <pre>{JSON.stringify(junitIntegrationTestsReport, null, 2)}</pre>
            )}
          </React.Fragment>
        )}
      </CommandContainer>
    )}
  </CommandContainer>
);

export default IntegrationTestsView;
