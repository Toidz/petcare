import {CartPage} from "../cart/cart"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Giỏ hàng",
  description: "Web mua sắm thú cưng Online!",
};
export default function Detail() {
  return (
    <>
      <CartPage />
    </>
  );
}
