import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom"; // Import navigate

const MobileDrawer = ({ drawerOpen, setDrawerOpen, navLinks }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the dropdown
  };

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the selected path
    setDrawerOpen(false); // Close the drawer after navigation
  };

  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {navLinks.map((link, index) =>
            link.children ? (
              <Box key={link.label}>
                <ListItem button onClick={() => handleClick(index)}>
                  <ListItemText primary={link.label} />
                  <ExpandMoreIcon />
                </ListItem>

                {/* Dropdown Items */}
                <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {link.children.map((child) => (
                      <ListItem
                        button
                        key={child.label}
                        onClick={() => handleNavigate(child.path)} // Navigate on click
                      >
                        <ListItemText primary={child.label} inset />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              <ListItem
                button
                key={link.label}
                onClick={() => handleNavigate(link.path)} // Navigate on click
              >
                <ListItemText primary={link.label} />
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
