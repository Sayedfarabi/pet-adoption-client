import { Box, Container, Stack } from "@mui/material";
import React from "react";
import VideoSection from "./VideoSection";
import FeatureCard from "./FeatureCard";
import assets from "@/assets";

export type TFeature = {
  id: string;
  icon: any;
  title: string;
  body: string;
};

const features: TFeature[] = [
  {
    id: "feature001",
    icon: assets.icons.features.icon1,
    title: "Largest non-profit pet’s shelter",
    body: "Well gaudy hound hired inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed.",
  },
  {
    id: "feature002",
    icon: assets.icons.features.icon2,
    title: "Convenient pet adoption for public",
    body: "Well gaudy hound hired inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed.",
  },
  {
    id: "feature003",
    icon: assets.icons.features.icon3,
    title: "Innovative ways to help animals",
    body: "Well gaudy hound hired inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed.",
  },
];

const FeatureVideoSection = () => {
  return (
    <Container className="my-16 md:my-20">
      <Stack
        py={4}
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
          gap: 8,
        }}
      >
        <VideoSection />
        <Box component="div">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </Box>
      </Stack>
    </Container>
  );
};

export default FeatureVideoSection;
