/**
 * schema.org graph for the landing page.
 *
 * Built at build time by the `structured-data` plugin in vite.config.js and
 * inlined into dist/index.html, so crawlers get it without executing the app.
 * Every value is derived from data/company.js or the Indonesian dictionary —
 * nothing is written twice, so editing the copy updates the markup too.
 *
 * Indonesian is used as the graph language: it is the company's primary
 * market, and Google reads JSON-LD regardless of which language the page
 * happens to render in.
 */
import { COMPANY, SOCIALS } from '../data/company.js'
import { NEWS_SORTED } from '../data/news.js'
import id from '../i18n/id.js'

const SITE = COMPANY.url

/** "25 menit" / "25 minutes" -> "PT25M". Returns undefined if no number. */
function isoDuration(text) {
  const minutes = Number.parseInt(String(text).trim(), 10)
  return Number.isFinite(minutes) ? `PT${minutes}M` : undefined
}

function organization() {
  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE}/#organization`,
    name: COMPANY.legalName,
    legalName: COMPANY.legalName,
    alternateName: COMPANY.shortName,
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/assets/brand/logo.png` },
    image: `${SITE}/assets/brand/og-cover.jpg`,
    description: id.about.body[0],
    email: COMPANY.email,
    telephone: COMPANY.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Perusahaan gang Industri No.1, Randu Agung',
      addressLocality: 'Singosari, Malang',
      addressRegion: 'Jawa Timur',
      postalCode: '65153',
      addressCountry: 'ID',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: COMPANY.phoneRaw,
      email: COMPANY.email,
      areaServed: 'ID',
      availableLanguage: ['id', 'en'],
    },
    sameAs: SOCIALS.filter((s) => s.verified).map((s) => s.href),
    knowsAbout: [
      'tepung agar-agar',
      'agar-agar powder',
      'ekstrak rumput laut',
      'seaweed extract',
      'Gracilaria',
      'jelly powder',
    ],
  }
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: SITE,
    name: COMPANY.legalName,
    description: id.hero.lead,
    publisher: { '@id': `${SITE}/#organization` },
    inLanguage: ['id', 'en'],
  }
}

function webPage() {
  return {
    '@type': 'WebPage',
    '@id': `${SITE}/#webpage`,
    url: `${SITE}/`,
    name: `${id.hero.titleA} ${id.hero.titleB} — ${COMPANY.legalName}`,
    description: id.hero.lead,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#organization` },
    primaryImageOfPage: `${SITE}/assets/brand/og-cover.jpg`,
    inLanguage: 'id',
  }
}

function faqPage() {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE}/#faq`,
    isPartOf: { '@id': `${SITE}/#webpage` },
    mainEntity: id.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

/** Recipe order matches CARD_IMAGES in sections/Recipes.jsx. */
const RECIPE_IMAGES = [
  '/assets/recipes/recipe-santan.jpg',
  '/assets/recipes/recipe-lapis.jpg',
  '/assets/recipes/recipe-cokelat.jpg',
  '/assets/recipes/recipe-jellycup.jpg',
]

function recipes() {
  return id.recipes.cards.map((card, i) => ({
    '@type': 'Recipe',
    '@id': `${SITE}/#recipe-${i + 1}`,
    name: card.name,
    description: card.blurb,
    image: `${SITE}${RECIPE_IMAGES[i]}`,
    author: { '@id': `${SITE}/#organization` },
    publisher: { '@id': `${SITE}/#organization` },
    isPartOf: { '@id': `${SITE}/#webpage` },
    inLanguage: 'id',
    recipeCategory: 'Dessert',
    recipeCuisine: 'Indonesian',
    recipeYield: card.serves,
    totalTime: isoDuration(card.time),
    keywords: ['resep puding', 'agar-agar', 'tepung agar-agar', card.name.toLowerCase()].join(', '),
    recipeIngredient: card.ingredients,
    recipeInstructions: card.steps.map((step, n) => ({
      '@type': 'HowToStep',
      position: n + 1,
      text: step,
    })),
  }))
}

/** One NewsArticle per post in data/news.js, all on the landing page. */
function newsArticles() {
  return NEWS_SORTED.map((post) => ({
    '@type': 'NewsArticle',
    '@id': `${SITE}/#news-${post.slug}`,
    headline: post.title.id,
    description: post.excerpt.id,
    image: `${SITE}${post.cover.src}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@id': `${SITE}/#organization` },
    publisher: { '@id': `${SITE}/#organization` },
    mainEntityOfPage: { '@id': `${SITE}/#webpage` },
    articleSection: id.news.eyebrow,
    inLanguage: 'id',
    ...(post.location ? { contentLocation: { '@type': 'Place', name: post.location } } : {}),
  }))
}

export function buildStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(), website(), webPage(), faqPage(), ...recipes(), ...newsArticles()],
  }
}
