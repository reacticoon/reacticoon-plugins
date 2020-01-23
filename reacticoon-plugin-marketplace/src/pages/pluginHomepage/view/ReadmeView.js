import React from "react";

import MarkdownView from "reacticoon-plugin-dev/components/MarkdownView";

const ReadmeView = ({ plugin }) => (
  <MarkdownView filepath={plugin.readmePath} />
);

export default ReadmeView;
