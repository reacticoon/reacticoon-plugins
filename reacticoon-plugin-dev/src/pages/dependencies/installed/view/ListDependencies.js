import React from "react";

import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "reacticoon/routing";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Section from "../../../../components/Section";

const styles = theme => ({
  row: {
    display: "flex",
    padding: theme.spacing(2),

    "&:hover": {
      background: theme.app.colors.lightgrey
    }
  },
  icon: {
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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

const DependencyList = ({ list, classes }) =>
  list.map((dependency, index) => (
    <div key={index} className={classes.row}>
      <img className={classes.icon} src={dependency.logoUrl} />
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.name}>
            <Link
              to={Link.getRoute("REACTICOON_DEPENDENCY_DETAIL")}
              params={{
                dependencyName: dependency.name
              }}
            >
              {dependency.name}
            </Link>
          </div>
          <div className={classes.description}>{dependency.description}</div>
        </div>

        <div className={classes.metadata}>
          <div className={classes.versions}>
            <span>version {dependency.version.current}</span>
            &nbsp;&nbsp;
            <span>latest {dependency.version.latest}</span>
          </div>
          <div
            className={clsx(classes.official, {
              [classes.hidden]: !dependency.isOfficial
            })}
          >
            <StarIcon /> Official
          </div>
          <div
            className={clsx(classes.installed, {
              [classes.hidden]: !dependency.isInstalled
            })}
          >
            <CheckCircleIcon /> Installed
          </div>
          <div
            className={clsx(classes.homepage, {
              [classes.hidden]: !dependency.hasHomepage
            })}
          >
            {dependency.hasHomepage && (
              <Link href={dependency.homepage} newTab>
                <OpenInNewIcon /> More info
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  ));

const ListDependencies = ({ classes }) => (
  <div>
    <div>
      <Link to="REACTICOON_DEPENDENCY_SEARCH">Install dependency</Link>
    </div>
    <CommandContainer command="DEPENDENCIES::INSTALLED::LIST">
      {({ data }) =>
        data && (
          <Section.Container>
            <Section title="Main dependencies">
              <DependencyList list={data.main} classes={classes} />
            </Section>

            <Section title="Dev dependencies">
              <DependencyList list={data.dev} classes={classes} />
            </Section>
          </Section.Container>
        )
      }
    </CommandContainer>
  </div>
);

export default withStyles(styles)(ListDependencies);
