import Immutable from 'immutable'
import find from 'lodash/find'
import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import invariant from 'invariant'

import { getPluginConfig } from 'reacticoon/plugin'

import { getFormType } from './utils'

export const getForms = () => getPluginConfig('ReacticoonPluginForm').forms

export const getFormsDefaultState = () => {
  let defaultState = {}

  getForms().forEach(form => {
    invariant(
      isNil(form.default) || !isFunction(form.getDefault),
      `form ${form.type} default must be a function named getDefault`
    )

    invariant(!isNil(form.type), 'form.type is required')

    defaultState[form.type] = {
      formData: form.getDefault(),
      options: {},
    }
  })

  return Immutable.fromJS(defaultState)
}

/**
 * @param  {any} formDef Can either be:
 *  - the form object (createForm)
 *  - the form type
 * @return {FormConfiguration} the configuration for the given FormType
 */
export const getFormConfig = formDef => {
  const formType = getFormType(formDef)

  // TODO: optimize this
  // instead of finding on the getForms array, save a map of type / form
  const formConfig = find(getForms(), formConfig => formType === formConfig.form.type)

  invariant(
    !isNil(formConfig),
    `[ReacticoonPluginForm] no config found the form. '${formType}' not registered`
  )

  return formConfig
}

export const getFormConfigOptions = formDef => getFormConfig(formDef).config

export const getForm = formDef => getFormConfig(formDef).form

// TODO
export const getFormDefaultOptions = formType => ({})

export const getFormDefaultData = formDef => {
  const formType = getFormType(formDef)
  const form = getForm(formType)

  return form.getDefault()
}

export const getFormCustomActions = formDef => {
  const formType = getFormType(formDef)
  const form = getForm(formType)

  const customActions = form.options.customActions
  invariant(
    isNil(customActions) || isObject(customActions),
    'form ' + formType + ' has no customActions'
  )

  return customActions || null
}

export const getFormReducer = formDef => {
  const formType = getFormType(formDef)
  const form = getForm(formType)

  const reducer = form.options.reducer
  invariant(isNil(reducer) || isFunction(reducer), 'form ' + formType + ' has no reducer')

  return reducer
}

export const getFormModifier = formDef => {
  const formType = getFormType(formDef)
  const form = getForm(formType)

  const modifier = form.options.modifier
  invariant(isNil(modifier) || isFunction(modifier), 'form ' + formType + ' has no modifier')

  return modifier
}


export const getFormValidator = formType => getForm(formType).validator

export const getValidatorEngine = () => getPluginConfig('ReacticoonPluginForm').validator
