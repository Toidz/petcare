import type { Metadata } from "next";
import { CategoryPage } from "./category";
import {auth} from "../../auth/auth"
export const metadata: Metadata = {
  title: "Trang quản lý danh mục",
  description: "",
};
export default async function Category() {
  await auth()
  return (
    <>
      <CategoryPage />
    </>
  );
}
