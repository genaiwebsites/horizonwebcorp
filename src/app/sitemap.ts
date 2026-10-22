import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://horizonwebcorp.com';
  
  // Base static routes with calibrated priority and changeFrequency
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-10-22T08:00:00Z'),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${baseUrl}/og-banner.png`, `${baseUrl}/og-image.png`],
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date('2026-06-02T08:00:00Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-05-01T08:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-05-01T08:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic blog post routes with fixed ISO publishing dates and image URLs
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${baseUrl}${post.image}`],
  }));

  return [...routes, ...blogRoutes];
}
