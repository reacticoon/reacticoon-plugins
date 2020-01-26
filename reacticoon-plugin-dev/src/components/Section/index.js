import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  fullHeight: {
    height: "100%"
  },
  header: {
    textTransform: "uppercase",
    color: theme.app.colors.blueGrey[100],
    borderBottom: `1px solid ${theme.app.colors.blueGrey[500]}`,
    paddingBottom: theme.spacing.unit
  },
  content: {
    paddingTop: theme.spacing.unit * 2
  }
});

const Section = ({ title, grid, xs = 12, sm, md, classes, children }) => (
  <Grid item xs={xs} sm={sm} md={md} {...grid}>
    <Card className={classes.root}>
      {title && <div className={classes.header}>{title}</div>}

      <div className={classes.content}>{children}</div>
    </Card>
  </Grid>
);

const SectionWithStyles = withStyles(styles)(Section);

SectionWithStyles.Container = ({ children, ...otherProps }) => (
  <Grid container spacing={2} {...otherProps}>
    {children}
  </Grid>
);

export default SectionWithStyles;
