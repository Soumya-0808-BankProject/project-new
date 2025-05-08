import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import contactHeaderStyles from "./styles";
import { contactIcons } from "../../utils/contact";
import { socialIcons } from "../../utils/socialIcons";

const ContactHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={contactHeaderStyles.container(theme)}>
      {/* Left Section */}
      <Box sx={contactHeaderStyles.leftSection}>
        <Box sx={contactHeaderStyles.leftSection}>
          {contactIcons.map(({ icon: Icon, url, text }, index) => (
            <React.Fragment key={index}>
              <Link
                href={url}
                color="inherit"
                underline="none"
                sx={contactHeaderStyles.link}
              >
                <Icon sx={contactHeaderStyles.leftIcons} />
                <Typography component="span">{text}</Typography>
              </Link>
              {index < contactIcons.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      {/* Right Section */}
      {!isMobile && (
        <Box sx={contactHeaderStyles.rightSection}>
          {socialIcons.map(({ icon: Icon, url, label }, index) => (
            <React.Fragment key={label}>
              <Link
                href={url}
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label={label}
              >
                <IconButton size="small" sx={contactHeaderStyles.iconButton}>
                  <Icon fontSize="small" />
                </IconButton>
              </Link>
              {index !== socialIcons.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ContactHeader;
