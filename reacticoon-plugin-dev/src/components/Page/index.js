import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { getReacticoonRepositoryUrl } from "reacticoon/environment";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { MainListItems, SecondaryListItems } from "./listItems";
import ReacticoonLogo from "../svg/ReacticoonLogo";
import DevToolsTheme from "./DevToolsTheme";
// import DarkTheme from "./DarkTheme";
import FlashMessagesSnackbarView from "./FlashMessagesSnackbarView";
import RouteContext from "reacticoon/archi/components/RouteContext";

const drawerWidth = 220; // sidebar width

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarBrandArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    paddingLeft: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  toolbarBrand: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 8px"
  },
  tootlbarBrandText: {
    fontSize: 20,
    paddingLeft: theme.spacing(2)
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: theme.app.colors.content,
    background: "#344a5f",
    boxShadow: "none",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1,
    fontSize: 28
  },
  pageAction: {
    marginRight: theme.spacing(2)
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    background: theme.app.colors.sidebar,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 10,
    minHeight: "100vh",
    overflow: "auto",
    background: theme.app.colors.content
  },
  "@global": {
    body: {
      overflow: "hidden"
    },

    // TODO:
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#3a5169"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#b4c7d0",
      border: "3px solid transparent",
      backgroundClip: "padding-box",
      borderRadius: "5px"
    },
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#3a5169",
      outline: "1px solid slategrey"
    }
  },
  pageContent: {
    width: "100%",
    maxWidth: 1200,
    margin: "auto",
    overflowY: "auto",
    overflowX: "hidden",
    height: "calc(100vh - 145px)"
  },
  sidebarMenuList: {
    overflowX: "hidden",
    overflowY: "auto",
    height: "90vh",
    paddingBottom: theme.spacing(6),

    // trick to put scroll bar on the left
    direction: "rtl",
    "& *": {
      direction: "initial"
    }
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  },
  hoverLink: {
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
});

/**
 * Source: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/dashboard/Dashboard.js
 */
class ReacticoonDevPage extends React.Component {
  state = {
    open: true,
    hasError: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
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
    const { classes, pageTitle, pageAction, children } = this.props;

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return (
      <RouteContext.Consumer>
        {({ route, routeParams, location, params }) => (
          <div className={classes.root}>
            <CssBaseline />

            <AppBar
              position="absolute"
              className={clsx(
                classes.appBar,
                this.state.open && classes.appBarShift
              )}
            >
              <Toolbar
                disableGutters={!this.state.open}
                className={classes.toolbar}
              >
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={clsx(
                    classes.menuButton,
                    this.state.open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="headline"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  {pageTitle}
                </Typography>

                {pageAction && (
                  <div className={classes.pageAction}>{pageAction}</div>
                )}

                <a
                  href={getReacticoonRepositoryUrl()}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={classes.hoverLink}
                >
                  <svg
                    style={{
                      height: 30
                    }}
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                      transform="scale(64)"
                    ></path>
                  </svg>
                </a>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(
                  classes.drawerPaper,
                  !this.state.open && classes.drawerPaperClose
                )
              }}
              open={this.state.open}
            >
              <div className={classes.toolbarBrandArea}>
                <div className={classes.toolbarBrand}>
                  <ReacticoonLogo height={32} />

                  <Typography
                    className={classes.tootlbarBrandText}
                    variant="title"
                  >
                    Dev tools
                  </Typography>
                </div>

                <div className={classes.toolbarIcon}>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
              </div>

              <div className={classes.sidebarMenuList}>
                <List style={{ paddingTop: 0 }}>
                  <MainListItems route={route} />
                </List>
                <Divider />
                <List>
                  <SecondaryListItems route={route} />
                </List>
              </div>
            </Drawer>

            <main className={classes.content}>
              <div className={classes.appBarSpacer} />

              <div className={classes.pageContent}>{children}</div>

              <FlashMessagesSnackbarView />
            </main>
          </div>
        )}
      </RouteContext.Consumer>
    );
  }
}

ReacticoonDevPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const Page = withStyles(styles)(ReacticoonDevPage);

export default ({ children, ...otherProps }) => (
  <DevToolsTheme>
    <Page {...otherProps}>{children}</Page>
  </DevToolsTheme>
);
