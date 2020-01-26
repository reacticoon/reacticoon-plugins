import React from "react";

import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { generatePluginRoutes } from "reacticoon/plugin/config";
import { Link } from "reacticoon/routing";
import { withStyles } from "@material-ui/core/styles";
import PluginContainer from "reacticoon-plugin-dev/modules/plugins/view/PluginContainer";
import Typography from "@material-ui/core/Typography";
import Section from "reacticoon-plugin-dev/components/Section";
import SvgLogo from "reacticoon-plugin-dev/components/SvgLogo";
import Pre from "reacticoon-plugin-dev/components/Pre";
import MarkdownView from "reacticoon-plugin-dev/components/MarkdownView";
import LaunchEditorButton from "reacticoon-plugin-dev/components/LaunchEditorButton";
import ModulesView from "./ModulesView";
import RoutingView from "./RoutingView";
import EventsView from "./EventsView";
import EventsHandlerView from "./EventsHandlerView";
import CliCommands from "./CliCommands";
import CliServerCommands from "./CliServerCommands";
import CliCheckup from "./CliCheckup";
import CliOverrides from "./CliOverrides";
import CliGenerators from "./CliGenerators";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

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
  description: {},
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

const PluginView = ({ pluginName, classes }) => (
  <PluginContainer pluginName={pluginName}>
    {({ pluginData }) =>
      pluginData && (
        <Section.Container>
          <Section>
            <div className={classes.content}>
              <div className={classes.left}>
                <Typography variant="h3" className={classes.name}>
                  {pluginData.identity.name}
                </Typography>

                <Typography className={classes.description}>
                  {pluginData.identity.description}
                </Typography>

                <div className={classes.metadata}>
                  <div className={classes.versions}>
                    <span>version {pluginData.identity.version.current}</span>
                    &nbsp;&nbsp;
                    <span>latest {pluginData.identity.version.latest}</span>
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

                <div className={classes.action}>
                  <LaunchEditorButton
                    src={pluginData.identity.pluginPath}
                    label="Open plugin code on your IDE"
                    variant="outlined" // TODO: text?
                  />
                </div>
              </div>

              <div className={classes.right}>
                <div>
                  {pluginData.identity.hasLogo ? (
                    <SvgLogo svg={pluginData.identity.logo} size={135} />
                  ) : (
                    <img
                      className={classes.logo}
                      src={pluginData.identity.logoUrl}
                    />
                  )}
                </div>
              </div>
            </div>
          </Section>

          <Section title="Readme">
            {!pluginData.identity.hasReadme ? (
              <p>No readme</p>
            ) : (
              <MarkdownView filepath={pluginData.identity.readmePath} />
            )}
          </Section>

          <Section title="Configuration">
            {isEmpty(pluginData.config) ? (
              <p>No configuration</p>
            ) : (
              <Pre content={pluginData.config} />
            )}
          </Section>

          {pluginData.identity.isReacticoonPlugin && (
            <React.Fragment>
              <Section title="Modules">
                <ModulesView modules={pluginData.plugin.modules} />
              </Section>

              <Section title="Routing">
                <RoutingView
                  routing={generatePluginRoutes(pluginData.plugin)}
                />
              </Section>

              <Section title="Events">
                <EventsView events={pluginData.plugin.events} />
              </Section>

              <Section title="Events handler">
                <EventsHandlerView
                  eventsHandler={pluginData.plugin.eventsHandler}
                />
              </Section>
            </React.Fragment>
          )}

          {pluginData.identity.isReacticoonCliPlugin && (
            <React.Fragment>
              <Section title="Commands">
                <CliCommands
                  commands={pluginData.identity.cliPluginData.commands}
                />
              </Section>

              <Section title="Server commands">
                <CliServerCommands
                  serverCommands={
                    pluginData.identity.cliPluginData.serverCommands
                  }
                />
              </Section>

              <Section title="Overrides">
                <CliOverrides
                  overridesData={
                    pluginData.identity.cliPluginData.overridesData
                  }
                />
              </Section>

              <Section title="Checkup">
                <CliCheckup
                  checkup={pluginData.identity.cliPluginData.checkup}
                />
              </Section>

              <Section title="Generators">
                <CliGenerators
                  generators={pluginData.identity.cliPluginData.generators}
                />
              </Section>
            </React.Fragment>
          )}
        </Section.Container>
      )
    }
  </PluginContainer>
);

export default withStyles(styles)(PluginView);
