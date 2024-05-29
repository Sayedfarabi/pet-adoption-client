import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between">
        <Typography variant="h5" component="h1" fontWeight={600}>
          <Box component="span" color="primary.main">
            PET
          </Box>
          -ADOPTION
        </Typography>
        <Typography variant="h6" component="h1" fontWeight={500}>
          Nav Item
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
