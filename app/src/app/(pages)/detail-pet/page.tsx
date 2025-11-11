import {DetailPage} from "../detail-pet/detail-pet"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chi tiết",
  description: "Web mua sắm thú cưng Online!",
};
export default function Detail() {
  return (
    <>
      <DetailPage />
    </>
  );
}
