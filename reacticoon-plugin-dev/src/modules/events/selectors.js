import { createSelector, getStateForModule } from 'reacticoon/selector'
import { formatEvents } from './format'

const getState = getStateForModule('ReacticoonDev::EventModule')

export const getEvents = createSelector(getState, state => {
  const res = state.get('events')
  return formatEvents(res.toJS ? res.toJS() : [])
})

export const getGroupedEvents = createSelector(getEvents, events => {
  const warnings = events.filter(event => event.isTypeWarning)
  const deprecations = events.filter(event => event.isTypeDeprecation)
  const errors = events.filter(event => event.isTypeError)

  // TODO: filter duplicates

  const nbErrors = errors.length
  const nbWarnings = warnings.length
  const nbDeprecations = deprecations.length

  const nbTotal = events.length

  const hasError = nbErrors > 0
  const hasWarning = nbWarnings > 0 || nbDeprecations > 0

  return {
    warnings,
    deprecations,
    errors,

    nbErrors,
    nbWarnings,
    nbDeprecations,
    nbTotal,

    hasEvents: nbTotal > 0,

    hasError,
    hasWarning,
  }
})
