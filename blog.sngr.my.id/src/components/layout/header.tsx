import { type FC } from 'react'
import { type GetImageResult } from 'astro'

const Header: FC<{ title: string; image: GetImageResult }> = ({
  title,
  image,
}) => {
  return (
    <header>
      <div className="flex max-w-screen-lg mx-auto px-4 py-4">
        <a href="/" className="flex gap-2 items-center">
          <img
            src={image.src}
            className="rounded-full w-[35px] h-[35px]"
            {...image.attributes}
            alt=""
          />
          <span className="font-black text-lg text-[--on-tertiary-container] dark:text-[--on-tertiary-container-dark]">
            {title}
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header
