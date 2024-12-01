import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import gomokuBg from "../assets/Gomoku_bg.jpg";

function LoginPage({ handleLogin }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // const handleLogin = async () => {
  //   if (!username.trim() || !password.trim()) {
  //     alert("Username and Password cannot be empty!");
  //     return; // Exit the function if validation fails
  //   }

  //   try {
  //     const credentials = { username, password }; // Package credentials
  //     const resp = await login(credentials); // Call login API
  //     console.log("Login successful:", resp);
  //     handleLoginSuccess(resp.token); // Pass user info to parent component
  //   } catch (error) {
  //     console.error("Error during login:", error.message);
  //     alert("Failed to login. Please try again.");
  //   }
  // };

  // const handleRegister = async () => {
  //   if (!username.trim() || !password.trim()) {
  //     alert("Username and Password cannot be empty!");
  //     return; // Exit the function if validation fails
  //   }

  //   try {
  //     const credentials = { username, password }; // Package credentials
  //     const response = await register(credentials); // Call register API
  //     console.log("Registration successful:", response);
  //     alert("Registration successful! You can now log in.");
  //   } catch (error) {
  //     console.error("Error during registration:", error.message);
  //     alert("Failed to register. Please try again.");
  //   }
  // };

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${gomokuBg})`,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "white",
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
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username
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
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password
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
            //onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default LoginPage;
