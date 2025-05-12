import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navLinks from "../../utils/navLinks";
import MobileDrawer from "./MobileDrawer";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import CustomButton, { NavLinkBtn } from "../../components/CustomButton";

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
    navigate(path);
    setAnchorEl(null);
  };

  const handleNavigateSocialMedia=()=>{
    navigate("/social-media")
  }

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar
          sx={{ width: "100%", justifyContent: "space-between", padding: 0 }}
        >
          {/* Desktop Navigation */}
          {!isMobile ? (
            <>
              <Logo />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {navLinks.map((link) =>
                  link.children ? (
                    <Box
                      key={link.label}
                      onMouseEnter={(e) => handleDropdownOpen(e, link.children)}
                      onMouseLeave={handleDropdownClose}
                      sx={{ position: "relative" }}
                    >
                      <NavLinkBtn linkName={link.label} endIcon />

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
                              sx={{ fontSize: "0.875rem" }}
                            >
                              {child.label}
                            </MenuItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ) : (
                    <NavLinkBtn
                      linkName={link.label}
                      onClick={() => handleNavigate(link.path)}
                    />
                  )
                )}
                <CustomButton onClick={handleNavigateSocialMedia} btnName="Social Media Highlights" />
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
              <Logo />
              <CustomButton btnName="Social Media Highlights" />
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
