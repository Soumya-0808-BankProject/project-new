// Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', bgcolor: 'black',padding:"7px" }}>
      <Typography variant="body2" color="#fff">
        © 2025 All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
