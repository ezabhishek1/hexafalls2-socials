import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HexaFalls 2 2026 | JIS University's Premier TechFest",
  description:
    "Connect with HexaFalls 2 — JIS University's premier TechFest. July 24–26, 2026.",
  authors: { name: "Abhishek Gupta" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="HexaFalls 2 2026 | JIS University's Premier TechFest"
        />
        <meta
          property="og:description"
          content="Connect with HexaFalls 2 — JIS University's premier TechFest. July 24–26, 2026."
        />
        <meta property="og:image" content="https://hexafalls-socials.vercel.app/preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
