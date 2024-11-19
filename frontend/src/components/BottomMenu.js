import React from "react";
import { Box, Button } from "@mui/material";

function BottomMenu({ handleLogout }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        padding: "16px 0",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #ddd",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          borderRadius: "24px",
          padding: "8px 24px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Human vs AI
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderRadius: "24px",
          padding: "8px 24px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        AI vs AI
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderRadius: "24px",
          padding: "8px 24px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        History
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderRadius: "24px",
          padding: "8px 24px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
}

export default BottomMenu;
