import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterSW from "@/components/RegisterSW";
import { InstallModal } from "@/components/Effects";
import { brand } from "@/config/brand";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.brandName} — Cosmétiques Premium`,
  description: brand.description,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: brand.brandName,
  },
};

export const viewport: Viewport = {
  themeColor: "#8B5E6B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/images/logo_ambre_shop.png" />
      </head>
      <body className="font-sans bg-off-white text-rosewood antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <RegisterSW />
        <InstallModal />
      </body>
    </html>
  );
}
