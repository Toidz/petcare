import {HomePage} from "./components/home/home"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Web mua sắm thú cưng Online!",
};
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
