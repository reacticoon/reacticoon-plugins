import React from "react";

import { getPlugins } from "reacticoon/plugin";
import { Link } from "reacticoon/routing";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class RegisteredFrontPlugins extends React.Component {
  render() {
    return (
      <Table>
        <TableBody>
          {getPlugins().map((pluginData, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link
                  to={Link.getRoute("REACTICOON_PLUGIN")}
                  params={{
                    pluginName: pluginData.plugin.name
                  }}
                  newTab
                >
                  {pluginData.plugin.name}
                </Link>
              </TableCell>
              <TableCell>{pluginData.plugin.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default RegisteredFrontPlugins;
