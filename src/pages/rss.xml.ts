import rss from '@astrojs/rss'
import { getEntry, getCollection } from 'astro:content'
import { extractExcerpt } from '~/utils/excerpt'
import { generateUrl } from '~/utils/url'

export const GET = async () => {
  const site = await getEntry('site', 'site')
  const posts = await getCollection('blog')

  return rss({
    title: site.data.title,
    description: site.data.description,
    site: import.meta.env.SITE,
    stylesheet: '/rss.xsl',
    items: posts
      .sort(
        (a, b) =>
          new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
      )
      .map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description || extractExcerpt(post.body),
        link: generateUrl(post.slug, new Date(post.data.date)),
      })),
  })
}
