import {Pet} from "./pet"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chó cảnh ",
  description: "Web mua sắm thú cưng Online!",
};
export default function PagePet() {
  return (
    <>
      <Pet />
    </>
  );
}