import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "reacticoon/routing";
import { getExtendedDashboardSections } from "../../utils";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import AppsIcon from "@material-ui/icons/Apps";
import ExploreIcon from "@material-ui/icons/Explore";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import BuildIcon from "@material-ui/icons/Build";
import CheckCircleOutline from "@material-ui/icons/CheckCircle";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const ItemTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
  // TODO: arrow color
}))(Tooltip);

const useStyles = makeStyles(theme => ({
  selected: {
    // background: `${theme.palette.secondary.light}!important`,
    background: `rgba(66, 185, 131, 0.05) !important`,

    color: `${theme.palette.secondary.main}!important`,

    "& svg": {
      color: `${theme.palette.secondary.main}!important`
    }
  }
}));

const Item = ({ routeDef, route }) => {
  const classes = useStyles();
  const definition = Link.getRoute(routeDef.to);
  const isSelected = route ? route.name === definition.name : false;

  return (
    <Link to={definition}>
      <ItemTooltip
        TransitionComponent={Zoom}
        title={routeDef.label}
        placement="right"
        arrow
      >
        <ListItem
          button
          selected={isSelected}
          classes={{ selected: classes.selected }}
        >
          <ListItemIcon>{routeDef.icon}</ListItemIcon>
          <ListItemText primary={routeDef.label} />
        </ListItem>
      </ItemTooltip>
    </Link>
  );
};

export const MainListItems = ({ route }) => {
  const routes = [
    {
      to: "REACTICOON_DASHBOARD",
      icon: <DashboardIcon />,
      label: "Dashboard"
    },

    {
      to: "REACTICOON_BUILD",
      icon: <BuildIcon />,
      label: "Build"
    },

    {
      to: "REACTICOON_TESTING",
      icon: <CheckCircleOutline />,
      label: "Testing"
    },

    {
      to: "REACTICOON_ROUTING",
      icon: <ExploreIcon />,
      label: "Routing"
    },

    {
      to: "REACTICOON_MY_APP",
      icon: <WhatshotIcon />,
      label: "App"
    },

    {
      to: "REACTICOON_DEPENDENCIES_INSTALLED",
      icon: <LibraryAddIcon />,
      label: "Dependencies"
    },

    {
      to: "REACTICOON_PLUGINS",
      icon: <AppsIcon />,
      label: "Plugins"
    },

    {
      to: "REACTICOON_REPORTS",
      icon: <LayersIcon />,
      label: "Reports"
    }
  ];

  return routes.map(routeDef => (
    <Item key={routeDef.to} routeDef={routeDef} route={route} />
  ));
};

export const SecondaryListItems = ({ route }) =>
  getExtendedDashboardSections().map((section, index) => {
    const routeDef = {
      to: section.route,
      icon: React.createElement(section.icon),
      label: section.label
    };
    return <Item key={routeDef.to} routeDef={routeDef} route={route} />;
  });
