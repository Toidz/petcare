import type { Metadata } from "next";
import { ResetPasswordPage } from "./reset-password";
export const metadata: Metadata = {
  title: "Đổi mật khẩu",
  description: "",
};
export default function Reset() {
  return (
    <>
      <ResetPasswordPage />
    </>
  );
}
