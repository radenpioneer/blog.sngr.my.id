import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import type { GetImageResult } from 'astro'

const Header: FC<{ site: CollectionEntry<'site'>; logo: GetImageResult }> = ({
  site,
  logo,
}) => {
  return (
    <header className="fixed px-4 py-8">
      <nav className="flex">
        <a href="/">
          <img
            src={logo.src}
            className="w-[35px] h-[35px] rounded-full object-cover object-center"
            {...logo.attributes}
            loading="eager"
            alt={site.data.title}
          />
        </a>
      </nav>
    </header>
  )
}

export default Header
