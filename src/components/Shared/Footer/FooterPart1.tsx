import assets from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterPart1 = () => {
  return (
    <Box component="div" className="mx-auto">
      <Box component="div">
        <Image className="w-48 h-20" src={assets.images.logo} alt="" />
      </Box>
      <Box component="div" className="mt-4">
        <Typography align="justify">
          This prodigiously grew tortoise charact stupidly pernicious jeepers
          along while accordingly under useful much salacious walking fars
          before some supp aesthetically wow shuddered.
        </Typography>
        <Box component="div" className="space-x-6 text-xl mt-6">
          <FaTwitter className="inline" />
          <FaFacebookF className="inline" />
          <FaGooglePlusG className="inline" />
          <FaYoutube className="inline" />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterPart1;
