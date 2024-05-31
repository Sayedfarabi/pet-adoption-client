import assets from "@/assets";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Bottom = () => {
  return (
    <Stack
      py={1}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack>
        <Image src={assets.images.logo} alt="Logo" height={200} width={200} />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography fontWeight={600}>Home</Typography>
        <Typography fontWeight={600}>About</Typography>
        <Typography fontWeight={600}>Contact</Typography>
        <Typography fontWeight={600}>Sign in</Typography>
      </Stack>
    </Stack>
  );
};

export default Bottom;
