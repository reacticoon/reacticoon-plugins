import React from "react";

import { findIndexOnArray } from "reacticoon/utils/array";

import { DevToolbarRoute } from "../../modules/devToolBar";
import {
  getReactVersion,
  getReactVersionDocLink
} from "reacticoon/environment";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ReacticoonLogo from "../../components/svg/ReacticoonLogo";
import Tabs from "../../views/Tabs";
import DevToolbarDetailRequestInfo from "./DevToolbarDetailRequestInfo";
import DevToolbarStoreInfo from "./DevToolbarStoreInfo";
import DevToolbarActions from "./DevToolbarActions";
import SelectorsList from "./SelectorsList";
import ReacticoonEventsView from "./ReacticoonEventsView";
import ModulesList from "./ModulesList";
import LogsView from "./Logs";
import Performance from "./Performance";
import Toolbar from "./Toolbar";

const styles = theme => ({
  root: {
    position: "fixed",
    background: theme.app.colors.content,
    bottom: theme.app.toolbar.height,
    left: 0,
    right: 0,
    top: 0,
    paddingRight: theme.spacing(1),
    display: "flex",
    zIndex: 1300,
    overflowY: "auto"
  },
  rootHide: {
    display: "none"
  },
  header: {
    // background: theme.app.toolbar.colors.background,
    height: theme.app.toolbar.header.height,
    position: "absolute",
    top: 0,
    left: theme.app.toolbar.detail.sidebar.width,
    right: 0,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing.unit
  },
  headerVersion: {
    marginLeft: "auto" // put on the right
  },
  content: {
    width: "100%",
    display: "flex",
    paddingTop: theme.app.toolbar.header.height + theme.spacing(2),
    paddingLeft: theme.app.toolbar.detail.sidebar.width,
    paddingBottom: 54,
    background: theme.app.colors.content
  },
  sidebarHeader: {
    width: theme.app.toolbar.detail.sidebar.width,
    position: "fixed",
    height: theme.app.toolbar.header.height,
    top: 0,
    bottom: 0,

    background: theme.app.toolbar.colors.background,
    left: 0
  },
  headerBrand: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing(1),

    "& img": {
      paddingRight: theme.spacing(1)
    }
  },
  sidebarSeparator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  tabsView_root: {
    width: theme.app.toolbar.detail.sidebar.width,
    position: "fixed",
    top: theme.app.toolbar.header.height,
    bottom: 0,

    background: theme.app.toolbar.colors.background,
    left: 0,
    paddingTop: theme.spacing.unit * 2
  },
  tabsView_content: {
    width: "100%",
    maxWidth: 1200,
    margin: "auto",
    overflowY: "auto",
    overflowX: "hidden",
    height: "calc(100vh - 100px)"
  }
});

const DevToolbarDetail = ({
  show,
  route,
  routeName,
  params,
  devToolbarRoute,
  classes,
  extendedTabs,
  onToggle
}) => {
  const tabs = [
    {
      id: DevToolbarRoute.infos,
      label: "Infos"
    },
    {
      id: DevToolbarRoute.modules,
      label: "Modules"
    },
    {
      id: DevToolbarRoute.performances,
      label: "Performances"
    },
    {
      id: DevToolbarRoute.actions,
      label: "Actions & selectors"
    },
    {
      id: DevToolbarRoute.store,
      label: "Store"
    },
    {
      id: DevToolbarRoute.events,
      label: "Reacticoon events"
    },
    {
      id: DevToolbarRoute.logs,
      label: "Logs"
    }
  ].concat(extendedTabs.map(tab => ({ label: tab.label })));

  let defaultTab = findIndexOnArray(tabs, tab => tab.id === devToolbarRoute);

  if (defaultTab === -1) {
    defaultTab = 0;
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.rootHide]: !show
      })}
    >
      <div className={classes.header}>
        {/* TODO: link to reacticoon doc / react  */}
        <div className={classes.headerVersion}>
          <a href={getReactVersionDocLink()} target="_blank">
            {getReactVersion()}
          </a>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.sidebarHeader}>
          <div className={classes.headerBrand}>
            <ReacticoonLogo height={32} />
            <h2>Dev Tools Debugger</h2>
          </div>
          <Divider className={classes.sidebarSeparator} />
        </div>
        <Tabs
          vertical
          defaultTab={defaultTab}
          tabsViewClasses={{
            root: classes.tabsView_root,
            content: classes.tabsView_content
          }}
          tabs={tabs.map(tab => ({
            label: tab.label
          }))}
          content={[
            // 0
            <DevToolbarDetailRequestInfo route={route} params={params} />,
            <ModulesList />,
            <Performance />,
            //
            <Grid container>
              <Grid item xs={6}>
                <DevToolbarActions />
              </Grid>

              <Grid item xs={6}>
                <SelectorsList />
              </Grid>
            </Grid>,
            //
            <DevToolbarStoreInfo />,
            <ReacticoonEventsView />,
            <LogsView />
          ].concat(extendedTabs.map(tab => React.createElement(tab.view)))}
        />
      </div>

      {/* BOTTOM */}
      <Toolbar
        show
        route={route}
        routeName={routeName}
        onToggle={onToggle}
        onToggleDetail={onToggle}
      />
    </div>
  );
};

export default withStyles(styles)(DevToolbarDetail);
