import React from 'react'

//
// The following allow us to test the feature flag loading.
//
import DevFeatureLoadingContainer from 'reacticoon-plugin-dev/modules/feature/DevFeatureLoadingContainer'

const ExperimentalFeature = React.lazy(() => import('./PluginsPage'))

class PluginsPageLazyLoaded extends React.Component {
  render() {
    return FEATURE_PLUGIN_MARKETPLACE ? (
      <DevFeatureLoadingContainer
        view={ExperimentalFeature}
        featureName="FEATURE_PLUGIN_MARKETPLACE"
      />
    ) : null
  }
}

export default PluginsPageLazyLoaded
