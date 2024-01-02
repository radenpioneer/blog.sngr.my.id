import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.sngr.my.id',
  integrations: [tailwind(), react(), markdoc(), keystatic(), sitemap()],
  output: 'hybrid',
  adapter: vercel({
    speedInsights: true,
  }),
  vite: {
    plugins: [
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ],
  },
})
