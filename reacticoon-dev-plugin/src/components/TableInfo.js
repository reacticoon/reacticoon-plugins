import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {},
  row: {},
  cell: {
    padding: `${theme.spacing(0.5)}px 0`
  },
  label: {
    paddingRight: theme.spacing(3),
    fontSize: 11
  },
  value: {}
});

/**
 * Display a simple table to display info
 */
const InfoTable = ({ data, classes, className }) => {
  return (
    <table className={classNames(className, classes.root)}>
      <tbody>
        {data.map(
          (rowData, index) =>
            rowData && (
              <tr className={classes.row} key={index}>
                <td className={classes.cell}>
                  <Typography
                    component="span"
                    className={classNames(classes.label)}
                  >
                    {rowData.label}
                  </Typography>
                </td>
                <td>
                  <Typography
                    component="span"
                    className={classNames(classes.value)}
                  >
                    {rowData.value}
                  </Typography>
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

InfoTable.propTypes = {
  /**
   * Array of rowData:
   * - label
   * - value
   */
  datas: PropTypes.array.isRequired
};

export default withStyles(styles)(InfoTable);
