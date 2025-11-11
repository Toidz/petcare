import type { Metadata } from "next";
import { BlogEditPage } from "./edit";
import {auth} from "../../../auth/auth"
export const metadata: Metadata = {
  title: "Cập nhật bài viết",
  description: "",
};
export default async function BlogEdit() {
  await auth()
  return (
    <BlogEditPage />
  );
}
