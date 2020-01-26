import React from "react";

import ActivePluginsContainer from "reacticoon-plugin-dev/modules/plugins/view/ActivePluginsContainer";
import PluginRow from "./PluginRow";

const ActivePlugins = () => (
  <ActivePluginsContainer>
    {({ plugins }) =>
      plugins.map((pluginData, index) => (
        <PluginRow key={index} pluginData={pluginData} />
      ))
    }
  </ActivePluginsContainer>
);

export default ActivePlugins;
