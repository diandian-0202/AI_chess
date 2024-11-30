import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import gomokuBg from "../assets/Gomoku_bg.jpg";

function HistorySecondPage(props) {
  const { handleBack, handleBackHistory } = props;
  const battleHistory = [
    { result: "Win", modelName: "AI Model 1", date: "2024-11-28" },
    { result: "Loss", modelName: "AI Model 2", date: "2024-11-27" },
    { result: "Win", modelName: "AI Model 3", date: "2024-11-26" },
    { result: "Win", modelName: "AI Model 4", date: "2024-11-25" },
    { result: "Loss", modelName: "AI Model 5", date: "2024-11-24" },
    { result: "Win", modelName: "AI Model 6", date: "2024-11-23" },
    { result: "Loss", modelName: "AI Model 7", date: "2024-11-22" },
    // Add more rows for testing scrollbar
  ];

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
          height: "75vh", // Match height with the first page
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Back IconButton: Slightly Outside Left */}
        <IconButton
          onClick={handleBack}
          sx={{
            position: "absolute",
            top: "50%", // Vertically center
            left: "-24px", // Symmetric with right of ArrowForward icon
            transform: "translateY(-50%)", // Center vertically relative to top
            color: "black",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "white", // Optional: Add a background to make it more distinct
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow for better visibility
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Header */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "32px" }}
        >
          Detailed Battle History
        </Typography>

        {/* Table Container */}
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: "40vh", // Reduce table height for balance
            borderRadius: "8px",
            overflowY: "auto", // Enable scrolling if content exceeds height
            marginBottom: "16px", // Add spacing below the table
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Result
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Model Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {battleHistory.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.result}</TableCell>
                  <TableCell align="center">{row.modelName}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Back Button: Bottom Right */}
        <Box
          sx={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            onClick={handleBackHistory}
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
            Back
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HistorySecondPage;
