import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export default {
  plugin: "ReacticoonDev",
  description: "Continuous integration",
  config: {
    devDashboard: {
      sections: [
        {
          label: "CI",
          icon: CheckCircleOutlineIcon,
          route: "REACTICOON_PLUGIN_CI_DASHBOARD"
        }
      ]
    }
  }
};
