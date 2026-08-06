export default {
  meta: {
    label: 'English',
    short: 'EN',
    htmlLang: 'en',
  },

  nav: {
    about: 'Company',
    products: 'Products',
    specs: 'Specifications',
    process: 'Process',
    quality: 'Quality',
    facility: 'Facility',
    contact: 'Contact',
    cta: 'Request a Quote',
    menu: 'Menu',
    close: 'Close',
  },

  hero: {
    eyebrow: 'Agar-Agar Powder & Seaweed Extract Manufacturer',
    titleA: 'Hydrocolloids',
    titleB: 'engineered for',
    titleC: 'consistency',
    lead: 'PT Sri Gunting Pratama is an industrial and export-oriented manufacturer of agar-agar powder and seaweed extracts. Our products are designed for process stability, consistent quality, and reliable industrial performance.',
    primary: 'Explore Our Products',
    secondary: 'Download Company Profile',
    scroll: 'Scroll to explore',
    stats: [
      { value: 900, suffix: ' g/cm²', label: 'Peak gel strength' },
      { value: 3, suffix: ' Grades', label: 'GS 700 · 800 · 900' },
      { value: 25, suffix: ' kg', label: 'Industrial bulk packing' },
      { value: 100, suffix: '%', label: 'Natural seaweed origin' },
    ],
  },

  trust: {
    label: 'Trusted credentials',
    items: [
      'Halal Indonesia Certified',
      'BPOM RI Registered',
      'Food-Grade Packaging',
      'Gracilaria Seaweed Origin',
      'Gluten Free',
      'Non-GMO',
      'Plant-Based',
      'Export Ready',
      'Batch Traceability',
    ],
  },

  about: {
    eyebrow: 'Company Overview',
    title: 'A seaweed processor built for industrial supply',
    body: [
      'PT Sri Gunting Pratama processes selected Gracilaria seaweed into agar-agar powder and seaweed extracts at our facility in Randuagung, Singosari — Malang, East Java.',
      'We serve food, beverage, confectionery and industrial manufacturers who need a hydrocolloid that behaves the same way in every production run. Our process is standardised end-to-end so that gel strength, moisture and mesh size stay inside a narrow band, batch after batch.',
    ],
    pillars: [
      {
        title: 'Process Stability',
        body: 'Standardised extraction, pressing, drying and milling parameters keep performance predictable across every production run.',
      },
      {
        title: 'Consistent Quality',
        body: 'Every batch is tested for gel strength, moisture content and visual cleanliness before it is released to a customer.',
      },
      {
        title: 'Industrial Reliability',
        body: 'Scalable capacity, food-grade packaging and export documentation built for long-term supply contracts.',
      },
    ],
    brandsTitle: 'Three routes to market',
    brandsBody:
      'One factory, three positioning lines — from the heritage retail sachet found in Indonesian kitchens to 25 kg industrial sacks shipped to manufacturers.',
    brands: [
      { name: 'Sri Gunting Ekonomis', role: 'Heritage retail sachets · 6 g & 8 g' },
      { name: 'Wise Spoon', role: 'Premium retail pouches · 100 g / 250 g / 500 g' },
      { name: 'Sri Gunting Pratama', role: 'Industrial & export bulk · 25 kg' },
    ],
  },

  products: {
    eyebrow: 'Product Portfolio',
    title: 'From the kitchen shelf to the production line',
    lead: 'Four product families built on the same agar-agar base, packed for the channel they serve.',
    cta: 'Request specification',
    items: [
      {
        tag: 'Industrial · Export',
        name: 'Agar-Agar Powder — Bulk 25 kg',
        desc: 'Food-grade highest quality agar-agar powder in 25 kg kraft sacks. 100% natural, from seaweed, gluten free. Supplied in GS 700, GS 800 and GS 900 grades for manufacturers.',
        specs: ['Nett 25 kg', 'GS 700 / 800 / 900', '80–120 mesh', 'Export packing'],
      },
      {
        tag: 'Premium Retail',
        name: 'Wise Spoon Agar-Agar Powder',
        desc: 'Unflavoured agar powder positioned as a vegetable gelatin substitute with high gelling properties. A plant-based supplement for an efficiency diet.',
        specs: ['100 g / 250 g / 500 g', 'BPOM RI MD 618513103043', 'Halal Indonesia', 'Includes measuring spoon'],
      },
      {
        tag: 'Heritage Retail',
        name: 'Sri Gunting Ekonomis 燕菜精',
        desc: 'The classic yellow sachet — high fibre agar-agar powder processed from red seaweed. Available in white, green, red and brown.',
        specs: ['6 g & 8 g sachets', 'Putih · Hijau · Merah · Coklat', 'Carton 24 boxes × 12 packets', 'High fibre'],
      },
      {
        tag: 'Specialty',
        name: 'Rainbow Vitjell — Konjac Jelly Powder',
        desc: 'Konjac and carrageenan jelly powder for layered rainbow jelly and dessert applications. Plain, unflavoured base for creative formulation.',
        specs: ['250 g pouch', 'Konjac 57.14% · Carrageenan 42.06%', 'BPOM RI MD 618513079043', '500 servings per pack'],
      },
    ],
    variantsTitle: 'Ekonomis colour variants',
  },

  specs: {
    eyebrow: 'Technical Specification',
    title: 'Numbers our customers formulate against',
    lead: 'Published parameters for agar-agar powder. Mesh size and grade are customisable against a supply agreement.',
    tableHead: { parameter: 'Parameter', value: 'Specification Range' },
    rows: [
      ['Raw Material', 'Selected Gracilaria seaweed'],
      ['Gelling Strength', '≥ 700 – 900 g/cm² (depending on grade)'],
      ['Moisture Content', '≤ 14%'],
      ['Mesh Size', '80 – 120 mesh (customizable)'],
      ['Color', 'Off-white to light cream'],
      ['Odor', 'Neutral'],
      ['Solubility', 'Hot water soluble'],
      ['Application', 'Food, beverage, confectionery, industrial use'],
    ],
    gradesTitle: 'Available grades',
    gradesLead: 'All grades share the same raw material, moisture, mesh, colour, odour and solubility profile — they are separated by gel strength.',
    grades: [
      { code: 'GS 700', strength: '≥ 700 g/cm²', use: 'Jelly, dessert, confectionery, food processing' },
      { code: 'GS 800', strength: '≥ 800 g/cm²', use: 'Jelly, dessert, confectionery, food processing' },
      { code: 'GS 900', strength: '≥ 900 g/cm²', use: 'Jelly, dessert, confectionery, food processing' },
    ],
    gradeLabels: { strength: 'Gelling strength', use: 'Application', moisture: 'Moisture', mesh: 'Mesh' },
    common: { moisture: '≤ 14%', mesh: '80 – 120 mesh' },
    download: 'Download Product Datasheets',
  },

  process: {
    eyebrow: 'How It Is Made',
    title: 'Six controlled stages, one repeatable result',
    lead: 'Every stage carries fixed parameters. That is what keeps batch-to-batch behaviour inside the range we publish.',
    steps: [
      { n: '01', title: 'Raw Material Selection', body: 'Gracilaria seaweed is sorted and graded on arrival. Only selected material enters the line.' },
      { n: '02', title: 'Washing & Cleaning', body: 'Repeated washing removes salt, sand and foreign matter before extraction begins.' },
      { n: '03', title: 'Extraction', body: 'Controlled hot extraction releases the agar hydrocolloid from the seaweed structure.' },
      { n: '04', title: 'Pressing & Dewatering', body: 'Hydraulic pressing removes free water and concentrates the gel before drying.' },
      { n: '05', title: 'Drying', body: 'Agar sheets are dried to a moisture content of 14% or below, then conditioned.' },
      { n: '06', title: 'Milling & Sieving', body: 'Dedicated mills reduce the dried agar to an 80–120 mesh powder, sieved to the ordered grade.' },
    ],
  },

  quality: {
    eyebrow: 'Quality & Compliance',
    title: 'Tested before it leaves the building',
    body: 'PT Sri Gunting Pratama applies an internal quality control system to ensure product consistency and safety. Each production batch undergoes key parameter testing prior to release.',
    tableHead: { parameter: 'QC Parameter', method: 'Control Method' },
    rows: [
      ['Gelling Strength', 'Internal laboratory testing'],
      ['Moisture Content', 'Gravimetric method'],
      ['Visual Cleanliness', 'Manual inspection'],
      ['Batch Consistency', 'Standardized process control'],
    ],
    statementTitle: 'Compliance statement',
    statement:
      'Products are processed using food-safe seaweed raw materials and handled in accordance with good manufacturing practices.',
    download: 'Download QC & Compliance Sheet',
  },

  applications: {
    eyebrow: 'Applications',
    title: 'Where our agar performs',
    lead: 'A hydrocolloid that sets clean, holds structure and releases flavour — across four demanding categories.',
    items: [
      { title: 'Food & Dessert', body: 'Puddings, layered jellies, traditional desserts and ready-to-eat cups where a clean, firm set is essential.' },
      { title: 'Beverage', body: 'Grass jelly, jelly drinks, boba toppings and milk tea inclusions that must hold shape in liquid.' },
      { title: 'Confectionery', body: 'Gummies, soft candy and jelly sweets — a plant-based alternative to gelatin with a shorter, cleaner bite.' },
      { title: 'Pharma & Technical', body: 'Capsule and tablet excipients, bakery glazes, dairy stabilisation and laboratory culture media requiring a reliable, reproducible gel.' },
    ],
  },

  facility: {
    eyebrow: 'Our Facility',
    title: 'Randuagung, Singosari — Malang',
    lead: 'Extraction, pressing, drying, milling, packing and warehousing on a single integrated site in East Java.',
    captions: {
      'yard-drying': 'Open-air drying racks and processing yard',
      'extraction-line': 'Extraction and pressing hall',
      'press-line': 'Hydraulic press line',
      'milling-room': 'Dedicated milling and sieving room',
      'process-hall': 'Process hall',
      warehouse: 'Finished goods warehouse',
      office: 'Administration and order desk',
    },
  },

  exportSec: {
    eyebrow: 'Export Readiness',
    title: 'Documentation ready before you ask for it',
    lead: 'Everything an overseas buyer needs to open a file on us, already prepared.',
    items: [
      'Bilingual company profile (EN / ID)',
      'Production capacity & lead time document',
      'Quality & compliance statement',
      'Product datasheets per grade',
      'Consistent website content',
      'Clear contact & business inquiry channel',
      'Stable raw material supply',
      'Export packaging readiness',
    ],
    packagingTitle: 'Packaging & supply',
    packagingBody:
      'Products are packed in food-grade packaging with industrial standard weights and are ready for domestic and export shipment. Production capacity is scalable for long-term supply contracts.',
  },

  contact: {
    eyebrow: 'Business Inquiry',
    title: 'Let us talk volume, grade and lead time',
    lead: 'Tell us the grade and quantity you need. We will come back with a specification sheet, a sample plan and an indicative lead time.',
    form: {
      name: 'Full name',
      company: 'Company',
      email: 'Business email',
      country: 'Country',
      grade: 'Grade of interest',
      gradeOptions: ['GS 700', 'GS 800', 'GS 900', 'Retail / private label', 'Not sure yet'],
      volume: 'Estimated monthly volume',
      message: 'Message',
      messagePlaceholder: 'Tell us about your application, target gel strength and packaging needs…',
      submit: 'Send Inquiry',
      sending: 'Sending…',
      sent: 'Thank you — we will be in touch shortly.',
      required: 'Required',
      note: 'We reply to business inquiries within two working days.',
    },
    info: {
      companyLabel: 'Company',
      addressLabel: 'Factory & office',
      phoneLabel: 'Phone',
      webLabel: 'Website',
      hoursLabel: 'Business hours',
      hours: 'Monday – Saturday, 08:00 – 17:00 WIB',
    },
  },

  footer: {
    tagline: 'Agar-agar powder and seaweed extracts, manufactured in East Java for industrial and export markets.',
    nav: 'Navigate',
    products: 'Products',
    documents: 'Documents',
    docs: [
      { label: 'Export Company Profile', file: '/docs/company-profile.pdf' },
      { label: 'QC & Product Datasheets', file: '/docs/qc-datasheet-checklist.pdf' },
    ],
    contact: 'Contact',
    rights: 'All rights reserved.',
    legal: 'PT Sri Gunting Pratama · Malang, East Java, Indonesia',
  },

  common: {
    langSwitch: 'Language',
    backToTop: 'Back to top',
  },
}
