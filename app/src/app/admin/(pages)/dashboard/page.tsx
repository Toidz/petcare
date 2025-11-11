import type { Metadata } from "next";
import { DashBoardPage } from "./dashboard"
import {auth} from "../../auth/auth"
export const metadata: Metadata = {
  title: "Trang tổng quan",
  description: "",
};
export default async function Dashboard() {
   await auth()
  return (
    <>
      <DashBoardPage />
    </>
  );
}
