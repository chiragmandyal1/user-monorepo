import { Box, Button, TextField, Typography } from "@mui/material";
import backgroundImage from "./assets/background.jpg";

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "2rem",
          borderRadius: "14px",
          height: "60vh",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
          backdropFilter: "blur(2px)",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2), 0px 0px 20px #FFFFFF", // Add this line
          width: "90%",
          maxWidth: "400px",
          border: "1px solid #FFFFFF",
        }}
      >
        <Typography variant="h3" color="white" sx={{ marginBottom: "0rem" }}>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "1rem",
            input: { color: "white" },
            label: { color: "rgba(255, 255, 255, 0.7)" },
            ".MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "2rem",
            input: { color: "white" },
            label: { color: "rgba(255, 255, 255, 0.7)" },
            ".MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "rgba(255, 255, 255, 0.80)",
            backdropFilter: "blur(2px)",
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1.0)",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default App;
