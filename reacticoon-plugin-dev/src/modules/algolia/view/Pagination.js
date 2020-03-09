import React from 'react'

import { Pagination } from 'react-instantsearch-dom'
import { withStyles } from '@material-ui/core/styles'

//
// https://www.algolia.com/doc/api-reference/widgets/pagination/react/#html-output
//
const StyledPagination = withStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),

    '& .ais-Pagination-list': {
      display: 'flex',
      justifyContent: 'center',

      '& li': {
        marginRight: theme.spacing(0.5),
        color: 'white',

        '& .ais-Pagination-link': {
          background: theme.app.colors.block,
          padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        },
      },

      '& .ais-Pagination-item--selected': {
        '& .ais-Pagination-link': {
          background: `${theme.app.colors.lightblue}!important`,
        },
      },
      '& .ais-Pagination-item--disabled': {
        '& .ais-Pagination-link': {
          background: `${theme.app.colors.grey}!important`,
        },
      },
    },
  },
}))(({ classes }) => (
  <div className={classes.root}>
    <Pagination />
  </div>
))

export default StyledPagination
