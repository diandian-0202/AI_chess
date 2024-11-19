import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          Chess
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
