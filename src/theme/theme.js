import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#154c79", // Cool Cyan Blue
    },
    secondary: {
      main: "#E1F5FE", // Ice Blue
    },
    background: {
      default: "#F0F4F8", // Pale Steel (background color)
      paper: "#FFFFFF", // White for surfaces/cards
    },
    text: {
      primary: "#1C313A", // Steel Charcoal (text)
      secondary: "#3E3E3E", // Soft Black (secondary text)
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Default font family
    h1: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
    },
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
            backgroundColor: theme.palette.primary.dark,
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
