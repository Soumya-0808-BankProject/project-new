import React from "react";
import { Box, Grid } from "@mui/material";
import loans from "../../utils/loans";
import LoanCard from "../../components/LoanCard";
import { LoanDescription, LoanHeading } from "../../components/Typography";

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
          <LoanHeading title={loan.type} />
          <LoanDescription desc={loan.description} />
          <Grid container spacing={3}>
            {loan.subtypes.map((item) => (
              <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
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
