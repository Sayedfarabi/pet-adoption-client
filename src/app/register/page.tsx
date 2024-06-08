"use client";
import PAForm from "@/components/UI/form/PA-Form/PAForm";
import PAInput from "@/components/UI/form/PA-Inputs/PATextField";
import {
  TRegisterPayload,
  registerUser,
} from "@/services/actions/userRegister";
import { modifyPayload } from "@/utils/modifyPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { userLogin } from "@/services/actions/userLogin";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";

const zodValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  password: z.string({ required_error: "Password is required" }),
});

const Register = () => {
  const router = useRouter();
  const submitHandler = async (values: FieldValues) => {
    // const data = modifyPayload(values);
    console.log(values);
    try {
      const res = await registerUser(values as TRegisterPayload);
      console.log(res);
      // // console.log(res);
      // if (res?.data?.id) {
      //   toast.success(res?.message);
      //   const result = await userLogin({
      //     password: values.password,
      //     email: values.patient.email,
      //   });
      //   if (result?.data?.accessToken) {
      //     storeUserInfo({ accessToken: result?.data?.accessToken });
      //     router.push("/dashboard");
      //   }
      // }
    } catch (err: any) {
      console.error(err.message);
    }
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
              Sign Up Now
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
                    name="name"
                    type="text"
                    key={"name"}
                    label="Name"
                    fullWidth={true}
                    placeholder="Enter your name"
                    required
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={12} lg={12}>
                  <PAInput
                    name="email"
                    type="text"
                    key={"email"}
                    label="Email"
                    fullWidth={true}
                    placeholder="Enter your email"
                    required
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
                    required
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
              If you have an account, please{" "}
              <Box component={"span"}>
                {" "}
                <Link href={"/login"} className="text-blue-500 underline">
                  Sign in
                </Link>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
