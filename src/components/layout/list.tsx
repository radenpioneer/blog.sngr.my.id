import { type FC, type PropsWithChildren } from 'react'
import { type CollectionEntry } from 'astro:content'
import { parser } from '~/utils/marked'
import { extractExcerpt } from '~/utils/excerpt'
import { getISODate, getLocaleDate } from '~/utils/date'

const List: FC<{ posts: CollectionEntry<'blog'>[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {posts.map(({ body, data: post }, i) => (
        <div className="flex flex-col gap-2" key={i}>
          <h3 className="font-extrabold text-xl md:text-3xl text-[--on-primary-container] dark:text-[--on-primary-container-dark]">
            <a href="#">{post.title}</a>
          </h3>
          <p
            className="line-clamp-3 leading-relaxed md:text-lg"
            dangerouslySetInnerHTML={{
              __html: parser({
                text: extractExcerpt(body) as string,
                inline: true,
              }),
            }}
          />
          <div className="flex gap-1 overflow-x-auto">
            <PostBadge url="#">
              <time dateTime={getISODate(post.date)}>
                {getLocaleDate(post.date)}
              </time>
            </PostBadge>
            {post.tags &&
              post.tags.map((tag, i) => (
                <PostBadge url="#" key={i}>
                  {tag.name}
                </PostBadge>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const PostBadge: FC<PropsWithChildren<{ url: string }>> = ({
  url,
  children,
}) => {
  return (
    <a
      className="text-sm bg-[--primary-container] text-[--on-primary-container] dark:bg-[--primary-container-dark] dark:text-[--on-primary-container-dark] rounded-full py-1 px-4"
      href={url}
    >
      {children}
    </a>
  )
}

export default List
