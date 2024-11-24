import React, { useState } from "react";
import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import ChessBoard from "../components/ChessBoard"; // Replace with your actual ChessBoard component
import ButtonMenu from "../components/ButtonMenu";

function ChessPage(props) {
  const { handleBack, humanState, aiState } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedModel, setSelectedModel] = useState("");
  const [ingame, setIngame] = useState(false);
  const [playerIsBlack, SetplayerIsBlack] = useState(true);

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

  const handleIngame = (model) => {
    if (selectedModel != "") {
      setIngame(true);
    }
  };

  const handleChangeColor = (model) => {
    SetplayerIsBlack(!playerIsBlack);
  };

  return (
    <Box sx={{ height: "90vh", display: "flex", flexDirection: "column" }}>
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
        <ChessBoard ingame={ingame} />
        {/* Replace with your custom ChessBoard component */}
      </Box>
      {/* end of Chess Board Area */}

      {/* Player/AI Model Selection ---------------------------------------------------------------------------*/}
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
          <Button
            variant="outlined"
            sx={{
              fontWeight: "bold",
              flex: 1,
              maxWidth: "300px",
              backgroundColor: playerIsBlack ? "black" : "white",
              color: playerIsBlack ? "white" : "black",
            }}
          >
            PlayerUserName.
          </Button>
        )}

        {/* ---------------------------------------------------------------------------*/}

        {aiState && (
          <>
            <Button
              variant="outlined"
              onClick={handleOpenMenu}
              sx={{
                fontWeight: "bold",
                flex: 1,
                maxWidth: "300px",
                backgroundColor: playerIsBlack ? "black" : "white",
                color: playerIsBlack ? "white" : "black",
              }}
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
          sx={{
            fontWeight: "bold",
            flex: 1,
            maxWidth: "300px",
            backgroundColor: playerIsBlack ? "white" : "black",
            color: playerIsBlack ? "black" : "white",
          }}
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
      {/* end of Player/AI Model Selection ---------------------------------------------------------------------------*/}

      {/* in the future, this need to be replace depends on ingame or not*/}
      <ButtonMenu
        handleBack={handleBack}
        handleIngame={handleIngame}
        handleChangeColor={handleChangeColor}
      />
      {/* end of the buttonMenu*/}

      {/*end of entire box*/}
    </Box>
    //end of largest box
  );
}

export default ChessPage;
