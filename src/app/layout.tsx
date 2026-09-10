import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "양문교회",
  description: "대한예수교장로회 양문교회 공식 웹사이트",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/*
          Paperlogy is loaded via @font-face in globals.css (jsDelivr woff2).
          Preconnect the CDN origin to speed up the first font request.
        */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
