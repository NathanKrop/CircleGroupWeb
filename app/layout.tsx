import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz", "SOFT", "WONK"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Circle Group | Pathways to Sustainable Livelihoods",
  description: "Circle Group is a women-led Kenyan social enterprise building pathways to dignified work and sustainable livelihoods for young women.",
  metadataBase: new URL("https://www.circlegroupke.org"),
  alternates: { canonical: "./" },
  keywords: ["young women employment Kenya", "TVET access Kenya", "women entrepreneurship Kenya", "livelihoods", "social enterprise Kenya"],
  openGraph: { title: "Circle Group | Pathways to Sustainable Livelihoods", description: "A women-led Kenyan social enterprise building pathways to dignified work and sustainable livelihoods for young women.", url: "https://www.circlegroupke.org", siteName: "Circle Group", locale: "en_KE", type: "website", images: [{ url: "/img/pixx/photo_2026-10-06_13-46-17.jpg", width: 1200, height: 1500, alt: "Circle Group community opportunity" }] },
  twitter: { card: "summary_large_image", title: "Circle Group | Pathways to Sustainable Livelihoods", description: "A women-led Kenyan social enterprise building pathways to dignified work and sustainable livelihoods for young women.", images: ["/img/pixx/photo_2026-10-06_13-46-17.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${fraunces.variable} ${inter.variable}`}><body className="font-body antialiased"><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded focus:bg-forest focus:px-4 focus:py-2 focus:text-white">Skip to main content</a><NavBar /><main id="main-content">{children}</main><Footer /></body></html>;
}
