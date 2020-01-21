import React from "react";

import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import { formatPluginIdentity } from "../format";

const PluginContainer = ({ pluginName, children }) => (
  <CommandContainer
    command="PLUGINS::VIEW::IDENTITY"
    payload={{
      pluginName
    }}
    formatter={formatPluginIdentity}
  >
    {({ data }) =>
      data &&
      children({
        plugins: data
      })
    }
  </CommandContainer>
);
export default PluginContainer;
