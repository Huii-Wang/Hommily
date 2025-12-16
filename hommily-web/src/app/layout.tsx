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
  title: "Hommily",
  description: "Hommily",
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
