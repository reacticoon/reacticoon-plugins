import React from "react";

import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import PluginsReport from "./PluginsReport";

const ReportView = () => (
  <CommandContainer command="PLUGINS">
    {({ data: report }) => <PluginsReport pluginsReport={report} />}
  </CommandContainer>
);

export default ReportView;
