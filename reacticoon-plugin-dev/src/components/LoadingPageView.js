import React from 'react'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

// TODO: find a way to use Page template without circular dependencies.
// import Page from "./Page";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    background: '#2c3e50',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: '2em',
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
}))

const LoadingPageView = ({ text }) => {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />

      {text && <div className={classes.text}>{text}</div>}
    </Backdrop>
  )
}

export default LoadingPageView
