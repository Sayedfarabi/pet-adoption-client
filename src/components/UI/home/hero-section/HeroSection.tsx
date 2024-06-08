import assets from "@/assets";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Stack
      minHeight={500}
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
        <Typography align="center" variant="h3" component="h2">
          We Give{" "}
          <Box color="primary.main" component={"span"}>
            Special Care
          </Box>
          <br /> To Your Loving Pets
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
          },
        }}
      >
        <Image className="w-full" src={assets.images.heros} alt="Pet" />
      </Stack>
    </Stack>
  );
};

export default HeroSection;
