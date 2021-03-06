import React from 'react'

import EventsContainer from '../../../modules/events/container'
import DevToolbarContainer from '../../../modules/devToolBar/container'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import WarningIcon from '@material-ui/icons/Warning'
import Piece from '../../../components/Piece'

const styles = theme => ({
  badge: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // width: 50,
    height: '100%',

    '& svg': {
      paddingRight: theme.spacing(0.5),
    },
  },
  piece_itemValue: {
    width: '100%',
    textAlign: 'right',
  },
  contentValue: {
    height: '100%',
    width: 20,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: 'white',
    backgroundColor: '#666',
    textAlign: 'right',
  },
  warning: {
    backgroundColor: theme.app.colors.warn,
  },
  error: {
    backgroundColor: theme.app.colors.error,
  },
  debug: {
    backgroundColor: theme.app.colors.debug,
  },
  info: {
    backgroundColor: theme.app.colors.info,
  },
})

const EventsBadgesPiece = ({ classes }) => (
  <DevToolbarContainer>
    {({ displayDevToolbarRoute, DevToolbarRoute }) => (
      <EventsContainer>
        {({ groupedEvents }) => (
          <Piece
            name="EventsBadges"
            headerStyle={{ textAlign: 'center' }}
            classes={{
              itemValue: classes.piece_itemValue,
              header: clsx({
                [classes.warning]: groupedEvents.hasWarning && !groupedEvents.hasError,
                [classes.error]: groupedEvents.hasError,
              }),
            }}
          >
            <Piece.Header>
              <div className={classes.badge}>
                <WarningIcon />
                &nbsp;
                {groupedEvents.nbTotal}
              </div>
            </Piece.Header>

            <Piece.Content>
              {() => [
                {
                  label: 'Errors',
                  onClick: () => displayDevToolbarRoute(DevToolbarRoute.events),
                  value: (
                    <span
                      className={clsx(classes.contentValue, {
                        [classes.error]: groupedEvents.hasError,
                      })}
                    >
                      {groupedEvents.nbErrors}
                    </span>
                  ),
                },
                {
                  label: 'Warnings',
                  onClick: () => displayDevToolbarRoute(DevToolbarRoute.events),
                  value: (
                    <span
                      className={clsx(classes.contentValue, {
                        [classes.warning]: groupedEvents.hasWarning,
                      })}
                    >
                      {groupedEvents.nbWarnings}
                    </span>
                  ),
                },
                {
                  label: 'Deprecations',
                  onClick: () => displayDevToolbarRoute(DevToolbarRoute.events),
                  value: (
                    <span
                      className={clsx(classes.contentValue, {
                        [classes.warning]: groupedEvents.hasDeprecation,
                      })}
                    >
                      {groupedEvents.nbDeprecations}
                    </span>
                  ),
                },
                {
                  label: 'Infos',
                  onClick: () => displayDevToolbarRoute(DevToolbarRoute.events),
                  value: (
                    <span
                      className={clsx(classes.contentValue, {
                        [classes.info]: groupedEvents.hasInfo,
                      })}
                    >
                      {groupedEvents.nbInfos}
                    </span>
                  ),
                },
                {
                  label: 'Debugs',
                  onClick: () => displayDevToolbarRoute(DevToolbarRoute.events),
                  value: (
                    <span
                      className={clsx(classes.contentValue, {
                        [classes.debug]: groupedEvents.hasDebug,
                      })}
                    >
                      {groupedEvents.nbDebugs}
                    </span>
                  ),
                },
              ]}
            </Piece.Content>
          </Piece>
        )}
      </EventsContainer>
    )}
  </DevToolbarContainer>
)

export default withStyles(styles)(EventsBadgesPiece)
