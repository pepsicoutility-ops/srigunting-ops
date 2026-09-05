import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { buildStructuredData } from './src/seo/structuredData.js'
import { COMPANY } from './src/data/company.js'
import { NEWS_SORTED } from './src/data/news.js'

/**
 * Inlines the schema.org graph into index.html at build time. Keeping it out of
 * the React tree means crawlers see it in the raw HTML response instead of
 * having to render the app first, while it still derives from the same copy
 * the page shows (see src/seo/structuredData.js).
 */
function structuredData() {
  return {
    name: 'structured-data',
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(buildStructuredData()),
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
      // The news section is on the landing page, so a new post is a change to
      // that page — its date drives lastmod.
      const newest = NEWS_SORTED[0]?.date ?? today

      const newsImages = NEWS_SORTED.flatMap((post) => [
        [post.cover.src, post.title.id],
        ...post.gallery.map((photo) => [photo.src, photo.alt.id]),
      ])

      const entries = [
        urlEntry({
          loc: `${site}/`,
          lastmod: newest,
          changefreq: 'monthly',
          priority: '1.0',
          images: [
            ...newsImages,
            ['/assets/products/bulk-25kg.png', 'Tepung agar-agar curah 25 kg PT. Sri Gunting Pratama'],
            ['/assets/recipes/molded-red.jpg', 'Puding cetak dari tepung agar-agar'],
            ['/assets/recipes/recipe-santan.jpg', 'Resep puding santan gula merah'],
            ['/assets/recipes/recipe-lapis.jpg', 'Resep agar-agar lapis buah'],
            ['/assets/recipes/recipe-cokelat.jpg', 'Resep puding cokelat lembut'],
            ['/assets/recipes/recipe-jellycup.jpg', 'Resep jelly cup buah'],
          ],
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
})
