import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8A2BE2", // Electric purple
    },
    background: {
      default: "#0D0D0D",
      paper: "#111111",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cfcfcf",
    }
  },
  
    typography: {
  fontFamily: "Inter, Poppins, sans-serif",
  h1: { fontFamily: "Poppins, sans-serif" },
  h2: { fontFamily: "Poppins, sans-serif" },
  h3: { fontFamily: "Poppins, sans-serif" },
  button: { fontWeight: 600 }
}

  }
);

export default theme;
