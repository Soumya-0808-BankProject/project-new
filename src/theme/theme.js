import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
      header: "#154c79",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default muiTheme;
