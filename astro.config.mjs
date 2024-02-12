import { defineConfig } from 'astro/config';
import htmx from "astro-htmx"
import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [htmx(), alpinejs()]
});