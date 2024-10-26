import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), partytown()],
  output: "hybrid", // or "server" if you prefer SSR
  adapter: node({
    mode: 'standalone', // or 'middleware' depending on your needs
  }),
  site: "http://localhost:4321",
  image: {
    domains: ["localhost"],
  },
});
  