
import type { Metadata } from "next";
import { OrderPage } from "./order";
export const metadata: Metadata = {
  title: "Trang quản lý đơn hàng",
  description: "",
};
export default function Order() {
  return (
    <>
      <OrderPage />
    </>
  );
}
