import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { buildStructuredData } from './src/seo/structuredData.js'

/**
 * Inlines the schema.org graph into index.html at build time. Keeping it out
 * of the React tree means crawlers see it in the raw HTML response instead of
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

export default defineConfig({
  plugins: [react(), structuredData()],
  server: { port: 5173, open: true },
})
