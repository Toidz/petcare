
import type { Metadata } from "next";
import { DashBoardPage } from "./dashboard";
export const metadata: Metadata = {
  title: "Trang chủ tổng quan",
  description: "",
};
export default function Home() {
  return (
    <>
      <DashBoardPage />
    </>
  );
}
