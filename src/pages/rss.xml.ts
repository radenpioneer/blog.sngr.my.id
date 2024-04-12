import type { APIRoute } from 'astro'
import rss from '@astrojs/rss'
import { getSiteInfo } from '~/data/site'
import { getSortedPosts } from '~/data/posts'

export const GET: APIRoute = async ({ site }) => {
  const siteInfo = await getSiteInfo()
  const posts = getSortedPosts()

  return rss({
    title: siteInfo.title,
    description: siteInfo.description,
    site: site!,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.date,
      link: `${site}${post.url}`,
    })),
    stylesheet: '/rss.xsl',
  })
}
