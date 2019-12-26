import React from "react";
import Icon from "@material-ui/icons/Build";

export default {
  plugin: "ReacticoonDev",
  description: "Continuous integration",
  config: {
    devDashboard: {
      sections: [
        {
          label: "CI",
          icon: Icon,
          route: "REACTICOON_PLUGIN_CI_DASHBOARD"
        }
      ]
    }
  }
};
