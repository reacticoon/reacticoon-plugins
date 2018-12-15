import invariant from 'invariant'

import isEmpty from 'lodash/isEmpty'

export const FORM_CUSTOM_ACTION = 'FORM::CUSTOM_ACTION'

/**
 * create a form custom action : the form must have a configured reducer
 * that handle the given actionName
 * @param  {formType} formType
 * @param  {string} actionName
 * @param  {object} data
 */
const createFormCustomAction = (formType, actionName, data = null) => dispatch => {

  invariant(!isEmpty(actionName), 'action name is required')
  invariant(!isEmpty(formType), 'form type is required')

  return dispatch({
    type: FORM_CUSTOM_ACTION,
    formType,
    actionName,
    data,
  })

}

export default createFormCustomAction
