import React from "react";
import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";

const GitWebUI = () => (
  <div>
    <CommandContainer command="GIT::WEB_UI::START">
      {({ data }) => (
        <iframe
          src={data.url}
          style={{
            width: "100%",
            minHeight: 1200
          }}
        ></iframe>
      )}
    </CommandContainer>
  </div>
);

export default GitWebUI;
