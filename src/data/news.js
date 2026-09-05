/**
 * News posts, newest first.
 *
 * This is the only file you edit to change what the /news page shows. Copy the
 * entry below, give it a new `slug` and `date`, drop the photos into
 * `public/assets/news/<slug>/` and point at them — the page, the sitemap and
 * the NewsArticle structured data all follow automatically.
 *
 * Unlike the rest of the site, both languages live here rather than in
 * i18n/id.js + i18n/en.js. A post is one piece of content: keeping its
 * Indonesian and English text side by side means adding one means editing one
 * file, instead of keeping two arrays aligned by index. The page's own chrome
 * (labels, buttons) still comes from the dictionaries.
 *
 * Required per post: slug, date (ISO), title, excerpt, body, cover, gallery.
 * `location` is optional — omit it and the meta line simply drops the place.
 */
export const NEWS = [
  {
    slug: 'demo-masak-hut-ri-2026',
    date: '2026-08-24',
    location: 'Desa Saptorenggo, Kecamatan Pakis, Malang',

    title: {
      id: 'Demo masak memperingati HUT RI',
      en: 'A cooking demo for Indonesian Independence Day',
    },

    excerpt: {
      id: 'Tim Sri Gunting membuka stan agar-agar di pendopo Desa Saptorenggo, memperagakan cara mengolah tepung agar-agar, dan membagikan produk kepada warga yang hadir.',
      en: 'The Sri Gunting team set up an agar-agar stand at the Saptorenggo village pavilion, showed how the powder is prepared, and handed out product to the residents who came.',
    },

    body: {
      id: [
        'PT Sri Gunting Pratama turun ke tengah warga dalam rangkaian peringatan HUT ke-81 Kemerdekaan Republik Indonesia di Desa Saptorenggo, Kecamatan Pakis, Malang, pada Senin, 24 Agustus 2026.',
        'Tim membuka stan Agar-Agar Srigunting di pendopo desa, memperagakan cara mengolah tepung agar-agar menjadi puding, dan membagikan produk kepada warga yang hadir. Kemasan Ekonomis Super 6 gram dalam empat pilihan warna — putih, merah, hijau, dan cokelat — dibagikan langsung dari stan.',
        'Kegiatan ini sekaligus menjadi kesempatan bertemu langsung dengan perangkat desa dan warga di Kantor Pelayanan Desa Saptorenggo. Bagi kami, agar-agar bukan sekadar bahan pangan yang dikirim ke pabrik dessert — ia juga hadir di meja rumah tangga, dan hari itu kami memasaknya bersama-sama.',
      ],
      en: [
        'PT Sri Gunting Pratama joined the community for the 81st anniversary of Indonesian independence in Saptorenggo village, Pakis district, Malang, on Monday, 24 August 2026.',
        'The team set up the Agar-Agar Srigunting stand at the village pavilion, demonstrated how agar-agar powder is cooked into pudding, and handed out product to the residents who came. The 6 gram Ekonomis Super packs — in white, red, green and chocolate — went straight from the stand into their hands.',
        'The day was also a chance to meet village officials and residents in person at the Saptorenggo village office. For us, agar-agar is not only an ingredient shipped to dessert factories — it belongs on a household table too, and that day we cooked it together.',
      ],
    },

    cover: {
      src: '/assets/news/hut-ri-2026/cover.jpg',
      width: 1500,
      height: 844,
      alt: {
        id: 'Stan Agar-Agar Srigunting di pendopo desa, dengan warga yang hadir di belakangnya',
        en: 'The Agar-Agar Srigunting stand at the village pavilion, with residents gathered behind it',
      },
    },

    gallery: [
      {
        src: '/assets/news/hut-ri-2026/bersama-warga.jpg',
        alt: {
          id: 'Tim Sri Gunting berfoto bersama warga dan aparat setempat di pendopo desa',
          en: 'The Sri Gunting team with residents and local officers at the village pavilion',
        },
      },
      {
        src: '/assets/news/hut-ri-2026/pembagian.jpg',
        alt: {
          id: 'Seorang warga membawa pulang agar-agar yang dibagikan dari stan',
          en: 'A resident taking home agar-agar handed out at the stand',
        },
      },
      {
        src: '/assets/news/hut-ri-2026/produk.jpg',
        alt: {
          id: 'Warga menunjukkan kemasan Agar-Agar Srigunting yang baru diterima',
          en: 'Residents holding up the Agar-Agar Srigunting packs they just received',
        },
      },
      {
        src: '/assets/news/hut-ri-2026/balai-desa.jpg',
        alt: {
          id: 'Tim Sri Gunting di Kantor Pelayanan Desa Saptorenggo, Kecamatan Pakis',
          en: 'The Sri Gunting team at the Saptorenggo village office in Pakis district',
        },
      },
      {
        src: '/assets/news/hut-ri-2026/stan.jpg',
        alt: {
          id: 'Kemasan Ekonomis Super 6 gram ditata di stan bersama spanduk Agar-Agar Srigunting',
          en: 'Ekonomis Super 6 gram packs arranged at the stand beside the Agar-Agar Srigunting banner',
        },
      },
      {
        src: '/assets/news/hut-ri-2026/tim.jpg',
        alt: {
          id: 'Tim mengenakan kaus "Kenyal Sehat" di lokasi acara',
          en: 'The team in their "Kenyal Sehat" shirts at the event',
        },
      },
    ],
  },
]

/** Newest first, regardless of the order the entries happen to be written in. */
export const NEWS_SORTED = [...NEWS].sort((a, b) => b.date.localeCompare(a.date))
