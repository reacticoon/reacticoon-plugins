import React from 'react'

import { connectSearchBox } from 'react-instantsearch-dom'
import TextField from '@material-ui/core/TextField'
import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

// https://www.algolia.com/doc/api-reference/widgets/search-box/react/
const SearchBox = connectSearchBox(({ currentRefinement, refine, classes, ...otherProps }) => (
  <TextField
    id="outlined-name"
    label="Search"
    autoFocus
    margin="normal"
    variant="outlined"
    fullWidth
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
    classes={classes}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon style={{ color: '#6A8AAC' }} />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          <IconButton aria-label="clear search" onClick={() => refine('')}>
            <CloseIcon style={{ color: '#6A8AAC' }} />
          </IconButton>
        </InputAdornment>
      ),
    }}
    {...otherProps}
  />
))

export default SearchBox
