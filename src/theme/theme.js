import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    //     Primary: #673AB7 (Deep Purple)

    // Secondary:#cc8dd7 (Electric Pink)

    // Accent: #00BCD4 (Cyan)

    // Background: #121212 (Dark Mode Base)

    // Text: #E0E0E0 (Light Gray)
    primary: {
      // main: "#154c79",
      main: "#89bcae",
    },
    secondary: {
      main: "#fbc02d",
    },
    background: {
      default: "#F0F4F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1C313A",
      secondary: "#3E3E3E",
    },
    custom: {
      hover: "#fbc02d", // Your custom hover color
      textBtn:"blue",
      navLinks:"blue",
      headerLinks:'#27065e',
      // textBtn: "#00BCD4  ",
      // textBtn: "#A5D6A7 ",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: theme.palette.custom.hover,
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // color: "#1C313A", // Main text color
          textAlign: "left",
        },
      },
    },
  },
});

export default muiTheme;
