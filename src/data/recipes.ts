export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: string;
  time: string;
  portions: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  videoUrl?: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Rendang Daging Sapi',
    description: 'Rendang adalah masakan daging bercita rasa pedas yang menggunakan campuran berbagai bumbu dan rempah-rempah.',
    image: 'https://images.unsplash.com/photo-1545696968-1a5245650b36?w=400',
    category: 'Masakan Utama',
    difficulty: 'Sedang',
    time: '3 jam',
    portions: '6 porsi',
    ingredients: [
      '1 kg daging sapi, potong dadu',
      '400 ml santan kental',
      '10 buah cabai merah',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '2 cm jahe',
      '2 cm lengkuas',
      '2 batang serai',
      'Daun jeruk secukupnya',
      'Garam dan gula secukupnya'
    ],
    instructions: [
      'Haluskan cabai, bawang merah, bawang putih, dan jahe.',
      'Tumis bumbu halus hingga harum.',
      'Masukkan daging sapi, aduk rata.',
      'Tuang santan, tambahkan lengkuas, serai, dan daun jeruk.',
      'Masak dengan api kecil hingga santan mengering dan daging empuk.',
      'Aduk sesekali agar tidak gosong.',
      'Angkat dan sajikan.'
    ],
    tips: [
      'Gunakan daging sapi bagian sandung lamur untuk hasil terbaik.',
      'Masak dengan api kecil agar bumbu meresap sempurna.',
      'Rendang akan lebih nikmat jika dimasak sehari sebelumnya.'
    ]
  },
  {
    id: 2,
    title: 'Nasi Goreng Kampung',
    description: 'Nasi goreng kampung adalah nasi goreng khas Indonesia dengan cita rasa sederhana namun lezat, lengkap dengan ikan teri dan telur.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
    category: 'Masakan Utama',
    difficulty: 'Mudah',
    time: '30 menit',
    portions: '4 porsi',
    ingredients: [
      '4 piring nasi putih (dingin)',
      '100 gram ikan teri medan',
      '2 butir telur',
      '5 siung bawang merah, iris tipis',
      '3 siung bawang putih, cincang',
      '3 cabai merah, iris serong',
      '2 cabai rawit (sesuai selera)',
      '2 sdm kecap manis',
      '1 sdt terasi bakar',
      'Daun bawang secukupnya',
      'Garam dan merica secukupnya',
      'Minyak untuk menumis'
    ],
    instructions: [
      'Panaskan minyak, goreng ikan teri hingga kering. Sisihkan.',
      'Tumis bawang merah dan bawang putih hingga harum.',
      'Masukkan cabai dan terasi, aduk rata.',
      'Sisihkan tumisan ke pinggir wajan, buat orak-arik telur.',
      'Masukkan nasi, aduk hingga tercampur rata.',
      'Tambahkan kecap manis, garam, dan merica.',
      'Taburi ikan teri dan daun bawang.',
      'Aduk sebentar, angkat dan sajikan.'
    ],
    tips: [
      'Gunakan nasi yang sudah dingin agar tidak lengket.',
      'Terasi memberikan aroma dan rasa yang khas.',
      'Tambahkan kerupuk untuk pelengkap.'
    ]
  },
  {
    id: 3,
    title: 'Soto Ayam Kuning',
    description: 'Soto ayam adalah sup ayam khas Indonesia dengan kuah kuning yang segar dan gurih, cocok dinikmati bersama nasi atau lontong.',
    image: 'https://images.unsplash.com/photo-1547928578-bca3e9c5a9b5?w=400',
    category: 'Masakan Berkuah',
    difficulty: 'Mudah',
    time: '1 jam',
    portions: '5 porsi',
    ingredients: [
      '500 gram ayam, potong-potong',
      '2 liter air',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '2 cm kunyit',
      '1 cm jahe',
      '2 batang serai',
      '3 lembar daun salam',
      'Daun bawang dan seledri',
      'Garam dan merica secukupnya'
    ],
    instructions: [
      'Rebus ayam hingga matang, angkat dan suwir-suwir. Sisihkan kaldunya.',
      'Haluskan bawang merah, bawang putih, kunyit, dan jahe.',
      'Tumis bumbu halus hingga harum.',
      'Masukkan ke dalam kaldu, tambahkan serai dan daun salam.',
      'Masak hingga mendidih, tambahkan garam dan merica.',
      'Sajikan kuah dengan ayam suwir, taburan daun bawang dan seledri.'
    ],
    tips: [
      'Tambahkan perasan jeruk nipis saat penyajian.',
      'Sajikan dengan pelengkap seperti telur rebus, kentang, dan emping.',
      'Kuah akan lebih gurih jika menggunakan ayam kampung.'
    ]
  },
  {
    id: 4,
    title: 'Kue Lapis Legit',
    description: 'Kue lapis legit adalah kue khas Indonesia yang terbuat dari telur dan butter dengan rempah-rempah, berlapis-lapis dengan rasa yang lezat.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400',
    category: 'Kue dan Camilan',
    difficulty: 'Sulit',
    time: '2.5 jam',
    portions: '20 potong',
    ingredients: [
      '30 butir kuning telur',
      '500 gram butter',
      '200 gram gula halus',
      '150 gram tepung terigu',
      '1 sdt bubuk kayu manis',
      '1/2 sdt bubuk pala',
      '1/4 sdt bubuk cengkeh',
      '1 sdt vanila',
      'Susu kental manis secukupnya'
    ],
    instructions: [
      'Kocok butter dan gula hingga pucat dan mengembang.',
      'Masukkan kuning telur satu per satu sambil terus dikocok.',
      'Tambahkan tepung terigu dan bumbu rempah, aduk rata.',
      'Tuang adonan tipis ke dalam loyang, panggang hingga kecokelatan.',
      'Ulangi proses hingga adonan habis (15-20 lapisan).',
      'Dinginkan sebelum dipotong.'
    ],
    tips: [
      'Gunakan butter berkualitas untuk hasil terbaik.',
      'Pastikan setiap lapisan benar-benar matang sebelum menambah lapisan baru.',
      'Simpan dalam wadah kedap udara agar tetap lembab.'
    ]
  },
  {
    id: 5,
    title: 'Pisang Goreng Crispy',
    description: 'Pisang goreng crispy adalah camilan favorit dengan balutan tepung yang renyah di luar dan pisang yang lembut di dalam.',
    image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=400',
    category: 'Kue dan Camilan',
    difficulty: 'Mudah',
    time: '20 menit',
    portions: '4 porsi',
    ingredients: [
      '6 buah pisang kepok matang',
      '100 gram tepung terigu',
      '50 gram tepung beras',
      '1/2 sdt garam',
      '1 sdm gula pasir',
      '150 ml air es',
      'Minyak untuk menggoreng'
    ],
    instructions: [
      'Campurkan tepung terigu, tepung beras, garam, dan gula.',
      'Tuang air es sedikit demi sedikit, aduk hingga adonan licin.',
      'Kupas pisang, belah dua memanjang.',
      'Celupkan pisang ke dalam adonan.',
      'Goreng dalam minyak panas hingga keemasan.',
      'Angkat dan tiriskan, sajikan hangat.'
    ],
    tips: [
      'Gunakan air es agar hasil lebih crispy.',
      'Goreng dengan api sedang agar matang merata.',
      'Tambahkan wijen untuk variasi.'
    ]
  },
  {
    id: 6,
    title: 'Sayur Asem Jakarta',
    description: 'Sayur asem adalah masakan berkuah asam segar dengan berbagai sayuran, cocok untuk pendamping makan siang.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
    category: 'Sayuran',
    difficulty: 'Mudah',
    time: '40 menit',
    portions: '6 porsi',
    ingredients: [
      '1 buah labu siam, potong-potong',
      '100 gram kacang panjang, potong 3 cm',
      '2 buah jagung manis, potong-potong',
      '50 gram kacang tanah',
      '1 genggam daun melinjo',
      '2 liter air',
      '3 sdm asam jawa',
      'Garam dan gula secukupnya'
    ],
    instructions: [
      'Haluskan bumbu: bawang merah, bawang putih, cabai, dan terasi.',
      'Rebus air, masukkan bumbu halus.',
      'Masukkan jagung dan kacang tanah terlebih dahulu.',
      'Setelah setengah matang, masukkan labu siam dan kacang panjang.',
      'Tambahkan air asam jawa, garam, dan gula.',
      'Masukkan daun melinjo, masak hingga semua sayur matang.',
      'Angkat dan sajikan hangat.'
    ],
    tips: [
      'Jangan terlalu lama merebus sayuran agar tetap renyah.',
      'Tambahkan belimbing sayur untuk rasa asam alami.',
      'Sajikan dengan sambal terasi.'
    ]
  }
];

export const categories = [
  'Semua',
  'Masakan Utama',
  'Masakan Berkuah',
  'Sayuran',
  'Kue dan Camilan'
];
