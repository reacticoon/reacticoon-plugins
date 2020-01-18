import Icon from "../components/Icon";

export default {
  plugin: "ReacticoonDev",
  description: "BundleStats",
  config: {
    devDashboard: {
      sections: [
        {
          label: "BundleStats",
          icon: Icon,
          route: "REACTICOON_PLUGIN_BUNDLE_STATS__DASHBOARD"
        }
      ]
    }
  }
};
