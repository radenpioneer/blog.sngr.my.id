import { getCollection } from 'astro:content'

const allPostsData = await getCollection('posts')

export const getSortedPosts = () =>
  allPostsData
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    )
    .map((post) => {
      return {
        url: `/${[new Date(post.data.date).getFullYear(), post.slug].join(
          '/'
        )}`,
        render: post.render,
        ...post.data,
      }
    })
export const getFirstPost = () => getSortedPosts().at(0)
