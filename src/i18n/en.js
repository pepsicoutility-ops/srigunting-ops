/**
 * English copy.
 *
 * The company profile (hero, about, vision, mission, commitment, quality,
 * market, contact) follows the copy the company supplied in September 2026:
 * lines it wrote in English are reproduced verbatim, and the Indonesian body
 * text is translated. Products, specifications and the FAQ follow
 * sriguntingpratama.com.
 */
export default {
  meta: { label: 'English', short: 'EN', htmlLang: 'en' },

  nav: {
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    quality: 'Quality',
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
    titleA: 'Indonesian',
    titleB: 'Agar-Agar Manufacturer',
    titleC: 'Since 1995',
    lead: 'From Indonesia’s Natural Sea Resources to Quality Agar-Agar for the World.',
    primary: 'Our Products',
    secondary: 'Download Company Profile',
    scroll: 'Scroll to explore',
    imageAlt: '25 kg bulk sack of agar-agar powder produced by PT. Sri Gunting Pratama',
    stats: [
      { value: 30, suffix: '+', label: 'Years of experience' },
      { value: 1200, prefix: 'up to ', suffix: ' g/cm²', label: 'Super grade gel strength' },
      { value: 3, suffix: ' Grades', label: 'Super · Premium · Standard' },
      { value: 25, suffix: ' kg', label: 'Bulk sack packing' },
    ],
  },

  trust: {
    label: 'Agar-Agar Manufacturer | Indonesia — Established 1995',
    items: [
      'Established Since 1995',
      'Indonesian Raw Material',
      'Consistent Quality',
      'Customer Oriented',
      'Flexible & Reliable',
      'Long-Term Partnership',
      'BPOM RI Registered',
      'Halal Indonesia Certified',
    ],
  },

  about: {
    eyebrow: 'About Us',
    title: 'Quality from Nature. Consistency from Experience.',
    body: [
      'PT. Sri Gunting Pratama is an Indonesian agar-agar manufacturer, established in 1995 and growing ever since.',
      'For more than three decades, we have built the experience and expertise to process seaweed raw material into agar-agar products that are high in quality, consistent, and able to meet the needs of a wide range of industries.',
      'Based in Indonesia, one of the largest seaweed-producing countries in the world, we have access to the natural resources that form the foundation of our products.',
      'Through a combination of experience, quality raw materials, a controlled production process and a commitment to customer satisfaction, PT. Sri Gunting Pratama continues to grow as a trusted partner for customers in Indonesia and in international markets.',
    ],
    locationLabel: 'Randu Agung · Singosari',
    locationValue: 'Malang 65153, Jawa Timur — Indonesia',
    story: {
      eyebrow: 'Our Story',
      title: 'More Than 30 Years of Experience',
      body: [
        'Since 1995, PT. Sri Gunting Pratama has lived through many developments in the industry and many changes in what the market needs.',
        'That long experience is an important asset in understanding the characteristics of raw materials, processing, application requirements and the quality our customers demand.',
      ],
      quote: [
        'For us, experience is more than a number.',
        'Experience is the ability to keep quality consistent over time.',
      ],
      closing:
        'We believe good business relationships are built not only on quality products, but also on trust, consistency, communication and long-term commitment.',
    },
  },

  visionMission: {
    commitmentTitle: 'Our Commitment',
    commitment: [
      { title: 'Quality', body: 'Keeping product quality consistent.' },
      { title: 'Reliability', body: 'Being a supplier you can depend on.' },
      { title: 'Integrity', body: 'Building our business on honesty and trust.' },
      { title: 'Continuous Improvement', body: 'Continuously improving our processes, products and service.' },
      { title: 'Partnership', body: 'Building long-term business relationships with our customers.' },
    ],
    visionTitle: 'Our Vision',
    vision:
      'To become a trusted Indonesian agar-agar manufacturer recognized for quality, consistency and long-term partnership.',
    // The Indonesian page adds its translation beneath; nothing to add here.
    visionTranslation: null,
    missionTitle: 'Our Mission',
    mission: [
      'Produce agar-agar products of consistent quality.',
      'Make the most of the potential of Indonesian seaweed as a raw material.',
      'Provide professional and responsive service.',
      'Meet the needs of domestic and international customers.',
      'Build long-term, mutually beneficial business relationships.',
      'Develop and improve our processes continuously.',
    ],
  },

  products: {
    eyebrow: 'Product Catalog',
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

  why: {
    title: 'Why Sri Gunting Pratama?',
    items: [
      {
        title: 'Established Since 1995',
        body: 'More than 30 years of experience has given us a deep understanding of the agar-agar industry and of seaweed processing.',
      },
      {
        title: 'Indonesian Raw Material',
        body: 'We draw on the potential of Indonesian seaweed as one of the main sources of raw material for our products.',
      },
      {
        title: 'Consistent Quality',
        body: 'Consistency is one of our top priorities. We maintain our production process and quality control so that the products our customers receive meet a consistent standard.',
      },
      {
        title: 'Customer Oriented',
        body: 'We do not just sell products. We build long-term relationships with our customers by understanding their needs and their applications.',
      },
      {
        title: 'Flexible & Reliable',
        body: 'We are open to our customers’ specific requirements, for both domestic and international markets.',
      },
      {
        title: 'Long-Term Partnership',
        body: 'Our goal is not simply to close a single transaction. We want to be a supplier our customers can rely on for the long term.',
      },
    ],
  },

  quality: {
    title: 'Quality Comes First',
    body: [
      'We understand that for the food industry, the quality of raw materials is an important part of a successful end product.',
      'That is why we pay attention to every stage of the process, from selecting and handling raw materials through to production and packaging.',
    ],
    promiseLabel: 'Our commitment is simple:',
    promise: 'The quality we promise today must be the quality our customers receive tomorrow.',
    closing:
      'We keep improving our production processes, quality control system and service to meet our customers’ ever-evolving expectations.',
  },

  market: {
    eyebrow: 'For Domestic & International Market',
    title: 'Indonesia to the World',
    body: [
      'Indonesia is extraordinarily rich in marine resources.',
      'PT. Sri Gunting Pratama wants to bring part of that potential to a wider market.',
      'With experience going back to 1995, we are ready to partner with local companies and international buyers who need quality agar-agar from Indonesia.',
    ],
    partnersLabel: 'We are open to working with:',
    partners: [
      'Importers',
      'Distributors',
      'Food Manufacturers',
      'Traders',
      'Wholesalers',
      'Food Service Companies',
      'Private Label Partners',
    ],
    closing:
      'Whether for the Indonesian market or for export, we are ready to discuss the products, specifications, packaging and volumes you need.',
  },

  applications: {
    eyebrow: 'Our Product',
    title: 'Agar-Agar',
    lead: 'Agar-agar is a natural hydrocolloid widely used across food applications.',
    intro: 'Our agar-agar can be used as a raw material or as an ingredient for a wide range of industries, including:',
    items: [
      'Food & Beverage',
      'Jelly & Dessert',
      'Confectionery',
      'Bakery',
      'Dairy Products',
      'Sauce & Food Processing',
      'Catering & Food Service',
      'Pharmaceutical & Other Applications',
    ],
    closing:
      'We understand that every industry has different needs. That is why we are committed to supplying products whose characteristics can be matched to each customer’s application.',
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
    archiveTitle: 'Earlier posts',
    carousel: {
      region: 'Event photo gallery',
      previous: 'Previous photo',
      next: 'Next photo',
      goTo: 'Go to photo',
    },
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

  partnership: {
    eyebrow: 'Looking for a Reliable Agar-Agar Supplier?',
    title: 'Let’s Grow Together.',
    body: 'If you are looking for an agar-agar supplier from Indonesia for manufacturing, distribution, trading or export, PT. Sri Gunting Pratama is ready to be your partner.',
    credo: ['More than 30 years of experience.', 'One commitment to quality.', 'One goal: long-term partnership.'],
  },

  contact: {
    eyebrow: 'Contact Us',
    title: 'PT. Sri Gunting Pratama',
    lead: 'For inquiries, samples, product specifications and business cooperation, please contact our team.',
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
    info: {
      locationLabel: 'Address',
      emailLabel: 'Email',
      phoneLabel: 'Phone / WhatsApp',
      websiteLabel: 'Website',
    },
  },

  footer: {
    tagline:
      'PT. Sri Gunting Pratama is an Indonesian agar-agar manufacturer, established in 1995 and growing ever since.',
    usefulLinks: 'Useful Links',
    services: 'Our Services',
    servicesList: ['Agar-agar powder', 'Jelly Powder'],
    socials: 'Our Social Networks',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },

  common: { langSwitch: 'Language', backToTop: 'Back to top', established: 'Established 1995' },
}
