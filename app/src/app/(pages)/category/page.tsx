import {CategoryPage} from "../category/category"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chó canh",
  description: "Web mua sắm thú cưng Online!",
};
export default function Category() {
  return (
    <>
      <CategoryPage />
    </>
  );
}
