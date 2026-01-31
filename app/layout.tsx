import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal Karyawan",
  description: "Portal Karyawan - Tawaharu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-gray-50 antialiased">
        {children}
      </body>
    </html>
  );
}
