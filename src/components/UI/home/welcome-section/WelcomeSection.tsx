import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const WelcomeSection = () => {
  return (
    <Container>
      {/* Top  */}
      <Stack direction="row" justifyContent="center" alignItems="center" py={6}>
        <Box component="div">
          <Image
            className="h-12 mx-auto"
            src={assets.icons.welcome}
            alt="Welcome icon"
          />
          <Box component="div" my={3}>
            <Typography align="center" my={1}>
              Because We Really Care Welcome Your Pets
            </Typography>
            <Typography
              fontWeight={600}
              variant="h4"
              component="h1"
              align="center"
            >
              Welcome to PetHub
            </Typography>
          </Box>
        </Box>
      </Stack>

      {/* Bottom */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: {
            xs: "col",
            sm: "col",
            md: "row",
            lg: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Stack
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
            },
          }}
        >
          <Image
            className="w-full mx-auto"
            src={assets.images.welcome}
            alt="Welcome Image"
          />
        </Stack>
        <Stack
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
            },
          }}
        >
          <Box>
            <Typography>
              Broadcast neglectful and poignantly well until and some listlessly
              amidst suc cessful concentrically ably dachshund more far but
              forwardly echidna outside tiger split thanks far vibrantly gosh
              hence pangolin however notwithstanding leapt untruthful gauchely
              yikes komodo dully more.
            </Typography>
            <Typography my={2}>
              As abandoned winced this more far wow jeepers near more wow
              goodness so revealed much along worm some grasshopper.
            </Typography>
            <Box component="div" mt={4}>
              <Button>View Our Service</Button>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default WelcomeSection;
