import React from "react";

import isEmpty from "lodash/isEmpty";
import { Link } from "reacticoon/routing";

import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const RoutingView = ({ routing }) =>
  isEmpty(routing.routesDefinitions) ? (
    <Typography>No routes for this plugin.</Typography>
  ) : (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Path</TableCell>
          <TableCell>Auth required</TableCell>
          <TableCell>Disabled</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {routing.routesDefinitions.map(routeDefinition => (
          <TableRow>
            <TableCell>
              <Link to={Link.getRoute(routeDefinition.definition.name)} newTab>
                {routeDefinition.definition.name}
              </Link>
            </TableCell>
            <TableCell>
              <Link to={Link.getRoute(routeDefinition.definition.name)} newTab>
                {routeDefinition.definition.path}
              </Link>
            </TableCell>
            <TableCell>
              {routeDefinition.definition.authRequired ? "yes" : "no"}
            </TableCell>
            <TableCell>
              {routeDefinition.definition.disabled ? "disabled" : "active"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

export default RoutingView;
