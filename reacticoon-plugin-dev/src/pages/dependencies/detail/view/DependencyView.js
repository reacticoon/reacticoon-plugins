import React from "react";

import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { Link } from "reacticoon/routing";
import { withStyles } from "@material-ui/core/styles";
import DependencyContainer from "reacticoon-plugin-dev/modules/dependency/view/DependencyContainer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Section from "reacticoon-plugin-dev/components/Section";
import SvgLogo from "reacticoon-plugin-dev/components/SvgLogo";
import Pre from "reacticoon-plugin-dev/components/Pre";
import MarkdownView from "reacticoon-plugin-dev/components/MarkdownView";
import LaunchEditorButton from "reacticoon-plugin-dev/components/LaunchEditorButton";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GetAppIcon from "@material-ui/icons/GetApp";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

const styles = theme => ({
  content: {
    display: "flex",
    justifyContent: "space-between"
  },
  left: {},
  right: {},
  name: {
    fontSize: "2rem"
  },
  description: {
    marginTop: theme.spacing(1)
  },
  metadata: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2)
  },
  versions: {
    color: theme.app.colors.lightblue,
    width: 170
  },
  hidden: {
    display: "none!important"
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
  install: {
    "& svg": {
      marginRight: theme.spacing(1)
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
  },
  logo: {
    width: 135,
    height: 135
  },
  action: {
    marginTop: theme.spacing(4)
  }
});

const DependencyView = ({ dependencyName, config, classes }) => (
  <DependencyContainer dependencyName={dependencyName}>
    {({ dependencyData }) =>
      dependencyData && (
        <Section.Container>
          <Section>
            <div className={classes.content}>
              <div className={classes.left}>
                <Typography variant="h3" className={classes.name}>
                  {dependencyData.name}
                </Typography>

                <Typography className={classes.description}>
                  {dependencyData.description}
                </Typography>

                <div className={classes.metadata}>
                  <div className={classes.versions}>
                    {dependencyData.isInstalled && (
                      <React.Fragment>
                        <span>version {dependencyData.version.current}</span>
                        &nbsp;&nbsp;
                      </React.Fragment>
                    )}
                    <span>latest {dependencyData.version.latest}</span>
                  </div>
                  <div
                    className={clsx(classes.official, {
                      [classes.hidden]: !dependencyData.isOfficial
                    })}
                  >
                    <StarIcon /> Official
                  </div>

                  <div
                    className={clsx(classes.installed, {
                      [classes.hidden]: !dependencyData.isInstalled
                    })}
                  >
                    <CheckCircleIcon /> Installed
                  </div>

                  <div
                    className={clsx(classes.installed, {
                      [classes.hidden]: dependencyData.isInstalled
                    })}
                  >
                    <NotInterestedIcon /> Not installed
                  </div>

                  <div
                    className={clsx(classes.homepage, {
                      [classes.hidden]: !dependencyData.hasHomepage
                    })}
                  >
                    {dependencyData.hasHomepage && (
                      <Link href={dependencyData.homepage} newTab>
                        <OpenInNewIcon /> More info
                      </Link>
                    )}
                  </div>
                </div>

                <div className={classes.action}>
                  {dependencyData.isInstalled ? (
                    <LaunchEditorButton
                      src={dependencyData.dependencyPath}
                      label="Open dependency code on your IDE"
                      variant="outlined" // TODO: text?
                    />
                  ) : (
                    <div className={classes.install}>
                      {/* TODO: install server command. Ask to confirm */}
                      <Button variant="outlined">
                        <GetAppIcon /> Install
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className={classes.right}>
                <div>
                  {dependencyData.hasLogo ? (
                    <SvgLogo svg={dependencyData.logo} size={135} />
                  ) : (
                    <img
                      className={classes.logo}
                      src={dependencyData.logoUrl}
                    />
                  )}
                </div>
              </div>
            </div>
          </Section>

          <Section title="Readme">
            {!dependencyData.hasReadme ? (
              <p>
                <Link href={dependencyData.npmView.homepage} newTab>
                  Open homepage
                </Link>
              </p>
            ) : (
              <MarkdownView filepath={dependencyData.readmePath} />
            )}
          </Section>
        </Section.Container>
      )
    }
  </DependencyContainer>
);

export default withStyles(styles)(DependencyView);
