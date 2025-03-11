import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "League of Legends Data",
  description:
    "A personal project to explore Next.js rendering patterns and routing using League of Legends data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>
        <div>
          <Link href={"/"}>Home</Link>
          <Link href={"/champions"}>Champions</Link>
          <Link href={"/items"}>Item List</Link>
          <Link href={"/rotation"}>Free Champion Rotation</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
