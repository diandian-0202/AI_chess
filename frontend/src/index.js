import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* for global CSS standardization */}
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
