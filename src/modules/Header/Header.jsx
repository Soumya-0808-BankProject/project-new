import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import headerStyles from "./styles";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={headerStyles.container(theme)}>
      {/* Left Section */}
      <Box sx={headerStyles.leftSection}>
        <Link
          href="tel:+919876543210"
          color="inherit"
          underline="none"
          sx={headerStyles.link}
        >
          <CallIcon sx={headerStyles.leftIcons} />
          <Typography component="span">+91-9876543210</Typography>
        </Link>

        <span>|</span>

        <Link
          href="mailto:info@example.com"
          color="inherit"
          underline="none"
          sx={headerStyles.link}
        >
          <EmailIcon sx={headerStyles.leftIcons} />
          <Typography component="span">info@example.com</Typography>
        </Link>
      </Box>

      {/* Right Section */}
      {!isMobile && (
        <Box sx={headerStyles.rightSection}>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <IconButton size="small" sx={headerStyles.iconButton}>
              <FacebookIcon fontSize="small" />
            </IconButton>
          </Link>
          <span>|</span>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <IconButton size="small" sx={headerStyles.iconButton}>
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Link>
          <span>|</span>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <IconButton size="small" sx={headerStyles.iconButton}>
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Link>
          <span>|</span>

          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <IconButton size="small" sx={headerStyles.iconButton}>
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Header;
