import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // 蓝色
    },
    secondary: {
      main: "#ff4081", // 粉色
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* 推荐：用于全局样式的标准化 */}
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
