// import React, { useState } from "react";
// import { Box, Button, Menu, MenuItem } from "@mui/material";
// import

// function PlayerInformation(props) {
//   const { gameMode, playerIsBlack } = props;
//   const [anchorEl1, setAnchorEl1] = useState(null);
//   const [selectedModel1, setSelectedModel1] = useState("");
//   const [anchorEl2, setAnchorEl2] = useState(null);
//   const [selectedModel2, setSelectedModel2] = useState("");
//   const { humanState, aiState } = gameMode;
//   const handleOpenMenu1 = (event) => {
//     setAnchorEl1(event.currentTarget);
//   };

//   const handleOpenMenu2 = (event) => {
//     setAnchorEl2(event.currentTarget);
//   };

//   const handleCloseMenu1 = () => {
//     setAnchorEl1(null);
//   };

//   const handleCloseMenu2 = () => {
//     setAnchorEl2(null);
//   };

//   const handleSelectModel1 = (model) => {
//     setSelectedModel1(model);
//     setAnchorEl1(null);
//   };

//   const handleSelectModel2 = (model) => {
//     setSelectedModel2(model);
//     setAnchorEl2(null);
//   };
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "16px",
//         padding: "16px",
//       }}
//     >
//       {/* Left side player information logic handled here */}
//       {humanState && (
//         <Button
//           variant="outlined"
//           sx={{
//             fontWeight: "bold",
//             flex: 1,
//             maxWidth: "300px",
//             backgroundColor: playerIsBlack ? "black" : "white",
//             color: playerIsBlack ? "white" : "black",
//           }}
//         >
//           PlayerUserName
//         </Button>
//       )}

//       {/* ---------------------------------------------------------------------------*/}

//       {aiState && (
//         <>
//           <Button
//             variant="outlined"
//             onClick={handleOpenMenu1}
//             sx={{
//               fontWeight: "bold",
//               flex: 1,
//               maxWidth: "300px",
//               backgroundColor: playerIsBlack ? "black" : "white",
//               color: playerIsBlack ? "white" : "black",
//             }}
//           >
//             AI Model {selectedModel1 && `(${selectedModel1})`}
//           </Button>
//           <Menu
//             anchorEl={anchorEl1}
//             open={Boolean(anchorEl1)}
//             onClose={handleCloseMenu1}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "center",
//             }}
//             transformOrigin={{
//               vertical: "bottom",
//               horizontal: "center",
//             }}
//           >
//             <MenuItem onClick={() => handleSelectModel1("Model 1")}>
//               Model 1
//             </MenuItem>
//             <MenuItem onClick={() => handleSelectModel1("Model 2")}>
//               Model 2
//             </MenuItem>
//             <MenuItem onClick={() => handleSelectModel1("Model 3")}>
//               Model 3
//             </MenuItem>
//           </Menu>
//         </>
//       )}

//       <Button
//         variant="outlined"
//         onClick={handleOpenMenu2}
//         sx={{
//           fontWeight: "bold",
//           flex: 1,
//           maxWidth: "300px",
//           backgroundColor: playerIsBlack ? "white" : "black",
//           color: playerIsBlack ? "black" : "white",
//         }}
//       >
//         AI Model {selectedModel2 && `(${selectedModel2})`}
//       </Button>
//       <Menu
//         anchorEl={anchorEl2}
//         open={Boolean(anchorEl2)}
//         onClose={handleCloseMenu2}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//       >
//         <MenuItem onClick={() => handleSelectModel2("Model 1")}>
//           Model 1
//         </MenuItem>
//         <MenuItem onClick={() => handleSelectModel2("Model 2")}>
//           Model 2
//         </MenuItem>
//         <MenuItem onClick={() => handleSelectModel2("Model 3")}>
//           Model 3
//         </MenuItem>
//       </Menu>
//     </Box>
//   );
// }

// export default PlayerInformation;

//GPT
import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

function PlayerInformation(props) {
  const { gameMode, playerIsBlack } = props;
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [selectedModel1, setSelectedModel1] = useState("");
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [selectedModel2, setSelectedModel2] = useState("");

  // Destructure humanState and aiState from gameMode
  const { humanState, aiState } = gameMode;

  // Handlers for Menu 1
  const handleOpenMenu1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleCloseMenu1 = () => {
    setAnchorEl1(null);
  };

  const handleSelectModel1 = (model) => {
    setSelectedModel1(model);
    setAnchorEl1(null);
  };

  // Handlers for Menu 2
  const handleOpenMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseMenu2 = () => {
    setAnchorEl2(null);
  };

  const handleSelectModel2 = (model) => {
    setSelectedModel2(model);
    setAnchorEl2(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        padding: "16px",
      }}
    >
      {/* Render Player Username if humanState is active */}
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
          PlayerUserName
        </Button>
      )}

      {/* Render AI Model 1 Menu */}
      {aiState && (
        <>
          <Button
            variant="outlined"
            onClick={handleOpenMenu1}
            sx={{
              fontWeight: "bold",
              flex: 1,
              maxWidth: "300px",
              backgroundColor: playerIsBlack ? "black" : "white",
              color: playerIsBlack ? "white" : "black",
            }}
          >
            AI Model {selectedModel1 && `(${selectedModel1})`}
          </Button>
          <Menu
            anchorEl={anchorEl1}
            open={Boolean(anchorEl1)}
            onClose={handleCloseMenu1}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <MenuItem onClick={() => handleSelectModel1("Model 1")}>
              Model 1
            </MenuItem>
            <MenuItem onClick={() => handleSelectModel1("Model 2")}>
              Model 2
            </MenuItem>
            <MenuItem onClick={() => handleSelectModel1("Model 3")}>
              Model 3
            </MenuItem>
          </Menu>
        </>
      )}

      {/* Render AI Model 2 Menu */}
      <Button
        variant="outlined"
        onClick={handleOpenMenu2}
        sx={{
          fontWeight: "bold",
          flex: 1,
          maxWidth: "300px",
          backgroundColor: playerIsBlack ? "white" : "black",
          color: playerIsBlack ? "black" : "white",
        }}
      >
        AI Model {selectedModel2 && `(${selectedModel2})`}
      </Button>
      <Menu
        anchorEl={anchorEl2}
        open={Boolean(anchorEl2)}
        onClose={handleCloseMenu2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={() => handleSelectModel2("Model 1")}>
          Model 1
        </MenuItem>
        <MenuItem onClick={() => handleSelectModel2("Model 2")}>
          Model 2
        </MenuItem>
        <MenuItem onClick={() => handleSelectModel2("Model 3")}>
          Model 3
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default PlayerInformation;
