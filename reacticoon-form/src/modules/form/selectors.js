import isNil from 'lodash/isNil'
import isNull from 'lodash/isNull'
import each from 'lodash/each'

import { createSelector, getStateForModule } from 'reacticoon/selector'

import { getFormValidator } from './config'
import { getFormType } from './utils'

// create the `getState` function, that will receive the state for the given module `reducer`.
// the module name is defined on `index.js` (first argument of `createModule`)
const getState = getStateForModule('ReacticoonPluginForm::FormModule')

const DEFAULT_VALIDATE = {
  isValid: true,
}

const getFormTypeData = (state, props) => {
  const moduleState = getState(state)
  return moduleState.get(getFormType(props.formType))
}

const getFormTypeOnProps = (state, props) => props.formType

const getFormValidatorSelector = (formType, props) => getFormValidator(props.formType)

export const makeGetFormDataNotFormatted = () =>
  createSelector([getFormTypeData, getFormTypeOnProps], (formState, formType) => {
    if (isNil(formState)) {
      return {}
    }
    const formData = formState.toJS().formData
    formData.formType = formType
    return formData
  })

export const makeGetFormData = () =>
  createSelector([makeGetFormDataNotFormatted(), getFormTypeOnProps], (formData, formType) => {
    if (isNil(formData)) {
      return {}
    }

    return formData
  })

const getFormsDataArray = (state, props) => {
  if (!props.formTypes) {
    // FIXME: should not happend
    return []
  }

  // TODO: move to format
  return props.formTypes.map(formType => ({
    formType,
    ...makeGetFormData()(state, { formType }),
  }))
}

export const makeGetFormsData = () =>
  createSelector([getFormsDataArray], formsData => {
    const formattedFormsData = {}
    formsData.forEach(formData => {
      formattedFormsData[formData.formType] = {
        ...formData,
        data: formData.data,
      }
    })

    return formattedFormsData
  })

export const makeGetFormOptions = () =>
  createSelector([getFormTypeData], formTypeData => {
    return formTypeData.toJS().options || {}
  })

export const makeGetFormErrors = () =>
  createSelector(
    [makeGetFormDataNotFormatted(), getFormValidatorSelector, makeGetFormOptions()],
    (formData, formValidator, formOptions) => {
      const { formType } = formData

      if (isNil(formValidator)) {
        return DEFAULT_VALIDATE
      }
      const errors = formValidator(formData, formOptions)

      // set formType again since validator override it
      errors.formType = formType

      // create invalidFields, an array of the field names that are not valid
      errors.invalidFields = []
      each(errors, (error, fieldName) => {
        if (error.isValid === false) {
          errors.invalidFields.push(fieldName)
        }
      })

      return errors
    }
  )

export const makeIsFormValid = createSelector([makeGetFormErrors()], formErrors => {
  return formErrors.isValid
})

export const makeGetFormsErrors = () =>
  createSelector([getFormsDataArray], formsData => {
    // TODO: move to format
    let isValid = true

    const errors = {}
    formsData.forEach(formData => {
      const { formType } = formData
      const validator = getFormValidator(formType)

      if (isNil(validator)) {
        errors[formType] = DEFAULT_VALIDATE
      } else {
        const validation = validator(formData)
        if (!validation.isValid) {
          isValid = false
        }
        errors[formType] = validation
      }
      // set formType again since validator override it
      errors[formType].formType = formType
    })

    return {
      isValid,
      errors,
    }
  })
