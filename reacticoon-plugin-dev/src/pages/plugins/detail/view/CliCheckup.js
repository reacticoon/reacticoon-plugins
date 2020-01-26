import React from "react";

import isEmpty from "lodash/isEmpty";

import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const CliCheckup = ({ checkup }) =>
  isEmpty(checkup) ? (
    <Typography>No checkup for this plugin.</Typography>
  ) : (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {checkup.map(checkup => (
            <TableRow>
              <TableCell>{checkup.name}</TableCell>
              <TableCell>{checkup.description || ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

export default CliCheckup;
