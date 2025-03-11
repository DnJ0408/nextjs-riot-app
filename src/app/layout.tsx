import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2"
});

export const metadata: Metadata = {
  title: "League of Legends Data",
  description: "A personal project to explore Next.js rendering patterns and routing using League of Legends data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
