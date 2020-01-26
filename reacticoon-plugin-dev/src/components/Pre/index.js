import React from "react";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    fontSize: 14,
    fontFamily: "Courier New",
    lineHeight: "18px",
    padding: "0.1em 0.5em 0.3em 0.7em",
    borderLeft: `5px solid ${theme.app.colors.blueGrey[600]}`,
    margin: "1.7em 0 1.7em 0.3em",
    overflowY: "auto",
    width: "93%"
  }
});

// TODO: handle type: 'json' / 'yaml'
const Pre = ({ content, code, type, classes }) => (
  <pre className={classes.root}>
    {content && JSON.stringify(content, null, 2)}
    {code && code}
  </pre>
);

export default withStyles(styles)(Pre);
