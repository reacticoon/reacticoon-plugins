import React from "react";

import { withStyles } from "@material-ui/core/styles";
import ReacticoonLogo from "../../components/svg/ReacticoonLogo";
import RoutesTable from "../routing/views/RoutesTable";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
});

const PageNotFoundPage = ({ classes }) => (
  <div className={classes.root}>
    <h1>Page not found</h1>

    <ReacticoonLogo height="200" className={classes.logo} />

    <RoutesTable />
  </div>
);

export default withStyles(styles)(PageNotFoundPage);
