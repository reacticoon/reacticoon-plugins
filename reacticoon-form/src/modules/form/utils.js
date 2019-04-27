import isString from 'lodash/isString'

/**
 * @param  {any} formDef Can either be:
 *  - the form object (createForm)
 *  - the form type
 * @return {string} form type
 */
export const getFormType = formDef => {
  if (isString(formDef)) {
    return formDef
  }

  return formDef.type
}
