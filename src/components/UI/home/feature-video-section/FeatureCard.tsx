import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TFeature } from "./FeatureVideoSection";

const FeatureCard = ({ feature }: { feature: TFeature }) => {
  return (
    <Box
      className="w-full flex justify-between items-center gap-5 mb-8"
      component="div"
    >
      <Box component="div">
        <Image className="w-32 h-20" src={feature.icon} alt="" />
      </Box>
      <Box component="div">
        <Typography mb={1} variant="h6" component="h2">
          {feature.title}
        </Typography>
        <Typography>{feature.body}</Typography>
      </Box>
    </Box>
  );
};

export default FeatureCard;
