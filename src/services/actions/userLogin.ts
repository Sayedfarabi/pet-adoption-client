import { FieldValues } from "react-hook-form";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  const userInfo = await res.json();
  return userInfo;
};
