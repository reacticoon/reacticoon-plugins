//
// Define predicates that can be used to validate forms
//

import isString from 'lodash/isString'

export const notEmpty = obj => {
  // working to check an empty string or a number (0 return true)
  // for empty string, send default value to null to not have an error from your form init
  return obj !== null && typeof obj !== 'undefined' && obj !== ''
}

// check an empty array
export const arrayNotEmpty = obj => obj !== null && typeof obj !== 'undefined' && obj.length > 0

export const isTrue = obj => obj === true

export const isEmail = email => {
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Example:
 * ```
 * [isGreaterThan(5)]
 * ```
 */
export const isGreaterThan = (length, orEqual) => obj =>
  isString(obj) ? notEmpty(obj) && obj.length > length : obj > length

export const isGreaterThanInclude = (length, orEqual) => obj =>
  isString(obj) ? notEmpty(obj) && obj.length >= length : obj >= length

export const isLessThan = length => obj =>
  isString(obj) ? notEmpty(obj) && obj.length > length : obj < length

export const isLessThanInclude = length => obj =>
  isString(obj) ? notEmpty(obj) && obj.length <= length : obj <= length

export const isBetween = (min, max) => obj =>
  isString(obj) ? notEmpty(obj) && obj.length < max && obj.length > min : obj < max && obj > min

export const isBetweenInclude = (min, max) => obj =>
  isString(obj) ? notEmpty(obj) && obj.length <= max && obj.length >= min : obj <= max && obj >= min
