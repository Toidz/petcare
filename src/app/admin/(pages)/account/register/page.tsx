import type { Metadata } from "next";
import { RegisterPage } from "./register";
export const metadata: Metadata = {
  title: "Đăng ký",
  description: "",
};
export default function Register() {
  return (
    <>
      <RegisterPage />
    </>
  );
}
