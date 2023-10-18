import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import markdoc from '@astrojs/markdoc'
import vercel from '@astrojs/vercel/serverless'
// import AstroPWA from '@vite-pwa/astro'

import { readFileSync } from 'node:fs'
// import manifest from './src/includes/manifest.json' assert { type: 'json' }

// vite plugin to import fonts
const rawFonts = (ext) => ({
  name: 'vite-plugin-raw-fonts',
  transform: (_, id) => {
    if (ext.some((e) => id.endsWith(e))) {
      const buffer = readFileSync(id)
      return {
        code: `export default ${JSON.stringify(buffer)}`,
        map: null,
      }
    }
  },
})

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://radenpioneer.blog' : 'http://localhost:3000',
  compressHTML: process.env.CI ? true : false,
  integrations: [
    mdx(),
    react(),
    sitemap(),
    markdoc(),
    // AstroPWA({
    //   strategies: 'injectManifest',
    //   srcDir: 'src/includes',
    //   filename: 'sw.ts',
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
    //   manifest,
    // }),
  ],
  redirects: {
    '/esai': '/tags/esai',
  },
  vite: {
    plugins: [rawFonts(['.woff'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  output: 'hybrid',
  adapter: vercel(),
})
