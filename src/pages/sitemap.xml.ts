import type { APIRoute } from 'astro'
import { getSortedPosts } from '~/data/posts'

const SITE_URL = import.meta.env.PROD
  ? import.meta.env.SITE
  : 'http://127.0.0.1:4321'

export const GET: APIRoute = () => {
  const posts = getSortedPosts()

  const xmlString = `
        <?xml version="1.0" encoding="UTF-8"?>
        <?xml-stylesheet type="text/xsl" href="${SITE_URL}/sitemap.xsl"?>
        <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>${SITE_URL}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
          ${posts.map(
            (post) => `
            <url>
              <loc>${SITE_URL}${post.url}</loc>
              <lastmod>${post.date.toISOString()}</lastmod>
            </url>
          `
          )}
        </urlset>
    `.trim()

  return new Response(xmlString, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
