import type { CollectionEntry } from 'astro:content'
import type { FC } from 'react'
import { getISODate, getLocalDate } from '~/utils/date'
import { getExcerpt } from '~/utils/excerpt'

const PostSection: FC<{ post: CollectionEntry<'posts'> }> = ({ post }) => {
  const url = [
    post.data.category.id,
    new Date(post.data.date).getFullYear(),
    post.slug,
  ].join('/')

  return (
    <article className="prose">
      <h2>
        <a href={url}>{post.data.title}</a>
      </h2>
      <>{getExcerpt(post.body, 'html')}</>
      <div className="not-prose flex gap-2 items-center text-xs">
        <a
          className="border border-gray-300 px-4 py-1 rounded-full hover:underline"
          href={url}
        >
          Baca Selengkapnya
        </a>
        <time
          className="border border-gray-300 px-4 py-1 rounded-full"
          dateTime={getISODate(post.data.date)}
        >
          {getLocalDate(post.data.date)}
        </time>
      </div>
    </article>
  )
}

export default PostSection
