import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sngr.my.id',
  compressHTML: process.env.NODE_ENV === 'production',
  integrations: [react(), sitemap()],
  output: 'hybrid',
  adapter: vercel({
    imageService: true,
    speedInsights: true,
    webAnalytics: true,
  }),
  image: {
    domains: ['cdn.hashnode.com'],
  },
})
