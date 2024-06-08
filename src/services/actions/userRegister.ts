"use server";
export type TRegisterPayload = {
  name: String;
  email: String;
  password: String;
};
export const registerUser = async (data: TRegisterPayload) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/register/create-user`,
    {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const patientInfo = await res.json();
  return patientInfo;
};
