import React from "react";
import { Box, Container, Typography, TextField, Button, Grid, Card, CardContent } from "@mui/material";
import loanimg from '../../assets/images/carouselimage1.jpg';
import FormPage from "../../components/FormPage";
import { LoanHeading } from "../../components/Typography";

const LoanInfo=()=>{
return(
    <Container maxWidth="xl" sx={{px:5,py:3}}  >
      <Box container sx={{ mt: 2, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <LoanHeading title="Personal Loans"/>
        </Typography>
        <Typography variant="body1" paragraph>
          A <strong>personal loan</strong> is an unsecured loan offered by banks and financial institutions to individuals for personal use, such as medical expenses, home renovation, debt consolidation, travel, or education.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Key Features of Personal Loans:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Unsecured:</strong> No collateral or asset required.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Fixed Loan Amount:</strong> Typically between $1,000 and $50,000.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Fixed Tenure:</strong> Usually from 1 to 5 years.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Fixed Interest Rate:</strong> Often ranges from 8% to 18% annually.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Quick Disbursal:</strong> Funds often released within a few days.
            </Typography>
          </Grid>
        </Grid>
      </Box>

    <Grid container spacing={1} sx={{ mt: 1 }}>
    <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={loanimg}
          alt="Program Visual"
          sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{width:{xs:"100%",lg:"48%"}}}>
       <FormPage title="Do you Want to apply for personal loan? please fill the form and submit"/>
      </Grid>

    
    </Grid>
  </Container>
)
}
export default LoanInfo;