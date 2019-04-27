import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  updateForm,
} from '../actions'

import {
  makeGetFormsData,
  makeGetFormsErrors,
} from '../selectors'


class FormsContainer extends React.Component {

  handleChange = (formType, formData) => {
    this.props.updateForm(formType, formData)
  }

  render() {
    const { formsData, formsErrors, WrappedComponent, ...otherProps } = this.props
    return (
      <WrappedComponent
        formsData={formsData}
        formsErrors={formsErrors}
        formsAreValid={formsErrors.isValid}
        onChange={this.handleChange}
        {...otherProps}
      />
    )
  }
}

FormsContainer.propTypes = {
  formTypes: PropTypes.array.isRequired,
}

const makeMapStateToProps = () => {
  const getFormsData = makeGetFormsData()
  const getFormsErrors = makeGetFormsErrors()

  const mapStateToProps = (state, props) => {
    return {
      formsData: getFormsData(state, props),
      formsErrors: getFormsErrors(state, props),
    }
  }
  return mapStateToProps
}

export default connect(makeMapStateToProps, {
  updateForm,
})(FormsContainer)
