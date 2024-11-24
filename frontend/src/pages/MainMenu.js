import React from "react";
import { Box, Button } from "@mui/material";

function MainMenu(props) {
  const { handle } = props; // Destructure `handle`
  const { handleLogout, handleHuman, handleAi } = handle; // Extract handlers from `handle`

  return (
    // Main Content
    <Box sx={{ height: "90vh", display: "flex", overflow: "hidden" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: "200px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Spreads buttons across the height
          alignItems: "center",
          padding: "16px",
        }}
      >
        {/* Top Buttons */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "transparent",
            gap: "24px", // Increase spacing between buttons
          }}
        >
          <Button
            onClick={handleHuman}
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "20px",
              backgroundColor: "#3B2F2F", // Set background to black
              color: "white", // Set text color to white
              fontWeight: "bold", // Set text weight to bold
              border: "1px solid black", // Set border color to black
              "&:hover": {
                backgroundColor: "gray", // Set hover effect
              },
            }}
          >
            Human vs AI
          </Button>
          <Button
            onClick={handleAi}
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "20px",
              backgroundColor: "#3B2F2F", // Set background to black
              color: "white", // Set text color to white
              fontWeight: "bold", // Set text weight to bold
              border: "1px solid black", // Set border color to black
              "&:hover": {
                backgroundColor: "gray", // Set hover effect
              },
            }}
          >
            AI vs AI
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "20px",
              backgroundColor: "#3B2F2F", // Set background to black
              color: "white", // Set text color to white
              fontWeight: "bold", // Set text weight to bold
              border: "1px solid black", // Set border color to black
              "&:hover": {
                backgroundColor: "gray", // Set hover effect
              },
            }}
          >
            History
          </Button>
        </Box>

        {/* Bottom Logout Button */}
        <Button
          onClick={handleLogout}
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: "20px",
            backgroundColor: "#3B2F2F", // Set background to black
            color: "white", // Set text color to white
            fontWeight: "bold", // Set text weight to bold
            border: "1px solid black", // Set border color to black
            "&:hover": {
              backgroundColor: "gray", // Set hover effect
            },
          }}
        >
          Logout
        </Button>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#eaeaea", // Optional background for contrast
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "100%", // Ensures it fills the height
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default MainMenu;
