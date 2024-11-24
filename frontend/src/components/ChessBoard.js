import React, { useState } from "react";
import { Box } from "@mui/material";

const BOARD_SIZE = 15; // Size of the chessboard (15x15)

function ChessBoard({ ingame }) {
  const [board, setBoard] = useState(
    Array(BOARD_SIZE)
      .fill(null)
      .map(() => Array(BOARD_SIZE).fill(null)) // Initialize empty board
  );
  const [isBlackTurn, setIsBlackTurn] = useState(true); // Track current player's turn

  const handleCellClick = (row, col) => {
    // Ignore clicks on already filled squares
    if (ingame) {
      if (board[row][col] !== null) return;

      // Update the board with the current player's stone
      const updatedBoard = board.map((r, rowIndex) =>
        r.map((cell, colIndex) =>
          rowIndex === row && colIndex === col
            ? isBlackTurn
              ? "B"
              : "W"
            : cell
        )
      );
      setBoard(updatedBoard);

      // Toggle player's turn
      setIsBlackTurn(!isBlackTurn);
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`, // Create a grid with 15 columns
        gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`, // Create a grid with 15 rows
        width: "500px", // Total width of the chessboard
        height: "500px", // Total height of the chessboard (square)
        border: "2px solid black", // Chessboard border
        backgroundColor: "#f4f4f4", // Chessboard background color
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Box
            key={`${rowIndex}-${colIndex}`}
            sx={{
              width: "100%",
              height: "100%",
              border: "1px solid #ddd", // Grid line for squares
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer", // Indicate clickable cells
              //   cell === "B"
              //   ? "#000"
              //   :
              backgroundColor: cell ? "#fff" : "#f4f4f4", // Stone colors
            }}
            onClick={() => handleCellClick(rowIndex, colIndex)} // Handle click events
          >
            {cell && (
              <Box
                sx={{
                  width: "60%", // Stone size (relative to the cell)
                  height: "60%",
                  borderRadius: "50%", // Make it circular
                  backgroundColor: cell === "B" ? "#000" : "#fff", // Black or white stone
                  boxShadow:
                    cell === "W" ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none", // Add shadow for white stones
                }}
              />
            )}
          </Box>
        ))
      )}
    </Box>
  );
}

export default ChessBoard;
