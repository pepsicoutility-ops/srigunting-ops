# PT Sri Gunting Pratama — Company Profile

Landing page for PT Sri Gunting Pratama, an industrial and export-oriented
manufacturer of agar-agar powder and seaweed extracts in Malang, East Java.

Built with **React 18 + Vite + Tailwind CSS + Framer Motion**, fully bilingual
(English / Bahasa Indonesia) and responsive from 360 px up.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
├─ App.jsx                  # composes the page from sections
├─ index.css                # Tailwind layers + design tokens
├─ main.jsx
├─ i18n/
│  ├─ LanguageContext.jsx   # provider + useI18n() hook, localStorage persistence
│  ├─ en.js                 # all English copy
│  └─ id.js                 # all Indonesian copy
├─ data/
│  └─ company.js            # company facts (address, phone, nav/footer lists)
├─ components/              # shared primitives
│  ├─ Reveal.jsx            # scroll-reveal wrapper + RevealGroup stagger
│  ├─ SectionHeading.jsx    # eyebrow + display title + lead
│  ├─ Counter.jsx           # count-up on scroll into view
│  ├─ LanguageToggle.jsx    # animated EN / ID pill
│  └─ BackToTop.jsx
└─ sections/                # one file per section
   ├─ Navbar.jsx            ├─ Quality.jsx
   ├─ Hero.jsx              ├─ Applications.jsx
   ├─ TrustBar.jsx          ├─ Recipes.jsx
   ├─ About.jsx             ├─ Facility.jsx
   ├─ VisionMission.jsx     ├─ Faq.jsx
   ├─ Products.jsx          ├─ Downloads.jsx
   ├─ Specifications.jsx    ├─ Contact.jsx
   └─ seo/                  └─ Footer.jsx
      └─ structuredData.js  # schema.org graph, inlined at build time
