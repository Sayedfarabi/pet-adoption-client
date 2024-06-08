import assets from "@/assets";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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
        <Link href={"/"}>
          <Image src={assets.images.logo} alt="Logo" height={200} width={200} />
        </Link>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography fontWeight={600}>
          <Link href={"/"}>Home</Link>
        </Typography>
        <Typography fontWeight={600}>
          <Link href={"/about"}>About</Link>
        </Typography>
        <Typography fontWeight={600}>
          <Link href={"/blog"}>Blog</Link>
        </Typography>
        <Typography fontWeight={600}>
          <Link href={"/service"}>Service</Link>
        </Typography>
        <Typography fontWeight={600}>
          <Link href={"/shop"}>Shop</Link>
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          component="div"
          className="space-x-2"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={600}>
            <Link href={"/login"}>Sign in</Link>
          </Typography>
          <Typography fontWeight={600}>
            <Link href={"/register"}>Sign up</Link>
          </Typography>
        </Box>
        <Box
          component="div"
          className="space-x-2"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={600}>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Typography>
          <Typography fontWeight={600}>
            <Button variant="outlined" size="small">
              Sign Out
            </Button>
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Bottom;
