export interface BlogPost {
  title: string;
  description: string;
  category: string;
  date: string;
  isoDate: string;
  author: string;
  readTime: string;
  image: string;
  ogImage: string;
  squareImage: string;
  tags: string[];
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The WebGL Renaissance: Bridging Spatial Artistry and Frontend Performance",
    description: "How modern web browsers are moving away from flat layouts into three-dimensional immersive worlds using custom WebGL and Three.js rendering pipelines.",
    category: "WebGL & 3D",
    date: "June 2, 2026",
    isoDate: "2026-06-02T08:00:00Z",
    author: "Horizon Web Corp Research & Engineering",
    readTime: "6 min read",
    image: "/blog/webgl_renaissance.png",
    ogImage: "/blog/webgl-renaissance-og.jpg",
    squareImage: "/blog/webgl-renaissance-square.jpg",
    tags: ["Three.js", "WebGL", "Shaders", "3D Web", "Interactive Web"],
    slug: "webgl-renaissance"
  },
  {
    title: "Next.js 16 and RSC: Achieving Sub-Second Page Latency",
    description: "Unpacking the technical abstractions of streaming, React Server Components (RSC) hydration, and how to optimize asset loading to secure perfect 100/100 Lighthouse scores.",
    category: "Architecture",
    date: "May 28, 2026",
    isoDate: "2026-05-28T08:00:00Z",
    author: "Horizon Web Corp Research & Engineering",
    readTime: "5 min read",
    image: "/blog/nextjs_latency.png",
    ogImage: "/blog/nextjs-rsc-latency-og.jpg",
    squareImage: "/blog/nextjs-rsc-latency-square.jpg",
    tags: ["Next.js", "RSC", "Lighthouse", "Web Performance", "Edge SSR"],
    slug: "nextjs-rsc-latency"
  },
  {
    title: "The Physics of Motion Design: Crafting Custom Scroll & Cursor Easing",
    description: "Why generic template animations fail to capture user attention and how custom easing functions, spring physics, and canvas-based hover states create premium digital experiences.",
    category: "Motion & UX",
    date: "May 20, 2026",
    isoDate: "2026-05-20T08:00:00Z",
    author: "Horizon Web Corp Research & Engineering",
    readTime: "4 min read",
    image: "/blog/motion_physics.png",
    ogImage: "/blog/motion-design-physics-og.jpg",
    squareImage: "/blog/motion-design-physics-square.jpg",
    tags: ["Framer Motion", "Easing", "GSAP", "Micro-animations", "UX Design"],
    slug: "motion-design-physics"
  },
  {
    title: "WCAG AA Compliance in High-Contrast Luxury Design Systems",
    description: "Reconciling the sleek, dark-tech 'cold luxury' aesthetic with strict accessibility guidelines. A deep dive into contrast ratio math, semantic HTML5, and focus rings.",
    category: "Accessibility",
    date: "May 15, 2026",
    isoDate: "2026-05-15T08:00:00Z",
    author: "Horizon Web Corp Research & Engineering",
    readTime: "7 min read",
    image: "/blog/dark_mode_accessibility.png",
    ogImage: "/blog/accessibility-luxury-design-og.jpg",
    squareImage: "/blog/accessibility-luxury-design-square.jpg",
    tags: ["Accessibility", "WCAG AA", "Tailwind CSS", "A11y", "Semantic HTML"],
    slug: "accessibility-luxury-design"
  },
  {
    title: "WebGPU vs WebGL: The Next Frontier of Real-Time Browser Compute",
    description: "An engineering comparison of WebGL and WebGPU. How TSL (Three.js Shading Language) and GPU compute shaders enable interactive simulations directly in client viewports.",
    category: "WebGPU & Shaders",
    date: "May 08, 2026",
    isoDate: "2026-05-08T08:00:00Z",
    author: "Horizon Web Corp Research & Engineering",
    readTime: "8 min read",
    image: "/blog/webgpu_shaders.png",
    ogImage: "/blog/webgpu-vs-webgl-og.jpg",
    squareImage: "/blog/webgpu-vs-webgl-square.jpg",
    tags: ["WebGPU", "TSL Shading", "GPU Compute", "Shaders", "Three.js"],
    slug: "webgpu-vs-webgl"
  },
  {
    title: "Edge Caching & Global CDNs: Scalable Infrastructure for High-Traffic Drops",
    description: "Serving highly interactive visual media to millions of visitors simultaneously. Best practices for optimizing asset delivery pipelines and serverless edge functions.",
    category: "Infrastructure",
    date: "May 01, 2026",
    isoDate: "2026-05-01T08:00:00Z",
    author: "Horizon Web Corp Research & Engineering",
    readTime: "5 min read",
    image: "/blog/edge_infrastructure.png",
    ogImage: "/blog/edge-caching-infrastructure-og.jpg",
    squareImage: "/blog/edge-caching-infrastructure-square.jpg",
    tags: ["CDN Caching", "Edge", "Vercel", "Web Infrastructure", "Performance SLA"],
    slug: "edge-caching-infrastructure"
  }
];
