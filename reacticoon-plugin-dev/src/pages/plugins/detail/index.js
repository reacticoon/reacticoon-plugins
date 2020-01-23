import React from "react";

import Page from "reacticoon-plugin-dev/components/Page";
import PluginView from "./view/PluginView";

class PluginsPage extends React.Component {
  render() {
    const props = this.props;

    return (
      <Page pageTitle={`Plugin - Detail`}>
        <PluginView pluginName={props.params.pluginName} />
      </Page>
    );
  }
}

export default PluginsPage;
