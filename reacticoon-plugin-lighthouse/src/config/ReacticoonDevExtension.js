import Icon from "../components/Icon";

export default {
  plugin: "ReacticoonDev",
  description: "Lighthouse",
  config: {
    devDashboard: {
      sections: [
        {
          label: "Lighthouse",
          icon: Icon,
          route: "REACTICOON_PLUGIN_LIGHTHOUSE__DASHBOARD"
        }
      ]
    }
  }
};
