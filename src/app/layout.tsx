import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Preloader } from "../components/Preloader";
import { AuditOverlay } from "../components/AuditOverlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "700", "900"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "500", "600", "700", "800"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Horizon Web Corp - Experiential Engineering",
  description: "We craft ultra-premium web experiences that sit at the intersection of engineering precision and visual artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#030305] text-slate-200 min-h-[100svh] selection:bg-[#8b5cf6]/40 selection:text-white overflow-x-hidden w-full max-w-[100vw]">
        <Preloader />
        <main className="relative flex flex-col min-h-[100svh] overflow-x-hidden w-full max-w-[100vw]">
          {children}
        </main>
        <AuditOverlay />
      </body>
    </html>
  );
}
