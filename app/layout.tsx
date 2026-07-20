import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "LufeNote",
  description: "Ứng dụng quản lý ghi chú cá nhân",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header />

        <div>
          <Sidebar />

          <main>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}