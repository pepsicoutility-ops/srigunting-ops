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
   ├─ TrustBar.jsx          ├─ Facility.jsx
   ├─ About.jsx             ├─ Faq.jsx
   ├─ VisionMission.jsx     ├─ Downloads.jsx
   ├─ Products.jsx          ├─ Contact.jsx
   ├─ Specifications.jsx    └─ Footer.jsx
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
