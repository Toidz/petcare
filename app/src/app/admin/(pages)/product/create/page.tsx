import type { Metadata } from "next";
import { ProductCreatePage } from "./create";
export const metadata: Metadata = {
  title: "Tạo danh sản phẩm mới",
  description: "",
};
export default function ProductCreate() {
  return (
    <ProductCreatePage />
  );
}
