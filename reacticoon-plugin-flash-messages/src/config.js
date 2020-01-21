import { getPluginConfig } from 'reacticoon/plugin'

export const getConfiguredTypes = () => {
  const appConfiguredTypes = getPluginConfig('ReacticoonFlashMessages').types || []
  return appConfiguredTypes
}
