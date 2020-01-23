import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";
import primary from "@material-ui/core/colors/blueGrey";
import secondary from "@material-ui/core/colors/lightBlue"; // TODO: or indigo?

// https://material-ui.com/customization/themes/#type-light-dark-theme
const theme = createMuiTheme({
  palette: {
    type: "dark", // Switching the dark mode on is a single property value change.
    primary,
    secondary,

    background: {
      paper: "#2c3e50"
    }
  },
  app: {
    colors: {
      sidebar: "#1d2935",
      blueGrey: primary,

      // : "#6A8AAC",

      content: "#344a5f",
      block: "#2c3e50",

      error: red[300],
      warn: orange[300],
      good: green[300],
      dark: "#2F2F2F",

      lightblue: "#6A8AAC",
      lightgrey: "#F0F0F0",
      grey: "#444444"
    },
    toolbar: {
      height: 36,
      colors: {
        background: "#1d2935",
        hover: "#1d2935",
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
