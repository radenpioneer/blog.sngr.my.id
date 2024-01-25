import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import type { GetImageResult } from 'astro'
import MainMenu from './menu'

const Header: FC<{ site: CollectionEntry<'site'>; logo: GetImageResult }> = ({
  site,
  logo,
}) => {
  return (
    <header className="fixed inset-x-0 px-4 py-8">
      <nav className="flex items-center justify-between">
        <a className="rounded-full bg-white p-1 shadow-md" href="/">
          <img
            src={logo.src}
            className="w-[43px] h-[43px] rounded-full object-cover object-center"
            {...logo.attributes}
            loading="eager"
            alt={site.data.title}
          />
        </a>
        <MainMenu site={site} />
      </nav>
    </header>
  )
}

export default Header
