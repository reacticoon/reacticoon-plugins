import { createMuiTheme } from "@material-ui/core/styles";

import { getPluginConfig } from "reacticoon/plugin";
/**
 * Inspired by getMuiTheme
 * https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
 */

const getTheme = () => {
  const appTheme = getPluginConfig("reacticoon-material-ui").theme;
  let theme = createMuiTheme(
    // getMuiTheme(
    //   {
    //     palette: bmTheme.palette,
    //   },
    // ),  // the default Mui theme
    appTheme // our override of the mui theme + custom data
  );

  return theme;
};

export default getTheme;
