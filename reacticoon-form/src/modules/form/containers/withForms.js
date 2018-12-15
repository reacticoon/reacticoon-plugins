import React from 'react'

import FormsContainer from './FormsContainer'

/**
* Add the FormsContainer as HOC for the given component
* Requirements
* - formType: FormType or Array of FormType
*/
const withForms = (formTypes) => (
  (WrappedComponent) => (
    (props) => (
      <FormsContainer
        formTypes={formTypes}
        WrappedComponent={WrappedComponent}
        {...props}
      />
    )
  )
)

export default withForms
