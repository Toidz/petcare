import type { Metadata } from "next";
import { OrderEditPage } from "./edit";
export const metadata: Metadata = {
  title: "Cập nhật đơn hàng",
  description: "",
};
export default function OrderEdit() {
  return (
    <OrderEditPage />
  );
}
