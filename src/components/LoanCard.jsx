import { Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SubLoanDescription, SubLoanTitle } from "./Typography";
import { TextButton } from "./CustomButton";

const LoanCard = ({ loan }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        height: "100%",
        width: "100%",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          boxShadow: 3,
          cursor: "default",
        },
      }}
    >
      <Box
        // disableRipple
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: "100%",
          "&:hover": {
            backgroundColor: "white", // remove grey bg on hover
          },
        }}
        // onClick={() => navigate(loan.link)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1, pr: 2 }}>
            <SubLoanTitle title={loan.title} />
            <SubLoanDescription desc={loan.description} />
          </Box>
          <Box sx={{ fontSize: 40, color: "#0d47a1", minWidth: 40 }}>
            {loan.icon}
          </Box>
        </Box>

        <Box sx={{ mt: "auto", width: "100%" }}>
          <TextButton
            btnName="Get Best Offers →"
            onClick={() => navigate(loan.link)}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default LoanCard;
