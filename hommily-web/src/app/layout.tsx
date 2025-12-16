import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LanguageSetter from "@/components/LanguageSetter";
import { LanguageProvider } from "@/contexts/LanguageContext";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-sc",
});

export const metadata: Metadata = {
  title: "Hommily - 用心设计 守护日常",
  description: "Hommily 致力于为全球家庭提供高品质的家居产品和解决方案",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerifSC.variable} antialiased`}>
        <LanguageProvider>
          <LanguageSetter />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
