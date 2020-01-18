import React from "react";

import startsWith from "lodash/startsWith";
import { getRoutes, Link, getRouteNameForRoute } from "reacticoon/routing";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import LaunchEditorButton from "../../../components/LaunchEditorButton";

const RoutesTable = ({ withPlugins = true }) => (
  <React.Fragment>
    <LaunchEditorButton src="config/routes.js" label="Open routes" />
    <LaunchEditorButton src="config/RoutingEnum.js" label="Open RoutingEnum" />

    <TableRow>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Path</TableCell>
          <TableCell>Plugin</TableCell>
          <TableCell>Auth required</TableCell>
          <TableCell>Disabled</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {getRoutes()
          // do not display our plugin pages, prefixed with /_rc/
          .filter(
            route => withPlugins || !startsWith(route.definition.path, "/_rc")
          )
          .map((route, index) => {
            {
              /* debugger */
            }
            return (
              <TableRow key={index} route={route}>
                <TableCell>
                  <Link to={Link.getRoute(getRouteNameForRoute(route))} newTab>
                    {getRouteNameForRoute(route)}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to={Link.getRoute(getRouteNameForRoute(route))} newTab>
                    {route.definition.path}
                  </Link>
                </TableCell>
                <TableCell>
                  {route.definition.__plugin && (
                    <Link
                      to={Link.getRoute("REACTICOON_PLUGIN")}
                      params={{ pluginName: route.definition.__plugin }}
                    >
                      {route.definition.__plugin}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {route.definition.authRequired ? "yes" : "no"}
                </TableCell>
                <TableCell>
                  {route.definition.disabled ? "disabled" : "active"}
                </TableCell>
                <TableCell>
                  {/* TODO: */}
                  {/* <LaunchEditorButton src={route.handler} label="Open route code" /> */}
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </TableRow>
  </React.Fragment>
);

export default RoutesTable;
