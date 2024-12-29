import React, { useState } from "react";
import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import ChessBoard from "../components/ChessBoard"; // Replace with your actual ChessBoard component

function ChessPage(props) {
  const { handleBack, humanState, aiState } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedModel, setSelectedModel] = useState("");

  // Handlers for the AI Model dropup menu
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectModel = (model) => {
    setSelectedModel(model);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Chess Board Area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <ChessBoard /> {/* Replace with your custom ChessBoard component */}
      </Box>

      {/* Player/AI Model Selection */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          padding: "16px",
        }}
      >
        {/* Left side player information logic handled here */}
        {humanState && (
          <Typography variant="body1" color="black">
            PlayerUserName.
          </Typography>
        )}

        {aiState && (
          <>
            <Button
              variant="outlined"
              onClick={handleOpenMenu}
              sx={{ flex: 1, maxWidth: "300px" }}
            >
              AI Model {selectedModel && `(${selectedModel})`}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={() => handleSelectModel("Model 1")}>
                Model 1
              </MenuItem>
              <MenuItem onClick={() => handleSelectModel("Model 2")}>
                Model 2
              </MenuItem>
              <MenuItem onClick={() => handleSelectModel("Model 3")}>
                Model 3
              </MenuItem>
            </Menu>
          </>
        )}

        <Button
          variant="outlined"
          onClick={handleOpenMenu}
          sx={{ flex: 1, maxWidth: "300px" }}
        >
          AI Model {selectedModel && `(${selectedModel})`}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={() => handleSelectModel("Model 1")}>
            Model 1
          </MenuItem>
          <MenuItem onClick={() => handleSelectModel("Model 2")}>
            Model 2
          </MenuItem>
          <MenuItem onClick={() => handleSelectModel("Model 3")}>
            Model 3
          </MenuItem>
        </Menu>
      </Box>

      {/* Buttons: Start, Change Color, Back */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "16px",
        }}
      >
        <Button variant="outlined">Start</Button>
        <Button variant="outlined">Change Color</Button>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Box>
  );
}

export default ChessPage;
