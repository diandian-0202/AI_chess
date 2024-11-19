import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./pages/LoginPage";
import theme from "./theme/index";
import ChessPage from "./pages/ChessPage";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };
  const renderContent = () => {
    if (!login) {
      return <LoginPage handleLogin={handleLogin} />;
    } else {
      return <ChessPage handleLogout={handleLogout} />;
    }
  };
  // {!login && <LoginPage handleLogin={handleLogin} />}
  // {login && <ChessPage handleLogout={handleLogout} />}
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {renderContent()}
    </ThemeProvider>
  );
}

export default App;
