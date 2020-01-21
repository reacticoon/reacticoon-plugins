import { createFormatter, createListFormatter } from "reacticoon/format";
import { getPlugins } from "reacticoon/plugin";
import { findOnArray } from "reacticoon/utils/array";

export const formatPluginIdentity = createFormatter(identity => {
  const plugins = getPlugins();

  const pluginData = findOnArray(
    plugins,
    pluginData => pluginData.plugin.name === identity.name
  );

  return {
    ...pluginData,
    identity
  };
});

export const formatPluginIdentiesList = createListFormatter(
  formatPluginIdentity
);
