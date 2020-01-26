import React from "react";

import ActiveCliPluginsContainer from "reacticoon-plugin-dev/modules/plugins/view/ActiveCliPluginsContainer";
import PluginRow from "./PluginRow";

const ActiveCliPlugins = () => (
  <ActiveCliPluginsContainer>
    {({ plugins }) =>
      plugins.map((pluginData, index) => (
        <PluginRow key={index} pluginData={pluginData} />
      ))
    }
  </ActiveCliPluginsContainer>
);

export default ActiveCliPlugins;
