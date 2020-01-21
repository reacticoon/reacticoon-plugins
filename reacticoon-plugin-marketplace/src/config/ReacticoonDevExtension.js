import React from "react";
import Icon from "@material-ui/icons/Extension";

export default {
  plugin: "ReacticoonDev",
  description: "Marketplace for Reacticoon plugins",
  config: {
    devDashboard: {
      sections: [
        {
          label: "Marketplace",
          icon: Icon,
          route: "REACTICOON_PLUGINS_MARKETPLACE_DASHBOARD"
        }
      ]
    }
  }
};
