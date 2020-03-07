import React from 'react'

import { connectSearchBox } from 'react-instantsearch-dom'
import TextField from '@material-ui/core/TextField'
import CancelIcon from '@material-ui/icons/Cancel'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

// https://www.algolia.com/doc/api-reference/widgets/search-box/react/
const SearchBox = connectSearchBox(({ currentRefinement, refine, ...otherProps }) => (
  <TextField
    id="outlined-name"
    label="Search"
    autoFocus
    margin="normal"
    variant="outlined"
    fullWidth
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton aria-label="clear search" onClick={() => refine('')}>
            <CancelIcon style={{ color: '#6A8AAC' }} />
          </IconButton>
        </InputAdornment>
      ),
    }}
    {...otherProps}
  />
))

export default SearchBox
