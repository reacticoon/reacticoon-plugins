import React from "react";

import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";

const BuildContainer = ({ children }) => (
  <CommandContainer command="BUILD::INFO">
    {({ data }) =>
      data && (
        <div>
          {/* TODO: add tip about build / link to doc */}
          <p>This action requires your project to be builded.</p>

          {!data.hasBuild ? (
            <p>
              No build found. You can use the <code>yarn reacticoon build</code>{" "}
              command to build your app.
            </p>
          ) : (
            <div>
              <br />
              Your last build has been made the{" "}
              {data.buildInfo.builtAtFormatted}
              <br />
              <br />
              {children}
            </div>
          )}
        </div>
      )
    }
  </CommandContainer>
);

export default BuildContainer;
