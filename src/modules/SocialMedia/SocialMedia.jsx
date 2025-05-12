import React from "react";
import { Container, Box } from "@mui/material";
import loanimg from "../../assets/images/carouselimage1.jpg";
import './style.css'

const SocialMedia = () => {
  return (
    <Container maxWidth="xl" sx={{ px: 5, py: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",        // 1 image per row on mobile
            sm: "repeat(2, 1fr)", // 2 images per row on tablets
            lg: "repeat(3, 1fr)", // 3 images per row on large screens and up
          },
          gap: 3,
        }}
      >
        {[...Array(8)].map((_, index) => (
          <Box key={index}>
            <img
              src={loanimg}
              alt={`Loan ${index}`}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default SocialMedia;
