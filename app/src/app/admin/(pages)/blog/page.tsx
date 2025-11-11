import type { Metadata } from "next";
import { BlogPage } from "./blog";
import {auth} from "../../auth/auth"
export const metadata: Metadata = {
  title: "Trang quản lý bài viết",
  description: "",
};
export default async function Blog() {
  await auth()
  return (
    <>
      <BlogPage />
    </>
  );
}
