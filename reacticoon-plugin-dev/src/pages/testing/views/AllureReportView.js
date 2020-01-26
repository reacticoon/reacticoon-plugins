import React from "react";

import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import LoadingButton from "reacticoon-plugin-dev/components/LoadingButton";

const AllureReportView = () => (
  <CommandContainer
    manualRun
    command="TESTS::ALLURE::SERVER"
    id={"allure-report"}
  >
    {({ runCommand, isFetching, data }) => (
      <React.Fragment>
        <LoadingButton
          isLoading={isFetching}
          loadingText="Retrieving ALLURE report"
          variant="outlined"
          onClick={runCommand}
        >
          Display ALLURE report view
        </LoadingButton>

        {data && (
          <iframe
            src={data.networkAddress}
            style={{
              width: "100%",
              height: "500px"
            }}
          />
        )}
      </React.Fragment>
    )}
  </CommandContainer>
);

export default AllureReportView;
