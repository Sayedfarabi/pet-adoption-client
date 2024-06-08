import { Box } from "@mui/material";
import React from "react";

const VideoSection = () => {
  return (
    <Box component="div">
      <iframe
        width="500"
        height="350"
        src="https://www.youtube.com/embed/7Gfoij2uP7I?si=H3iICoprti84viXX"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default VideoSection;
