import Immutable from 'immutable'

import invariant from 'invariant'
import isNil from 'lodash/isNil'

import { createReducer } from 'reacticoon/reducer'

import {
  registerForm,
  initForm,
  updateForm,
  resetForm,
  resetFormWithDefaultData,
  updateFormOptions,
  setFormActivation,
} from './actions'

import { getFormReducer, getFormModifier } from './config'

// import { DataCatcherAction, dataCatcherFormReducer } from '../dataCatcher'

import { FORM_CUSTOM_ACTION } from './createFormCustomAction'

//
//
//

const dataModifier = (data, formType) => {
  const modifier = getFormModifier(formType)
  return !modifier ? data : modifier(data)
}

const handleRegisterForm = (state, action) =>
  state.setIn(
    [action.payload.formType],
    Immutable.fromJS({
      formData: dataModifier(action.payload.formData, action.payload.formType),
      options: action.payload.options,
    })
  )

const handleInitForm = (state, action) =>
  state.mergeIn([action.payload.formType], {
    formData: dataModifier(action.payload.data, action.payload.formType),
    options: action.payload.options,
  })

const handleUpdateForm = (state, action) =>
  state.mergeIn([action.payload.formType], {
    formData: dataModifier(action.payload.data, action.payload.formType),
  })

const handleResetForm = (state, action) => {
  if (action.withDefaultData) {
    return state.mergeIn([action.payload.formType], {
      formData: dataModifier(action.payload.data, action.payload.formType),
      options: action.payload.options,
    })
  }

  invariant(!isNil(action.payload.data), 'reset form form data cannot be nil')

  return state.mergeIn([action.payload.formType], {
    formData: dataModifier(action.payload.data, action.payload.formType),
  })
}

// resetFormWithDefaultData is the same action as resetForm with different props.
const handleResetFormWithDefaultData = handleResetForm

const handleSetFormActivation = (state, action) =>
  state.mergeIn([action.payload.formType], {
    options: {
      isActivated: action.payload.isActivated,
    },
  })

const handleUpdateFormOptions = (state, action) =>
  state.mergeIn([action.payload.formType, 'options'], action.options)

const handleCustomAction = (state, action) => {
  const reducer = getFormReducer(action.payload.formType)
  const data = reducer(state.get(action.payload.formType).toJS(), action)
  return state.mergeIn(
    [action.payload.formType, 'formData'],
    dataModifier(data.formData, action.payload.formType)
  )
}

// TODO: data catcher
// const handleDataCatacher = dataCatcherFormReducer

//
//
//

let DEFAULT_STATE = {}

const formReducer = createReducer(DEFAULT_STATE, {
  [registerForm]: handleRegisterForm,
  [initForm]: handleInitForm,
  [updateForm]: handleUpdateForm,
  [resetForm]: handleResetForm,
  [resetFormWithDefaultData]: handleResetFormWithDefaultData,
  [setFormActivation]: handleSetFormActivation,
  [updateFormOptions]: handleUpdateFormOptions,
  [FORM_CUSTOM_ACTION]: handleCustomAction,
  // TODO:
  // add DataCatcherAction.POST_CATCHED_DATA:: handleDataCatacher
})

export default formReducer
