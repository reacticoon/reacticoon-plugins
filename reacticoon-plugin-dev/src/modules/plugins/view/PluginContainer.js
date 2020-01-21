import React from "react";

import CommandContainer from "reacticoon-plugins/reacticoon-plugin-dev/src/modules/command/view/CommandContainer";
import { formatPluginIdentity } from "../format";

const PluginContainer = ({ pluginName, children }) => (
  <CommandContainer
    id={`PLUGINS::VIEW::IDENTITY_${pluginName}`}
    command="PLUGINS::VIEW::IDENTITY"
    payload={{
      pluginName
    }}
    formatter={formatPluginIdentity}
  >
    {({ data }) =>
      data &&
      children({
        pluginData: data
      })
    }
  </CommandContainer>
);

export default PluginContainer;
