import React from "react";
import { Box, Button } from "@mui/material";

function ButtonMenu({ handleBack, handleIngame, handleChangeColor }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "16px",
      }}
    >
      {/* Buttons: Start, Change Color*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "16px",
          gap: "24px",
        }}
      >
        <Button
          onClick={handleIngame}
          variant="outlined"
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
          Start
        </Button>

        <Button
          onClick={handleChangeColor}
          variant="outlined"
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
          Change Color
        </Button>
      </Box>
      {/*end Buttons: Start, Change Color*/}
      {/*back box*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "16px",
          gap: "24px",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleBack}
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
          Back
        </Button>
      </Box>
      {/*end of back box*/}
    </Box>
  );
}

export default ButtonMenu;
