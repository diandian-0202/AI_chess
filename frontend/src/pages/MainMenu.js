import React from "react";
import { Box, Button } from "@mui/material";
import gomokuWel from "../assets/GomokuWelcome.jpg";

function MainMenu(props) {
  const { handle } = props; // Destructure handle
  const { handleLogout, handleHuman, handleAi, handleHistory } = handle; // Extract handlers from handle

  return (
    // Main Content
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "20%",
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
            onClick={handleHistory}
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "20px",
              backgroundColor: "#3B2F2F",
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
        {/* end of Top Buttons */}

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
      {/*end of the side bar*/}

      {/* Main Content Area */}
      <Box
        sx={{
          height: "90vh", // Ensures it fills the height
          flex: 1, // Ensures the main area takes the remaining space
          backgroundImage: `url(${gomokuWel})`,
          backgroundSize: "cover", // Makes the image cover the entire Box
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          border: "1px solid black",
        }}
      ></Box>
    </Box>
  );
}

export default MainMenu;
