import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  integrations: [tailwind(), sitemap(), partytown()],
  output: "server", // or "server" if you prefer SSR
  adapter: node({
    mode: 'standalone', // or 'middleware' depending on your needs
  }),
  site: "https://one.mojah2.mojahmedia.net",
  image: {
    domains: [
      "ghost.mojah2.mojahmedia.net", // Public domain
      "ghost_oneplusone" // Internal Docker network address
    ],
  },
});