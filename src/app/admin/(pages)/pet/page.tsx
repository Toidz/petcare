import type { Metadata } from "next";
import { PetPage } from "./pet";
export const metadata: Metadata = {
  title: "Trang quản lý thú cưng",
  description: "",
};
export default function Pet() {
  return (
    <>
      <PetPage />
    </>
  );
}
