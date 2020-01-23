import React from "react";
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

export const mainListItems = (
  <div>
    <Link to={Link.getRoute("REACTICOON_DASHBOARD")}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link to={Link.getRoute("REACTICOON_BUILD")}>
      <ListItem button>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Build" />
      </ListItem>
    </Link>

    <Link to={Link.getRoute("REACTICOON_TESTING")}>
      <ListItem button>
        <ListItemIcon>
          <CheckCircleOutline />
        </ListItemIcon>
        <ListItemText primary="Testing" />
      </ListItem>
    </Link>

    <Link to={Link.getRoute("REACTICOON_ROUTING")}>
      <ListItem button>
        <ListItemIcon>
          <ExploreIcon />
        </ListItemIcon>
        <ListItemText primary="Routing" />
      </ListItem>
    </Link>

    <Link to={Link.getRoute("REACTICOON_MY_APP")}>
      <ListItem button>
        <ListItemIcon>
          <WhatshotIcon />
        </ListItemIcon>
        <ListItemText primary="App" />
      </ListItem>
    </Link>

    <Link to={Link.getRoute("REACTICOON_DEPENDENCIES_INSTALLED")}>
      <ListItem button>
        <ListItemIcon>
          <LibraryAddIcon />
        </ListItemIcon>
        <ListItemText primary="Dependencies" />
      </ListItem>
    </Link>

    <Link to={Link.getRoute("REACTICOON_PLUGINS")}>
      <ListItem button>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Plugins" />
      </ListItem>
    </Link>

    <Link to={Link.getRoute("REACTICOON_REPORTS")}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    {getExtendedDashboardSections().map((section, index) => (
      <Link key={index} to={Link.getRoute(section.route)}>
        <ListItem button>
          {section.icon && (
            <ListItemIcon>{React.createElement(section.icon)}</ListItemIcon>
          )}
          <ListItemText primary={section.label} />
        </ListItem>
      </Link>
    ))}
  </div>
);
