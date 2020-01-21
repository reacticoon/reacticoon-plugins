import React from "react";

import MarkdownView from "reacticoon-plugins/reacticoon-plugin-dev/src/components/MarkdownView";

const ReadmeView = ({ plugin }) => (
  <MarkdownView filepath={plugin.readmePath} />
);

export default ReadmeView;
