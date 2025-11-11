import type { Metadata } from "next";
import { LoginPage } from "./login";
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "",
};
export default function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}
