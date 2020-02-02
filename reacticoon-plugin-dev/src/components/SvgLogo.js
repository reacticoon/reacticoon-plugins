import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    '& svg': {
      width: props => props.size || props.width || 75,
      height: props => props.size || props.height || props.props || 75,
    },
  },
})

const SvgLogo = ({ svg, classes, ...props }) => (
  <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
)

export default withStyles(styles)(SvgLogo)
