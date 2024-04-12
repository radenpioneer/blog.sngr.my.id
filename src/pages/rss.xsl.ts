import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const stylesheet = await fetch(
    'https://raw.githubusercontent.com/genmon/aboutfeeds/cd0788cb9f8cfa4edf7f88226586d314078b152a/tools/pretty-feed-v3.xsl'
  ).then((res) => res.text())

  return new Response(stylesheet, {
    headers: {
      'Content-Type': 'text/xsl',
    },
  })
}
