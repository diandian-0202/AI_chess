import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ background: "linear-gradient(90deg, #654321, #ff8c00)" }}
    >
      <Toolbar>
        <Typography
          sx={{
            flexGrow: 1,
            fontFamily: "Roboto, serif",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          Gomoku AI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
