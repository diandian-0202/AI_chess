import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme/index";

import LoginPage from "./pages/LoginPage";
import MainMenu from "./pages/MainMenu";
import ChessPage from "./pages/ChessPage";
import Header from "./components/Header";

function App() {
  const [login, setLogin] = useState(false);
  const [human, setHuman] = useState(false);
  const [ai, setAi] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };

  const handleHuman = () => {
    setHuman(true);
  };

  const handleAi = () => {
    setAi(true);
  };

  const handleBack = () => {
    setHuman(false);
    setAi(false);
  };

  const mainMenuHandles = {
    handleLogout: handleLogout,
    handleHuman: handleHuman,
    handleAi: handleAi,
  };

  const renderContent = () => {
    if (!login) {
      return <LoginPage handleLogin={handleLogin} />;
    } else {
      if (!human && !ai) {
        return <MainMenu handle={mainMenuHandles} />;
      } else {
        return (
          <ChessPage handleBack={handleBack} humanState={human} aiState={ai} />
        );
      }
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
