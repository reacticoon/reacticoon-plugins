import React from "react";

import Page from "reacticoon-plugin-dev/components/Page";
import ButtonLink from "reacticoon-plugin-dev/components/ButtonLink";
import AddIcon from "@material-ui/icons/Add";
import ListDependencies from "./view/ListDependencies";

const InstalledDependenciesPage = () => (
  <Page
    pageTitle={`Dependencies`}
    pageAction={
      <ButtonLink
        to="REACTICOON_DEPENDENCY_SEARCH"
        size="small"
        color="secondary"
      >
        <AddIcon /> Install dependency
      </ButtonLink>
    }
  >
    <ListDependencies />
  </Page>
);

export default InstalledDependenciesPage;
