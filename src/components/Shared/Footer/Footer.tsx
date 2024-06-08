import { Box, Container, Stack } from "@mui/material";

import FooterPart1 from "./FooterPart1";
import FooterPart2 from "./FooterPart2";
import FooterPart3 from "./FooterPart3";
import FooterPart4 from "./FooterPart4";

const Footer = () => {
  return (
    <Container>
      <Stack className="py-12">
        <Box
          component="div"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <FooterPart1 />
          <FooterPart2 />
          <FooterPart3 />
          <FooterPart4 />
        </Box>
      </Stack>
    </Container>
  );
};

export default Footer;
