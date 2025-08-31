import type { Metadata } from "next";
import { CategoryCreatePage } from "./create";
export const metadata: Metadata = {
  title: "Tạo danh mục mới",
  description: "",
};
export default function CategoryCreate() {
  return (
    <CategoryCreatePage />
  );
}
