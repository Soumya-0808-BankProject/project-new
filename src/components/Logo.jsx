import { useTheme } from "@emotion/react";
import logo from "../assets/images/logo.png";
import { Box, useMediaQuery } from "@mui/material";

const Logo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const style = !isMobile
    ? { height: 40 }
    : {
        height: 30,
        // margin: "0 auto",
      };
  return <Box component="img" src={logo} alt="Logo" sx={style} />;
};

export default Logo;
