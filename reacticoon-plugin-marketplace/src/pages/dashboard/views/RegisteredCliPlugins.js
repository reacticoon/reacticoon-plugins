import React from "react";

import { Link } from "reacticoon/routing";

import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class RegisteredCliPlugins extends React.Component {
  render() {
    return (
      <Table>
        <CommandContainer command="PLUGINS">
          {({ data }) => (
            <TableBody>
              {(data || []).map(cliPlugin => (
                <TableRow>
                  <TableCell>{cliPlugin.name}</TableCell>
                  <TableCell>{cliPlugin.id}</TableCell>
                  <TableCell>{cliPlugin.version}</TableCell>
                  <TableCell>
                    <Link
                      to={Link.getRoute(
                        "REACTICOON_PLUGINS_MARKETPLACE_PLUGIN_HOMEPAGE"
                      )}
                      params={{
                        pluginId: cliPlugin.id
                      }}
                    >
                      Open
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </CommandContainer>
      </Table>
    );
  }
}

export default RegisteredCliPlugins;
