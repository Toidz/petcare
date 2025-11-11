"use client"
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import "./globals.css";
import { usePathname } from "next/navigation";
import { registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isAdminAccount = pathName.startsWith("/admin/account")
  return (
    <div className={isAdminAccount? "bg-[url('/client/images/bg-category-demo.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen": "relative container mx-auto"}>
      {isAdminAccount ? <></> : <Header />}
      {isAdminAccount ? <></> : <Sidebar />}
      {children}
    </div>
  );
}
