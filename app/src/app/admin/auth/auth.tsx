import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export async function auth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect("/admin/account/login");
  }

  const secret = process.env.JWT_SECRET;

  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    console.error("Token không tồn tại hoặc đã hết hạn", err);
    redirect("/admin/account/login");
  }
}
