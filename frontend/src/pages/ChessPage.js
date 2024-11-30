import React, { useState } from "react";
import { Box } from "@mui/material";
import ChessBoard from "../components/ChessBoard"; // Replace with your actual ChessBoard component
import ButtonMenu from "../components/ButtonMenu";
import PlayerInformation from "../components/PlayerInformation";

function ChessPage(props) {
  const { handleBack, humanState, aiState } = props;
  const [ingame, setIngame] = useState(false);
  const [playerIsBlack, SetplayerIsBlack] = useState(true);

  // Handlers for the AI Model dropup menu
  const handleIngame = () => {
    //to do
    setIngame(true);
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
      <PlayerInformation
        gameMode={{ humanState, aiState }}
        playerIsBlack={playerIsBlack}
      />
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
