import type { Metadata } from "next";
import { CategoryPage } from "./category";
export const metadata: Metadata = {
  title: "Trang quản lý danh mục",
  description: "",
};
export default function Category() {
  return (
    <>
      <CategoryPage />
    </>
  );
}
