import React from 'react'

import TextField from '@material-ui/core/TextField'

class View extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TextField
          id="outlined-name"
          label="Search"
          // className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
          fullWidth
        />

        {/* TODO: make reacticoon propose some plugins */}
        {/* <RecommandedView /> */}
      </React.Fragment>
    )
  }
}

export default View
