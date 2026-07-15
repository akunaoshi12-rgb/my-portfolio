export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  period: string;
  role: string;
  descriptionIndonesian: string;
  descriptionEnglish: string;
  bulletPointsIndonesian: string[];
  bulletPointsEnglish: string[];
  logoType: 'dwimitra' | 'arthaboga' | 'alfamidi' | 'sicepat' | 'generic';
}

export interface Education {
  id: string;
  school: string;
  location: string;
  period: string;
  degree: string;
  major: string;
}

export interface PersonalDetails {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  addressIndonesian: string;
  heroSummaryIndonesian: string;
  heroSummaryEnglish: string;
  summaryIndonesian: string;
  summaryEnglish: string;
  linkedinUrl: string;
  githubUrl: string;
}

export const personalDetails: PersonalDetails = {
  name: 'Ade Iqbal Junianto',
  title: 'Retail & Customer Service Specialist',
  phone: '089528559579',
  email: 'adeiqbal160@gmail.com',
  location: 'Cinere, Depok',
  addressIndonesian: 'Jl. Persatuan No. 27A RT002/RW004 Cinere, Kecamatan Cinere, Kota Depok, Provinsi Jawa Barat',
  heroSummaryIndonesian: 'Praktisi retail dan pelayanan pelanggan dengan pengalaman di operasional toko, penjualan, pengiriman, dan inventory grocery. Terbiasa menangani stok, kas, target harian, dan pelanggan langsung di lingkungan kerja cepat.',
  heroSummaryEnglish: 'Retail and customer service practitioner with hands-on experience in store operations, sales, delivery, and grocery inventory. Used to handling stock, cash, daily targets, and direct customer service in fast-paced environments.',
  summaryIndonesian: 'Saya mengawali karir sebagai Store Crew di Alfamidi. Dari sana saya bergerak ke penjualan, menjadi kurir di Sicepat Express, hingga akhirnya kini mengelola operasional grocery di Growell Pondok Indah, sebuah supermarket premium. Aktivitas harian saya berkisar pada penghitungan stok, pengelolaan uang tunai, dan pelayanan pelanggan secara langsung. Portofolio ini adalah proyek pribadi yang saya bangun sendiri dengan mempelajari pengembangan web dari nol di waktu senggang, melalui YouTube dan internet. Saya terbiasa mengambil inisiatif sendiri ketika melihat peluang.',
  summaryEnglish: 'I began my career as a Store Crew at Alfamidi. From there I moved into sales, worked as a courier at Sicepat Express, and now manage grocery operations at Growell Pondok Indah, a premium supermarket. My daily work revolves around stock counting, cash handling, and direct customer service. This portfolio is a personal project I built by learning web development from scratch in my spare time, from YouTube and the internet. I am used to taking initiative on my own when I see an opportunity.',
  linkedinUrl: 'https://linkedin.com/in/ade-iqbal-junianto',
  githubUrl: 'https://github.com/ade9994499'
};

