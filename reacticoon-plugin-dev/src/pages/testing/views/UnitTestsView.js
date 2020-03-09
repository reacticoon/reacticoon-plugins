import React from 'react'

import { getProcessEnv } from 'reacticoon/environment'
import CommandContainer from 'reacticoon-plugin-dev/modules/command/view/CommandContainer'
import SseLogViewer from 'reacticoon-plugin-dev/modules/sse/view/SseLogViewer'
import LoadingButton from 'reacticoon-plugin-dev/components/LoadingButton'

const UnitTestsView = () => {
  const [isRunning, setRunning] = React.useState(false)
  return (
    <CommandContainer manualRun command="TESTS::UNIT::RUN">
      {({ runCommand: runUnitTest, data: unitTestData, isPending: unitTextDataisPending }) => (
        <CommandContainer
          manualRun
          command="READ_FILE"
          id={
            (unitTestData && unitTestData.junitUnitTestsReport) ||
            getProcessEnv('junitUnitTestsReportPath')
          }
          payload={{
            format: 'json', // transform xml to json
            filepath:
              (unitTestData && unitTestData.junitUnitTestsReport) ||
              getProcessEnv('junitUnitTestsReportPath'),
          }}
        >
          {({
            runCommand: getJunitUnitTestsReport,
            data: junitUnitTestsReport,
            isPending: junitUnitTestsReportisPending,
          }) => (
            <React.Fragment>
              {unitTestData && unitTestData.taskId && (
                <div style={{ marginBottom: 16 }}>
                  <SseLogViewer
                    eventName={unitTestData.sseEventName}
                    taskId={unitTestData.taskId}
                    onEnded={() => {
                      getJunitUnitTestsReport()
                      setRunning(true)
                    }}
                  />
                </div>
              )}

              <LoadingButton
                onClick={() => {
                  runUnitTest()
                  setRunning(true)
                }}
                isLoading={unitTextDataisPending || isRunning}
                loadingText="Running unit tests"
                variant="outlined"
              >
                Run unit tests
              </LoadingButton>

              <LoadingButton
                onClick={getJunitUnitTestsReport}
                isLoading={junitUnitTestsReportisPending}
                disabled={unitTextDataisPending || isRunning}
                variant="outlined"
                style={{
                  marginLeft: 16,
                }}
              >
                Display last unit tests results
              </LoadingButton>

              {junitUnitTestsReport && <pre>{JSON.stringify(junitUnitTestsReport, null, 2)}</pre>}
            </React.Fragment>
          )}
        </CommandContainer>
      )}
    </CommandContainer>
  )
}

export default UnitTestsView
