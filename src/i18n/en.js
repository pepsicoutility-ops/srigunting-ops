/**
 * English copy.
 *
 * Wording follows sriguntingpratama.com. Where the company has an official
 * phrasing (vision, mission, product descriptions, FAQ) it is reproduced
 * verbatim rather than rewritten.
 */
export default {
  meta: { label: 'English', short: 'EN', htmlLang: 'en' },

  nav: {
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    quality: 'Quality & Capability',
    facility: 'Facility',
    recipes: 'Recipes',
    news: 'News',
    faq: 'F.A.Q',
    downloads: 'Downloads',
    contact: 'Contact',
    cta: 'Contact Us',
    menu: 'Menu',
    close: 'Close',
  },

  hero: {
    eyebrow: 'PT. Sri Gunting Pratama',
    titleA: 'Industrial & Export-Oriented',
    titleB: 'Agar-Agar and Seaweed',
    titleC: 'Extract Producer',
    lead: 'We manufacture agar-agar powder from selected seaweed with high quality standards, consistent performance, and readiness for industrial and export markets.',
    primary: 'Our Products',
    secondary: 'Download Company Profile',
    scroll: 'Scroll to explore',
    imageAlt: '25 kg bulk sack of agar-agar powder produced by PT. Sri Gunting Pratama',
    stats: [
      { value: 1200, prefix: 'up to ', suffix: ' g/cm²', label: 'Super grade gel strength' },
      { value: 3, suffix: ' Grades', label: 'Super · Premium · Standard' },
      { value: 25, suffix: ' kg', label: 'Bulk sack packing' },
      { value: 2, suffix: ' Lines', label: 'Agar-agar & jelly powder' },
    ],
  },

  trust: {
    label: 'Quality you can verify',
    items: [
      'BPOM RI Registered',
      'Halal Indonesia Certified',
      'Selected Gracilaria Seaweed',
      'Food-Grade Packaging',
      'Gel Strength Tested Per Batch',
      'Partnership With Local Farmers',
      'Export Ready',
      'Scalable Production Capacity',
    ],
  },

  about: {
    eyebrow: 'About Us',
    title: 'Industrial & export-oriented agar-agar producer',
    body: [
      'PT Sri Gunting Pratama is an industrial and export-oriented manufacturer of agar-agar powder and seaweed extracts. We focus on quality consistency, process stability, and sustainable raw material supply through partnerships with local farmers.',
    ],
    locationLabel: 'Randu Agung · Singosari',
    locationValue: 'Malang 65153, Jawa Timur — Indonesia',
    highlights: [
      { title: 'Quality Consistency', body: 'Gel strength, moisture content and stability are tested on every production batch.' },
      { title: 'Process Stability', body: 'A controlled production process so results stay uniform from batch to batch.' },
      { title: 'Sustainable Supply', body: 'Raw material secured through long-term partnerships with local seaweed farmers.' },
    ],
  },

  visionMission: {
    eyebrow: 'Vision & Mission',
    visionTitle: "Company's vision",
    // Reproduced exactly as published by the company.
    vision: 'Become a Trusted, Well known and Existed in the global market',
    missionTitle: "Company's mission",
    mission: [
      'Trading from upstream to downstream is commercially and scalable, especially in providing Agar powder.',
      'Carry out trade transactions throughout the global market.',
      'Producing good quality products that could achieve International Standard',
      'Assist local seaweed farmers in an effort to improve prosperity.',
      'Improving productivity through employee well-being fulfilled.',
    ],
  },

  products: {
    eyebrow: 'Our Products',
    title: 'Agar-agar powder and jelly powder',
    lead: 'From single-use sachets to 25 kg industrial sacks — one production line, packed for every market.',
    filters: { all: 'All', agar: 'Agar-agar powder', jelly: 'Jelly Powder' },
    labels: {
      category: 'Category',
      weight: 'Weight',
      packaging: 'Packaging',
      variant: 'Variant',
      description: 'Product description',
    },
    cta: 'Request a quotation',
    items: {
      bulk: {
        name: 'Bulk High Quality Agar Powder',
        category: 'Agar-agar powder',
        weight: '25 kg',
        packaging: 'Sack — 2 layer plastic bag',
        variant: 'Super, Premium, Standard',
        desc: 'Industrial and export grade agar powder, supplied in three gel strength grades and packed 25 kg in a 2 layer plastic bag.',
      },
      'pouch-agar': {
        name: 'Plain Pouch Agar Powder',
        category: 'Agar-agar powder',
        weight: '250 gram',
        packaging: 'Pouch',
        variant: 'Plain',
        desc: 'Wise Spoon agar-agar powder, BPOM registered, five-star quality. A 250 gram pouch is equivalent to more than 35 sachets.',
      },
      'pouch-jelly': {
        name: 'Plain Pouch Jelly Powder',
        category: 'Jelly Powder',
        weight: '250 gram',
        packaging: 'Pouch',
        variant: 'Plain',
        desc: 'Wise Spoon jelly powder, BPOM registered, five-star quality. A 250 gram pouch is equivalent to more than 35 sachets.',
      },
      'sachet-8g': {
        name: 'Agar Sachet 8 Gram',
        category: 'Agar-agar powder',
        weight: '8 gram',
        packaging: 'Sachet and dozen',
        variant: 'Plain, Green, Red, Brown',
        desc: 'For single usage.',
      },
      'sachet-ekonomis': {
        name: 'Agar Sachet Ekonomis',
        category: 'Agar-agar powder',
        weight: '6 gram',
        packaging: 'Sachet and dozen',
        variant: 'Plain, Green, Red, Brown',
        desc: 'The economical sachet, available in four colour variants.',
      },
    },
    variantsTitle: 'Sachet colour variants',
  },

  specs: {
    eyebrow: 'Grades & Specification',
    title: 'Three gel strength grades',
    lead: 'All grades share the same raw material and handling. Gel strength is what separates them.',
    gradeLabels: { strength: 'Gel strength', packing: 'Packing', tier: 'Grade' },
    grades: [
      { code: 'Super', tier: 'High Gel Strength', strength: '900 – 1200 g/cm²' },
      { code: 'Premium', tier: 'High Gel Strength', strength: '750 – 850 g/cm²' },
      { code: 'Standard', tier: 'Medium Gel Strength', strength: '600 – 700 g/cm²' },
    ],
    packing: '25 kg in 2 layer plastic bag',
    tableTitle: 'Product technical specification',
    tableHead: { parameter: 'Parameter', value: 'Specification Range' },
    rows: [
      ['Raw Material', 'Selected Gracilaria seaweed'],
      ['Moisture Content', '≤ 14%'],
      ['Mesh Size', '80 – 120 mesh (customizable)'],
      ['Color', 'Off-white to light cream'],
      ['Odor', 'Neutral'],
      ['Solubility', 'Hot water soluble'],
      ['Application', 'Food, beverage, confectionery, industrial use'],
    ],
  },

  quality: {
    eyebrow: 'Quality & Capability',
    title: 'Tested, consistent, and ready to scale',
    lead: 'Each production batch undergoes internal quality testing before it is released to a customer.',
    items: [
      { title: 'Internal Quality Testing', body: 'Gel strength, moisture content, and stability testing.' },
      { title: 'Batch Consistency', body: 'Controlled production process ensures uniform results.' },
      { title: 'Scalable Production', body: 'Flexible capacity for long-term supply partnerships.' },
    ],
    statementTitle: 'Compliance statement',
    statement:
      'Products are processed using food-safe seaweed raw materials and handled in accordance with good manufacturing practices.',
    packagingTitle: 'Packaging & supply',
    packagingBody:
      'Products are packed in food-grade packaging with industrial standard weights and are ready for domestic and export shipment. Production capacity is scalable for long-term supply contracts.',
  },

  applications: {
    eyebrow: 'Applications',
    title: 'Where agar-agar is used',
    lead: 'A vegetarian alternative to gelatin, used across dessert, beverage, confectionery and technical applications.',
    items: [
      { title: 'Puddings & Desserts', body: 'Puddings, mousses and jellies — agar sets firmer than gelatin and holds its shape at higher temperatures.' },
      { title: 'Beverage', body: 'Grass jelly, jelly drinks and milk tea inclusions that need to keep their shape in liquid.' },
      { title: 'Confectionery', body: 'Gummy candies, ice cream and cheesecake, as a purely vegetarian setting agent.' },
      { title: 'Technical & Scientific', body: 'A filler in sizing paper and fabric, a clarifying agent in brewing, and certain scientific purposes.' },
    ],
    alts: [
      'Moulded agar-agar pudding served on a plate',
      'Jelly drink with pieces of agar-agar suspended in it',
      'Chewy gummy sweets made with agar-agar',
      'Petri dish of agar growth medium for laboratory use',
    ],
  },

  news: {
    eyebrow: 'News',
    title: 'From the field',
    lead: 'What PT Sri Gunting Pratama has been doing with customers, partners and the community around the plant.',
    galleryLabel: 'Event gallery',
    archiveTitle: 'Earlier posts',
    backShort: 'Home',
    skip: 'Skip to content',
    empty: 'No posts published yet.',
    ctaTitle: 'Want to work with us?',
    ctaBody: 'We supply 25 kg bulk agar-agar powder and sachet packs to dessert manufacturers, caterers and food SMEs.',
    ctaButton: 'See our products',
  },

  recipes: {
    eyebrow: 'Kitchen Inspiration',
    title: 'From agar-agar powder to the pudding on your table',
    lead: 'The same ingredient runs through dessert factories, catering kitchens and home stoves alike. Here is what Sri Gunting agar-agar and jelly powder set into.',

    feature: {
      badge: 'The classic moulded pudding',
      title: 'Firm enough to unmould, still tender on the spoon',
      body: 'Agar binds liquid into a far more decisive gel than gelatin. Puddings do not slump at tropical room temperature, mould edges stay sharp when turned out, and slices cut clean instead of tearing — the same reason packaged dessert makers reach for it when a product has to survive the journey.',
      facts: [
        { value: '1 tsp', label: 'agar-agar powder per 250 ml of liquid' },
        { value: '± 3 min', label: 'at a full boil to dissolve completely' },
        { value: '35 – 40 °C', label: 'already set, no refrigeration required' },
      ],
    },

    galleryTitle: 'Pudding & agar-agar gallery',
    galleryLead: 'Desserts, jellies and cut agar pieces — all of them start from the same powder.',
    gallery: [
      'Layered red-and-white pudding cups, plated for catering service',
      'Coloured agar-agar cut-outs used as a dessert garnish',
      'Milk pudding with strawberry compote in a serving glass',
      'Assorted pudding flavours in tall display glasses',
      'Caramel pudding with restaurant plating',
      'Pudding that holds a clean edge under the spoon',
      'Soft custard pudding in a coupe glass',
      'Coconut milk pudding with fruit sauce and mint',
    ],

    cardsTitle: 'Four recipes to start with',
    cardsLead: 'The quantities below use the 6 g and 8 g sachets. Every one of them works in an ordinary saucepan.',
    meta: {
      time: 'Time',
      serves: 'Serves',
      level: 'Level',
      ingredients: 'Ingredients',
      steps: 'Method',
      tip: 'Note',
      open: 'View recipe',
      close: 'Close recipe',
    },
    cards: [
      {
        name: 'Coconut & Palm Sugar Pudding',
        time: '25 minutes',
        serves: '8 portions',
        level: 'Easy',
        blurb: 'The Indonesian classic: savoury coconut milk, deep palm sugar, pandan on the nose.',
        ingredients: [
          '1 sachet agar-agar powder, 8 g',
          '800 ml thin coconut milk',
          '150 g palm sugar, finely shaved',
          '50 g caster sugar',
          '2 pandan leaves, knotted',
          '¼ tsp salt',
        ],
        steps: [
          'Stir the agar-agar powder, caster sugar and salt together in a dry pan until evenly combined.',
          'Pour in the coconut milk a little at a time, stirring so it does not clump, then add the palm sugar and pandan leaves.',
          'Cook over medium heat, stirring constantly, until it reaches a full boil, then keep going about 3 minutes past the first bubbles.',
          'Take off the heat, discard the pandan and pour into a water-rinsed mould. Let the steam escape before chilling for 1 hour.',
        ],
        tip: 'Coconut milk splits easily. Do not leave the pan unstirred once it boils.',
      },
      {
        name: 'Layered Fruit Agar-Agar',
        time: '45 minutes',
        serves: '10 slices',
        level: 'Medium',
        blurb: 'Alternating milk and fruit layers — sharp to look at, still bonded all the way through.',
        ingredients: [
          '2 sachets agar-agar powder, 6 g',
          '1 litre water',
          '200 ml milk',
          '200 g caster sugar',
          'Red food colouring, to taste',
          '150 g cut fruit (strawberry or mango)',
        ],
        steps: [
          'Split the batch in two: a white mix with the milk, a red mix with the water and colouring.',
          'Boil the first mix, pour a 1.5 cm layer into the tin and wait about 5 minutes until the surface is half set.',
          'Pour the second mix slowly over the back of a spoon so the layers do not blend, then scatter the fruit.',
          'Repeat layer by layer until the mixes are used up. Chill at least 2 hours before slicing.',
        ],
        tip: 'Do not wait for a layer to set completely — a half-set surface bonds far better to the next one.',
      },
      {
        name: 'Silky Chocolate Pudding',
        time: '30 minutes',
        serves: '8 portions',
        level: 'Easy',
        blurb: 'Dense but tender, with a deep chocolate finish that pairs well with custard sauce.',
        ingredients: [
          '1 sachet agar-agar powder, 8 g',
          '700 ml milk',
          '100 g dark cooking chocolate, chopped',
          '3 tbsp cocoa powder',
          '120 g caster sugar',
          '1 tsp vanilla',
        ],
        steps: [
          'Dissolve the cocoa powder in a little warm milk until no lumps remain.',
          'Combine the agar-agar powder, sugar and remaining milk in a pan, then cook, stirring, until it boils.',
          'Kill the heat, add the cooking chocolate and vanilla, and stir until fully melted through.',
          'Pour into moulds and chill for 2 hours. Serve with custard sauce or caramel.',
        ],
        tip: 'Strain the mix as you pour if you want a mirror-smooth pudding surface.',
      },
      {
        name: 'Fruit Jelly Cups',
        time: '20 minutes',
        serves: '12 cups',
        level: 'Easy',
        blurb: 'Fresh jelly cups for kids, canteens or hampers — quick to turn out in volume.',
        ingredients: [
          '1 sachet jelly powder, 8 g',
          '900 ml water',
          '150 g caster sugar',
          '100 ml fruit syrup or juice',
          'Nata de coco, to taste',
        ],
        steps: [
          'Stir the jelly powder and sugar into cold water until dissolved, before any heat goes on.',
          'Bring to a boil, stirring, then take it off the heat and add the fruit syrup.',
          'Pour into cups while still hot and add the nata de coco.',
          'Seal the cups while warm to keep them clean, then chill until set.',
        ],
        tip: 'Acidic fruit such as orange, strawberry and kiwi needs slightly more agar-agar to set properly.',
      },
    ],

    cta: {
      title: 'Need agar-agar at production volume?',
      body: 'We supply 25 kg bulk agar-agar powder and sachet packs to dessert manufacturers, caterers and food SMEs.',
      button: 'Talk to us on WhatsApp',
    },
  },

  facility: {
    eyebrow: 'Our Facility',
    title: 'Randu Agung, Singosari — Malang',
    lead: 'Extraction, pressing, drying, milling, packing and warehousing on a single integrated site in East Java.',
    planLabel: 'Site plan',
    planScale: 'Not to scale',
    planNote:
      'One perimeter, one flow: raw seaweed enters at the gate and leaves as packed finished goods. Hover a stage to locate it on the plan.',
    meta: {
      'extraction-line': 'Gracilaria intake',
      'press-line': 'Hydraulic dewatering',
      'yard-drying': 'Dried to ≤ 14% moisture',
      'milling-room': 'Milled to 80 – 120 mesh',
      warehouse: 'Packed 25 kg per sack',
      office: 'Orders & dispatch',
    },
    captions: {
      'yard-drying': 'Open-air drying racks and processing yard',
      'extraction-line': 'Extraction and pressing hall',
      'press-line': 'Hydraulic press line',
      'milling-room': 'Milling and sieving room',
      warehouse: 'Finished goods warehouse',
      office: 'Administration and order desk',
    },
  },

  faq: {
    eyebrow: 'F.A.Q',
    title: 'Frequently Asked Questions',
    lead: 'What agar-agar is, how it differs from gelatin, and how to work with it.',
    imageAlt: 'Wise Spoon agar-agar powder pouch pack',
    items: [
      {
        q: 'What Is Agar-Agar?',
        a: 'This jellylike substance is a mix of carbohydrates that have been extracted from red algae, a type of seaweed. Agar has several uses in addition to cooking, including as a filler in sizing paper and fabric, a clarifying agent in brewing, and certain scientific purposes. It is also known as China glass, China grass, China isinglass, Japanese kanten, Japanese gelatin, and dai choy goh, and is used in certain Japanese dessert recipes.',
      },
      {
        q: 'Agar-Agar vs. Gelatin',
        a: "The main difference between agar and gelatin is from where they are derived. Whereas animal-based gelatins are made from livestock collagen (from the cartilage, bones, skin, and tendons), agar-agar is purely vegetarian, coming from the red algae plant. The two setting agents also behave differently and need to be prepared in distinct ways when incorporating into a recipe. Agar-agar needs to boil in order to set, while gelatin can simply dissolve in warm water; that is because agar melts at 185 F, whereas gelatin melts at 95 F. Agar also sets more quickly than gelatin and doesn't need any refrigeration. The resulting recipe will also have subtle variances: Dishes made with agar will be firmer and less creamy and jiggly than those made with gelatin. Agar-agar recipes also stay firm when exposed to higher temperatures, while gelatin loses some of its stability.",
      },
      {
        q: 'Agar-Agar Uses',
        a: 'In cooking, agar-agar is used as a vegetarian alternative to gelatin in a variety of dishes, including puddings, mousses, and jellies, as well as ice cream, gummy candies, and cheesecake. It is an important ingredient in the Japanese dessert anmitsu, which calls for kanten jelly, a mixture of agar-agar, water, and sugar.',
      },
      {
        q: 'How to Cook With Agar-Agar',
        a: 'Before agar can be added to a recipe, it needs to be dissolved in water and then boiled; it cannot be simply dissolved in a liquid or added directly to food. Dissolve the agar in a liquid in a small saucepan over medium-high heat, bring to a boil, and then simmer until slightly thickened, about five to seven minutes. Agar powder dissolves more quickly than flakes and strands, which need extra soaking time and stirring to fully dissolve. To use agar flakes in a recipe, measure 1 tablespoon for every cup of liquid; for agar powder, use 1 teaspoon to thicken 1 cup of liquid. Once the dissolved agar is added to a recipe, it will take approximately an hour to set at room temperature. Most recipes using agar are eaten cold so the dish will need to be refrigerated. It is important to note that foods high in acidity, such as citrus fruits, strawberries, and kiwi, may require additional amounts of agar to fully gel.',
      },
      {
        q: 'What Does It Taste Like?',
        a: 'Agar-agar is completely odorless and tasteless, making it an ideal gelling agent for adding to any type of recipe.',
      },
    ],
  },

  downloads: {
    eyebrow: 'Downloads',
    title: 'Documents for buyers',
    lead: 'Technical documentation prepared for industrial and international buyers.',
    button: 'Download PDF',
    items: {
      profile: {
        title: 'Company Profile – Export Technical',
        desc: 'Technical product specifications for international buyers.',
      },
      capacity: {
        title: 'Quality & Product Datasheets',
        desc: 'Quality control system, compliance statement and datasheets per grade.',
      },
      catalog: {
        title: 'Product Catalog',
        desc: 'Full product range with packaging and presentation.',
      },
    },
  },

  contact: {
    eyebrow: 'Contact Us',
    title: 'Business inquiries & export cooperation welcome',
    lead: 'Tell us the grade, packaging and quantity you need. We will reply with a specification sheet and an indicative lead time.',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      company: 'Company',
      message: 'Message',
      messagePlaceholder: 'Tell us about your application, target gel strength and packaging needs…',
      submit: 'Send Message',
      sending: 'Sending…',
      sent: 'Thank you — we will be in touch shortly.',
      required: 'Required',
      note: 'Prefer a faster reply? Message us on WhatsApp.',
      whatsapp: 'Chat on WhatsApp',
      back: 'Send another message',
    },
    info: { locationLabel: 'Location', emailLabel: 'Email', phoneLabel: 'Call' },
  },

  footer: {
    tagline:
      'Industrial and export-oriented manufacturer of agar-agar powder and seaweed extracts, based in Malang, East Java.',
    usefulLinks: 'Useful Links',
    services: 'Our Services',
    servicesList: ['Agar-agar powder', 'Jelly Powder'],
    socials: 'Our Social Networks',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },

  common: { langSwitch: 'Language', backToTop: 'Back to top' },
}
