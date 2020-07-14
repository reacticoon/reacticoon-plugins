import React from 'react'

import isNil from 'lodash/isNil'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import ViewHeadlineRoundedIcon from '@material-ui/icons/ViewHeadlineRounded'
import CloseIcon from '@material-ui/icons/Close'
import Piece from 'reacticoon-plugin-dev/components/Piece'
import LogsView from 'reacticoon-plugin-dev/components/LogsView'

const heightInVh = 80

const useConsoleViewStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: theme.app.toolbar.height,
    height: `${heightInVh}vh`,
    background: theme.app.toolbar.colors.background,
    boxShadow:
      '-1px -12px 9px -5px rgba(0,0,0,0.2), 0px 15px 22px 2px rgba(0,0,0,0.14), 0px 6px 28px 5px rgba(0,0,0,0.12)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',

    '& div': {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),

      '& svg': {
        marginRight: theme.spacing(1),
        cursor: 'pointer',
      },
    },
  },
  content: {
    padding: theme.spacing(2),
    width: '100%',
    height: `${heightInVh - 4}vh`,
    overflow: 'scroll',

    '&.hasSelected': {
      overflow: 'hidden!important',
    },
  },
  eventsStats: {
    display: 'flex',
    '& div': {
      paddingLeft: theme.spacing(1),
    },
  },
  eventsList: {
    marginTop: theme.spacing(1),
    '&.selected': {
      height: `${heightInVh * 0.25}vh`,
      overflow: 'scroll',
    },
  },
  detail: {
    '&.selected': {
      height: `${heightInVh * 0.65}vh`,
      overflow: 'scroll',
    },
  },
}))

const ConsoleView = ({ onClose }) => {
  const classes = useConsoleViewStyles()

  const [selected, setSelected] = React.useState(null)

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <ViewHeadlineRoundedIcon onClick={onClose} /> Logs
        </div>
        <div>
          <CloseIcon onClick={onClose} />
        </div>
      </div>
      <section
        className={clsx(classes.content, {
          hasSelected: !isNil(selected),
        })}
      >
        <LogsView
          selected={selected}
          onSelect={event => setSelected(event)}
          onUnselect={event => setSelected(null)}
          heightInVh={heightInVh}
        />
      </section>
    </div>
  )
}

//
//
//

const styles = theme => ({
  header: {
    width: 100,
  },
})

const LogsPiece = ({ classes }) => {
  const [show, setShow] = React.useState(false)

  const onShow = () => {
    setShow(!show)
  }

  return (
    <React.Fragment>
      <Piece name="Logs">
        <Piece.Header classes={{ header: classes.header }} onHeaderClick={onShow}>
          <ViewHeadlineRoundedIcon onClick={onShow} />
        </Piece.Header>
      </Piece>

      {show && (
        <ConsoleView
          onClose={() => {
            setShow(false)
          }}
        />
      )}
    </React.Fragment>
  )
}

export default withStyles(styles)(LogsPiece)
