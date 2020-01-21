import React from "react";

import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "reacticoon/routing";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ActivePluginsContainer from "../../../modules/plugins/view/ActivePluginsContainer";

const styles = theme => ({
  row: {
    display: "flex",
    paddingBottom: theme.spacing(2)
  },
  icon: {},
  content: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(2)
  },
  header: {},
  name: {},
  metadata: {
    display: "flex",
    alignItems: "center"
  },
  versions: {
    color: theme.app.colors.lightgrey,
    width: 170
  },
  description: {},
  hidden: {
    display: "none"
  },
  official: {
    paddingLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    color: theme.app.colors.lightgrey,

    "& svg": {
      paddingRight: theme.spacing(0.5),
      color: theme.app.colors.lightgrey
    }
  },
  installed: {
    paddingLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    color: theme.app.colors.lightgrey,
    "& svg": {
      paddingRight: theme.spacing(0.5),
      color: theme.app.colors.lightgrey
    }
  }
});

const ActivePlugins = ({ classes }) => (
  <div>
    <ActivePluginsContainer>
      {({ plugins }) =>
        plugins.map((pluginData, index) => (
          <div key={index} className={classes.row}>
            <div className={classes.icon}>{/* TODO: icon */}</div>
            <div className={classes.content}>
              <div className={classes.header}>
                <div className={classes.name}>
                  <Link
                    to={Link.getRoute("REACTICOON_PLUGIN")}
                    params={{
                      pluginName: pluginData.identity.name
                    }}
                  >
                    {pluginData.identity.name}
                  </Link>
                </div>
                <div className={classes.description}>
                  {pluginData.identity.description}
                </div>
              </div>

              <div className={classes.metadata}>
                <div className={classes.versions}>
                  <span>version {pluginData.identity.version}</span>
                  &nbsp;&nbsp;
                  <span>latest {pluginData.identity.latestVersion}</span>
                </div>
                <div
                  className={clsx(classes.official, {
                    [classes.hidden]: !pluginData.identity.isOfficial
                  })}
                >
                  <StarIcon /> Official
                </div>
                <div
                  className={clsx(classes.installed, {
                    [classes.hidden]: !pluginData.identity.isInstalled
                  })}
                >
                  <CheckCircleIcon /> Installed
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </ActivePluginsContainer>
  </div>
);

export default withStyles(styles)(ActivePlugins);