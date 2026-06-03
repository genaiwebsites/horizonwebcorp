export interface BlogPost {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The WebGL Renaissance: Bridging Spatial Artistry and Frontend Performance",
    description: "How modern web browsers are moving away from flat layouts into three-dimensional immersive worlds using custom WebGL and Three.js rendering pipelines.",
    category: "WebGL & 3D",
    date: "June 2, 2026",
    readTime: "6 min read",
    image: "/blog/webgl_renaissance.png",
    tags: ["Three.js", "WebGL", "Shaders", "3D Web"],
    slug: "webgl-renaissance"
  },
  {
    title: "Next.js 16 and RSC: Achieving Sub-Second Page Latency",
    description: "Unpacking the technical abstractions of streaming, React Server Components (RSC) hydration, and how to optimize asset loading to secure perfect 100/100 Lighthouse scores.",
    category: "Architecture",
    date: "May 28, 2026",
    readTime: "5 min read",
    image: "/blog/nextjs_latency.png",
    tags: ["Next.js", "RSC", "Lighthouse", "Web Performance"],
    slug: "nextjs-rsc-latency"
  },
  {
    title: "The Physics of Motion Design: Crafting Custom Scroll & Cursor Easing",
    description: "Why generic template animations fail to capture user attention and how custom easing functions, spring physics, and canvas-based hover states create premium digital experiences.",
    category: "Motion & UX",
    date: "May 20, 2026",
    readTime: "4 min read",
    image: "/blog/motion_physics.png",
    tags: ["Framer Motion", "Easing", "GSAP", "Micro-animations"],
    slug: "motion-design-physics"
  },
  {
    title: "WCAG AA Compliance in High-Contrast Luxury Design Systems",
    description: "Reconciling the sleek, dark-tech 'cold luxury' aesthetic with strict accessibility guidelines. A deep dive into contrast ratio math, semantic HTML5, and focus rings.",
    category: "Accessibility",
    date: "May 15, 2026",
    readTime: "7 min read",
    image: "/blog/dark_mode_accessibility.png",
    tags: ["Accessibility", "WCAG AA", "Tailwind CSS", "A11y"],
    slug: "accessibility-luxury-design"
  },
  {
    title: "WebGPU vs WebGL: The Next Frontier of Real-Time Browser Compute",
    description: "An engineering comparison of WebGL and WebGPU. How TSL (Three.js Shading Language) and GPU compute shaders enable interactive simulations directly in client viewports.",
    category: "WebGPU & Shaders",
    date: "May 08, 2026",
    readTime: "8 min read",
    image: "/blog/webgpu_shaders.png",
    tags: ["WebGPU", "TSL Shading", "GPU Compute", "Shaders"],
    slug: "webgpu-vs-webgl"
  },
  {
    title: "Edge Caching & Global CDNs: Scalable Infrastructure for High-Traffic Drops",
    description: "Serving highly interactive visual media to millions of visitors simultaneously. Best practices for optimizing asset delivery pipelines and serverless edge functions.",
    category: "Infrastructure",
    date: "May 01, 2026",
    readTime: "5 min read",
    image: "/blog/edge_infrastructure.png",
    tags: ["CDN Caching", "Edge", "Vercel", "Web Infrastructure"],
    slug: "edge-caching-infrastructure"
  }
];
