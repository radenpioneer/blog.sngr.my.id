import { defineConfig, squooshImageService } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import htmx from 'astro-htmx'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), react(), markdoc(), keystatic()],
  image: {
    service: squooshImageService(),
  },
  output: 'hybrid',
  adapter: vercel(),
  experimental: {
    contentCollectionCache: true,
  },
})
