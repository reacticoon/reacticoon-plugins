import React from "react";

import clsx from "clsx";
import { generatePluginRoutes } from "reacticoon/plugin/config";
import isEmpty from "lodash/isEmpty";
import { withStyles } from "@material-ui/core/styles";
import PluginContainer from "../../../modules/plugins/view/PluginContainer";
import Typography from "@material-ui/core/Typography";
import Section from "../../../components/Section";
import SvgLogo from "../../../components/SvgLogo";
import Pre from "../../../components/Pre";
import LaunchEditorButton from "../../../components/LaunchEditorButton";
import ModulesView from "./ModulesView";
import RoutingView from "./RoutingView";
import EventsView from "./EventsView";
import EventsHandlerView from "./EventsHandlerView";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
  logo: {
    width: 125,
    height: 125
  },
  action: {
    marginTop: theme.spacing(4)
  }
});

const PluginView = ({ pluginName, config, classes }) => (
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
                  {pluginData.identity.hasLogo && (
                    <SvgLogo svg={pluginData.identity.logo} size={135} />
                  )}
                </div>
              </div>
            </div>
          </Section>

          <Section title="Configuration">
            {isEmpty(pluginData.config) ? (
              <p>No configuration</p>
            ) : (
              <Pre content={pluginData.config} />
            )}
          </Section>

          <Section title="Modules">
            <ModulesView modules={pluginData.plugin.modules} />
          </Section>

          <Section title="Routing">
            <RoutingView routing={generatePluginRoutes(pluginData.plugin)} />
          </Section>

          <Section title="Events">
            <EventsView events={pluginData.plugin.events} />
          </Section>

          <Section title="Events handler">
            <EventsHandlerView
              eventsHandler={pluginData.plugin.eventsHandler}
            />
          </Section>
        </Section.Container>
      )
    }
  </PluginContainer>
);

export default withStyles(styles)(PluginView);
