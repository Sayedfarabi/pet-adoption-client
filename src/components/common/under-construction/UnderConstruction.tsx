import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const UnderConstruction = () => {
  return (
    <Container>
      <Stack
        minHeight="50vh"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Stack>
          <Typography color="red" align="center">
            This page is under construction
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default UnderConstruction;
