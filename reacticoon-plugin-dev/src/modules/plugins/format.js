import { createFormatter, createListFormatter } from "reacticoon/format";
import { getPlugins } from "reacticoon/plugin";
import { findOnArray } from "reacticoon/utils/array";

export const formatPluginIdentity = createFormatter(identity => {
  let pluginData = {};
  if (identity.isReacticoonPlugin) {
    const plugins = getPlugins();

    pluginData = findOnArray(
      plugins,
      pluginData => pluginData.plugin.name === identity.name
    );
  } else {
    pluginData = {
      config: identity.config
    };
    delete identity.config;
  }

  if (identity.cliPluginData) {
    identity.cliPluginData.commands = (
      identity.cliPluginData.commands || []
    ).filter(Boolean);

    identity.cliPluginData.serverCommands = (
      identity.cliPluginData.serverCommands || []
    ).filter(Boolean);
  }

  return {
    ...pluginData,
    identity
  };
});

export const formatPluginIdentiesList = createListFormatter(
  formatPluginIdentity
);
