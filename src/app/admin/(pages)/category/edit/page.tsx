import type { Metadata } from "next";
import { CategoryEditPage } from "./edit";
export const metadata: Metadata = {
  title: "Cập nhật danh mục",
  description: "",
};
export default function CategoryEdit() {
  return (
    <CategoryEditPage />
  );
}
