import { createAction } from 'reacticoon/action'

import { getFormDefaultData, getFormDefaultOptions } from './config'

/**
 * Register a form on the store.
 * A form must be registered in order to be used
 * This action is automatically while configuring the plugin (see onAppInit)
 */
export const registerForm = createAction('FormAction::REGISTER', (formType, data) => ({
  formType,
  ...data,
}))

/**
 *
 * @param {string} formType The FormType
 * @param {any} data The form data
 */
export const initForm = createAction('FormAction::CREATE', (formType, data) => ({
  formType,
  data,
}))

/**
 *
 * @param {string} formType The FormType
 * @param {any} data The form data
 */
export const updateForm = createAction('FormAction::UPDATE', (formType, data) => ({
  formType,
  data,
}))

/**
 *
 * @param {string} formType The FormType
 * @param {any} data The form data
 */
export const resetForm = createAction('FormAction::RESET', (formType, data, options) => ({
  withDefaultData: false,
  formType,
  data,
  options,
}))

/**
 *
 * @param {string} formType The FormType
 * @param {any} data The form data
 */
export const resetFormWithDefaultData = createAction('FormAction::RESET', formType => ({
  withDefaultData: true,
  formType,
  data: getFormDefaultData(formType),
  options: getFormDefaultOptions(formType),
}))

//
//
//

export const setFormActivation = createAction(
  'FormAction::ACTIVATION',
  (formType, isActivated) => ({
    formType,
    isActivated,
  })
)

/**
 * update options of a form
 */
export const updateFormOptions = createAction(
  'FormAction::UPDATE_OPTIONS',
  (formType, options) => ({
    formType,
    options,
  })
)
