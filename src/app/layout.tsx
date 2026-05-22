import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G-Structure Command Center",
  description: "Private operating system for G-Structure execution."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
