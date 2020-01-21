import React from "react";

import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "reacticoon/routing";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import ActivePluginsContainer from "../../../modules/plugins/view/ActivePluginsContainer";
import SvgLogo from "../../../components/SvgLogo";

const styles = theme => ({
  row: {
    display: "flex",
    padding: theme.spacing(2),

    "&:hover": {
      background: theme.app.colors.lightgrey
    }
  },
  icon: {
    width: 50
  },
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
    color: theme.app.colors.lightblue,
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
    color: theme.app.colors.lightblue,

    "& svg": {
      paddingRight: theme.spacing(0.5),
      color: theme.app.colors.lightblue
    }
  },
  installed: {
    paddingLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    color: theme.app.colors.lightblue,
    "& svg": {
      paddingRight: theme.spacing(0.5),
      color: theme.app.colors.lightblue
    }
  },
  homepage: {
    paddingLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    color: theme.app.colors.lightblue,
    "& svg": {
      paddingRight: theme.spacing(0.5),
      color: theme.app.colors.lightblue
    }
  }
});

const ActivePlugins = ({ classes }) => (
  <div>
    <ActivePluginsContainer>
      {({ plugins }) =>
        plugins.map((pluginData, index) => (
          <div key={index} className={classes.row}>
            <div className={classes.icon}>
              {pluginData.identity.hasLogo && (
                <SvgLogo svg={pluginData.identity.logo} size={35} />
              )}
            </div>
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
                <div
                  className={clsx(classes.homepage, {
                    [classes.hidden]: !pluginData.identity.hasHomepage
                  })}
                >
                  {pluginData.identity.hasHomepage && (
                    <Link href={pluginData.identity.homepage} newTab>
                      <OpenInNewIcon /> More info
                    </Link>
                  )}
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
