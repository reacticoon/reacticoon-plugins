import React from 'react'

import { EventManager } from 'reacticoon/event'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import isNil from 'lodash/isNil'
import EventsContainer from 'reacticoon-plugin-dev/modules/events/container'
import TableInfo from 'reacticoon-plugin-dev/components/TableInfo'
import ReacticoonLogo from 'reacticoon-plugin-dev/components/svg/ReacticoonLogo'
import Tooltip from '@material-ui/core/Tooltip'
import Pre from 'reacticoon-plugin-dev/components/Pre'
import Button from '@material-ui/core/Button'
import LaunchEditorButton from 'reacticoon-plugin-dev/components/LaunchEditorButton'
import CloseIcon from '@material-ui/icons/Close'

//
//
//

const useEventLineStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    padding: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),

    '&:hover': {
      background: theme.palette.action.hover,
      color: 'white',
    },

    '&.selected': {
      background: `${theme.palette.action.selected}!important`,
      color: 'white',
    },
  },
  eventInfo: {
    background: theme.app.colors.info,
    color: 'black',
  },
  eventWarning: {
    background: theme.app.colors.warn,
    color: 'black',
  },
  eventDeprecation: {
    background: theme.app.colors.warn,
    color: 'black',
  },
  eventError: {
    background: theme.app.colors.error,
    color: 'black',
  },
  eventDebug: {
    background: theme.app.colors.debug,
    color: 'black',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  file: {
    fontSize: 12,
    fontFamily: 'monospace',
    marginRight: theme.spacing(1),
  },
  icon: {
    width: 30,
    marginRight: theme.spacing(1),
  },
}))

const EventLine = ({ event, selected, onSelect }) => {
  const classes = useEventLineStyles()

  return (
    <div
      className={clsx(classes.root, {
        [classes.eventInfo]: event.isTypeInfo,
        [classes.eventWarning]: event.isTypeWarning,
        [classes.eventDeprecation]: event.isTypeDeprecation,
        [classes.eventError]: event.isTypeError,
        [classes.eventDebug]: event.isTypeDebug,
        selected: selected,
      })}
      onClick={onSelect}
    >
      <div className={classes.left}>
        <div className={classes.icon}>
          {/* TODO: react logo */}
          {event.isFromReact && <ReacticoonLogo />}
          {event.isFromReacticoon && <ReacticoonLogo />}
          {/* TODO: find icon */}
          {event.isfromOther && <ReacticoonLogo />}
        </div>
        <div>{event.message}</div>
      </div>
      <div className={classes.right}>
        {event.hasReactStacktrace && !event.reactStacktrace[0].isCreatorLine && (
          <span className={classes.file}>
            {event.reactStacktrace[0].file}:{event.reactStacktrace[0].line}
          </span>
        )}
        <span>{event.dateFormatted}</span>
      </div>
    </div>
  )
}

//
//
//

const useEventDetailStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),
      justifyContent: 'center',
    },
  },
  headerRight: {
    '& button': {
      marginRight: theme.spacing(1),
    },
  },
  closeBtn: {
    marginRight: '0!important',
  },
  file: {
    fontSize: 12,
    fontFamily: 'monospace',
    marginTop: 2,
    textTransform: 'none',
    color: 'black',
  },
  backgroundEventInfo: {
    background: theme.app.colors.info,
    color: 'black',
  },
  backgroundEventWarning: {
    background: theme.app.colors.warn,
    color: 'black',
  },
  backgroundEventDeprecation: {
    background: theme.app.colors.warn,
    color: 'black',
  },
  backgroundEventError: {
    background: theme.app.colors.error,
    color: 'black',
  },
  backgroundEventDebug: {
    background: theme.app.colors.debug,
    color: 'black',
  },
  content: {
    padding: theme.spacing(2),
  },
}))

const EventDetailContent = ({ event }) => {
  switch (true) {
    case event.isWarningInvalidPropTypeType:
      const isWarningInvalidPropTypeData = event.isWarningInvalidPropTypeData
      return (
        <div>
          <TableInfo
            data={[
              {
                label: 'Prop name',
                value: isWarningInvalidPropTypeData.prop,
              },
              {
                label: 'Value',
                value: isWarningInvalidPropTypeData.value,
              },
              {
                label: 'componentName',
                value: isWarningInvalidPropTypeData.componentName,
              },
              {
                label: 'Expected values',
                value: isWarningInvalidPropTypeData.expected,
              },
            ]}
          />
        </div>
      )

    case event.isWarningFailedPropTypeType:
      return <div>{event.isWarningFailedPropTypeData.error}</div>

    default:
      return (
        <div>
          <Pre content={JSON.parse(event.data)} />
        </div>
      )
  }
}

