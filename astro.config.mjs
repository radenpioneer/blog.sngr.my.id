import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import htmx from 'astro-htmx'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.sngr.my.id/',
  integrations: [htmx(), react(), markdoc(), keystatic()],
  output: 'hybrid',
  adapter: vercel(),
  experimental: {
    contentCollectionCache: true,
  },
})
