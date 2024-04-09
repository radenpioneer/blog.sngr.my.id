import { getCollection } from 'astro:content'

const allPostsData = await getCollection('posts')

export const getSortedPosts = () =>
  allPostsData
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((post) => {
      return {
        url: `/${[post.data.date.getFullYear(), post.slug].join('/')}`,
        slug: post.slug,
        render: post.render,
        ...post.data,
      }
    })
export const getFirstPost = () => getSortedPosts().at(0)
