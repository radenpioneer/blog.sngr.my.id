import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.sngr.my.id',
  integrations: [tailwind(), react(), markdoc(), keystatic(), sitemap()],
  output: 'hybrid',
  adapter: vercel({
    speedInsights: true,
  }),
})
