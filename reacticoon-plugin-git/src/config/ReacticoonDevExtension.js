import React from "react";
import Icon from "../../../reacticoon-dev-plugin/src/components/svg/Git";

export default {
  plugin: "ReacticoonDev",
  description: "Git",
  config: {
    devDashboard: {
      sections: [
        {
          label: "Git",
          icon: Icon,
          route: "REACTICOON_PLUGIN_GIT__DASHBOARD"
        }
      ]
    }
  }
};
