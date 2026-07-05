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
  logoType: 'dwimitra' | 'arthaboga' | 'alfamidi';
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
  summaryIndonesian: 'Saya merupakan lulusan SMK jurusan Teknik Otomotif tahun 2017. Selama karir saya, saya telah mengembangkan keterampilan komunikasi dan pelayanan melalui pengalaman sebagai Store Crew dan Sales Taking Order. Saya memiliki semangat kerja tim yang tinggi dan siap untuk berkontribusi pada lingkungan kerja yang dinamis.',
  summaryEnglish: 'I am a passionate and detail-oriented retail specialist with a strong foundation built during my time at SMK. My approach to work is deeply rooted in a team-oriented mindset, believing that collaborative efforts yield the best results in fast-paced customer service environments. I thrive on organization, efficiency, and ensuring that every customer interaction is positive and resolving.',
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
  'Stock Opname',
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

export const dailyWorkerDetailIndonesian = {
  title: 'Daily Worker Kurir',
  description: 'Daily Worker Kurir sebagai kurir untuk periode waktu tertentu, tugasnya adalah mengantarkan barang atau paket dari satu tempat ke tempat lain sesuai dengan instruksi yang diberikan oleh perusahaan atau pelanggan. Tidak memiliki kontrak pekerjaan jangka panjang dan seringkali digaji berdasarkan jumlah pengiriman yang berhasil dilakukan dalam satu hari kerja, Kecepatan dan ketepatan waktu dalam pengiriman sangat penting dalam pekerjaan ini.'
};
