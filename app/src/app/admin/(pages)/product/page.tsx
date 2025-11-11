import type { Metadata } from "next";
import { ProductPage } from "./product";
export const metadata: Metadata = {
  title: "Trang quản lý sản phẩm",
  description: "",
};
export default function Product() {
  return (
    <>
      <ProductPage />
    </>
  );
}
