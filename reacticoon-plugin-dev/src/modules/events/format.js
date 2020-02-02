import moment from 'moment'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import { createFormatter, createListFormatter } from 'reacticoon/format'
import { ReacticoonEvents, isSameEvent } from 'reacticoon/event'
import { formatQueryParams } from 'reacticoon/routing/utils'
import uuidv4 from 'uuid/v4'

const formatEvent = createFormatter(event => {
  event.id = uuidv4()

  //
  // date
  //
  const date = moment(event.date)
  event.dateFormatted = date.format('HH:mm:ss:SSS')
  event.dateFormNowFormatted = date.fromNow()

  //
  // type
  //
  event.isTypeError =
    isSameEvent(event, ReacticoonEvents.LOG_ERROR) ||
    isSameEvent(event, ReacticoonEvents.LOG_EXCEPTION) ||
    isSameEvent(event, ReacticoonEvents.LOG_REDUX_EXCEPTION) ||
    isSameEvent(event, ReacticoonEvents.LOG_COMPONENT_DID_CATCH) ||
    isSameEvent(event, ReacticoonEvents.LOG_NOT_IMPLEMENTED)

  event.isTypeDeprecation = isSameEvent(event, ReacticoonEvents.LOG_DEPRECATION)

  event.isTypeWarning = isSameEvent(event, ReacticoonEvents.LOG_WARN)

  event.isTypeInfo = !event.isTypeDeprecation && !event.isTypeError && !event.isTypeWarning

  event.isFromReact = false

  event.isEventHisoryChange = false
  event.isEventOnAppInit = false
  event.isEventRegisterModules = false

  //
  // Message
  //
  let message = ''

  try {
    const eventData = JSON.parse(event.data)

    switch (true) {
      case event.isTypeInfo:
        switch (true) {
          case isSameEvent(event, ReacticoonEvents.ON_HISTORY_CHANGE):
            message = formatQueryParams(eventData.location.pathname, eventData.location.query)
            event.isEventHisoryChange = true
            break

          case isSameEvent(event, ReacticoonEvents.ON_APP_INIT):
            message = 'On app init'
            event.isEventOnAppInit = true
            break

          case isSameEvent(event, ReacticoonEvents.REGISTER_MODULES):
            message = `Register modules`
            event.isEventRegisterModules = true
            break
        }
        break

      case event.isTypeWarning:
        message = eventData.message || eventData.type

        event.isWarningInvalidPropTypeType = message.startsWith(
          'Warning: Failed prop type: Invalid prop'
        )

        event.isWarningFailedPropTypeType =
          !event.isWarningInvalidPropTypeType && message.startsWith('Warning: Failed prop type: ')

        event.isWarningInvalidDomProperty = message.startsWith('Warning: Invalid DOM property')

        if (message.startsWith('Warning: ')) {
          message = message.substr('Warning: '.length)
        }

        function extractReactStacktrace(message) {
          const regex = /in (?<componentName>.*) \((?<_>at (?<file>.*):(?<line>\d*)\)|created by (?<componentCreatorName>.*)\))/gm
          const stacktrace = []
          let match
          while ((match = regex.exec(message)) != null) {
            const stackLine = {
              // componentName, (file, line) OR (componentCreatorName)
              ...match.groups,
              isCreatorLine: !isEmpty(match.groups.componentCreatorName),
            }
            delete stackLine._
            stacktrace.push(stackLine)
          }
          return stacktrace
        }

        event.reactStacktrace = extractReactStacktrace(message)
        event.hasReactStacktrace = !isEmpty(event.reactStacktrace)

        switch (true) {
          case event.isWarningInvalidPropTypeType:
            let propTypeWarningDataMatch
            if (message.includes('expected one of')) {
              propTypeWarningDataMatch = /Invalid prop `(?<prop>.*)`.*of value `(?<value>.*)` supplied to `(?<componentName>.*)`, expected one of (?<expected>.*)/gm.exec(
                message
              )
            }

            if (message.includes('expected a')) {
              propTypeWarningDataMatch = /.*Invalid prop `(?<prop>.*)`.*of type `(?<value>.*)` supplied to `(?<componentName>.*)`, expected a (?<expected>.*)..*/gm.exec(
                message
              )
            }

            event.isWarningInvalidPropTypeData = {
              prop: get(propTypeWarningDataMatch, 'groups.prop'),
              value: get(propTypeWarningDataMatch, 'groups.value'),
              componentName: get(propTypeWarningDataMatch, 'groups.componentName'),
              expected: get(propTypeWarningDataMatch, 'groups.expected'),
            }

            event.isFromReact = true

            message = `Invalid prop \`${event.isWarningInvalidPropTypeData.prop}\` of value \`${event.isWarningInvalidPropTypeData.value}\` supplied to \`${event.isWarningInvalidPropTypeData.componentName}\``
            break

          //
          // e.g:
          //
          // Failed prop type: Class constructor RouteDefinition cannot be invoked without 'new'
          // in Link (at DashboardPiece.js:10)
          // in DashboardPiece (at Toolbar.js:60)
          // in div (at Toolbar.js:59)
          //
          case event.isWarningFailedPropTypeType:
            const propTypeFailedDataMatch = /Failed prop type: (?<error>.*)/gm.exec(message)

            event.isWarningFailedPropTypeData = {
              error: propTypeFailedDataMatch.groups.error,
            }

            event.isFromReact = true

            message = `Error when passing prop: ${event.isWarningFailedPropTypeData.error}`
            break

          //
          // e.g:
          // Invalid DOM property `stop-color`. Did you mean `stopColor`?
          //
          case event.isWarningInvalidDomProperty:
            const invalidDomPropertyMatch = /Invalid DOM property `(?<domProperty>.*)`.*. Did you mean `(?<suggestion>.*)`.*/gm.exec(
              message
            )

            event.isWarningInvalidDomPropertyData = {
              domProperty: invalidDomPropertyMatch.groups.domProperty,
              suggestion: invalidDomPropertyMatch.groups.suggestion,
            }

            event.isFromReact = true
            break
        }
        break
    }
  } catch (_) {
    debugger
  }

  let newLineMessageIndex = message.indexOf('\n')
  if (newLineMessageIndex !== -1) {
    message = message.substring(0, newLineMessageIndex)
  }
  event.message = isEmpty(message) ? event.type : message

  //
  //
  //

  event.isFromReacticoon = !event.isFromReact && event.definition.type.startsWith('REACTICOON::')
  event.isFromOther = !event.isFromReact && !event.isFromReacticoon

  //
  //
  //

  return event
})

export const formatEvents = createListFormatter(formatEvent)
