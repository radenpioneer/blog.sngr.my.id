import { useState, type FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import MaterialSymbolsLightMenu from '~icons/material-symbols-light/menu'
import MaterialSymbolsLightClose from '~icons/material-symbols-light/close'

const MainMenu: FC<{ site: CollectionEntry<'site'> }> = ({ site }) => {
  return (
    <>
      <ul className="hidden md:flex border border-gray-300 rounded-full shadow-md px-4 bg-white">
        {site.data.menu.map((entry, _i) => (
          <li className="font-bold text-sm px-4 py-2" key={_i}>
            <a href={`/${entry.slug}`}>{entry.name}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:block w-[51px] h-[51px]"></div>
      <MobileMenu site={site} />
    </>
  )
}

const MobileMenu: FC<{ site: CollectionEntry<'site'> }> = ({ site }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="border border-gray-300 px-3 py-1 rounded-full shadow-md bg-white"
      >
        {open ? (
          <MaterialSymbolsLightClose className="text-lg" />
        ) : (
          <MaterialSymbolsLightMenu className="text-lg" />
        )}
      </button>
      <div
        className={`${
          open ? '' : 'hidden'
        } absolute right-0 top-[150%] flex flex-col border border-gray-300 rounded-xl shadow-md bg-whiteabsolute right-0 top-[150%] flex flex-col border border-gray-300 rounded-xl shadow-md bg-white`}
      >
        <ul>
          {site.data.menu.map((entry, _i) => (
            <li className="font-bold text-right px-8 py-4" key={_i}>
              <a href={`/${entry.slug}`}>{entry.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainMenu
