import type { Metadata } from "next";
import { OtpPassWordPage } from "./otp-password";
export const metadata: Metadata = {
  title: "Nhập mã otp",
  description: "",
};
export default function otp() {
  return (
    <>
      <OtpPassWordPage />
    </>
  );
}
