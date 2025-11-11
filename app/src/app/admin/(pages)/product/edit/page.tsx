import type { Metadata } from "next";
import { ProductEditPage } from "./edit";
export const metadata: Metadata = {
  title: "Cập nhật sản phẩm ",
  description: "",
};
export default function ProductEdit() {
  return (
    <ProductEditPage />
  );
}
