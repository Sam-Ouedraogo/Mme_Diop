import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind()],

  image: {
    // Use Astro's built-in image optimization
    domains: [],
  },

  output: "hybrid",
  adapter: cloudflare()
});