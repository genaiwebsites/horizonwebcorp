import React from 'react';
import type { Metadata } from 'next';
import { Nav } from '../../../components/Nav';
import { Footer } from '../../../components/Footer';
import { PillButton } from '../../../components/PillButton';
import { ArrowRight } from '../../../components/Icons';
import { BlogContent } from '../../../components/BlogContent';
import { BLOG_POSTS } from '../../../data/blogs';

export const unstable_instant = {
  prefetch: 'runtime',
  samples: [
    { params: { slug: 'webgl-renaissance' } }
  ]
};

// Table of Contents sections
const ARTICLE_SECTIONS: Record<string, { id: string, title: string }[]> = {
  "webgl-renaissance": [
    { id: "psychology", title: "1. Spatial Psychology" },
    { id: "constraints", title: "2. GPU & FPS Constraints" },
    { id: "differentiation", title: "3. Brand Differentiator" }
  ],
  "nextjs-rsc-latency": [
    { id: "mechanics", title: "1. RSC Server Mechanics" },
    { id: "lighthouse", title: "2. Reaching Lighthouse 100" },
    { id: "impact", title: "3. Business Value of Speed" }
  ],
  "motion-design-physics": [
    { id: "easing", title: "1. Why Linear Easing Fails" },
    { id: "shaders", title: "2. Spotlight Grid Glows" },
    { id: "scrolling", title: "3. GPU Animation Rules" }
  ],
  "accessibility-luxury-design": [
    { id: "contrast", title: "1. Contrast Ratio Math" },
    { id: "keyboard", title: "2. Accessibility Bypass" },
    { id: "spectrum", title: "3. Design for Spectrum" }
  ],
  "webgpu-vs-webgl": [
    { id: "overhead", title: "1. OpenGL ES Single-Thread" },
    { id: "compute", title: "2. Compute Shaders Physics" },
    { id: "roadmap", title: "3. The HWC GPU Roadmap" }
  ],
  "edge-caching-infrastructure": [
    { id: "edge", title: "1. Serverless Edge Caching" },
    { id: "pipelines", title: "2. Asset Compression Rules" },
    { id: "resilient", title: "3. Performance SLA Metrics" }
  ]
};

