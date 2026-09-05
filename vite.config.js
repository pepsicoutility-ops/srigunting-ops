import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { buildStructuredData, buildNewsStructuredData } from './src/seo/structuredData.js'
import { COMPANY } from './src/data/company.js'
import { NEWS_SORTED } from './src/data/news.js'

/**
 * Inlines the schema.org graph into each page at build time. Keeping it out of
 * the React tree means crawlers see it in the raw HTML response instead of
 * having to render the app first, while it still derives from the same copy
 * the pages show (see src/seo/structuredData.js).
 */
function structuredData() {
  return {
    name: 'structured-data',
    transformIndexHtml(html, ctx) {
      const isNews = /news\.html$/.test(ctx.filename ?? ctx.path ?? '')
      return [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(isNews ? buildNewsStructuredData() : buildStructuredData()),
          injectTo: 'head',
        },
      ]
    },
  }
}

const xmlEscape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Emits sitemap.xml as a build artifact rather than shipping a hand-written one
 * in public/. Adding a news post to data/news.js then updates the sitemap — its
 * URL entry, its photos and its lastmod — with no second edit to forget.
 */
function sitemap() {
  const site = COMPANY.url

  const urlEntry = ({ loc, lastmod, changefreq, priority, images = [] }) => {
    const lines = [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
    ]
    for (const [src, title] of images) {
      lines.push(
        '    <image:image>',
        `      <image:loc>${site}${src}</image:loc>`,
        `      <image:title>${xmlEscape(title)}</image:title>`,
        '    </image:image>',
      )
    }
    lines.push('  </url>')
    return lines.join('\n')
  }

  return {
    name: 'sitemap',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      const latestNews = NEWS_SORTED[0]?.date ?? today

      const newsImages = NEWS_SORTED.flatMap((post) => [
        [post.cover.src, post.title.id],
        ...post.gallery.map((photo) => [photo.src, photo.alt.id]),
      ])

      const entries = [
        urlEntry({
          loc: `${site}/`,
          lastmod: today,
          changefreq: 'monthly',
          priority: '1.0',
          images: [
            ['/assets/products/bulk-25kg.png', 'Tepung agar-agar curah 25 kg PT. Sri Gunting Pratama'],
            ['/assets/recipes/molded-red.jpg', 'Puding cetak dari tepung agar-agar'],
            ['/assets/recipes/recipe-santan.jpg', 'Resep puding santan gula merah'],
            ['/assets/recipes/recipe-lapis.jpg', 'Resep agar-agar lapis buah'],
            ['/assets/recipes/recipe-cokelat.jpg', 'Resep puding cokelat lembut'],
            ['/assets/recipes/recipe-jellycup.jpg', 'Resep jelly cup buah'],
          ],
        }),
        urlEntry({
          loc: `${site}/news`,
          lastmod: latestNews,
          changefreq: 'monthly',
          priority: '0.8',
          images: newsImages,
        }),
        urlEntry({
          loc: `${site}/docs/company-profile.pdf`,
          lastmod: today,
          changefreq: 'yearly',
          priority: '0.5',
        }),
        urlEntry({
          loc: `${site}/docs/product-catalog.pdf`,
          lastmod: today,
          changefreq: 'yearly',
          priority: '0.5',
        }),
      ]

      const source = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset',
        '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        '  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
        '>',
        ...entries,
        '</urlset>',
        '',
      ].join('\n')

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source })
    },
  }
}

export default defineConfig({
  plugins: [react(), structuredData(), sitemap()],
  server: { port: 5173, open: true },
  build: {
    rollupOptions: {
      // Two static pages, no client router: Cloudflare's asset handling serves
      // /news from news.html, so each page keeps its own <head> and prerender.
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'news.html'),
      },
    },
  },
})
