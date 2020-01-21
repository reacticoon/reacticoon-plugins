import React, { Component } from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import getTheme from "../utils/getTheme";

class Content extends Component {
  render() {
    const { children } = this.props;

    const theme = getTheme();

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </React.Fragment>
    );
  }
}

Content.displayName = "reacticoon-material-ui_Content";

export default Content;
