import React from "react";

import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";

const ReadmeView = ({ plugin }) => (
  <CommandContainer
    command="READ_MARKDOWN_FILE"
    payload={{ filepath: plugin.readmePath }}
  >
    {({ data }) => <div dangerouslySetInnerHTML={{ __html: data }} />}
  </CommandContainer>
);

export default ReadmeView;
