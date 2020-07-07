import React from 'react'

import { getExtendedPieces } from '../../utils'
import { withStyles } from '@material-ui/core/styles'
import useStorageState from 'reacticoon/view/hook/useStorageState'
import EventsBadgesPiece from './toolbarPieces/EventsBadgesPiece'
import DashboardPiece from './toolbarPieces/DashboardPiece'
import RoutePiece from './toolbarPieces/RoutePiece'
import ReacticoonLogoPiece from './toolbarPieces/ReacticoonLogoPiece'
import UserContextPiece from './toolbarPieces/UserContextPiece'
import LogsPiece from './toolbarPieces/LogsPiece'

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: theme.app.toolbar.height,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.app.toolbar.colors.background,
    color: 'white',
    alignItems: 'center',
    zIndex: 999999,
  },
  rootSmall: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    height: theme.app.toolbar.height,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.app.toolbar.colors.background,
    color: 'white',
  },
  leftPart: {
    display: 'flex',
    height: '100%',
  },
  centerPart: {
    cursor: 'pointer',
    flexGrow: 1,
    textAlign: 'center',
    height: '100%',
  },
  rightPart: {
    display: 'flex',
    height: '100%',
  },
})

const Toolbar = ({ route, routeName, classes, onToggleDetail }) => {
  const [ show, onToggle ] = useStorageState('_reacticoon_toolbar', true)

  return !show ? (
    <div className={classes.rootSmall}>
      <ReacticoonLogoPiece onClick={() => onToggle(!show)} />
    </div>
  ) : (
    <div className={classes.root}>
      <div className={classes.leftPart}>
        <DashboardPiece />

        <RoutePiece routeName={routeName} route={route} />

        <EventsBadgesPiece />

        <LogsPiece />
      </div>
      <div className={classes.centerPart} onClick={onToggleDetail} />
      <div className={classes.rightPart}>
        <UserContextPiece />

        {(getExtendedPieces() || []).map((piece, index) =>
          React.createElement(piece.component, { key: index })
        )}

        <ReacticoonLogoPiece onClick={() => onToggle(!show)} />
      </div>
    </div>
  )

}

export default withStyles(styles)(Toolbar)
