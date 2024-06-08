import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { THobby } from "./HobbySection";

const HobbyCard = ({ hobby }: { hobby: THobby }) => {
  return (
    <Stack
      className="rounded-md"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={2}
      boxShadow={1}
      gap={4}
    >
      <Box component="div">
        <Image className="w-20 h-20" src={hobby.icon} alt="Icon 1" />
      </Box>
      <Box component="div">
        <Typography className="my-2" variant="h5" component="h1">
          {hobby.title}
        </Typography>
        <Typography className="my-2" fontWeight={600}>
          {hobby.body}
        </Typography>
      </Box>
    </Stack>
  );
};

export default HobbyCard;
