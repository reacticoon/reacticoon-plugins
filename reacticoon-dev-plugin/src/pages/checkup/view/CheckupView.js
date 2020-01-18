import React from "react";

import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import CheckupReport from "./CheckupReport";

const ReportView = () => (
  <CommandContainer command="CHECKUP">
    {({ data: report }) => <CheckupReport report={report} />}
  </CommandContainer>
);

export default ReportView;
