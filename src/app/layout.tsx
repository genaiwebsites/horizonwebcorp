import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import { SmoothScroll } from '../components/SmoothScroll';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "700", "900"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "500", "600", "700", "800"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: {
    default: 'Horizon Web Corp — Bespoke Web Design & Engineering Studio',
    template: '%s | Horizon Web Corp',
  },
  description: 'Horizon Web Corp designs and engineers bespoke, high-performance websites for modern brands. Handcrafted Next.js architecture, interactive Three.js experiences, and guaranteed sub-second loading.',
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
      <head>
        {/* Microsoft Clarity & Google Analytics — lazyOnload during idle to protect LCP/TBT & Best Practices */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script id="microsoft-clarity" strategy="lazyOnload">
              {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    try { c[a]('consent', false); } catch(e){}
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "x2xe8t7okb");
              `}
            </Script>
            
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1NWS34VTXD" strategy="lazyOnload" />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-1NWS34VTXD');
              `}
            </Script>
          </>
        )}

        {/* Suppress Vercel Toolbar & Feedback */}
        <Script id="disable-vercel-toolbar" strategy="beforeInteractive">
          {`
            try {
              window.localStorage.setItem('vercel-toolbar', 'hidden');
              window.localStorage.setItem('__vercel_toolbar_hidden', 'true');
            } catch (e) {}
            if (typeof MutationObserver !== 'undefined') {
              new MutationObserver(function() {
                var els = document.querySelectorAll('vercel-live-feedback, vercel-toolbar, [data-vercel-toolbar]');
                for (var i = 0; i < els.length; i++) {
                  els[i].remove();
                }
              }).observe(document.documentElement, { childList: true, subtree: true });
            }
          `}
        </Script>
      </head>
      <body className="relative font-sans antialiased bg-[#030305] text-slate-200 min-h-[100svh] selection:bg-white/20 selection:text-white overflow-x-hidden w-full max-w-[100vw]">
        {/* Skip to main content — WCAG 2.4.1 bypass block */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-3 focus:bg-white focus:text-black focus:font-bold focus:font-mono focus:text-sm focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <main id="main-content" className="relative flex flex-col min-h-[100svh] overflow-x-hidden w-full max-w-[100vw]">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
