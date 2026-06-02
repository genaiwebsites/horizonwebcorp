import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Preloader } from "../components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "700", "900"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "500", "600", "700", "800"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: {
    default: 'Horizon Web Corp — Premium Web Engineering Lab | Kolkata',
    template: '%s | Horizon Web Corp',
  },
  description: 'Kolkata-based web engineering lab crafting ultra-premium digital experiences. Next.js, WebGL, 3D interactions, and performance-first development.',
  metadataBase: new URL('https://horizonwebcorp.com'),
  alternates: {
    canonical: 'https://horizonwebcorp.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#030305] text-slate-200 min-h-[100svh] selection:bg-[#8b5cf6]/40 selection:text-white overflow-x-hidden w-full max-w-[100vw]">
        {/* Skip to main content — WCAG 2.4.1 bypass block */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-3 focus:bg-[#22d3ee] focus:text-black focus:font-bold focus:font-mono focus:text-sm focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Preloader />
        <main id="main-content" className="relative flex flex-col min-h-[100svh] overflow-x-hidden w-full max-w-[100vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
