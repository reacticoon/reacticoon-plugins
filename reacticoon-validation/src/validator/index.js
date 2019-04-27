import spected from 'spected'
import forIn from 'lodash/forIn'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'
import each from 'lodash/each'

//
// Reacticoon validator with spected (https://github.com/25th-floor/spected) under the hood.
// We format the data returned by spected to match the following format:
// formErrors:
// - invalidFields: array of fields names that are invalid
// - isValid: boolean, does the whole data valid ?
// - [fieldname]:
//   - isValid: boolean, true if the field is valid
//   - messages, array of string, containing the different errors
//   - message, string, the first message of `messages`
//
// The validator must be passed to the plugin configuration via the `validator` option.
//

const trMessage = key => {
  // Some strings are already translated, while legacy behavior gives the key to translate
  // a key does not have a space, most of the strings have one
  if (key.indexOf(' ') !== -1) {
    return key
  }

  return key
  // TODO: handle I18n keys
  // return tr(key)
}

const validateValue = value => {
  if (isArray(value)) {
    // handle key that contains an array of objects
    const isValid = value.length === 0

    return {
      isValid,
      message: trMessage(value[0]),
      messages: value,
    }
  } else if (isObject(value)) {
    let isValid = true
    each(value, (childValue, childName) => {
      const newChildValue = validateValue(childValue)
      if (newChildValue.isValid === false) {
        isValid = false
      }
      value[childName] = newChildValue
    })

    return {
      isValid,
      ...value,
    }
  } else {
    // simple value
    //
    if (value === true) {
      return {
        isValid: true,
        message: null,
        messages: [],
      }
    } else {
      return {
        isValid: false,
        message: trMessage(value[0]),
        messages: value,
      }
    }
  }
}

//
// Input:
// - true
// - [ "error message" ]
//
// Output:
// {
//   valid: boolean,
//   message: '', // the first of messages
//   messages: [],
// }
//
const formatValidator = validation => {
  // calculate if the whole data isValid
  let isValid = true

  forIn(validation, (value, field) => {
    const newValue = validateValue(value)

    if (newValue.isValid === false) {
      isValid = false
    }

    validation[field] = newValue
  })

  // add isValid boolean for convenience
  validation.isValid = isValid

  return validation
}

/**
 * Validate data with the given rules
 * 
 * @param  {Object} rules See spected documentation for the rules format
 * @param  {Object} data  The form data
 * @return {Object} See spected documentation for the returned format. Note that we add an 'isValid'
 *                      var for convenience
 */
const reacticoonValidator = (rules, data) => {
  // validate data with spected library
  const validation = spected(rules, data)

  return formatValidator(validation)
}

export default reacticoonValidator
