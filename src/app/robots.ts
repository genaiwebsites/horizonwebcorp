import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://horizonwebcorp.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Explicitly allow AI and Generative search crawlers for optimal GEO / AIO indexing
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Google-Extended', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
