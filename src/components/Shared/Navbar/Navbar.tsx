import { Container, Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";

const Navbar = () => {
  return (
    <Stack>
      <Stack py={1} bgcolor="primary.main">
        <Container>
          <Header />
        </Container>
      </Stack>
      <Stack>
        <Container>
          <Bottom />
        </Container>
      </Stack>
    </Stack>
  );
};

export default Navbar;
