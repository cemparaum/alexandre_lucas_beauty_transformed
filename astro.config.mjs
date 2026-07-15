// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cemparaum.github.io',
  base: process.env.GITHUB_ACTIONS ? '/alexandre_lucas_beauty_transformed/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});