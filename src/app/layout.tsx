import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarTabs from "@/components/NavbarTabs";
import MetaMaskAlert from "@/components/MetaMaskAlert";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snake Chain",
  description: "Dự án demo về Public Blockchain bằng Solidity",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <MetaMaskAlert />
       <NavbarTabs />
       {children}
   
      </body>
    </html>
  );
}