// Article Markdown content
const ARTICLE_CONTENT: Record<string, React.ReactNode> = {
  "webgl-renaissance": (
    <>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        The modern web is undergoing a spatial revolution. For decades, web designers have treated the browser as a two-dimensional grid of text boxes and images. But with advances in hardware acceleration and browser engine efficiency, the canvas is expanding into three dimensions. WebGL and Three.js are no longer just for game developers; they are the new design language of premium, high-converting digital products.
      </p>
      
      <h2 id="psychology" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">1. The Psychology of Spatial Interactivity</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Why go 3D? Standard flat SaaS templates have created visual fatigue. When a visitor lands on a website featuring custom spatial physics—such as a holographic globe reflecting mouse coordinates or an interactive product wireframe that explodes on scroll—the cognitive engagement shifts. User attention increases by over 3.5x because the interface feels tactile, custom, and alive.
      </p>
      
      <blockquote className="pl-6 border-l-2 border-indigo-500 bg-indigo-50/50 p-5 rounded-r-2xl my-8 text-slate-700 italic font-sans leading-relaxed shadow-sm">
        At Horizon Web Corp, we build spatial experiences that prioritize user engagement. The goal is to delight, not distract. Movement must always have purpose.
      </blockquote>

      <h2 id="constraints" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">2. Engineering Constraints: Balancing Pixels and FPS</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        The biggest challenge of 3D web design is maintaining 60 FPS (frames per second) rendering performance. WebGL uses GPU resources, which means unoptimized vertex counts or excessive draw calls will cause visual lag, especially on mobile devices.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-600 font-sans">
        <li><strong>Geometry Simplification:</strong> Reduce the polygon count of 3D models before importing them.</li>
        <li><strong>Draw Call Batching:</strong> Combine meshes sharing similar materials to render in a single GPU pass.</li>
        <li><strong>Shader Optimization:</strong> Avoid expensive mathematical operations (like dynamic branch checks) inside fragment shaders.</li>
      </ul>

      <h2 id="differentiation" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">3. Spatial Design as a Differentiator</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Ultimately, spatial design commands premium positioning. A company that showcases its brand through bespoke 3D interactivity immediately establishes itself as an industry leader. The web page is no longer a static brochure—it is an Odyssey.
      </p>
    </>
  ),
  "nextjs-rsc-latency": (
    <>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        In modern web engineering, speed is the baseline. A single second of delay can slash conversion rates by 20%. Next.js 16 addresses this directly by integrating React Server Components (RSC) to minimize the javascript bundle sent to the client browser.
      </p>

      <h2 id="mechanics" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">1. The Mechanics of Server-Side Rendering</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Traditional single-page applications (SPAs) force the user's browser to download a massive JavaScript bundle, compile it, and generate the HTML on the fly. This results in high Time to Interactive (TTI) and poor search engine crawlability. React Server Components solve this by rendering the component tree on the server and sending a lightweight, pre-parsed JSON structure directly to the DOM.
      </p>

      <h2 id="lighthouse" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">2. Reaching the Lighthouse 100/100 Standard</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Securing a perfect score on Google Lighthouse requires absolute control over hydration and asset weight.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-600 font-sans">
        <li><strong>Dynamic Imports:</strong> Use <code>dynamic()</code> imports to lazy-load interactive assets (like WebGL globes or heavy modals) only when needed.</li>
        <li><strong>Image Optimization:</strong> Always leverage Next.js <code>&lt;Image&gt;</code> component for automated format conversion (WebP/AVIF) and layout sizing to prevent Cumulative Layout Shift (CLS).</li>
        <li><strong>Edge Route Prefetching:</strong> Prefetch critical routing states via Next.js Link preloading to make page transitions feel instantaneous.</li>
      </ul>

      <blockquote className="pl-6 border-l-2 border-indigo-500 bg-indigo-50/50 p-5 rounded-r-2xl my-8 text-slate-700 italic font-sans leading-relaxed shadow-sm">
        Isolate your GPU canvases. By restricting resource-heavy shaders strictly to the routes that need them, you prevent unnecessary GPU allocation on simple text subpages.
      </blockquote>

      <h2 id="impact" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">3. The Business Impact of Sub-Second Latency</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Optimization is not just a developer flex; it is a business outcome. Faster load times directly improve search engine result page (SERP) ranking, lower bounce rates, and increase conversion pipelines for high-value business platforms.
      </p>
    </>
  ),
  "motion-design-physics": (
    <>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Standard digital interfaces are filled with linear, rigid transitions that feel automated and artificial. In contrast, premium experiential design uses physics-based motion. By applying math to interface mechanics, we can create animations that mirror the physical world, making them intuitive, satisfying, and memorable.
      </p>

      <h2 id="easing" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">1. Why Linear Easing Feels Wrong</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Human eyes are trained to expect acceleration, deceleration, and momentum. When an element shifts at a constant linear speed, it looks mechanical. Instead, we use spring physics models. In a spring-based design, transition paths are computed dynamically based on:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-600 font-sans">
        <li><strong>Mass:</strong> The weight of the moving element.</li>
        <li><strong>Stiffness:</strong> The tension coefficient controlling speed.</li>
        <li><strong>Damping:</strong> The friction that prevents perpetual oscillation.</li>
      </ul>

      <h2 id="shaders" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">2. Custom Cursor Shaders and Grid Glows</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        One of our signature micro-interactions is the spotlight hover effect. Rather than standard CSS hover indicators, we track mouse position using custom cursor coordinates that feed into a canvas-based grid spotlight. The result is a smooth, high-fidelity light halo that follows the user’s gaze, creating an immersive, physical feel.
      </p>

      <blockquote className="pl-6 border-l-2 border-indigo-500 bg-indigo-50/50 p-5 rounded-r-2xl my-8 text-slate-700 italic font-sans leading-relaxed shadow-sm">
        Micro-animations must be quiet and responsive. Over-stimulating motion (like bouncy pages or cheap flashing highlights) compromises legibility and detracts from the brand experience.
      </blockquote>

      <h2 id="scrolling" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">3. Performance Guidelines for Fluid Scrolling</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Always run animations on the GPU by using CSS properties like <code>transform</code> and <code>opacity</code>. Avoid animating layout properties like <code>width</code>, <code>height</code>, or <code>margin</code>, which trigger expensive document reflows.
      </p>
    </>
  ),
  "accessibility-luxury-design": (
    <>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        A common misconception in web design is that beautiful, dark-tech visual systems cannot be accessible. Many premium agencies build gorgeous layouts that fail basic screen reader tests or contrast benchmarks. We believe that accessibility (a11y) and luxury aesthetics are not mutually exclusive—they are two sides of the same precision coin.
      </p>

      <h2 id="contrast" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">1. Dark Mode Contrast Math</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        The WCAG 2.1 AA guideline requires a minimum contrast ratio of 4.5:1 for body text and 3:1 for large text. On deep dark backgrounds (like HWC's midnight black <code>#030305</code>), standard grey text can easily slip below the threshold. We calculate all color tokens mathematically to guarantee legible contrast without sacrificing the sophisticated, low-glow aesthetic.
      </p>

      <h2 id="keyboard" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">2. Keyboard Navigation in Dynamic Systems</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Immersive sites often rely on complex mouse hover triggers. However, users navigating with keyboards or screen readers must have equal access.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-600 font-sans">
        <li><strong>Focus States:</strong> Injected explicit focus-visible rings (using high-visibility neon cyan) on all templates, forms, and links.</li>
        <li><strong>Bypass Links:</strong> Always include skip-to-content anchors as the very first keyboard focus item to bypass heavy navigation layers.</li>
        <li><strong>Aria Labels:</strong> Add descriptive label names on icons and close actions that don't contain raw text.</li>
      </ul>

      <blockquote className="pl-6 border-l-2 border-indigo-500 bg-indigo-50/50 p-5 rounded-r-2xl my-8 text-slate-700 italic font-sans leading-relaxed shadow-sm">
        Never disable default outline indicators without providing an alternative. Unfocusable visual elements are a major compliance barrier and exclude a significant portion of potential users.
      </blockquote>

      <h2 id="spectrum" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">3. Designing for the Spectrum of Ability</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        By designing for accessibility first, we build websites that serve everyone. Inclusive engineering is the highest standard of visual excellence.
      </p>
    </>
  ),
  "webgpu-vs-webgl": (
    <>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        For over a decade, WebGL has been the undisputed standard for 3D in the browser. But a new standard is arriving. WebGPU offers low-overhead, direct access to graphics cards, unlocking compute shaders and advanced physics simulations directly within browser viewports.
      </p>

      <h2 id="overhead" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">1. The Overhead Problem of WebGL</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        WebGL is based on OpenGL ES, which was designed for early mobile devices. It runs on a single thread and suffers from state validation bottlenecks. Every time you update a shader or geometry, the CPU must compile and transfer state options, creating CPU stalls. WebGPU removes this layer by mapping directly to modern GPU APIs (Metal, Vulkan, DirectX 12), allowing developers to record graphics commands asynchronously.
      </p>

      <h2 id="compute" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">2. Compute Shaders: Physics at Scale</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        WebGL only allows rendering shapes to screen pixels. WebGPU introduces compute shaders, which allow the GPU to perform arbitrary mathematical operations in parallel. This enables:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-600 font-sans">
        <li>Simulating millions of particles with complex gravity systems at a smooth 60 FPS.</li>
        <li>Real-time fabric, fluid, and physics wireframe calculations directly in the browser.</li>
        <li>Fast machine learning inference on client graphics hardware.</li>
      </ul>

      <blockquote className="pl-6 border-l-2 border-indigo-500 bg-indigo-50/50 p-5 rounded-r-2xl my-8 text-slate-700 italic font-sans leading-relaxed shadow-sm">
        Combine WebGPU compute nodes with Three.js Shading Language (TSL) to write clean, modular node-based shader trees instead of raw GLSL strings.
      </blockquote>

      <h2 id="roadmap" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">3. The Horizon Web Corp Roadmap</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        As WebGPU support matures across browsers, we are integrating it into our custom builds, providing future-proof, hardware-accelerated experiences that push digital craftsmanship forward.
      </p>
    </>
  ),
  "edge-caching-infrastructure": (
    <>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Building a gorgeous, high-end web experience is only half the battle. If a website experiences traffic surges and collapses, or if high latency creates page delay, the design system fails. Premium frontend design requires hardened global infrastructure.
      </p>

      <h2 id="edge" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">1. The Power of Serverless Edge Delivery</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Instead of routing requests to a single database server on the other side of the planet, modern platforms leverage Edge Networks. Edge nodes cached around the globe intercept client requests, serving static HTML and serverless data responses in milliseconds. This eliminates latency and ensures that visitors in Kolkata, New York, or London receive identical sub-second page performance.
      </p>

      <h2 id="pipelines" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">2. Asset Pipelines for Interactive Media</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        Heavy assets (like WebGL scripts, textures, and video mockups) must be delivered using structured compression pipelines.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-600 font-sans">
        <li><strong>Global Content Delivery Networks (CDNs):</strong> Route heavy video or image files via optimized edge paths with high cache validation rules.</li>
        <li><strong>Brotli Compression:</strong> Pre-compress text assets using Brotli encoding to save up to 30% bandwidth over standard Gzip.</li>
        <li><strong>Cache Headers:</strong> Enforce strict cache-control rules to prevent redundant downloads on repeat page visits.</li>
      </ul>

      <blockquote className="pl-6 border-l-2 border-indigo-500 bg-indigo-50/50 p-5 rounded-r-2xl my-8 text-slate-700 italic font-sans leading-relaxed shadow-sm">
        Performance SLA is a core metric. A website engineered for high traffic must maintain 99.9% uptime, even during heavy traffic surges.
      </blockquote>

      <h2 id="resilient" className="text-2xl font-syne font-bold text-slate-900 mt-12 mb-4 tracking-tight border-b border-slate-200/80 pb-2">3. Engineering Resilient Experiences</h2>
      <p className="text-slate-700 font-sans font-normal text-[16px] sm:text-[18px] leading-relaxed mb-6">
        A premium brand demands premium infrastructure. By combining optimized asset delivery pipelines with edge CDN caching, we deliver websites that are visually stunning and resilient under load.
      </p>
    </>
  )
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://horizonwebcorp.com/blogs/${slug}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="relative min-h-screen w-full bg-[#fafaff] text-slate-800 flex flex-col overflow-x-hidden">
        {/* Subtle, fluid, non-linear mesh gradients, diagonal network edges, and dot grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Beautiful multi-layered mesh gradients mixing with white glows */}
          <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(99,102,241,0.18)_0%,transparent_60%),radial-gradient(at_50%_0%,rgba(6,182,212,0.12)_0%,transparent_50%),radial-gradient(at_100%_0%,rgba(139,92,246,0.15)_0%,transparent_60%),radial-gradient(at_50%_100%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
          {/* Subtle, static diagonal network lines & dot graph (less dense mesh/graph background) */}
          <div className="absolute inset-0 bg-mesh-graph opacity-[0.85]" />
        </div>

        <Nav light />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 text-center min-h-[60vh] flex flex-col justify-center items-center flex-grow">
          <h1 className="text-3xl font-syne font-bold text-slate-900 mb-6">Article Not Found</h1>
          <p className="text-slate-500 mb-10">The article you are searching for does not exist or has been relocated.</p>
          <PillButton href="/blogs" light>
            Return to Blogs <ArrowRight className="w-4 h-4 ml-1" />
          </PillButton>
        </div>
        <Footer light />
      </div>
    );
  }

  const articleMarkup = ARTICLE_CONTENT[slug];
  const sections = ARTICLE_SECTIONS[slug] || [];

  return (
    <div className="relative min-h-screen w-full bg-[#fafaff] text-slate-800 flex flex-col overflow-x-hidden">
      {/* Subtle, fluid, non-linear mesh gradients, diagonal network edges, and dot grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Beautiful multi-layered mesh gradients mixing with white glows */}
        <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(99,102,241,0.18)_0%,transparent_60%),radial-gradient(at_50%_0%,rgba(6,182,212,0.12)_0%,transparent_50%),radial-gradient(at_100%_0%,rgba(139,92,246,0.15)_0%,transparent_60%),radial-gradient(at_50%_100%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
        {/* Subtle, static diagonal network lines & dot graph (less dense mesh/graph background) */}
        <div className="absolute inset-0 bg-mesh-graph opacity-[0.85]" />
      </div>

      <Nav light />

      <BlogContent post={post} sections={sections} light>
        {articleMarkup}
      </BlogContent>

      <Footer light />
    </div>
  );
}
