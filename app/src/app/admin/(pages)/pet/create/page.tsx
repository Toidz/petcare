import type { Metadata } from "next";
import { PetCreatePage } from "./create";
export const metadata: Metadata = {
  title: "Tạo danh thú cưng mới",
  description: "",
};
export default function PetCreate() {
  return (
    <PetCreatePage />
  );
}
