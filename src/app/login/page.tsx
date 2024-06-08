"use client";
import PAForm from "@/components/UI/form/PA-Form/PAForm";
import PAInput from "@/components/UI/form/PA-Inputs/PATextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const zodValidationSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z.string({ required_error: "Password is required" }),
});

const Login = () => {
  const submitHandler = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <Stack
        minHeight="100vh"
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box component="div">
          <Box component={"div"} className="mb-4">
            <Typography
              color="primary.main"
              variant="h4"
              component={"h1"}
              fontWeight={600}
            >
              Sign In Now
            </Typography>
          </Box>
          <PAForm
            submitHandler={submitHandler}
            resolver={zodResolver(zodValidationSchema)}
          >
            <Box component={"div"} className="space-y-4">
              <Grid container>
                <Grid item md={12} lg={12}>
                  <PAInput
                    name="email"
                    type="text"
                    key={"email"}
                    label="Email"
                    fullWidth={true}
                    placeholder="Enter your email"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={12} lg={12}>
                  <PAInput
                    name="password"
                    type="password"
                    key={"password"}
                    label="Password"
                    fullWidth={true}
                    placeholder="Enter your password"
                  />
                </Grid>
              </Grid>
            </Box>

            <Box component={"div"}>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
            </Box>
          </PAForm>
          <Box component={"div"}>
            <Typography>
              If you have not an account, please{" "}
              <Box component={"span"}>
                {" "}
                <Link href={"/register"} className="text-blue-500 underline">
                  Sign up
                </Link>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
