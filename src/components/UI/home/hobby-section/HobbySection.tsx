import assets from "@/assets";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import HobbyCard from "./HobbyCard";

export type THobby = {
  id: string;
  icon: any;
  title: string;
  body: string;
};

const hobbies: THobby[] = [
  {
    id: "hobby001",
    icon: assets.icons.hobbies.icon1,
    title: "We Heal Pets",
    body: "Quick Veterinary Services",
  },
  {
    id: "hobby002",
    icon: assets.icons.hobbies.icon2,
    title: "We Care Pets",
    body: "Pet Sheltering & Adoption",
  },
  {
    id: "hobby003",
    icon: assets.icons.hobbies.icon3,
    title: "We Love Pets",
    body: "Show Love & Donate Us",
  },
];

const HobbySection = () => {
  return (
    <Container className="my-16 md:my-20">
      <Box
        component="div"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} />
        ))}
      </Box>
    </Container>
  );
};

export default HobbySection;
