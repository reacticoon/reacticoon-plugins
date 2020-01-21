import React from "react";

import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import Button from "@material-ui/core/Button";

const AllureReportView = () => (
  <CommandContainer
    manualRun
    command="TESTS::ALLURE::SERVER"
    id={"allure-report"}
  >
    {({ runCommand, data }) => (
      <React.Fragment>
        <Button onClick={runCommand}>Display ALLURE report view</Button>

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
