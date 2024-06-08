import assets from "@/assets";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FooterPart3 = () => {
  return (
    <Box component="div" className="mt-4 mx-auto">
      <Typography variant="h5" component="h2">
        Latest Post
      </Typography>
      <Box component="div" className="space-y-4 text-xl mt-6">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          gap={4}
        >
          <Box>
            <Image
              src={assets?.images?.footer?.post1}
              width={150}
              height={150}
              alt=""
            />
          </Box>
          <Box>
            <Typography fontWeight={700} mb={1}>
              Acute Yellow Re-Laid Less Or Affirmatively Cats
            </Typography>
            <Typography fontSize={14}>March 14, 2018</Typography>
          </Box>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          gap={4}
        >
          <Box>
            <Image
              src={assets?.images?.footer?.post2}
              width={150}
              height={150}
              alt=""
            />
          </Box>
          <Box>
            <Typography fontWeight={700} mb={1}>
              Acute Yellow Re-Laid Less Or Affirmatively Cats
            </Typography>
            <Typography fontSize={14}>March 14, 2018</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default FooterPart3;
