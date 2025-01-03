import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function LoginPage({ handleLogin }) {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f3f4f6, #d3d3d3)",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          Welcome to Gomoku Game!
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#757575", marginBottom: "32px" }}
        >
          Please login to continue
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: "16px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #ff8c00, #424242)",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "24px",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(45deg, #424242, #ff8c00)",
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#000000",
              color: "#000000",
              padding: "12px 24px",
              borderRadius: "24px",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": {
                borderColor: "#424242",
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default LoginPage;
