import React from 'react'

import FeatureLoadingContainer from 'reacticoon/feature/FeatureLoadingContainer'
import LoadingPageView from 'reacticoon-plugin-dev/components/LoadingPageView'

const DevFeatureLoadingContainer = ({ view, featureName, ...props }) => (
  <FeatureLoadingContainer
    view={view}
    fallback={
      <LoadingPageView
        text={
          <span>
            Loading feature
            <br />
            {featureName}
          </span>
        }
      />
    }
    {...props}
  />
)

export default DevFeatureLoadingContainer
