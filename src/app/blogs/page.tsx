import React from 'react';
import type { Metadata } from 'next';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { PillButton } from '../../components/PillButton';
import { ArrowRight } from '../../components/Icons';
import { BlogsGrid } from '../../components/BlogsGrid';
import { BLOG_POSTS } from '../../data/blogs';

export const metadata: Metadata = {
  title: 'Engineering Journals & Technical Publications | Horizon Web Corp',
  description: 'In-depth engineering research on WebGL/Three.js spatial graphics, Next.js 16 RSC architectures, motion physics, WCAG 2.1 AA accessibility, and WebGPU compute pipelines.',
  keywords: [
    'web engineering blog',
    'three.js tutorials',
    'webgl engineering',
    'next.js server components',
    'web performance optimization',
    'high performance web',
    'webgpu development'
  ],
  alternates: {
    canonical: 'https://horizonwebcorp.com/blogs',
  },
  openGraph: {
    title: 'Engineering Journals & Technical Publications | Horizon Web Corp',
    description: 'In-depth engineering research on WebGL/Three.js spatial graphics, Next.js 16 RSC architectures, motion physics, WCAG 2.1 AA accessibility, and WebGPU compute pipelines.',
    url: 'https://horizonwebcorp.com/blogs',
    siteName: 'Horizon Web Corp',
    type: 'website',
    images: [
      {
        url: 'https://horizonwebcorp.com/og-banner.png',
        width: 3002,
        height: 1497,
        alt: 'Horizon Web Corp Engineering Journals',
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
    title: 'Engineering Journals & Technical Publications | Horizon Web Corp',
    description: 'In-depth engineering research on WebGL/Three.js spatial graphics, Next.js 16 RSC architectures, and WebGPU compute pipelines.',
    images: ['https://horizonwebcorp.com/og-banner.png'],
    creator: '@horizonwebcorp',
  },
};

export default function BlogsPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Horizon Web Corp Engineering Journals',
    description: 'A technical publication detailing our research, design breakthroughs, and engineering updates in WebGL, React server architectures, and elite browser rendering pipelines.',
    url: 'https://horizonwebcorp.com/blogs',
    publisher: {
      '@type': 'Organization',
      name: 'Horizon Web Corp',
      url: 'https://horizonwebcorp.com'
    },
    hasPart: BLOG_POSTS.map((post) => ({
      '@type': 'TechArticle',
      headline: post.title,
      url: `https://horizonwebcorp.com/blogs/${post.slug}`,
      datePublished: post.isoDate,
      author: {
        '@type': 'Organization',
        name: post.author
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://horizonwebcorp.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Engineering Insights',
        item: 'https://horizonwebcorp.com/blogs'
      }
    ]
  };

  return (
    <div className="relative min-h-screen w-full bg-[#fafaff] text-slate-800 flex flex-col overflow-x-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Subtle, fluid, non-linear mesh gradients, diagonal network edges, and dot grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Architectural subtle ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(at_50%_0%,rgba(0,0,0,0.04)_0%,transparent_70%)]" />
        {/* Subtle, static diagonal network lines & dot graph */}
        <div className="absolute inset-0 bg-mesh-graph opacity-[0.4]" />
      </div>

      <Nav light />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 flex-grow w-full">
        {/* Symmetric Header Stack */}
        <div className="mb-20 text-center flex flex-col items-center max-w-3xl mx-auto">
          <span className="font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-[0.25em] mb-4 block">
            HWC Technical Journals
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            <span className="block whitespace-nowrap">Insights from the</span>
            <span className="block text-slate-500 font-light whitespace-nowrap">
              Frontier of Web.
            </span>
          </h1>
          <p className="text-slate-600 font-sans text-[17px] leading-relaxed font-light">
            A technical publication detailing our research, design breakthroughs, and engineering updates in WebGL, React server architectures, and elite browser rendering pipelines.
          </p>
        </div>

        {/* Dynamic Bento Cards Grid */}
        <BlogsGrid posts={BLOG_POSTS} light />

        {/* Back to Home Navigation CTA */}
        <div className="mt-16 flex justify-center">
          <PillButton href="/" light>
            Back to Home <ArrowRight className="w-4 h-4 ml-1" />
          </PillButton>
        </div>
      </div>

      <Footer light />
    </div>
  );
}
