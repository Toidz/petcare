"use client"
import {Header} from "./components/header/header"
import {Footer} from "./components/footer/footer"
import "./globals.css";
import { usePathname } from 'next/navigation';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');
  return (
    <html lang="en">
      <body>
        {!isAdminPage && <Header />}

        {children}
        
        {!isAdminPage && <Footer />}
      </body>
    </html>
  );
}


