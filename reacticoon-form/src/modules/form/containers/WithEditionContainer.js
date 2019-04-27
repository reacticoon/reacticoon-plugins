import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {
  makeGetFormOptions,
} from '../selectors'

import {
  setFormActivation,
} from '../actions'

class WithEditionContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active
     && nextProps.active !== nextProps.formOptions.isActivated) {
      this.props.setFormActivation(this.props.formType, nextProps.active)
    }
  }

  inactivateEdition() {
    this.props.setFormActivation(this.props.formType, false)
  }

  toggleEdition(callback) {
    this.props.setFormActivation(this.props.formType, !this.props.formOptions.isActivated)

    if (callback !== null) {
      callback()
    }
  }

  render() {
    const { children, formOptions, disabled } = this.props

    return (
      children({
        disabled,
        editionMode: formOptions.isActivated,
        toggleEdition: (callback = null) => { !disabled && this.toggleEdition(callback) },
        onSubmitEdition: (callback = null) => { !disabled && this.onSubmitEdition(callback) },
        inactivateEdition: () => { !disabled && this.inactivateEdition() },
        submitCallback: () => !disabled && this.submitCallback, // TODO: is it used ?
      })
    )
  }
}

WithEditionContainer.defaultProps = {
  active: false,
  disabled: false,
}

WithEditionContainer.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  formType: PropTypes.string.isRequired,
}

const makeMapStateToProps = () => {
  const getFormOptions = makeGetFormOptions()

  const mapStateToProps = (state, props) => ({
      formOptions: getFormOptions(state, props),
  })
  return mapStateToProps
}

export default connect(
  makeMapStateToProps,
  {
    setFormActivation,
  }
)(WithEditionContainer)
