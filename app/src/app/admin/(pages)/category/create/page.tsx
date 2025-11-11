import type { Metadata } from "next";
import { CategoryCreatePage } from "./create";
import {auth} from "../../../auth/auth"
export const metadata: Metadata = {
  title: "Tạo danh mục mới",
  description: "",
};
export default async function CategoryCreate() {
  await auth()
  return (
    <CategoryCreatePage />
  );
}
