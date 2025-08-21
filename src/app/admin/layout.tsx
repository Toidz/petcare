"use client"
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import "./globals.css";
import { usePathname } from "next/navigation";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isAdminAccount = pathName.startsWith("/admin/account")
  return (
    <div className="bg-[#f8f8f8]">
      {isAdminAccount ? <></> : <Header />}
      {isAdminAccount ? <></> : <Sidebar />}
      {children}
    </div>
  );
}
