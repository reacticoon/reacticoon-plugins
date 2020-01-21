import React from "react";

import { getPlugins } from "reacticoon/plugin";
import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import { formatPluginIdentiesList } from "../format";

const ActivePluginsContainer = ({ children }) => (
  <CommandContainer
    command="PLUGINS::VIEW::IDENTITY::LIST"
    payload={{
      pluginsNames: getPlugins().map(pluginData => pluginData.plugin.name)
    }}
    formatter={formatPluginIdentiesList}
  >
    {({ data }) =>
      data &&
      children({
        plugins: data
      })
    }
  </CommandContainer>
);
export default ActivePluginsContainer;
