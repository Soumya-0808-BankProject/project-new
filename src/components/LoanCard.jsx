import { Box, Card, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
          transform: "translateY(-4px)",
          boxShadow: 3,
        },
      }}
    >
      <CardActionArea
        disableRipple
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: "100%",
          "&:hover": {
            backgroundColor: "transparent", // remove grey bg on hover
          },
        }}
        onClick={() => navigate(loan.link)}
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
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ color: "#003366" }}
            >
              {loan.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ wordWrap: "break-word" }}
            >
              {loan.description}
            </Typography>
          </Box>
          <Box sx={{ fontSize: 40, color: "#0d47a1", minWidth: 40 }}>
            {loan.icon}
          </Box>
        </Box>

        <Box sx={{ mt: "auto", width: "100%" }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: "#1565c0",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            Get Best Offers →
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default LoanCard;
