import React from "react";

import {
  __ENV__,
  __VERSION__,
  __REACTICOON_VERSION__,
  getEnv
} from "reacticoon/environment";
import { sortObjectKeys } from "reacticoon/utils";
import {
  getReacticoonWebsiteUrl,
  getReacticoonOrganisationUrl,
  getReacticoonRepositoryUrl,
  getReactVersion,
  getReactVersionDocLink
} from "reacticoon/environment";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Page from "../../components/Page";
import Pre from "reacticoon-plugin-dev/components/Pre";
import Section from "../../components/Section";
import ReacticoonLogo from "../../components/svg/ReacticoonLogo";

class DashboardPage extends React.Component {
  render() {
    return (
      <Page pageTitle={`Dashboard`}>
        <Section.Container>
          <Section title="Info" grid={{ xs: 6 }}>
            <List>
              <ListItem>App version: {__VERSION__}</ListItem>
              <ListItem>Reacticoon version: {__REACTICOON_VERSION__}</ListItem>
              <ListItem>
                React version:&nbsp;&nbsp;
                <a href={getReactVersionDocLink()} target="_blank">
                  {getReactVersion()}
                </a>
              </ListItem>
            </List>
          </Section>

          <Section title="Help" grid={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid
                sm={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "auto"
                }}
              >
                <ReacticoonLogo height={120} />
              </Grid>
              <Grid sm={8}>
                <List>
                  <ListItem>
                    <a
                      href={getReacticoonWebsiteUrl()}
                      target="_blank"
                      rel="noopener noreferer"
                    >
                      Reacticoon website
                    </a>
                  </ListItem>

                  <ListItem>
                    <a
                      href={`${getReacticoonRepositoryUrl()}/issues`}
                      target="_blank"
                      rel="noopener noreferer"
                    >
                      Github - Issues
                    </a>
                  </ListItem>

                  <ListItem>
                    <a
                      href={getReacticoonOrganisationUrl()}
                      target="_blank"
                      rel="noopener noreferer"
                    >
                      Reacticoon on Github
                    </a>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Section>

          <Section title={`Environment - ${__ENV__}`}>
            <Pre content={getEnv()} />
          </Section>

          <Section title="Process environment">
            <p>
              You can add process environment variables using the command line
              or a .env file. You must prefix your environment variables with{" "}
              <code>REACTICOON_APP__</code>.
            </p>
            <Pre content={sortObjectKeys(process.env)} />
          </Section>
        </Section.Container>
      </Page>
    );
  }
}

export default DashboardPage;
