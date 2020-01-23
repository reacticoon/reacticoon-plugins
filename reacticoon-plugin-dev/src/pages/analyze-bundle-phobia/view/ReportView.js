import React from "react";

import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import BundlePhobiaReport from "./BundlePhobiaReport";
import BuildContainer from "reacticoon-plugin-dev/components/BuildContainer";

const ReportView = () => (
  <BuildContainer>
    <CommandContainer command="BUNDLE_PHOBIA">
      {({ data: report }) => <BundlePhobiaReport report={report} />}
    </CommandContainer>
  </BuildContainer>
);

export default ReportView;
