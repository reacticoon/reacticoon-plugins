import React from "react";

import "./github-markdown.css";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";

const MarkdownView = ({ filepath }) => (
  <CommandContainer command="READ_MARKDOWN_FILE" payload={{ filepath }}>
    {({ data }) => (
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: data }}
      />
    )}
  </CommandContainer>
);

export default MarkdownView;
