import type { FC } from 'react'
import type { GetImageResult } from 'astro'

const HomeSection: FC<{
  title: string
  bio: string
  image: GetImageResult
}> = ({ title, bio, image }) => {
  return (
    <article className="flex flex-col-reverse items-center md:items-start gap-4 max-w-md">
      <div className="flex flex-col gap-3 text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-5xl">{title}</h1>
        <p className="md:text-lg">{bio}</p>
      </div>
      <div>
        <img
          src={image.src}
          className="w-[80px] h-[80px] object-cover object-center rounded-full shadow-md"
          {...image.attributes}
          loading="eager"
          alt=""
        />
      </div>
    </article>
  )
}

export default HomeSection
