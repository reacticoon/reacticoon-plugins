import React from 'react'

import FormContainer from './FormContainer'
import { getFormType } from '../utils'

/**
 * Add the FormContainer as HOC for the given component
 * Requirements
 * - formType: FormType or Array of FormType
 */
const withForm = formType => WrappedComponent => props => (
  <FormContainer formType={getFormType(formType)} WrappedComponent={WrappedComponent} {...props} />
)

export default withForm
