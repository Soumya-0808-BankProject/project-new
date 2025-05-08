import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import loans from "../../utils/loans";
import LoanCard from "../../components/LoanCard";

const LoansSection = () => {

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: 6,
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      {loans.map((loan) => (
        <Box key={loan.type} sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            {loan.type}
          </Typography>
          <Typography variant="body1" mb={3}>
            {loan.description}
          </Typography>
          <Grid container spacing={3}>
            {loan.subtypes.map((item) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
                <LoanCard loan={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default LoansSection;
