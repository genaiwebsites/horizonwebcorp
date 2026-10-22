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
  keywords: [
    'Bespoke Web Design',
    'Next.js Engineering Studio',
    'Three.js Agency',
    'WebGL Development Studio',
    'High-Performance Web Design',
    'Creative Technology Studio',
    'Custom Web Applications',
    'Design Systems Engineering',
    'WCAG AA Accessibility',
    'React Server Components',
    'Kolkata Web Agency',
    'Edge SSR Architecture',
    'Enterprise Frontend Engineering',
  ],
  authors: [{ name: 'Horizon Web Corp Engineering Team', url: 'https://horizonwebcorp.com' }],
  creator: 'Horizon Web Corp',
  publisher: 'Horizon Web Corp',
  category: 'technology',
  alternates: {
    canonical: 'https://horizonwebcorp.com',
  },
  openGraph: {
    title: 'Horizon Web Corp — Bespoke Web Design & Engineering Studio',
    description: 'Bespoke web design and engineering studio crafting high-performance Next.js architectures, interactive Three.js experiences, and guaranteed sub-second edge loading.',
    url: 'https://horizonwebcorp.com',
    siteName: 'Horizon Web Corp',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://horizonwebcorp.com/og-banner.png',
        width: 3002,
        height: 1497,
        alt: 'Horizon Web Corp — We Engineer Digital Odysseys',
      },
      {
        url: 'https://horizonwebcorp.com/og-image.png',
        width: 1254,
        height: 1254,
        alt: 'Horizon Web Corp Emblem Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horizon Web Corp — Bespoke Web Design & Engineering Studio',
    description: 'Bespoke web design and engineering studio. Handcrafted Next.js architecture, interactive Three.js experiences, sub-second edge loading.',
    images: ['https://horizonwebcorp.com/og-banner.png'],
    creator: '@horizonwebcorp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://horizonwebcorp.com/#organization',
      name: 'Horizon Web Corp',
      url: 'https://horizonwebcorp.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://horizonwebcorp.com/og-image.png',
        width: '1254',
        height: '1254',
      },
      image: 'https://horizonwebcorp.com/og-banner.png',
      description: 'Bespoke web design and engineering studio crafting high-performance Next.js architectures, interactive WebGL experiences, and accessible design systems.',
      foundingDate: '2025',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kolkata',
        addressRegion: 'West Bengal',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.instagram.com/horizonwebcorp/',
        'https://linkedin.com/company/horizonwebcorp',
        'https://github.com/genaiwebsites/horizonwebcorp',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales & technical inquiries',
        url: 'https://horizonwebcorp.com/#contact',
        availableLanguage: ['English', 'Hindi', 'Bengali'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://horizonwebcorp.com/#website',
      url: 'https://horizonwebcorp.com',
      name: 'Horizon Web Corp',
      description: 'Official digital platform of Horizon Web Corp, boutique web design and engineering studio.',
      publisher: {
        '@id': 'https://horizonwebcorp.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://horizonwebcorp.com/blogs?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://horizonwebcorp.com/#service',
      name: 'Horizon Web Corp — Digital Engineering Studio',
      url: 'https://horizonwebcorp.com',
      priceRange: '$$$$',
      image: 'https://horizonwebcorp.com/og-banner.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kolkata',
        addressRegion: 'West Bengal',
        addressCountry: 'IN',
      },
      areaServed: [
        'Global',
        'United States',
        'United Kingdom',
        'India',
        'Singapore',
        'United Arab Emirates',
        'European Union',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Engineering Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bespoke UI/UX & Design Systems',
              description: 'Custom digital storefronts, design tokens, typography scales, and accessible component architectures.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Interactive 3D & WebGL Engineering',
              description: 'Three.js product visualizers, shader materials, and 60 FPS hardware-accelerated browser canvases.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Performance Engineering & Next.js Architecture',
              description: 'Sub-second LCP optimization, React Server Components hydration, and 100/100 Core Web Vitals guarantees.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://horizonwebcorp.com/#faq',
      name: 'Horizon Web Corp Frequently Asked Questions',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What web engineering technologies does Horizon Web Corp specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Horizon Web Corp specializes in high-performance Next.js 16 (App Router and React Server Components), interactive Three.js, WebGL and WebGPU 3D graphics, TypeScript, Tailwind CSS, and global edge CDN deployments with Cloudflare and Vercel.'
          }
        },
        {
          '@type': 'Question',
          name: 'How does Horizon Web Corp achieve 100/100 Lighthouse performance with 3D graphics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We isolate GPU render loops from main thread layout calculation, dynamically import heavy WebGL/Three.js bundles only when entering viewport, maintain strict zero cumulative layout shift (CLS 0.00), and compress assets using WebP, AVIF, and Brotli encoding.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the typical timeline and engagement model for a bespoke project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard bespoke corporate platforms, interactive web experiences, and engineering redesigns ship in 4 to 8 weeks. Engagements encompass technical discovery, spatial 3D prototyping, WCAG 2.1 AA accessibility compliance audits, and global edge CDN deployment.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does Horizon Web Corp serve clients internationally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Horizon Web Corp operates globally, serving high-growth startups, venture-backed tech platforms, and luxury brands across the United States, United Kingdom, Europe, Singapore, the UAE, and India.'
          }
        }
      ]
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} ${jetBrainsMono.variable}`}>
      <head>
        {/* Authoritative Structured Data (Schema.org @graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
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
