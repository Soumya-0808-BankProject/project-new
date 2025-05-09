import { Box, Typography, useTheme } from "@mui/material";

export const LoanHeading = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        fontSize={"1rem"}
        fontWeight="bold"
        marginBottom={0.5}
        textTransform="uppercase"
        color="primary.main"
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          my: 1,
        }}
      >
        {[1, 2, 3].map((i, index) => (
          <Box
            sx={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: theme.palette.custom.textBtn,
            }}
          />
        ))}
        <Box
          sx={{
            height: "4px",
            width: "30px", // adjust as needed
            backgroundColor: theme.palette.custom.textBtn,
            borderRadius: "20px",
          }}
        />
      </Box>
    </>
  );
};

export const LoanDescription = ({ desc }) => {
  return (
    <Typography
      fontSize={"0.8125rem"} // 13px
      fontWeight={500}
      marginBottom={3}
      color="text.primary"
    >
      {desc}
    </Typography>
  );
};

export const SubLoanTitle = ({ title }) => {
  return (
    <Typography fontSize={"1rem"} fontWeight="bold" color="primary.main">
      {title}
    </Typography>
  );
};

export const SubLoanDescription = ({ desc }) => {
  return (
    <Typography
      fontSize={"0.75rem"}
      marginBottom={2}
      fontWeight={500}
      color="text.primary"
      sx={{ wordWrap: "break-word" }}
    >
      {desc}
    </Typography>
  );
};
