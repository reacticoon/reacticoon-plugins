import React from "react";

import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";

const DependencyContainer = ({ dependencyName, children }) => (
  <CommandContainer
    id={`DEPENDENCIES::VIEW::DETAIL${dependencyName}`}
    command="DEPENDENCIES::VIEW::DETAIL"
    payload={{
      dependencyName
    }}
  >
    {({ data }) =>
      data &&
      children({
        dependencyData: data
      })
    }
  </CommandContainer>
);

export default DependencyContainer;
