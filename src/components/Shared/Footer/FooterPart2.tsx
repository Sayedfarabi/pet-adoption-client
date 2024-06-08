import { Box, Typography } from "@mui/material";
import React from "react";

const FooterPart2 = () => {
  return (
    <Box component="div" className="mt-4 mx-auto">
      <Typography variant="h5" component="h2">
        Web Links
      </Typography>
      <Box component="div" className="space-x-6 text-xl mt-6">
        <Box component="ul">
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Blog</Typography>
          <Typography>Service</Typography>
          <Typography>Shop</Typography>
          <Typography>Contact</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterPart2;