export const workExperiences: WorkExperience[] = [
  {
    id: 'exp-1',
    company: 'DWIMITRA GROUP',
    location: 'Jl. Pantai Indah Utara 1 No.2 Kapuk Muara, Penjaringan, Jakarta Utara 14460',
    period: 'Nov 2023 - Present',
    role: 'Staff Grocery',
    descriptionIndonesian: 'Growell Pondok Indah adalah sebuah toko swalayan yang menawarkan berbagai macam produk kebutuhan sehari-hari, mulai dari makanan segar, produk organik, makanan impor, hingga kebutuhan rumah tangga. Growell dikenal karena fokusnya pada produk-produk berkualitas tinggi dan gaya hidup sehat.',
    descriptionEnglish: 'Growell Pondok Indah is a premium supermarket offering a wide range of daily needs, from fresh food, organic produce, imported items, to household supplies. Growell is highly recognized for its focus on high-quality organic products and healthy lifestyle choices.',
    bulletPointsIndonesian: [
      'Memastikan ketersediaan produk dan menjaga kualitas produk, bertanggung jawab atas pelayanan pelanggan, penataan produk, pengelolaan stok, dan kasir serta memberikan pelayanan yang ramah dan profesional kepada pelanggan.'
    ],
    bulletPointsEnglish: [
      'Manage daily grocery inventory and stock levels to ensure product availability.',
      'Maintain cleanliness and organization of store displays according to company standards.',
      'Assist customers with product inquiries and provide excellent in-store service.'
    ],
    logoType: 'dwimitra'
  },
  {
    id: 'exp-2',
    company: 'PT. ARTHA BOGA CEMERLANG',
    location: 'Jl. SMP 122 No.48, RT.2/RW.3, Kapuk Muara, Kec. Penjaringan, Jkt Utara, DKI Jakarta 14460',
    period: 'May 2022 - Jul 2023',
    role: 'Sales Taking Order',
    descriptionIndonesian: 'PT. Artha Boga Cemerlang adalah perusahaan terkemuka anak perusahaan dari Orang Tua Group yang bergerak sebagai distributor minuman produk Orang Tua.',
    descriptionEnglish: 'PT. Artha Boga Cemerlang is a leading distribution subsidiary of Orang Tua (OT) Group, specializing in the nationwide distribution of beverage and consumer goods products.',
    bulletPointsIndonesian: [
      'Meningkatkan jumlah pesanan dari pelanggan yang ada dan mungkin menarik pelanggan baru, menghasilkan peningkatan pendapatan untuk perusahaan.',
      'Menjaga hubungan yang kuat dengan pelanggan, memberikan layanan yang responsif, dan menjawab pertanyaan serta permintaan dengan cepat dan akurat.',
      'Memastikan pesanan yang diambil tepat dan akurat sesuai dengan keinginan pelanggan, mengurangi risiko kesalahan pengiriman.',
      'Efektif mengatur rute kunjungan ke pelanggan, memaksimalkan efisiensi perjalanan, dan memastikan semua pelanggan terlayani dengan baik.'
    ],
    bulletPointsEnglish: [
      'Processed daily sales orders efficiently and accurately using company systems.',
      'Communicated effectively with clients to confirm order details and delivery schedules.',
      'Collaborated with the logistics team to ensure timely dispatch of goods.'
    ],
    logoType: 'arthaboga'
  },
  {
    id: 'exp-3',
    company: 'Proyek Konstruksi (Pakde)',
    location: 'Depok & Jakarta (berpindah sesuai proyek)',
    period: 'Jul 2020 - Feb 2021',
    role: 'Kenek / Pekerja Konstruksi',
    descriptionIndonesian: 'Proyek konstruksi mandiri yang dikelola keluarga, menangani berbagai pekerjaan pembangunan dan renovasi di area Depok dan Jakarta.',
    descriptionEnglish: 'Family-managed independent construction projects handling various building and renovation works across Depok and Jakarta.',
    bulletPointsIndonesian: [
      'Mengangkut dan mendistribusikan material bangunan (semen, bata, pasir) ke area kerja sesuai kebutuhan.',
      'Membantu tukang dalam persiapan dan pelaksanaan pekerjaan konstruksi sesuai arahan.',
      'Membersihkan dan merapikan lokasi proyek untuk menjaga keamanan dan ketertiban area kerja.',
      'Beradaptasi dengan perpindahan lokasi proyek di area Depok dan Jakarta.'
    ],
    bulletPointsEnglish: [
      'Transported and distributed construction materials (cement, bricks, sand) to designated work areas.',
      'Assisted skilled workers in preparation and execution of construction tasks under supervision.',
      'Cleaned and organized project sites post-work to maintain safety and order.',
      'Adapted to changing project locations across Depok and Jakarta areas.'
    ],
    logoType: 'generic'
  },
  {
    id: 'exp-4',
    company: 'Sicepat Express',
    location: 'Beji, Depok',
    period: 'Feb 2020 - Jun 2020',
    role: 'Daily Worker Kurir',
    descriptionIndonesian: 'Sicepat Express adalah perusahaan logistik dan pengiriman terkemuka di Indonesia yang mengkhususkan diri dalam layanan pengiriman paket cepat dan andal.',
    descriptionEnglish: 'Sicepat Express is a leading logistics and delivery company in Indonesia, specializing in fast and reliable package delivery services.',
    bulletPointsIndonesian: [
      'Mengantarkan 65-100 paket per hari dengan rute area Beji, Depok.',
      'Menjaga catatan pengiriman dan dokumentasi bukti pengiriman yang akurat.',
      'Memberikan pelayanan ramah saat serah terima paket dan menyelesaikan kendala pengiriman.'
    ],
    bulletPointsEnglish: [
      'Delivered 65-100 packages daily across assigned routes in Beji, Depok area.',
      'Maintained accurate delivery records and proof of delivery documentation.',
      'Provided courteous customer service during package handovers and resolved delivery issues promptly.'
    ],
    logoType: 'sicepat'
  },
  {
    id: 'exp-5',
    company: 'PT. MIDI UTAMA INDONESIA',
    location: 'Jl. Industri Km. 12 Kp. Kadu Desa. Bunder RT 03, Cikupa Tangerang / Eks Gudang Bulog 15710',
    period: 'Mar 2018 - Dec 2019',
    role: 'Store Crew',
    descriptionIndonesian: 'Jaringan toko swalayan atau minimarket di Indonesia. Mereka menawarkan berbagai macam produk kebutuhan sehari-hari, seperti makanan, minuman, produk kebersihan, dan barang rumah tangga. Umumnya menempatkan diri sebagai pilihan yang nyaman dan terjangkau bagi pelanggan yang ingin berbelanja dengan cepat dan efisien.',
    descriptionEnglish: 'A prominent convenience store and supermarket chain in Indonesia. They offer a diverse selection of daily necessities including groceries, fresh produce, cleaning supplies, and household essentials, positioned as an accessible option for fast and efficient shopping.',
    bulletPointsIndonesian: [
      'Bekerja sama dengan manajemen toko untuk melaporkan masalah atau memberikan masukan yang dapat meningkatkan operasi toko secara keseluruhan.',
      'Memiliki pengetahuan yang baik tentang produk yang dijual, memungkinkan memberikan informasi yang berguna kepada pelanggan.',
      'Dapat menyelesaikan tugas-tugas seperti menghitung uang tunai atau memindai produk dengan cepat dan akurat, membantu mengurangi waktu antrean pelanggan.'
    ],
    bulletPointsEnglish: [
      'Handled POS operations and cash management with high accuracy.',
      'Executed regular stock opname procedures and shelf replenishment.',
      'Delivered frontline customer service, resolving minor issues promptly.'
    ],
    logoType: 'alfamidi'
  }
];

export const education: Education = {
  id: 'edu-1',
  school: 'SMK Pancasila 1 Wonogiri',
  location: 'Jl. Jend. Sudirman No.106, Sukorejo, Giritirto, Kec. Wonogiri, Kabupaten Wonogiri, Jawa Tengah 57611',
  period: 'Jun 2014 - May 2017',
  degree: 'High School Diploma',
  major: 'Teknik Otomotif'
};

export const hardSkills: string[] = [
  'Inventory Management',
  'POS Operations',
  'Cash Handling',
  'Stocktaking',
  'Merchandising'
];

export const hardSkillsIndonesian: string[] = [
  'Pengelolaan Inventaris',
  'Point of Sale (POS)',
  'Penanganan Uang Tunai',
  'Stock Opname'
];

export const softSkills: string[] = [
  'Customer Service',
  'Time Management',
  'Teamwork',
  'Communication',
  'Problem Solving'
];

export const softSkillsIndonesian: string[] = [
  'Pelayanan Pelanggan',
  'Manajemen Waktu',
  'Ketekunan',
  'Kerjasama Tim'
];
