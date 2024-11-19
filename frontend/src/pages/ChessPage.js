import React from "react";
import { Box, Container } from "@mui/material";
import ChessBoard from "../components/ChessBoard";
import BottomMenu from "../components/BottomMenu";
function ChessPage({ handleLogout }) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        backgroundColor: "#f4f4f4", // 背景色
      }}
    >
      {/* Chess Board */}
      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          margin: "32px 0",
          padding: "32px",
          boxSizing: "border-box",
        }}
      >
        <ChessBoard />
      </Container>

      {/* Bottom Buttons */}
      <BottomMenu handleLogout={handleLogout} />
    </Box>
  );
}

export default ChessPage;