```

`public/assets/` holds brand, product, facility and application imagery;
`public/docs/` holds the downloadable PDFs linked from the page.

## Adding or editing copy

All user-facing text lives in `src/i18n/en.js` and `src/i18n/id.js`, which share
the same key shape. Components read it via `t('section.key')`:

```jsx
const { t, lang, setLang } = useI18n()
<h2>{t('about.title')}</h2>
```

Missing keys fall back to English and log a warning in dev. To add a language,
drop a new dictionary into `src/i18n/` and register it in the `DICTIONARIES`
map inside `LanguageContext.jsx`.

## Design tokens

Defined in `tailwind.config.js`:

| Token | Value | Use |
|---|---|---|
| `ink` | `#0B100D` | Dark sections, body text |
| `emerald-500` | `#0FA958` | Primary accent (from the logo's seaweed ring) |
| `gold` | `#C9A227` | Secondary accent |
| `cream` | `#F8F6F1` | Light section background |
| `font-display` | Fraunces | Headings |
| `font-sans` | Plus Jakarta Sans | UI and body |

The default Tailwind opacity scale is extended to every integer step so
modifiers like `bg-ink/92` resolve correctly.

### Layout width

`.container-x` (in `src/index.css`) sets the page gutter and caps content at
**1600 px**, rising to **1760 px** past the custom `3xl` breakpoint (1800 px) so
large desktops do not strand the layout in a narrow centre column. Change both
values in `tailwind.config.js` under `maxWidth.container` /
`maxWidth.container-wide`.

## Motion

Animations run through `Reveal` / `RevealGroup` so timing is consistent, and
every one of them respects `prefers-reduced-motion`. Viewport margins are
written long-hand (`'0px 0px -80px 0px'`) — a bare `'-80px'` also shrinks the
observer root horizontally, which stops narrow elements near the left edge from
ever triggering.

## Content sourcing

Every user-facing string traces back to material the company itself
published: sriguntingpratama.com, its product detail pages, and the Export
Technical Company Profile / QC Datasheet PDFs. The vision, mission, product
descriptions and FAQ answers are reproduced verbatim rather than rewritten,
so the site reads as the same company as the old one.

**Recipe section imagery is stock.** `sections/Recipes.jsx` and everything
under `public/assets/recipes/` use Pexels-licensed photography (free for
commercial use, no attribution required) as a stand-in for the company's own
dessert shots. Swap the files in place — the filenames and 4:5 / 4:3 crops are
what keep the gallery grid flush — and nothing else needs to change. The recipes
themselves are standard preparations consistent with the ratios the FAQ quotes;
have the kitchen confirm them before they go on printed material.

**Known discrepancy to confirm.** The live site lists bulk grades as Super
(900–1200 g/cm²), Premium (750–850) and Standard (600–700). The
`QC_Datasheet_Checklist.pdf` in this folder instead lists GS 700 / GS 800 /
GS 900. This site follows the website's Super / Premium / Standard naming.
Check which one is current before quoting either to a buyer.

Also note both "Downloads" links on the old site serve the same 19 MB scanned
catalogue, so no separate production-capacity figures exist yet. None were
invented here.

## Before going live

- **Contact form** — `src/sections/Contact.jsx` validates input and simulates
  submission; it is not yet wired to a backend. Point `handleSubmit` at your
  form endpoint (Formspree, a serverless function, or the company CRM).
- Confirm the phone number and website in `src/data/company.js`.
- Replace `public/docs/*.pdf` whenever the source documents are updated.
- **Dead social links.** The Facebook URL in `SOCIALS` serves an error page and
  the X/Twitter one cannot be real (X handles disallow hyphens). They are still
  rendered in the footer but deliberately excluded from the schema.org `sameAs`
  list — see the `verified` flag in `src/data/company.js`.

## SEO

| Where | What |
|---|---|
| `index.html` | Title/description, canonical, robots, Open Graph + Twitter cards, `geo.*`, hero preload |
| `src/seo/structuredData.js` | `Organization`/`LocalBusiness`, `WebSite`, `WebPage`, `FAQPage` and one `Recipe` per card |
| `vite.config.js` | `structured-data` plugin inlines that graph into `dist/index.html` |
| `public/robots.txt` | Allows everything, points at the sitemap |
| `public/sitemap.xml` | Home page (with `image:image` entries) plus the two public PDFs |
| `public/assets/brand/og-cover.jpg` | 1200x630 share card |

The graph is derived from `data/company.js` and `i18n/id.js`, so editing the
copy updates the markup — there is no second place to keep in sync. It is built
in Indonesian because that is the primary market; Google reads JSON-LD
regardless of which language the page renders in.

**`sameAs` only lists profiles confirmed to resolve** (the `verified` flag in
`data/company.js`). Pointing Google at a profile that does not exist weakens the
entity rather than helping it.

### Prerendering

`npm run build` is three steps: the client bundle, an SSR bundle from
`src/entry-server.jsx`, then `scripts/prerender.mjs`, which renders the app to
static markup and writes it into `dist/index.html`.

It exists because the page is client-rendered and a crawler arriving with an
`en-*` Accept-Language header — Googlebot does — would run the app and get the
English copy, while Indonesian is the market the site is trying to rank in. The
static HTML now carries the Indonesian version and needs no JavaScript to read.

It is **not** a hydration payload. `main.jsx` still mounts with `createRoot()`,
which replaces the prerendered DOM wholesale, so there is no server/client
contract to keep in sync. Three details make it work:

- **Entrance styles are stripped.** framer-motion renders its `initial` prop, so
  every scroll-reveal element would ship as `opacity:0` — invisible markup that
  reads as hidden content. `stripEntranceStyles` drops `opacity:0` and
  `transform` from the prerendered HTML only; the browser bundle is untouched
  and the animations still run. (`MotionConfig isStatic` does not suppress this
  in framer-motion 11 — it was tried.)
- **`Counter` starts at its real figure** and resets to 0 in a layout effect, so
  the static HTML says `1200 g/cm²` instead of `0 g/cm²` while the count-up
  still animates on screen.
- **A guard script clears the prerendered DOM for non-Indonesian visitors**,
  before paint, so they never see an Indonesian flash. Keep it in step with
  `detectInitialLanguage()` if the language rules change.

Cost: `index.html` goes from ~4 kB to ~15 kB brotli. Verify after changing any
of this by loading the built site with JavaScript disabled — you should get the
full Indonesian page.

### Submitting the sitemap

`robots.txt` points at it and Cloudflare appends the file to its own managed
block, so the `Sitemap:` line survives. Google no longer accepts sitemap pings;
submit `https://srigunting.id/sitemap.xml` under **Indexing -> Sitemaps** in
Search Console once the property is verified.

### Image budget

Product PNGs and application photos are re-encoded to roughly twice their
largest rendered size. When adding art, keep transparency in mind: quantising
an RGBA image folds alpha into the palette and leaves every opaque pixel
slightly see-through, and saving a palette PNG with `optimize=True` renumbers
the palette so the `tRNS` chunk points at the wrong entry and the image goes
fully opaque. Quantise the colour channels and put the original alpha back.
