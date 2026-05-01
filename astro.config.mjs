// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/consts.ts';

export default defineConfig({
  site: SITE.url,
  output: 'static',
  trailingSlash: 'ignore',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    react(),
    mdx(),
    sitemap(),
  ],
  experimental: {
    contentIntellisense: true,
  },
});
