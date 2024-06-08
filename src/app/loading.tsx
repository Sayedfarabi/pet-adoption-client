import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Container>
      <Stack minHeight="100vh">
        <Typography align="center">Loading...</Typography>
      </Stack>
    </Container>
  );
};

export default loading;
