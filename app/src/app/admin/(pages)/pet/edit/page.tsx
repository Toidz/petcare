import type { Metadata } from "next";
import { PetEditPage } from "./edit";
export const metadata: Metadata = {
  title: "Cập nhật thú cưng",
  description: "",
};
export default function PetEdit() {
  return (
    <PetEditPage />
  );
}
