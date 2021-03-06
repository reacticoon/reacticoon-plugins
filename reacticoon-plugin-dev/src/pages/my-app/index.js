import React from "react";

import { Link } from "reacticoon/routing";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Page from "components/Page";
import Section from "components/Section";

import modules from "app/config/modules";

class MyAppPage extends React.Component {
  render() {
    return (
      <Page pageTitle={`App`}>
        <Section.Container>
          <Section title="Info" grid={{ xs: 6 }} />

          <Section title="Modules">
            <p>
              This only list modules defined on your `config/modules`.
              Lazy-loaded modules and plugins modules are not defined here.
            </p>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {modules.map((module, index) => (
                  <TableRow module={module}>
                    <TableCell>
                      <Link
                        to={Link.getRoute("REACTICOON_MODULE")}
                        params={{ moduleName: module.name }}
                      >
                        {module.name}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>

          <Section title="Entities" />

          <Section title="Middlewares" />
        </Section.Container>
      </Page>
    );
  }
}

export default MyAppPage;
