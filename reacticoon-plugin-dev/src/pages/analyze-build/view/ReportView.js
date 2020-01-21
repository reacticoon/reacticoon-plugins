import React from "react";

import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import BuildReport from "./BuildReport";
import BuildContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/components/BuildContainer";

const ReportView = () => (
  <BuildContainer>
    <CommandContainer command="ANALYZE_BUILD">
      {({ data: report }) => <BuildReport report={report} />}
    </CommandContainer>
  </BuildContainer>
);

export default ReportView;
