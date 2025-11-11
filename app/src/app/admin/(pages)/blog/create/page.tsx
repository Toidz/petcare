import type { Metadata } from "next";
import { BlogCreatePage } from "./create";
import {auth} from "../../../auth/auth"
export const metadata: Metadata = {
  title: "Tạo bài viết mới",
  description: "",
};
export default async function BlogCreate() {
  await auth()
  return (
    <BlogCreatePage />
  );
}
