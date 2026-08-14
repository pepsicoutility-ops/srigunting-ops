/**
 * Single source of truth for company facts.
 *
 * Every value here is taken verbatim from the company's own material:
 * the live site sriguntingpratama.com, its product detail pages, and the
 * Export Technical Company Profile / QC Datasheet PDFs. Nothing is invented.
 */
export const COMPANY = {
  legalName: 'PT. Sri Gunting Pratama',
  shortName: 'Sri Gunting Pratama',
  address:
    'Jl. Perusahaan gang Industri No.1, Randu Agung, Singosari, Malang 65153, Jawa Timur, Indonesia',
  addressShort: 'Randu Agung, Singosari — Malang 65153, Jawa Timur',
  // Single company number for every tel: link, the header, the footer and the
  // WhatsApp deep link. Change it here and it changes everywhere.
  phone: '+62 818-827-770',
  phoneRaw: '+62818827770',
  email: 'info@sriguntingpratama.com',
  website: 'sriguntingpratama.com',
  whatsapp:
    "https://api.whatsapp.com/send?phone=62818827770&text=I'm%20interested%20in%20your%20provided%20service",
}

export const SOCIALS = [
  { label: 'WhatsApp', href: COMPANY.whatsapp, icon: 'whatsapp' },
  { label: 'Instagram', href: 'https://instagram.com/ontheseaweed', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/sri-gunting-pratama/', icon: 'facebook' },
  { label: 'X / Twitter', href: 'https://www.twitter.com/sri-gunting-pratama/', icon: 'twitter' },
]

/** Downloadable documents, mirroring the old site's Downloads section. */
export const DOWNLOADS = [
  { key: 'profile', file: '/docs/company-profile.pdf' },
  { key: 'capacity', file: '/docs/qc-datasheet-checklist.pdf' },
  { key: 'catalog', file: '/docs/product-catalog.pdf' },
]

/**
 * Products exactly as listed on sriguntingpratama.com, including the
 * category used by its Agar-agar powder / Jelly Powder filter.
 */
export const PRODUCTS = [
  {
    id: 'bulk',
    category: 'agar',
    image: '/assets/products/bulk-25kg.png',
    tint: 'from-[#EFE7DA] to-[#DFD2BC]',
    featured: true,
  },
  {
    id: 'pouch-agar',
    category: 'agar',
    image: '/assets/products/wisespoon-agar-pouch.png',
    tint: 'from-[#E8F2EA] to-[#CFE3D5]',
  },
  {
    id: 'pouch-jelly',
    category: 'jelly',
    image: '/assets/products/wisespoon-vitjell.png',
    tint: 'from-[#F3E9F6] to-[#E2D3EC]',
  },
  {
    id: 'sachet-8g',
    category: 'agar',
    image: '/assets/products/ekonomis-8g.png',
    tint: 'from-[#FBF3D9] to-[#F3E3B4]',
  },
  {
    id: 'sachet-ekonomis',
    category: 'agar',
    image: '/assets/products/ekonomis-6g.png',
    tint: 'from-[#FCEFE0] to-[#F5DFC4]',
  },
]

export const NAV_LINKS = [
  { id: 'about', key: 'nav.about' },
  { id: 'products', key: 'nav.products' },
  { id: 'quality', key: 'nav.quality' },
  // 'facility' is deliberately omitted while the Facility section is off
  // the page (see App.jsx) — re-add { id: 'facility', key: 'nav.facility' }
  // here, in the same position, when the section comes back.
  { id: 'faq', key: 'nav.faq' },
  { id: 'downloads', key: 'nav.downloads' },
]