const EventDetail = ({ event, onUnselect }) => {
  const classes = useEventDetailStyles()

  return (
    <div className={classes.root}>
      <div
        className={clsx(classes.header, {
          [classes.backgroundEventInfo]: event.isTypeInfo,
          [classes.backgroundEventWarning]: event.isTypeWarning,
          [classes.backgroundEventDeprecation]: event.isTypeDeprecation,
          [classes.backgroundEventError]: event.isTypeError,
          [classes.backgroundEventDebug]: event.isTypeDebug,
        })}
      >
        <div>{event.message}</div>
        <div className={classes.headerRight}>
          <Button
            onClick={() => {
              EventManager.dispatch(event.definition, JSON.parse(event.data))
            }}
            variant="outlined"
            size="small"
            color="inherit"
          >
            Run
          </Button>

          {event.hasReactStacktrace && !event.reactStacktrace[0].isCreatorLine && (
            <LaunchEditorButton
              // TODO: fix opening this type of file
              src={`${event.reactStacktrace[0].file}:${event.reactStacktrace[0].line}`}
              label={
                <span className={classes.file}>
                  {event.reactStacktrace[0].file}:{event.reactStacktrace[0].line}
                </span>
              }
              variant="text"
            />
          )}

          <div>{event.dateFormatted}</div>

          <Button
            onClick={onUnselect}
            className={classes.closeBtn}
            variant="text"
            size="small"
            color="inherit"
          >
            <CloseIcon />
          </Button>
        </div>
      </div>

      <div className={classes.content}>
        <EventDetailContent event={event} />
      </div>

      {event.reactStacktrace && <ReactStacktrace stacktrace={event.reactStacktrace} />}
    </div>
  )
}

//
//
//

const useStacktraceStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    overflow: 'hidden',
  },
  line: {
    display: 'flex',
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: '21px',
  },
}))

const ReactStacktrace = ({ stacktrace = [] }) => {
  const classes = useStacktraceStyles()
  return (
    <div className={classes.root}>
      {stacktrace.map((lineData, index) => (
        <div key={index} className={classes.line}>
          {lineData.componentName}&nbsp;
          {lineData.isCreatorLine ? (
            <div>created by {lineData.componentCreatorName}</div>
          ) : (
            <div>
              from {lineData.file}:{lineData.line}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

//
//
//

const useLogsViewStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
    width: '100%',
    height: props => `${props.heightInVh - 4}vh`,
    overflow: 'scroll',

    '&.hasSelected': {
      overflow: 'hidden!important',
    },
  },
  eventsStats: {
    display: 'flex',
    '& div': {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      marginRight: theme.spacing(1),
    },

    '& .nbTotal': { background: theme.palette.secondary.dark },
    '& .nbErrors': { background: theme.app.colors.error },
    '& .nbWarnings': { background: theme.app.colors.warn },
    '& .nbDeprecations': { background: theme.app.colors.warn },
    '& .nbDebugs': { background: theme.app.colors.debug },
    '& .nbInfos': { background: theme.app.colors.info },
  },
  eventsList: {
    marginTop: theme.spacing(1),
    '&.selected': {
      height: props => `${props.heightInVh * 0.25}vh`,
      overflow: 'scroll',
    },
  },
  detail: {
    '&.selected': {
      height: props => `${props.heightInVh * 0.65}vh`,
      overflow: 'scroll',
    },
  },
}))

const LogsView = ({ selected, onSelect, onUnselect, heightInVh }) => {
  const classes = useLogsViewStyles({ heightInVh })

  return (
    <EventsContainer>
      {({ groupedEvents, events }) =>
        !groupedEvents.hasEvents ? (
          <div>No events</div>
        ) : (
          <React.Fragment>
            <div className={classes.eventsStats}>
              <Tooltip title="Total number of events">
                <div className="nbTotal">{groupedEvents.nbTotal}</div>
              </Tooltip>

              <Tooltip title="Errors">
                <div className="nbErrors">{groupedEvents.nbErrors}</div>
              </Tooltip>

              <Tooltip title="Debugs">
                <div className="nbDebugs">{groupedEvents.nbDebugs}</div>
              </Tooltip>

              <Tooltip title="Infos">
                <div className="nbInfos">{groupedEvents.nbInfos}</div>
              </Tooltip>

              <Tooltip title="Warnings">
                <div className="nbWarnings">{groupedEvents.nbWarnings}</div>
              </Tooltip>

              <Tooltip title="Deprecations">
                <div className="nbDeprecations">{groupedEvents.nbDeprecations}</div>
              </Tooltip>
            </div>
            <div
              className={clsx(classes.eventsList, {
                selected: !isNil(selected),
              })}
            >
              {events.map((event, index) => (
                <EventLine
                  key={index}
                  event={event}
                  selected={selected && selected.id === event.id}
                  onSelect={() => {
                    onSelect(event)
                  }}
                />
              ))}
            </div>

            <div
              className={clsx(classes.detail, {
                selected: !isNil(selected),
              })}
            >
              {selected && <EventDetail event={selected} onUnselect={onUnselect} />}
            </div>
          </React.Fragment>
        )
      }
    </EventsContainer>
  )
}

export default LogsView
