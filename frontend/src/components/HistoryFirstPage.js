import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import gomokuBg from "../assets/Gomoku_bg.jpg";

function HistoryFirstPage(props) {
  const { handleBackHistory, totalBattles, totalWins, handleSecondPage } =
    props;

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
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          boxSizing: "border-box",
          position: "relative", // Allows positioning of the IconButton
        }}
      >
        {/* Header: Battle History Summary */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "32px" }}
        >
          Battle History Summary
        </Typography>

        {/* Total Battles */}
        <Typography variant="body1" sx={{ marginBottom: "16px" }}>
          Total Battles: {totalBattles}
        </Typography>

        {/* Total Wins */}
        <Typography variant="body1" sx={{ marginBottom: "16px" }}>
          Total Wins: {totalWins}
        </Typography>

        {/* Win Ratio */}
        <Typography variant="body1" sx={{ marginBottom: "16px" }}>
          Win Ratio: {totalBattles === 0 ? "0" : `${totalWins}/${totalBattles}`}
        </Typography>

        {/* IconButton: Middle Right */}
        <IconButton
          sx={{
            position: "absolute", // Allows precise placement
            top: "50%", // Center vertically
            right: "-24px", // Align to the right, symmetric with left of ArrowBack icon
            transform: "translateY(-50%)", // Adjust to be perfectly centered vertically
            border: "1px solid #ddd",
            borderRadius: "4px",
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white", // Optional for better visibility
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
          onClick={handleSecondPage}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Back Button: Bottom Right */}
        <Box
          sx={{
            marginTop: "auto", // Push it to the bottom
            display: "flex",
            justifyContent: "flex-end", // Align to the right
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

export default HistoryFirstPage;
