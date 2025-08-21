import type { Metadata } from "next";
import { ForgotPassWordPage } from "./forgot-password";
export const metadata: Metadata = {
  title: "Quên mật khẩu",
  description: "",
};
export default function Forgot() {
  return (
    <>
      <ForgotPassWordPage />
    </>
  );
}
