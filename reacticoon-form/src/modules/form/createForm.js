import invariant from 'invariant'

import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import isEmpty from 'lodash/isEmpty'
// import merge from 'lodash/merge'

import { getValidatorEngine } from './config'

import { getQueryParam } from 'reacticoon/routing'

export const DISABLE_FORM_DEV_DATA_QUERY_PARAM = 'disableFormDevData'

// Default form options
const DEFAULT_OPTIONS = {
  // object of actions specific to the form
  customActions: {},
  // data formatter of the form
  // will format the data before updating the state
  modifier: null,
}

/**
 *
 * @param  {FormType} type          the form type (unique name of the form)
 * @param  {Object} validationRules object that define the validation rules
 * @param  {Object} defaultData     an object or a function that give the default data
 * @param  {Object} [devData={}]    the dev data to merge to the default data (on dev environment)
 *                                  can be a function or an object
 * @param  {Object} options         an object of optional options
 *                                    - reducer: mandatory to handle a customAction
 *
 *                                      const reducer = (data, action) => {
 *                                        switch (action.actionName) {
 *                                          case SpecificActions.ADD:
 *                                            return data
 *                                          default:
 *                                            return data
 *                                        }
 *                                     }
 *                                   - customActions: mandatory with reducer
 *                                   - modifier: like a formatter but modify the data before saving
 *                                     it on the state -> the data on the store is the right data
 *                                     while using the formatter returns the right data on the
 *                                     selector, but the formatted data on the state is one-state
 *                                     behind
 *
 * @return {[type]}                 the form:
 *                                  {
 *                                    type, // the FormType
 *                                    validator, // the validator for the validationRules
 *                                    getDefault, // a function that returns the default values
 *                                  }
 *
 * Note: you can set the 'DISABLE_FORM_DEV_DATA_QUERY_PARAM' query url paremeter to `true` to globally disable
 * dev data on form
 *
 */
const createForm = (type, validationRules, defaultData, devData = null, options = {}) => {
  invariant(!isNil(type), 'form type is required')
  invariant(isObject(validationRules), 'validationRules must be an object')
  invariant(!isEmpty(defaultData), 'default data should not be empty')

  const getDefault = () => {
    const finalDefaultData = isFunction(defaultData) ? defaultData() : defaultData
    const finalDevData = isFunction(devData) ? devData() : devData

    const disableDevData =
      getQueryParam(DISABLE_FORM_DEV_DATA_QUERY_PARAM, window.location.url) === 'true' // as string since we take it from the url as a string

    // if (isDev() && !isNil(finalDevData) && !disableDevData) {
    // return merge(finalDefaultData, devData)
    // }

    return finalDefaultData
  }

  return {
    type,
    validator: (data, options) =>
    getValidatorEngine()(isFunction(validationRules) ? validationRules(options) : validationRules, data),
    getDefault: getDefault,
    options: {
      ...DEFAULT_OPTIONS,
      ...options,
    },
  }
}

export default createForm
