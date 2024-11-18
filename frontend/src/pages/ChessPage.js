import React from "react";
import { Box, Button, Typography, Container, CssBaseline } from "@mui/material";

function ChessPage({ handleLogout }) {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          backgroundColor: "#f4f4f4", // 背景色
        }}
      >
        {/* Header */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #ddd",
            padding: "16px 0",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Header
          </Typography>
        </Box>

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
          }}
        >
          <Typography variant="h4" sx={{ color: "#000" }}>
            Chess Board
          </Typography>
        </Container>

        {/* Bottom Buttons */}
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
      </Box>
    </>
  );
}

export default ChessPage;
