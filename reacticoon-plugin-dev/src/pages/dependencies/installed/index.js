import React from "react";

import Page from "../../../components/Page";
import ListDependencies from "./view/ListDependencies";

const InstalledDependenciesPage = () => (
  <Page pageTitle={`Dependencies`}>
    <ListDependencies />
  </Page>
);

export default InstalledDependenciesPage;
