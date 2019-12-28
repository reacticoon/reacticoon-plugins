import Icon from "../components/GitIcon";
import GitPiece from "../components/GitPiece"

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
      ],
      pieces: [
        {
          component: GitPiece,
        }
      ]
    }
  }
};
