import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: haqiqiy domenni bu yerga yozing (masalan https://ipnishon.uz)
// — sitemap.xml va SEO uchun kanonik manzillar shundan hosil bo'ladi.
export default defineConfig({
  site: 'https://ipnishon.uz',
  integrations: [sitemap()],
  compressHTML: true,
});
