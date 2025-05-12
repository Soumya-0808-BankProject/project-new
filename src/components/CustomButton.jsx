import { Button, useMediaQuery, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const NavLinkBtn = ({ linkName, endIcon, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        textTransform: "capitalize", // Capitalize the text
        color: theme.palette.custom.navLinks,
        "&:hover": {
          color: theme.palette.custom.hover,
          backgroundColor: "transparent",
        },
      }}
      endIcon={endIcon ? <ExpandMoreIcon /> : undefined}
      color="inherit"
      onClick={onClick}
    >
      {linkName}
    </Button>
  );
};

export const TextButton = ({ btnName, onClick }) => {
  const theme = useTheme();
  return (
    <Button
      variant="text"
      onClick={onClick}
      sx={{
        fontSize: "12px",
        fontWeight: "bold",
        color: theme.palette.custom.textBtn,
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        padding: 0,
        minWidth: "unset",
        textTransform: "none",
        "&:hover": {
          color: theme.palette.custom.hover,
          backgroundColor: "transparent", // prevent MUI hover background
        },
      }}
    >
      {btnName}
    </Button>
  );
};

const CustomButton = ({ btnName, onClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Button
      variant="contained"
      color={theme.palette.custom.textBtn}
      size={isMobile ? "small" : "large"}
      sx={{
        marginLeft: "auto",
        textTransform: "capitalize",
      }}
      onClick={onClick}
    >
      {btnName}
    </Button>
  );
};

export default CustomButton;
