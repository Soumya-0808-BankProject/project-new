import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import navLinks from "../../utils/navLinks";
import MobileDrawer from "./MobileDrawer";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownItems, setDropdownItems] = useState([]);

  const handleDropdownOpen = (event, children) => {
    if (anchorEl && anchorEl === event.currentTarget) return;
    setAnchorEl(event.currentTarget);
    setDropdownItems(children);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setDropdownItems([]);
  };

  const handleNavigate = (path) => {
    console.log("clicked");
    navigate(path);
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
          {/* Desktop Navigation */}
          {!isMobile ? (
            <>
              <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} />

              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                {navLinks.map((link) =>
                  link.children ? (
                    <Box
                      key={link.label}
                      onMouseEnter={(e) => handleDropdownOpen(e, link.children)}
                      onMouseLeave={handleDropdownClose}
                      sx={{ position: "relative" }}
                    >
                      <Button
                        sx={{
                          textTransform: "capitalize", // Capitalize the text
                          "&:hover": {
                            color: "orange", // Change text color to white on hover
                            backgroundColor: "transparent", // Change background to orange on hover
                          },
                        }}
                        endIcon={<ExpandMoreIcon />}
                        color="inherit"
                      >
                        {link.label}
                      </Button>

                      {/* Attached Dropdown Menu */}
                      {anchorEl && anchorEl.textContent === link.label && (
                        <Box
                          onMouseEnter={() => {}}
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            bgcolor: "background.paper",
                            boxShadow: 3,
                            zIndex: 10,
                            minWidth: 180,
                            borderRadius: 1,
                          }}
                        >
                          {dropdownItems.map((child) => (
                            <MenuItem
                              key={child.label}
                              onClick={() => handleNavigate(child.path)}
                            >
                              {child.label}
                            </MenuItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ) : (
                    <Button
                      key={link.label}
                      onClick={() => handleNavigate(link.path)}
                      sx={{
                        textTransform: "capitalize", // Capitalize the text
                        "&:hover": {
                          color: "orange", // Change text color to white on hover
                          backgroundColor: "transparent", // Change background to orange on hover
                        },
                      }}
                      color="inherit"
                    >
                      {link.label}
                    </Button>
                  )
                )}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginLeft: "auto", // Push the Sign Up button to the right
                    textTransform: "capitalize",
                  }}
                >
                  Social Media Highlights
                </Button>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Spacing between the items
                width: "100%", // Ensure it takes up full width
                padding: "0 16px", // Add some padding for spacing
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  fontSize: "3rem", // Make the menu icon larger
                  marginRight: "auto", // Push the menu icon to the left
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: 80, // Make logo a bit bigger
                  margin: "0 auto", // Center the logo
                }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  marginLeft: "auto", // Push the Sign Up button to the right
                  textTransform: "capitalize",
                }}
              >
                Social Media Highlights
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <MobileDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
