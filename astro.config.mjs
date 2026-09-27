import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paraguascrypto.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        if (url === 'https://paraguascrypto.com') item.priority = 1;
        else if (url.endsWith('/acquire')) item.priority = 0.9;
        else if (url.endsWith('/es')) item.priority = 0.8;
        else item.priority = 0.7;
        item.lastmod = '2026-09-27';
        return item;
      },
    }),
  ],
});
