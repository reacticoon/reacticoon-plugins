import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import MessageBlock from "reacticoon-plugin-dev/components/MessageBlock";

const styles = theme => ({
  root: {
    padding: theme.spacing(2)
  },
  fullHeight: {
    height: "100%"
  },
  header: {
    textTransform: "uppercase",
    color: theme.app.colors.blueGrey[100],
    borderBottom: `1px solid ${theme.app.colors.blueGrey[500]}`,
    paddingBottom: theme.spacing(1)
  },
  content: {
    paddingTop: theme.spacing(2)
  }
});

class Section extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const { title, grid, xs = 12, sm, md, classes, children } = this.props;
    const { error, hasError } = this.state;

    if (hasError) {
      return <MessageBlock.Error>An error occured</MessageBlock.Error>;
    }

    return (
      <Grid item xs={xs} sm={sm} md={md} {...grid}>
        <Card className={classes.root}>
          {title && <div className={classes.header}>{title}</div>}

          <div className={classes.content}>{children}</div>
        </Card>
      </Grid>
    );
  }
}

const SectionWithStyles = withStyles(styles)(Section);

SectionWithStyles.Container = ({ children, ...otherProps }) => (
  <Grid container spacing={2} {...otherProps}>
    {children}
  </Grid>
);

export default SectionWithStyles;
