/**
 * Salinan Bahasa Indonesia.
 *
 * Profil perusahaan (hero, tentang kami, visi, misi, komitmen, mutu, pasar,
 * kontak) disalin apa adanya dari naskah company profile yang diberikan
 * perusahaan pada September 2026 — termasuk judul dan tagline yang sengaja
 * ditulis dalam bahasa Inggris. Produk, spesifikasi, dan FAQ mengikuti
 * sriguntingpratama.com.
 */
export default {
  meta: { label: 'Bahasa Indonesia', short: 'ID', htmlLang: 'id' },

  nav: {
    home: 'Beranda',
    about: 'Tentang Kami',
    products: 'Produk',
    quality: 'Mutu',
    facility: 'Fasilitas',
    recipes: 'Resep',
    news: 'Berita',
    faq: 'F.A.Q',
    downloads: 'Unduhan',
    contact: 'Kontak',
    cta: 'Hubungi Kami',
    menu: 'Menu',
    close: 'Tutup',
  },

  hero: {
    eyebrow: 'PT. Sri Gunting Pratama',
    titleA: 'Indonesian',
    titleB: 'Agar-Agar Manufacturer',
    titleC: 'Since 1995',
    lead: 'From Indonesia’s Natural Sea Resources to Quality Agar-Agar for the World.',
    primary: 'Lihat Produk Kami',
    secondary: 'Unduh Profil Perusahaan',
    scroll: 'Gulir untuk menjelajah',
    imageAlt: 'Sak tepung agar-agar curah 25 kg produksi PT. Sri Gunting Pratama',
    stats: [
      { value: 30, suffix: '+', label: 'Tahun pengalaman' },
      { value: 1200, prefix: 'hingga ', suffix: ' g/cm²', label: 'Kekuatan gel grade Super' },
      { value: 3, suffix: ' Grade', label: 'Super · Premium · Standard' },
      { value: 25, suffix: ' kg', label: 'Kemasan sak curah' },
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
      'Terdaftar BPOM RI',
      'Bersertifikat Halal Indonesia',
    ],
  },

  about: {
    eyebrow: 'Tentang Kami',
    title: 'Quality from Nature. Consistency from Experience.',
    body: [
      'PT. Sri Gunting Pratama adalah perusahaan manufaktur agar-agar asal Indonesia yang telah berdiri dan berkembang sejak 1995.',
      'Selama lebih dari tiga dekade, kami membangun pengalaman dan keahlian dalam mengolah bahan baku rumput laut menjadi produk agar-agar yang berkualitas, konsisten, dan dapat memenuhi kebutuhan berbagai industri.',
      'Berbasis di Indonesia, salah satu negara penghasil rumput laut terbesar di dunia, kami memiliki akses terhadap sumber daya alam yang menjadi fondasi utama produk kami.',
      'Dengan perpaduan pengalaman, kualitas bahan baku, proses produksi yang terkontrol, dan komitmen terhadap kepuasan pelanggan, PT. Sri Gunting Pratama terus berkembang sebagai mitra terpercaya bagi pelanggan di Indonesia maupun pasar internasional.',
    ],
    locationLabel: 'Randu Agung · Singosari',
    locationValue: 'Malang 65153, Jawa Timur — Indonesia',
    story: {
      eyebrow: 'Our Story',
      title: 'More Than 30 Years of Experience',
      body: [
        'Sejak tahun 1995, PT. Sri Gunting Pratama telah melewati berbagai perkembangan industri dan perubahan kebutuhan pasar.',
        'Pengalaman panjang tersebut menjadi aset penting bagi kami dalam memahami karakteristik bahan baku, proses pengolahan, kebutuhan aplikasi, hingga tuntutan kualitas pelanggan.',
      ],
      quote: [
        'Bagi kami, pengalaman bukan sekadar angka.',
        'Pengalaman adalah kemampuan untuk menjaga kualitas tetap konsisten dari waktu ke waktu.',
      ],
      closing:
        'Kami percaya bahwa hubungan bisnis yang baik dibangun bukan hanya melalui produk yang berkualitas, tetapi juga melalui kepercayaan, konsistensi, komunikasi, dan komitmen jangka panjang.',
    },
  },

  visionMission: {
    commitmentTitle: 'Our Commitment',
    commitment: [
      { title: 'Quality', body: 'Menjaga kualitas produk secara konsisten.' },
      { title: 'Reliability', body: 'Menjadi supplier yang dapat diandalkan.' },
      { title: 'Integrity', body: 'Membangun bisnis berdasarkan kejujuran dan kepercayaan.' },
      { title: 'Continuous Improvement', body: 'Terus meningkatkan proses, produk, dan pelayanan.' },
      { title: 'Partnership', body: 'Membangun hubungan bisnis jangka panjang dengan pelanggan.' },
    ],
    visionTitle: 'Our Vision',
    vision:
      'To become a trusted Indonesian agar-agar manufacturer recognized for quality, consistency and long-term partnership.',
    // The profile states the vision in both languages; the Indonesian page
    // shows both, the English page only the statement above.
    visionTranslation:
      'Menjadi perusahaan agar-agar Indonesia yang dipercaya karena kualitas, konsistensi, dan komitmen terhadap hubungan jangka panjang.',
    missionTitle: 'Our Mission',
    mission: [
      'Menghasilkan produk agar-agar dengan kualitas yang konsisten.',
      'Mengoptimalkan potensi bahan baku rumput laut Indonesia.',
      'Memberikan pelayanan yang profesional dan responsif.',
      'Memenuhi kebutuhan pelanggan domestik dan internasional.',
      'Membangun hubungan bisnis jangka panjang yang saling menguntungkan.',
      'Melakukan pengembangan dan peningkatan proses secara berkelanjutan.',
    ],
  },

  products: {
    eyebrow: 'Katalog Produk',
    title: 'Tepung agar-agar dan tepung jeli',
    lead: 'Dari sachet sekali pakai hingga sak industri 25 kg — satu lini produksi, dikemas untuk setiap pasar.',
    filters: { all: 'Semua', agar: 'Tepung agar-agar', jelly: 'Tepung Jeli' },
    labels: {
      category: 'Kategori',
      weight: 'Berat',
      packaging: 'Kemasan',
      variant: 'Varian',
      description: 'Deskripsi produk',
    },
    cta: 'Minta penawaran',
    items: {
      bulk: {
        name: 'Bulk High Quality Agar Powder',
        category: 'Tepung agar-agar',
        weight: '25 kg',
        packaging: 'Sak — plastik 2 lapis',
        variant: 'Super, Premium, Standard',
        desc: 'Tepung agar-agar mutu industri dan ekspor, tersedia dalam tiga grade kekuatan gel, dikemas 25 kg dalam kantong plastik 2 lapis.',
      },
      'pouch-agar': {
        name: 'Plain Pouch Agar Powder',
        category: 'Tepung agar-agar',
        weight: '250 gram',
        packaging: 'Pouch',
        variant: 'Plain',
        desc: 'Tepung agar-agar merk Wise Spoon, sudah BPOM, kualitas bintang 5. Berat 250 gram setara dengan lebih dari 35 sachet.',
      },
      'pouch-jelly': {
        name: 'Plain Pouch Jelly Powder',
        category: 'Tepung Jeli',
        weight: '250 gram',
        packaging: 'Pouch',
        variant: 'Plain',
        desc: 'Tepung jeli merk Wise Spoon, sudah BPOM, kualitas bintang 5. Berat 250 gram setara dengan lebih dari 35 sachet.',
      },
      'sachet-8g': {
        name: 'Agar Sachet 8 Gram',
        category: 'Tepung agar-agar',
        weight: '8 gram',
        packaging: 'Sachet dan lusinan',
        variant: 'Plain, Hijau, Merah, Coklat',
        desc: 'Untuk sekali pakai.',
      },
      'sachet-ekonomis': {
        name: 'Agar Sachet Ekonomis',
        category: 'Tepung agar-agar',
        weight: '6 gram',
        packaging: 'Sachet dan lusinan',
        variant: 'Plain, Hijau, Merah, Coklat',
        desc: 'Sachet ekonomis, tersedia dalam empat varian warna.',
      },
    },
    variantsTitle: 'Varian warna sachet',
  },

  specs: {
    eyebrow: 'Grade & Spesifikasi',
    title: 'Tiga grade kekuatan gel',
    lead: 'Seluruh grade memakai bahan baku dan penanganan yang sama. Pembedanya adalah kekuatan gel.',
    gradeLabels: { strength: 'Kekuatan gel', packing: 'Kemasan', tier: 'Grade' },
    grades: [
      { code: 'Super', tier: 'Kekuatan Gel Tinggi', strength: '900 – 1200 g/cm²' },
      { code: 'Premium', tier: 'Kekuatan Gel Tinggi', strength: '750 – 850 g/cm²' },
      { code: 'Standard', tier: 'Kekuatan Gel Sedang', strength: '600 – 700 g/cm²' },
    ],
    packing: '25 kg dalam kantong plastik 2 lapis',
    tableTitle: 'Spesifikasi teknis produk',
    tableHead: { parameter: 'Parameter', value: 'Rentang Spesifikasi' },
    rows: [
      ['Bahan Baku', 'Rumput laut Gracilaria pilihan'],
      ['Kadar Air', '≤ 14%'],
      ['Ukuran Mesh', '80 – 120 mesh (dapat disesuaikan)'],
      ['Warna', 'Putih pudar hingga krem muda'],
      ['Aroma', 'Netral'],
      ['Kelarutan', 'Larut dalam air panas'],
      ['Aplikasi', 'Makanan, minuman, confectionery, penggunaan industri'],
    ],
  },

  why: {
    title: 'Why Sri Gunting Pratama?',
    items: [
      {
        title: 'Established Since 1995',
        body: 'Lebih dari 30 tahun pengalaman memberikan kami pemahaman mendalam mengenai industri agar-agar dan pengolahan rumput laut.',
      },
      {
        title: 'Indonesian Raw Material',
        body: 'Kami memanfaatkan potensi rumput laut Indonesia sebagai salah satu sumber bahan baku utama produk kami.',
      },
      {
        title: 'Consistent Quality',
        body: 'Konsistensi adalah salah satu prioritas utama kami. Kami menjaga proses produksi dan pengendalian kualitas agar produk yang diterima pelanggan memiliki standar yang konsisten.',
      },
      {
        title: 'Customer Oriented',
        body: 'Kami tidak hanya menjual produk. Kami membangun hubungan jangka panjang dengan pelanggan dengan memahami kebutuhan dan aplikasi mereka.',
      },
      {
        title: 'Flexible & Reliable',
        body: 'Kami terbuka terhadap kebutuhan spesifik pelanggan, baik untuk pasar domestik maupun internasional.',
      },
      {
        title: 'Long-Term Partnership',
        body: 'Tujuan kami bukan sekadar mendapatkan satu transaksi. Kami ingin menjadi supplier yang dapat diandalkan untuk kebutuhan pelanggan dalam jangka panjang.',
      },
    ],
  },

  quality: {
    title: 'Quality Comes First',
    body: [
      'Kami memahami bahwa bagi industri makanan, kualitas bahan baku merupakan bagian penting dari keberhasilan produk akhir.',
      'Karena itu, kami memberikan perhatian terhadap setiap tahapan proses, mulai dari pemilihan dan penanganan bahan baku hingga proses produksi dan pengemasan.',
    ],
    promiseLabel: 'Our commitment is simple:',
    promise: 'The quality we promise today must be the quality our customers receive tomorrow.',
    closing:
      'Kami terus berupaya meningkatkan proses produksi, sistem pengendalian kualitas, dan pelayanan untuk memenuhi ekspektasi pelanggan yang terus berkembang.',
  },

  market: {
    eyebrow: 'For Domestic & International Market',
    title: 'Indonesia to the World',
    body: [
      'Indonesia memiliki kekayaan sumber daya laut yang luar biasa.',
      'PT. Sri Gunting Pratama ingin membawa salah satu potensi tersebut ke pasar yang lebih luas.',
      'Dengan pengalaman sejak 1995, kami siap menjadi mitra bagi perusahaan lokal maupun buyer internasional yang membutuhkan agar-agar berkualitas dari Indonesia.',
    ],
    partnersLabel: 'Kami terbuka untuk bekerja sama dengan:',
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
      'Baik untuk kebutuhan pasar Indonesia maupun ekspor, kami siap mendiskusikan kebutuhan produk, spesifikasi, kemasan, dan volume yang diperlukan.',
  },

  applications: {
    eyebrow: 'Our Product',
    title: 'Agar-Agar',
    lead: 'Agar-agar merupakan bahan hidrokoloid alami yang banyak digunakan dalam berbagai aplikasi pangan.',
    intro:
      'Produk agar-agar kami dapat digunakan sebagai bahan baku maupun ingredient untuk berbagai kebutuhan industri, antara lain:',
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
      'Kami memahami bahwa setiap industri memiliki kebutuhan yang berbeda. Karena itu, kami berkomitmen menyediakan produk dengan karakteristik yang dapat disesuaikan dengan kebutuhan aplikasi pelanggan.',
    alts: [
      'Puding agar-agar cetak disajikan di atas piring',
      'Minuman jelly drink dengan potongan agar-agar',
      'Permen gummy kenyal berbahan agar-agar',
      'Cawan petri berisi media agar untuk keperluan laboratorium',
    ],
  },

  news: {
    eyebrow: 'Berita',
    title: 'Kabar dari lapangan',
    lead: 'Catatan kegiatan PT Sri Gunting Pratama bersama pelanggan, mitra, dan warga di sekitar pabrik.',
    archiveTitle: 'Kabar sebelumnya',
    carousel: {
      region: 'Galeri foto kegiatan',
      previous: 'Foto sebelumnya',
      next: 'Foto berikutnya',
      goTo: 'Lihat foto',
    },
  },

  recipes: {
    eyebrow: 'Inspirasi Dapur',
    title: 'Dari bubuk agar-agar menjadi puding di meja Anda',
    lead: 'Satu bahan yang sama dipakai pabrik dessert, katering, dan dapur rumah. Berikut hasil jadi yang bisa dicapai dengan tepung agar-agar dan jeli Sri Gunting.',

    feature: {
      badge: 'Puding cetak klasik',
      title: 'Kokoh saat dicetak, tetap kenyal saat disendok',
      body: 'Agar-agar mengikat cairan menjadi gel yang jauh lebih tegas dibanding gelatin. Puding tidak melorot di suhu ruang tropis, sisi cetakan tetap tajam saat dibalik, dan potongannya rapi tanpa hancur — alasan yang sama mengapa produsen dessert kemasan memakainya untuk produk yang harus tahan perjalanan.',
      facts: [
        { value: '1 sdt', label: 'tepung agar-agar per 250 ml cairan' },
        { value: '± 3 menit', label: 'dididihkan penuh agar larut sempurna' },
        { value: '35 – 40 °C', label: 'sudah mengeras, tanpa perlu kulkas' },
      ],
    },

    galleryTitle: 'Galeri puding & agar-agar',
    galleryLead: 'Dessert, jeli, dan potongan agar-agar — semuanya berangkat dari bubuk yang sama.',
    gallery: [
      'Puding lapis merah-putih dalam cup, siap saji untuk katering',
      'Potongan agar-agar warna-warni sebagai garnis dessert',
      'Puding susu dengan kompot stroberi di gelas saji',
      'Aneka rasa puding dalam gelas tinggi untuk display',
      'Puding karamel dengan plating restoran',
      'Puding yang tetap kokoh dan rapi saat disendok',
      'Puding vla lembut dalam gelas coupe',
      'Puding santan dengan saus buah dan daun mint',
    ],

    cardsTitle: 'Empat resep untuk memulai',
    cardsLead: 'Takaran di bawah memakai kemasan sachet 6 g dan 8 g. Semua bisa dikerjakan dengan panci biasa.',
    meta: {
      time: 'Waktu',
      serves: 'Porsi',
      level: 'Tingkat',
      ingredients: 'Bahan',
      steps: 'Cara membuat',
      tip: 'Catatan',
      open: 'Lihat resep',
      close: 'Tutup resep',
    },
    cards: [
      {
        name: 'Puding Santan Gula Merah',
        time: '25 menit',
        serves: '8 porsi',
        level: 'Mudah',
        blurb: 'Puding klasik Indonesia: gurih santan, manis legit gula merah, wangi pandan.',
        ingredients: [
          '1 sachet tepung agar-agar 8 g',
          '800 ml santan encer',
          '150 g gula merah, sisir halus',
          '50 g gula pasir',
          '2 lembar daun pandan, simpulkan',
          '¼ sdt garam',
        ],
        steps: [
          'Aduk tepung agar-agar, gula pasir, dan garam di panci kering hingga tercampur rata.',
          'Tuang santan sedikit demi sedikit sambil diaduk supaya tidak menggumpal, lalu masukkan gula merah dan daun pandan.',
          'Masak dengan api sedang sambil terus diaduk sampai mendidih penuh, lanjutkan sekitar 3 menit setelah letupan pertama.',
          'Angkat, buang daun pandan, tuang ke cetakan yang sudah dibasahi air. Diamkan sampai uapnya hilang, baru dinginkan di kulkas 1 jam.',
        ],
        tip: 'Santan mudah pecah. Jangan tinggalkan panci tanpa diaduk setelah mendidih.',
      },
      {
        name: 'Agar-Agar Lapis Buah',
        time: '45 menit',
        serves: '10 potong',
        level: 'Sedang',
        blurb: 'Lapisan susu dan buah bergantian — tampilannya rapi, teksturnya tetap menyatu.',
        ingredients: [
          '2 sachet tepung agar-agar 6 g',
          '1 liter air',
          '200 ml susu cair',
          '200 g gula pasir',
          'Pewarna makanan merah secukupnya',
          '150 g buah potong (stroberi atau mangga)',
        ],
        steps: [
          'Bagi bahan menjadi dua adonan: adonan putih dengan susu, adonan merah dengan air dan pewarna.',
          'Masak adonan pertama hingga mendidih, tuang setebal 1,5 cm ke loyang, tunggu sampai permukaannya setengah beku sekitar 5 menit.',
          'Tuang adonan kedua perlahan lewat punggung sendok supaya lapisan tidak bercampur, lalu sebar potongan buah.',
          'Ulangi lapis demi lapis sampai adonan habis. Dinginkan minimal 2 jam sebelum dipotong.',
        ],
        tip: 'Jangan tunggu satu lapisan mengeras total — lapisan yang masih setengah set justru merekat lebih kuat.',
      },
      {
        name: 'Puding Cokelat Lembut',
        time: '30 menit',
        serves: '8 porsi',
        level: 'Mudah',
        blurb: 'Tekstur padat lembut dengan rasa cokelat pekat, cocok disajikan bersama vla.',
        ingredients: [
          '1 sachet tepung agar-agar 8 g',
          '700 ml susu cair',
          '100 g cokelat masak pekat, cincang',
          '3 sdm cokelat bubuk',
          '120 g gula pasir',
          '1 sdt vanili',
        ],
        steps: [
          'Larutkan cokelat bubuk dengan sedikit susu hangat sampai tidak bergerindil.',
          'Campur tepung agar-agar, gula, dan sisa susu di panci, lalu masak sambil diaduk hingga mendidih.',
          'Matikan api, masukkan cokelat masak dan vanili, aduk sampai larut sempurna.',
          'Tuang ke cetakan, dinginkan 2 jam. Sajikan dengan vla atau saus karamel.',
        ],
        tip: 'Saring adonan sebelum dituang kalau ingin permukaan puding benar-benar mulus.',
      },
      {
        name: 'Jelly Cup Buah',
        time: '20 menit',
        serves: '12 cup',
        level: 'Mudah',
        blurb: 'Jeli cup segar untuk anak, kantin, atau hampers — cepat dibuat dalam jumlah banyak.',
        ingredients: [
          '1 sachet jelly powder 8 g',
          '900 ml air',
          '150 g gula pasir',
          '100 ml sirup atau jus buah',
          'Nata de coco secukupnya',
        ],
        steps: [
          'Campur jelly powder dan gula ke dalam air dingin, aduk sampai larut sebelum dipanaskan.',
          'Masak hingga mendidih sambil diaduk, matikan api, lalu masukkan sirup buah.',
          'Tuang ke dalam cup selagi panas dan beri nata de coco.',
          'Tutup cup selagi hangat supaya bebas kontaminasi, lalu dinginkan sampai set.',
        ],
        tip: 'Buah asam seperti jeruk, stroberi, dan kiwi butuh takaran agar-agar sedikit lebih banyak agar mengeras sempurna.',
      },
    ],

    cta: {
      title: 'Butuh agar-agar dalam jumlah produksi?',
      body: 'Kami menyuplai tepung agar-agar curah 25 kg dan kemasan sachet untuk pabrik dessert, katering, dan UMKM makanan.',
      button: 'Konsultasi via WhatsApp',
    },
  },

  facility: {
    eyebrow: 'Fasilitas Kami',
    title: 'Randu Agung, Singosari — Malang',
    lead: 'Ekstraksi, pengepresan, pengeringan, penggilingan, pengemasan, dan pergudangan dalam satu lokasi terintegrasi di Jawa Timur.',
    planLabel: 'Denah tapak',
    planScale: 'Tidak berskala',
    planNote:
      'Satu area, satu alur: rumput laut masuk lewat gerbang dan keluar sebagai barang jadi terkemas. Arahkan kursor ke sebuah tahap untuk melihat letaknya di denah.',
    meta: {
      'extraction-line': 'Penerimaan Gracilaria',
      'press-line': 'Penirisan hidrolik',
      'yard-drying': 'Dikeringkan hingga ≤ 14%',
      'milling-room': 'Digiling 80 – 120 mesh',
      warehouse: 'Dikemas 25 kg per sak',
      office: 'Pesanan & pengiriman',
    },
    captions: {
      'yard-drying': 'Rak pengeringan terbuka dan area proses',
      'extraction-line': 'Ruang ekstraksi dan pengepresan',
      'press-line': 'Lini press hidrolik',
      'milling-room': 'Ruang penggilingan dan pengayakan',
      warehouse: 'Gudang barang jadi',
      office: 'Administrasi dan meja pemesanan',
    },
  },

  faq: {
    eyebrow: 'F.A.Q',
    title: 'Pertanyaan yang Sering Diajukan',
    lead: 'Apa itu agar-agar, bedanya dengan gelatin, dan cara mengolahnya.',
    imageAlt: 'Kemasan pouch tepung agar-agar Wise Spoon',
    items: [
      {
        q: 'Apa Itu Agar-Agar?',
        a: 'Zat menyerupai jeli ini merupakan campuran karbohidrat yang diekstraksi dari alga merah, sejenis rumput laut. Selain untuk memasak, agar-agar juga dipakai sebagai bahan pengisi pada pelapisan kertas dan kain, penjernih pada industri fermentasi, serta untuk keperluan ilmiah tertentu. Agar-agar juga dikenal sebagai China glass, China grass, China isinglass, kanten Jepang, gelatin Jepang, dan dai choy goh, serta digunakan dalam beberapa resep dessert Jepang.',
      },
      {
        q: 'Agar-Agar vs. Gelatin',
        a: 'Perbedaan utama agar-agar dan gelatin terletak pada asal bahannya. Gelatin berbahan hewani dibuat dari kolagen ternak (tulang rawan, tulang, kulit, dan tendon), sedangkan agar-agar sepenuhnya nabati karena berasal dari tanaman alga merah. Keduanya juga berperilaku berbeda dan perlu disiapkan dengan cara yang berbeda. Agar-agar harus dididihkan agar dapat membentuk gel, sementara gelatin cukup dilarutkan dalam air hangat; sebab agar-agar meleleh pada 185 F sedangkan gelatin pada 95 F. Agar-agar juga membentuk gel lebih cepat dan tidak memerlukan pendinginan. Hasil akhirnya pun berbeda: hidangan dengan agar-agar lebih kokoh serta tidak selembut dan sekenyal gelatin. Resep berbahan agar-agar juga tetap kokoh pada suhu tinggi, sedangkan gelatin kehilangan sebagian kestabilannya.',
      },
      {
        q: 'Kegunaan Agar-Agar',
        a: 'Dalam masakan, agar-agar dipakai sebagai alternatif nabati pengganti gelatin pada berbagai hidangan, termasuk puding, mousse, dan jeli, serta es krim, permen gummy, dan cheesecake. Agar-agar juga merupakan bahan penting pada dessert Jepang anmitsu, yang memakai jeli kanten — campuran agar-agar, air, dan gula.',
      },
      {
        q: 'Cara Mengolah Agar-Agar',
        a: 'Sebelum ditambahkan ke dalam resep, agar-agar perlu dilarutkan dalam air lalu dididihkan; agar-agar tidak bisa sekadar dilarutkan atau ditambahkan langsung ke makanan. Larutkan agar-agar dalam cairan di panci kecil dengan api sedang-besar, didihkan, lalu masak perlahan hingga sedikit mengental, sekitar lima sampai tujuh menit. Tepung agar-agar larut lebih cepat dibanding bentuk serpih dan batang, yang memerlukan waktu perendaman dan pengadukan lebih lama. Untuk serpih agar-agar, gunakan 1 sendok makan per cangkir cairan; untuk tepung agar-agar, gunakan 1 sendok teh untuk mengentalkan 1 cangkir cairan. Setelah dicampurkan, agar-agar memerlukan sekitar satu jam untuk mengeras pada suhu ruang. Sebagian besar resep berbahan agar-agar disajikan dingin sehingga perlu didinginkan di lemari es. Perlu dicatat, bahan berkeasaman tinggi seperti jeruk, stroberi, dan kiwi mungkin memerlukan agar-agar dalam jumlah lebih banyak agar mengeras sempurna.',
      },
      {
        q: 'Bagaimana Rasanya?',
        a: 'Agar-agar sepenuhnya tidak berbau dan tidak berasa, sehingga menjadi bahan pembentuk gel yang ideal untuk segala jenis resep.',
      },
    ],
  },

  downloads: {
    eyebrow: 'Unduhan',
    title: 'Dokumen untuk pembeli',
    lead: 'Dokumentasi teknis yang disiapkan untuk pembeli industri dan internasional.',
    button: 'Unduh PDF',
    items: {
      profile: {
        title: 'Company Profile – Export Technical',
        desc: 'Spesifikasi teknis produk untuk pembeli internasional.',
      },
      capacity: {
        title: 'Datasheet Mutu & Produk',
        desc: 'Sistem pengendalian mutu, pernyataan kepatuhan, dan datasheet per grade.',
      },
      catalog: {
        title: 'Katalog Produk',
        desc: 'Rangkaian produk lengkap beserta kemasan dan tampilannya.',
      },
    },
  },

  partnership: {
    eyebrow: 'Looking for a Reliable Agar-Agar Supplier?',
    title: 'Let’s Grow Together.',
    body: 'Jika Anda sedang mencari supplier agar-agar dari Indonesia untuk kebutuhan industri, distribusi, perdagangan, maupun ekspor, PT. Sri Gunting Pratama siap menjadi partner Anda.',
    credo: ['More than 30 years of experience.', 'One commitment to quality.', 'One goal: long-term partnership.'],
  },

  contact: {
    eyebrow: 'Contact Us',
    title: 'PT. Sri Gunting Pratama',
    lead: 'For inquiries, samples, product specifications and business cooperation, please contact our team.',
    form: {
      name: 'Nama Anda',
      email: 'Email Anda',
      company: 'Perusahaan',
      message: 'Pesan',
      messagePlaceholder: 'Ceritakan aplikasi Anda, target kekuatan gel, dan kebutuhan kemasan…',
      submit: 'Kirim Pesan',
      sending: 'Mengirim…',
      sent: 'Terima kasih — kami akan segera menghubungi Anda.',
      required: 'Wajib diisi',
      note: 'Ingin balasan lebih cepat? Hubungi kami lewat WhatsApp.',
      whatsapp: 'Chat via WhatsApp',
      back: 'Kirim pesan lagi',
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
      'PT. Sri Gunting Pratama adalah perusahaan manufaktur agar-agar asal Indonesia yang telah berdiri dan berkembang sejak 1995.',
    usefulLinks: 'Tautan Berguna',
    services: 'Layanan Kami',
    servicesList: ['Tepung agar-agar', 'Tepung Jeli'],
    socials: 'Media Sosial Kami',
    contact: 'Kontak',
    rights: 'Seluruh hak cipta dilindungi.',
  },

  common: { langSwitch: 'Bahasa', backToTop: 'Kembali ke atas', established: 'Established 1995' },
}
