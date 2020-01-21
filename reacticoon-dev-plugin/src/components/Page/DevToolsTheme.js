import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";

// https://material-ui.com/customization/themes/#type-light-dark-theme
const theme = createMuiTheme({
  palette: {
    type: "light" // Switching the dark mode on is a single property value change.
  },
  app: {
    colors: {
      error: red[300],
      warn: orange[300],
      good: green[300],
      dark: "#2F2F2F",
      lightgrey: "#6A8AAC",
      grey: "#444444"
    },
    toolbar: {
      height: 36,
      colors: {
        background: "#222",
        hover: "#444444",
        warn: orange[300],
        error: red[300],
        good: green[300]
      },
      header: {
        height: 50
      }
    }
  }
  // typography: { useNextVariants: true },
});

function DevToolsTheme({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default DevToolsTheme;
