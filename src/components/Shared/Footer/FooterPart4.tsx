import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocation, IoMail } from "react-icons/io5";

const FooterPart4 = () => {
  return (
    <Box component="div" className="mt-4 mx-auto">
      <Typography variant="h5" component="h2">
        ContactInfo
      </Typography>
      <Box component="div" className="space-x-6 text-xl mt-6">
        <Box component="ul" className="space-y-4">
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <IoLocation className="mr-2" />
            <Typography fontSize={14}>
              BellSouth, Harley Street Florida 33968
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <BsTelephoneFill className="mr-2" />
            <Typography fontSize={14}>+(1) 234 567 8900</Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <IoMail className="mr-2" />
            <Typography fontSize={14}>example@exmaple.com</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterPart4;
