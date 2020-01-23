import React from "react";

import Page from "../../../components/Page";
import DependencyView from "./view/DependencyView";

class DependencyDetailPage extends React.Component {
  render() {
    const props = this.props;

    return (
      <Page pageTitle={`Dependency - Detail`}>
        <DependencyView dependencyName={props.params.dependencyName} />
      </Page>
    );
  }
}

export default DependencyDetailPage;
