import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./pages/LoginPage";
import theme from "./theme/index";
import ChessPage from "./pages/ChessPage";
function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };
  return (
    <ThemeProvider theme={theme}>
      {!login && <LoginPage handleLogin={handleLogin} />}
      {login && <ChessPage handleLogout={handleLogout} />}
    </ThemeProvider>
  );
}

export default App;
