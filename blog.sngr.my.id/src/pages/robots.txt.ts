import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${
      import.meta.env.SITE
    }/sitemap-index.xml`
  )
}
