// export const datasets: Dataset[] = [
//   {
//     id: 'data-pegawai-asn-2024',
//     organizationId: 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
//     title: 'Data Pegawai ASN Provinsi Jawa Tengah 2024',
//     description: 'Informasi lengkap pegawai ASN Pemprov Jateng.',
//     format: ['CSV', 'JSON'],
//     size: '2.5 MB',
//     lastUpdated: '2024-12-15',
//     downloads: 1245,
//     license: 'CC BY 4.0',
//     tags: ['Kepegawaian', 'ASN', 'Pegawai', 'SDM'],
//     fields: [
//       { name: 'nip', type: 'string', description: 'Nomor Induk Pegawai' },
//       { name: 'nama', type: 'string', description: 'Nama Lengkap Pegawai' },
//       { name: 'golongan', type: 'string', description: 'Golongan Kepangkatan' },
//       { name: 'jabatan', type: 'string', description: 'Jabatan/Posisi' },
//       { name: 'unit_kerja', type: 'string', description: 'Unit Kerja/SKPD' },
//       { name: 'status', type: 'string', description: 'Status Kepegawaian' }
//     ],
//     preview: [
//       {
//         nip: '198501012010011001',
//         nama: 'Ahmad Susanto',
//         golongan: 'III/c',
//         jabatan: 'Kepala Seksi',
//         unit_kerja: 'Dinas Pendidikan',
//         status: 'PNS'
//       },
//       {
//         nip: '198703152011012002',
//         nama: 'Siti Nurhaliza',
//         golongan: 'III/b',
//         jabatan: 'Analis',
//         unit_kerja: 'Dinas Kesehatan',
//         status: 'PNS'
//       },
//       {
//         nip: '199002102012011003',
//         nama: 'Budi Santoso',
//         golongan: 'II/d',
//         jabatan: 'Staff',
//         unit_kerja: 'Bappeda',
//         status: 'PNS'
//       },
//       {
//         nip: '198912222013012004',
//         nama: 'Dewi Lestari',
//         golongan: 'III/a',
//         jabatan: 'Pengawas',
//         unit_kerja: 'Inspektorat',
//         status: 'PNS'
//       },
//       {
//         nip: '199105082014011005',
//         nama: 'Rizki Pratama',
//         golongan: 'II/c',
//         jabatan: 'Operator',
//         unit_kerja: 'Diskominfo',
//         status: 'PNS'
//       }
//     ]
//   },
//   {
//     id: 'rekrutmen-cpns-2024',
//     organizationId: 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
//     title: 'Data Rekrutmen CPNS 2024',
//     description: 'Hasil seleksi CPNS tahun 2024.',
//     format: ['PDF', 'Excel'],
//     size: '1.8 MB',
//     lastUpdated: '2024-11-30',
//     downloads: 892,
//     license: 'CC BY 4.0',
//     tags: ['CPNS', 'Rekrutmen', 'Seleksi', 'Pegawai'],
//     fields: [
//       { name: 'kode_formasi', type: 'string', description: 'Kode Formasi Jabatan' },
//       { name: 'nama_jabatan', type: 'string', description: 'Nama Jabatan' },
//       { name: 'unit_kerja', type: 'string', description: 'Unit Kerja Penempatan' },
//       { name: 'kuota', type: 'number', description: 'Jumlah Formasi' },
//       { name: 'pendaftar', type: 'number', description: 'Jumlah Pendaftar' },
//       { name: 'lulus', type: 'number', description: 'Jumlah Lulus Seleksi' }
//     ],
//     preview: [
//       { kode_formasi: 'CPNS-2024-001', nama_jabatan: 'Analis Kebijakan', unit_kerja: 'Bappeda', kuota: 5, pendaftar: 45, lulus: 5 },
//       { kode_formasi: 'CPNS-2024-002', nama_jabatan: 'Guru Matematika', unit_kerja: 'Dinas Pendidikan', kuota: 10, pendaftar: 120, lulus: 10 },
//       { kode_formasi: 'CPNS-2024-003', nama_jabatan: 'Perawat', unit_kerja: 'Dinas Kesehatan', kuota: 8, pendaftar: 85, lulus: 8 },
//       { kode_formasi: 'CPNS-2024-004', nama_jabatan: 'Penyuluh Pertanian', unit_kerja: 'Dinas Pertanian', kuota: 6, pendaftar: 32, lulus: 6 },
//       { kode_formasi: 'CPNS-2024-005', nama_jabatan: 'Programmer', unit_kerja: 'Diskominfo', kuota: 3, pendaftar: 67, lulus: 3 }
//     ]
//   },
//   {
//     id: 'diklat-pegawai-2024',
//     organizationId: 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
//     title: 'Data Pendidikan dan Pelatihan Pegawai 2024',
//     description: 'Program diklat ASN sepanjang 2024.',
//     format: ['CSV', 'JSON'],
//     size: '3.2 MB',
//     lastUpdated: '2024-12-10',
//     downloads: 654
//   },
//   {
//     id: 'data-ormas-2024',
//     organizationId: 'badan-kesatuan-bangsa-dan-politik-provinsi-jawa-tengah',
//     title: 'Data Organisasi Masyarakat 2024',
//     description: 'Daftar ormas resmi terdaftar di Provinsi Jawa Tengah.',
//     format: ['CSV', 'PDF'],
//     size: '4.1 MB',
//     lastUpdated: '2024-12-20',
//     downloads: 2156
//   },
//   {
//     id: 'kegiatan-bela-negara-2024',
//     organizationId: 'badan-kesatuan-bangsa-dan-politik-provinsi-jawa-tengah',
//     title: 'Data Kegiatan Bela Negara 2024',
//     description: 'Program bela negara di seluruh kabupaten/kota di Jateng.',
//     format: ['CSV', 'PDF'],
//     size: '2.8 MB',
//     lastUpdated: '2024-12-18',
//     downloads: 1834
//   },
//   {
//     id: 'data-fasilitas-kesehatan-2024',
//     organizationId: 'dinas-kesehatan-provinsi-jawa-tengah',
//     title: 'Data Fasilitas Kesehatan 2024',
//     description: 'Daftar rumah sakit, puskesmas, klinik, dan lab di Jateng.',
//     format: ['CSV', 'PDF'],
//     size: '5.4 MB',
//     lastUpdated: '2024-12-12',
//     downloads: 2045
//   },
//   {
//     id: 'statistik-gizi-anak-2024',
//     organizationId: 'dinas-kesehatan-provinsi-jawa-tengah',
//     title: 'Statistik Gizi Anak 2024',
//     description: 'Indikator status gizi anak di 35 kabupaten/kota.',
//     format: ['CSV', 'PDF'],
//     size: '3.9 MB',
//     lastUpdated: '2024-11-30',
//     downloads: 1887
//   }
// ];
export interface DatasetField {
  name: string;
  type: string;
  description: string;
}

export interface Dataset {
  id: string;
  organizationId: string;
  title: string;
  description: string;
  format: string[];
  size: string;
  lastUpdated: string;
  downloads: number;
  license?: string;
  tags?: string[];
  fields?: DatasetField[];
  preview?: Record<string, string | number>[]; // tipe disesuaikan untuk angka juga
}

export const datasets: Dataset[] = [
  {
  'id': 'statistik-data-formasi-pejabat-struktural-di-lingkungan-pemerintah-provinsi-jawa-tengah',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'STATISTIK DATA FORMASI PEJABAT STRUKTURAL DI LINGKUNGAN PEMERINTAH PROVINSI JAWA TENGAH',
  'description': 'STATISTIK DATA FORMASI PEJABAT STRUKTURAL DI LINGKUNGAN PEMERINTAH PROVINSI JAWA TENGAH',
  'format': [
    'XLSX'
  ],
  'size': '4246 KB',
  'lastUpdated': '2025-07-07',
  'downloads': 123,
  'license': '',
  'tags': [
    'data',
    'pejabat struktural'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-berdasarkan-eselon-dan-pendidikan',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Berdasarkan Eselon dan Pendidikan',
  'description': 'Jumlah ASN Berdasarkan Eselon dan Pendidikan',
  'format': [
    'XLSX'
  ],
  'size': '774 KB',
  'lastUpdated': '2025-07-07',
  'downloads': 938,
  'license': '',
  'tags': [
    'asn',
    'eselon',
    'pendidikan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-berdasarkan-pendidikan-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Berdasarkan Pendidikan dan Jenis Kelamin',
  'description': 'Jumlah ASN Berdasarkan Pendidikan dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '4141 KB',
  'lastUpdated': '2025-07-07',
  'downloads': 276,
  'license': '',
  'tags': [
    'asn',
    'bkd',
    'jeniskelamin',
    'pendidikan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-berdasarkan-golongan-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Berdasarkan Golongan dan Jenis Kelamin',
  'description': 'Jumlah ASN Berdasarkan Golongan dan Jenis Kelamin ',
  'format': [
    'XLSX'
  ],
  'size': '4166 KB',
  'lastUpdated': '2025-07-07',
  'downloads': 755,
  'license': '',
  'tags': [
    'Berdasarkan Golongan',
    'asn',
    'bkd',
    'jeniskelamin'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-eselon-iii-berdasarkan-usia-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah Eselon III Berdasarkan Usia dan Jenis Kelamin',
  'description': 'Jumlah Eselon III Berdasarkan Usia dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '3016 KB',
  'lastUpdated': '2025-07-07',
  'downloads': 68,
  'license': '',
  'tags': [
    'eselon',
    'jeniskelamin',
    'usia'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'statistik-data-pejabat-berdasarkan-eselon-dan-pendidikan',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Statistik Data Pejabat Berdasarkan Eselon dan Pendidikan',
  'description': 'Statistik Data Pejabat Berdasarkan Eselon dan Pendidikan',
  'format': [
    'XLSX'
  ],
  'size': '1184 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 255,
  'license': '',
  'tags': [
    'Eselon',
    'Pejabat',
    'Pendidikan',
    'Statistik'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'statistik-data-pejabat-berdasarkan-eselon-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Statistik Data Pejabat Berdasarkan Eselon dan Jenis Kelamin',
  'description': 'Statistik Data Pejabat Berdasarkan Eselon dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '580 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 710,
  'license': '',
  'tags': [
    'Eselon',
    'Pejabat',
    'jeniskelamin'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-berdasarkan-usia-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Berdasarkan Usia dan Jenis Kelamin',
  'description': 'Jumlah ASN Berdasarkan Usia dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '2659 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 676,
  'license': '',
  'tags': [
    'ASN',
    'Usia',
    'jeniskelamin'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-pejabat-struktural-berdasarkan-pendidikan-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Pejabat Struktural Berdasarkan Pendidikan dan Jenis Kelamin',
  'description': 'Jumlah ASN Pejabat Struktural Berdasarkan Pendidikan dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '4045 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 821,
  'license': '',
  'tags': [
    'ASN',
    'Pendidikan',
    'jeniskelamin',
    'struktural'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-pejabat-berdasarkan-eselon-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Pejabat Berdasarkan Eselon dan Jenis Kelamin',
  'description': 'Jumlah ASN Pejabat Berdasarkan Eselon dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '859 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 623,
  'license': '',
  'tags': [
    'ASN',
    'Eselon',
    'jeniskelamin'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-pejabat-struktural-berdasarkan-usia-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Pejabat Struktural Berdasarkan Usia dan Jenis Kelamin',
  'description': 'Jumlah ASN Pejabat Struktural Berdasarkan Usia dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '4891 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 431,
  'license': '',
  'tags': [
    'ASN',
    'Usia',
    'jeniskelamin'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-pejabat-struktural-di-instansi-induk-dan-upt',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Pejabat Struktural di Instansi Induk dan UPT',
  'description': 'Jumlah ASN Pejabat Struktural di Instansi Induk dan UPT',
  'format': [
    'XLSX'
  ],
  'size': '2446 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 737,
  'license': '',
  'tags': [
    'ASN',
    'Induk',
    'Instansi',
    'UPT'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-eselon-ii-berdasarkan-usia-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah Eselon II Berdasarkan Usia dan Jenis Kelamin',
  'description': 'Jumlah Eselon II Berdasarkan Usia dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '3076 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 806,
  'license': '',
  'tags': [
    'Eselon',
    'Usia',
    'jeniskelamin'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-pns-eselon-ii-berdasarkan-pendidikan-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Rekap PNS Eselon II Berdasarkan Pendidikan dan Jenis Kelamin',
  'description': 'Rekap PNS Eselon II Berdasarkan Pendidikan dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '2510 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 578,
  'license': '',
  'tags': [
    'PNS',
    'Pendidikan',
    'jeniskelamin'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-pns-eselon-iii-berdasarkan-pendidikan-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Rekap PNS Eselon III Berdasarkan Pendidikan dan Jenis Kelamin',
  'description': 'Rekap PNS Eselon III Berdasarkan Pendidikan dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '3954 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 253,
  'license': '',
  'tags': [
    'PNS',
    'jeniskelamin',
    'pendidikan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-pns-eselon-iv-berdasarkan-pendidikan-dan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Rekap PNS Eselon IV Berdasarkan Pendidikan dan Jenis Kelamin',
  'description': 'Rekap PNS Eselon IV Berdasarkan Pendidikan dan Jenis Kelamin ',
  'format': [
    'XLSX'
  ],
  'size': '3830 KB',
  'lastUpdated': '2025-07-04',
  'downloads': 594,
  'license': '',
  'tags': [
    'eselon',
    'jeniskelamin',
    'pendidikan',
    'pns'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'prakiraan-pensiun-asn-berdasarkan-jabatan',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Prakiraan Pensiun ASN Berdasarkan Jabatan',
  'description': 'Dataset Prakiraan Pensiun ASN Berdasarkan Jabatan ',
  'format': [
    'XLSX'
  ],
  'size': '3141 KB',
  'lastUpdated': '2025-07-03',
  'downloads': 417,
  'license': '',
  'tags': [
    'ASN',
    'Jabatan',
    'pensiun ASN'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-eselon-iv-berdasarkan-usia-dan-jenis-kelamin-05-april-2024',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah Eselon IV Berdasarkan Usia dan Jenis Kelamin 05 April 2024',
  'description': 'Datasheet Jumlah Eselon IV Berdasarkan Usia dan Jenis Kelamin 05 April 2024',
  'format': [
    'XLSX'
  ],
  'size': '1718 KB',
  'lastUpdated': '2024-08-21',
  'downloads': 558,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-berdasarkan-usia-dan-jenis-kelamin-10-januari-2024',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Berdasarkan Usia dan Jenis Kelamin 10 Januari 2024',
  'description': 'Datasheet Jumlah ASN Berdasarkan Usia dan Jenis Kelamin 10 Januari 2024',
  'format': [
    'XLSX'
  ],
  'size': '4718 KB',
  'lastUpdated': '2024-08-21',
  'downloads': 112,
  'license': '',
  'tags': [
    'asn',
    'bkd'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-berdasarkan-pendidikan-dan-jenis-kelamin-per-05-agustus-2024',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Berdasarkan Pendidikan dan Jenis Kelamin per 05 Agustus 2024',
  'description': 'Datasheet Jumlah ASN Berdasarkan Pendidikan dan Jenis Kelamin per 05 Agustus 2024',
  'format': [
    'XLSX'
  ],
  'size': '2714 KB',
  'lastUpdated': '2024-08-21',
  'downloads': 42,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-asn-berdasarkan-pendidikan-dan-jenis-kelamin-per-05-april-2024',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Jumlah ASN Berdasarkan Pendidikan dan Jenis Kelamin per 05 April 2024',
  'description': 'Datasheet Jumlah ASN Berdasarkan Pendidikan dan Jenis Kelamin per 05 April 2024',
  'format': [
    'XLSX'
  ],
  'size': '3209 KB',
  'lastUpdated': '2024-08-21',
  'downloads': 525,
  'license': '',
  'tags': [
    'asn',
    'bkd'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': '190-sdjt-hasil-promosi-jabatan-di-lingkungan-pemerintah-provinsi-jawa-tengah-',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Hasil Promosi Jabatan di Lingkungan Pemerintah Provinsi Jawa Tengah',
  'description': 'Pemetaan Promosi Jabatan  di Lingkungan Pemerintah Provinsi Jawa Tengah Berdasarkan Jenis Jabatan',
  'format': [
    'XLSX'
  ],
  'size': '949 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 141,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'e29-sdjt-asn-di-lingkungan-pemerintah-provinsi-jawa-tengah',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'ASN di Lingkungan Pemerintah Provinsi Jawa Tengah',
  'description': 'Pemetaan Jumlah ASN di Lingkungan Pemerintah Provinsi Jawa Tengah Berdasarkan Jenis Jabatan dan Jenis Kelamin',
  'format': [
    'XLSX'
  ],
  'size': '1177 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 125,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': '7d7-sdjt-pengadaan-casn-di-lingkungan-pemerintah-provinsi-jawa-tengah',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Pengadaan CASN di Lingkungan Pemerintah Provinsi Jawa Tengah',
  'description': 'Pemetaan Pengadaan CASN di Lingkungan Pemerintah Provinsi Jawa Tengah Ditinjau dari Jumlah ASN Pensiun, Usulan Kebutuhan, Usulan yang disetujui, dan Jumlah ASN yang Lulus Seleksi',
  'format': [
    'XLSX'
  ],
  'size': '791 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 889,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'a77-pns-yang-melaksanakan-tugas-belajar-ijin-belajar',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'PNS yang melaksanakan Tugas Belajar/Ijin Belajar',
  'description': 'Pemetaan PNS di Lingkungan Provinsi Jawa Tengah yang Melaksanakan Tugas Belajar/Ijin Belajar Berdasarkan Tingkat Pendidikan',
  'format': [
    'XLSX'
  ],
  'size': '4991 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 869,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'lampiran-penetapan-kebutuhan-formasi-pppk-2023',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Lampiran Penetapan Kebutuhan Formasi PPPK 2023',
  'description': 'Lampiran Penetapan Kebutuhan Formasi PPPK 2023',
  'format': [
    'PDF'
  ],
  'size': '1805 KB',
  'lastUpdated': '2023-10-05',
  'downloads': 399,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'surat-keputusan-dalam-pengangkatan-jabatan-administrator',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Surat Keputusan dalam Pengangkatan Jabatan Administrator',
  'description': 'Berikut adalah file Surat Keputusan dalam Pengangkatan Jabatan Administrator di Lingkungan Pemerintah Provinsi Jawa Tengah',
  'format': [
    'PDF'
  ],
  'size': '1719 KB',
  'lastUpdated': '2023-09-26',
  'downloads': 370,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'surat-keputusan-dalam-pengangkatan-jabatan-pengawas',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Surat Keputusan dalam Pengangkatan Jabatan Pengawas',
  'description': 'Berikut adalah file Surat Keputusan dalam Pengangkatan Jabatan Pengawas di Lingkungan Pemerintah Provinsi Jawa Tengah',
  'format': [
    'PDF'
  ],
  'size': '369 KB',
  'lastUpdated': '2023-09-26',
  'downloads': 17,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'surat-keputusan-pengakatan_jpt',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Surat Keputusan dalam Pengangkatan Jabatan Pimpinan Tinggi Pratama',
  'description': 'Berikut adalah file Surat Keputusan dalam Pengangkatan Jabatan Pimpinan Tinggi Pratama di Lingkungan Pemerintah Provinsi Jawa Tengah',
  'format': [
    'PDF'
  ],
  'size': '2867 KB',
  'lastUpdated': '2023-09-26',
  'downloads': 387,
  'license': '',
  'tags': [
    'bkd',
    'jpt'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'profil-pns-jabatan-struktural-berdasarkan-jenis-kelamin',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Statistik Data Profil PNS Jabatan Struktural Berdasarkan Jenis Kelamin',
  'description': 'Profil PNS Jabatan Struktural Berdasarkan Jenis Kelamin',
  'format': [
    'XLS',
    'XLSX'
  ],
  'size': '4276 KB',
  'lastUpdated': '2023-09-18',
  'downloads': 860,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'pejabat-berdasarkan-eselon-dan-pendidikan-per-juli-2023',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Statistik Data Pejabat Berdasarkan Eselon dan Pendidikan per Juli 2023',
  'description': 'File yang berisi Pejabat Berdasarkan Eselon dan Pendidikan di Lingkungan Pemprov Jateng per Juli 2023.',
  'format': [
    'XLSX'
  ],
  'size': '3004 KB',
  'lastUpdated': '2023-09-18',
  'downloads': 992,
  'license': '',
  'tags': [
    'data',
    'eselon',
    'juli'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pejabat-berdasarkan-eselon-dan-pendidikan-agustus-2023',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Statistik Data Pejabat Berdasarkan Eselon dan Pendidikan Agustus 2023',
  'description': 'File yang berisi Pejabat Berdasarkan Eselon dan Pendidikan di Lingkungan Pemprov Jateng per Agustus 2023.',
  'format': [
    'XLSX'
  ],
  'size': '2243 KB',
  'lastUpdated': '2023-09-18',
  'downloads': 434,
  'license': '',
  'tags': [
    'data',
    'eselon',
    'juli'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pejabat-berdasarkan-eselon-dan-pendidikan-september-2023',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Statistik Data Pejabat Berdasarkan Eselon dan Pendidikan September 2023',
  'description': 'File yang berisi Pejabat Berdasarkan Eselon dan Pendidikan di Lingkungan Pemprov Jateng per September 2023.',
  'format': [
    'XLSX'
  ],
  'size': '3830 KB',
  'lastUpdated': '2023-09-18',
  'downloads': 483,
  'license': '',
  'tags': [
    'data',
    'eselon',
    'september'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-profil-asn-pemerintah-provinsi-jawa-tengah-per-juli-september-2023',
  'organizationId': 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
  'title': 'Statistik Data ASN Pemerintah Provinsi Jawa Tengah per Juli - September 2023',
  'description': 'File yang berisi Data Profil ASN Pemerintah Provinsi Jawa Tengah per Juli - September 2023',
  'format': [
    'PDF'
  ],
  'size': '310 KB',
  'lastUpdated': '2023-09-18',
  'downloads': 765,
  'license': '',
  'tags': [
    'asn',
    'data',
    'pemerintah provinsi jawa tengah',
    'profil'
  ],
  'fields': [],
  'preview': []
},

{
  'id': 'pelayanan-kesehatan-orang-dengan-gangguan-jiwa-odgj-berat-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pelayanan Kesehatan Orang Dengan Gangguan Jiwa (ODGJ) Berat Tahun 2024',
  'description': 'Dataset Ini Berisikan Pelayanan Kesehatan Orang Dengan Gangguan Jiwa (ODGJ) Berat Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1814 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 800,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kepala-keluarga-dengan-akses-terhadap-fasilitas-sanitasi-yang-aman-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kepala Keluarga Dengan Akses Terhadap Fasilitas Sanitasi Yang Aman Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Kepala Keluarga Dengan Akses Terhadap Fasilitas Sanitasi Yang Aman Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '2005 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 500,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-tempat-pengelolaan-oangan-tpp-yang-memenuhi-syarat-kesehatan-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Persentase Tempat Pengelolaan Oangan (TPP) Yang Memenuhi Syarat Kesehatan Tahun 2024',
  'description': 'Dataset Ini Berisikan Persentase Tempat Pengelolaan Oangan (TPP) Yang Memenuhi Syarat Kesehatan Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1634 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 314,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pelayanan-kesehatan-penderita-hipertensi-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pelayanan Kesehatan Penderita Hipertensi Tahun 2024',
  'description': 'Dataset Ini Berisikan Pelayanan Kesehatan Penderita Hipertensi Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3221 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 476,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kasus-demam-berdarah-dengue-dbd-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kasus Demam Berdarah Dengue (DBD) Tahun 2024',
  'description': 'Dataset Ini Berisikan Kasus Demam Berdarah Dengue (DBD) Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1310 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 789,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kasus-penyakit-yang-dapat-dicegah-dengan-imunisasi-pd3i-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kasus Penyakit Yang Dapat Dicegah Dengan Imunisasi (PD3I) Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Kasus Penyakit Yang Dapat Dicegah Dengan Imunisasi (PD3I) Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '971 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 134,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kasus-terdaftar-dan-angka-prevelensi-penyakit-kusta-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kasus Terdaftar Dan  Angka Prevelensi Penyakit Kusta Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Kasus Terdaftar Dan  Angka Prevelensi Penyakit Kusta Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '736 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 323,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-bayi-yang-lahir-dari-ibu-reaktif-hbsag-dan-mendapatkan-hbig-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Bayi Yang Lahir Dari Ibu Reaktif HBsAg Dan Mendapatkan HBIG Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Bayi Yang Lahir Dari Ibu Reaktif HBsAg Dan Mendapatkan HBIG Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '556 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 259,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-odhiv-baru-ditemukan-mendapatkan-pengobatan-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Persentase ODHIV Baru Ditemukan Mendapatkan Pengobatan Tahun 2024',
  'description': 'Dataset Ini Berisikan Persentase ODHIV Baru Ditemukan Mendapatkan Pengobatan Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1432 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 498,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'angka-kesembuhan-dan-pengobatan-lengkap-serta-keberhasilan-ppengobatan-tbc-sensitif-obat-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Angka Kesembuhan Dan Pengobatan Lengkap Serta Keberhasilan Pengobatan TBC Sensitif Obat Tahun 2024',
  'description': 'Dataset Ini Berisikan Angka Kesembuhan Dan Pengobatan Lengkap Serta Keberhasilan Pengobatan TBC Sensitif Obat Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3261 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 67,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-pelayanan-kesehatan-usia-lanjut-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Pelayanan Kesehatan Usia Lanjut Tahun 2024',
  'description': 'Dataset Ini Berisikan Cakupan Pelayanan Kesehatan Usia Lanjut Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '943 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 389,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pelayanan-kesehatan-gigi-dan-mulut-pada-anak-sd-dan-setingkat-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pelayanan Kesehatan Gigi Dan Mulut Pada Anak SD Dan Setingkat Tahun 2024',
  'description': 'Dataset Ini Berisikan Pelayanan Kesehatan Gigi Dan Mulut Pada Anak SD Dan Setingkat Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1320 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 253,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'status-gizi-berdasarkan-indeks-bbu-tbu-dan-bb-tb-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Status Gizi Berdasarkan Indeks BBU, TBU, Dan BB TB Tahun 2024',
  'description': 'Dataset Ini Berisikan Status Gizi Berdasarkan Indeks BBU, TBU, Dan BB TB Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '4425 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 654,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-pemberian-vitamin-a-pada-bayi-dan-anak-balita-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Pemberian Vitamin A Pada Bayi Dan Anak Balita Tahun 2024',
  'description': 'Dataset Ini Berisikan Cakupan Pemberian Vitamin A Pada Bayi Dan Anak Balita Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '547 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 567,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-imunisasi-hepatitis-b0-0-7-hari-dan-bcg-pada-bayi-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Imunisasi Hepatitis B0 (0-7 Hari) Dan BCG Pada Bayi Tahun 2024',
  'description': 'Dataset Ini Berisikan Cakupan Imunisasi Hepatitis B0 (0-7 Hari) Dan BCG Pada Bayi Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '2814 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 811,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'bayi-baru-lahir-mendapat-imd-dan-pemberian-asi-eksklusif-pada-bayi-dibawah-6-bulan-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Bayi Baru Lahir Mendapat IMD Dan Pemberian ASI Eksklusif Pada Bayi Dibawah 6 Bulan Tahun 2024',
  'description': 'Dataset Ini Berisikan Bayi Baru Lahir Mendapat IMD Dan Pemberian ASI Eksklusif Pada Bayi Dibawah 6 Bulan Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3861 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 385,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kematian-anak-balita-menurut-penyebab-utama-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kematian Anak Balita Menurut Penyebab Utama Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Kematian Anak Balita Menurut Penyebab Utama Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '437 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 108,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-dan-persentase-komplikasi-neonatal-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Dan Persentase Komplikasi Neonatal Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Dan Persentase Komplikasi Neonatal Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3844 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 809,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pasangan-usia-subur-dengan-status-4-terlalu-dan-alki-yang-menjadi-peserta-kb-aktif-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pasangan Usia Subur Dengan Status 4 Terlalu Dan Alki Yang Menjadi Peserta KB Aktif Tahun 2024',
  'description': 'Dataset Ini Berisikan Pasangan Usia Subur Dengan Status 4 Terlalu Dan Alki Yang Menjadi Peserta KB Aktif Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1743 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 661,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'sanitasi-total-berbasis-masyarakat-dan-rumah-sehat-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Sanitasi Total Berbasis Masyarakat Dan Rumah Sehat Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Sanitasi Total Berbasis Masyarakat Dan Rumah Sehat Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '4502 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 390,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-cakupan-imunisasi-td-pada-wanita-subur-hamil-dan-tidak-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Persentase Cakupan Imunisasi Td Pada Wanita Subur (Hamil Dan Tidak) Tahun 2024',
  'description': 'Dataset Ini Berisikan Persentase Cakupan Imunisasi Td Pada Wanita Subur (Hamil Dan Tidak) Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '2702 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 877,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pelayanan-kesehatan-penderita-diabetes-melitus-dm-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pelayanan Kesehatan Penderita Diabetes Melitus (DM) Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Pelayanan Kesehatan Penderita Diabetes Melitus (DM) Provinsi Jawa Tengah Tahun 2024  ',
  'format': [
    'CSV'
  ],
  'size': '4068 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 455,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-pelayanan-kesehatan-pada-ibu-hamil-dan-nifas-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Pelayanan Kesehatan Pada Ibu Hamil Dan Nifas Tahun 2024',
  'description': 'Dataset Ini Berisikan Cakupan Pelayanan Kesehatan Pada Ibu Hamil Dan Nifas Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '4180 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 195,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kesakitan-dan-kematian-akibat-malaria-menurut-jenis-kelamin-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kesakitan Dan Kematian Akibat Malaria Menurut Jenis Kelamin Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Kesakitan Dan Kematian Akibat Malaria Menurut Jenis Kelamin Provinsi Jawa Tengah Tahun 2024  ',
  'format': [
    'CSV'
  ],
  'size': '1010 KB',
  'lastUpdated': '2025-07-15',
  'downloads': 526,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kejadian-luar-biasa-klb-di-desa-kelurahan-yang-ditangani-24-jam-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kejadian Luar Biasa (KLB) Di Desa/Kelurahan Yang Ditangani < 24 Jam Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Kejadian Luar Biasa (KLB) Di Desa/Kelurahan Yang Ditangani < 24 Jam Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '2627 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 170,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kelahiran-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kelahiran Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Kelahiran Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '2729 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 150,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'penderita-kusta-selesai-berobat-release-from-treatment-rft-provinsi-jawa-tenngah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Penderita Kusta Selesai Berobat (Release From Treatment/RFT) Provinsi Jawa Tenngah Tahun 2024',
  'description': 'Datasets ini berisikan Penderita Kusta Selesai Berobat (Release From Treatment/RFT) Provinsi Jawa Tenngah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '215 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 314,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-tenaga-penunjang-kesehatan-di-fasilitas-kesehatan-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Tenaga Penunjang Kesehatan Di Fasilitas Kesehatan Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Tenaga Penunjang Kesehatan Di Fasilitas Kesehatan Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '4635 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 240,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-deteksi-dini-kanker-leher-rahim-dgn-metode-iva-kanker-payudara-dgn-sadanis-thn-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Deteksi Dini Kanker Leher Rahim dgn Metode Iva, Kanker Payudara dgn Sadanis Thn 2024',
  'description': 'Dataset ini berisikan Cakupan Deteksi Dini Kanker Leher Rahim dgn Metode Iva, Kanker Payudara dgn Sadanis Thn 2024 ',
  'format': [
    'CSV'
  ],
  'size': '3907 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 820,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kasus-baru-kusta-menurut-tipe-jenis-usia-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kasus Baru Kusta Menurut Tipe/Jenis, Usia Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Kasus Baru Kusta Menurut Tipe/Jenis, Usia Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '2713 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 241,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-tenaga-kesehatan-masyarakat-lingkungan-dan-gizi-di-fasilitas-kesehatan-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Tenaga Kesehatan Masyarakat, Lingkungan, Dan Gizi Di Fasilitas Kesehatan Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Tenaga Kesehatan Masyarakat, Lingkungan, Dan Gizi Di Fasilitas Kesehatan Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '985 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 103,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-tempat-dan-fasilitas-umum-tfu-yang-dilakukan-pengawasan-sesuai-standar-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Persentase Tempat Dan Fasilitas Umum(Tfu) Yang Dilakukan Pengawasan Sesuai Standar Tahun 2024',
  'description': 'Dataset ini berisikan Persentase Tempat Dan Fasilitas Umum(Tfu) Yang Dilakukan Pengawasan Sesuai Standar Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '4010 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 856,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kasus-diare-yang-dilayani-menurut-jenis-kelamin-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kasus Diare Yang Dilayani Menurut Jenis Kelamin Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Kasus Diare Yang Dilayani Menurut Jenis Kelamin Provinsi Jawa Tengah Tahun 2024  ',
  'format': [
    'CSV'
  ],
  'size': '508 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 741,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-sarana-air-minum-yg-diawasi-diperiksa-kualitas-air-minumnya-sesuai-strandar-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Persentase Sarana Air Minum Yg Diawasi/Diperiksa Kualitas Air Minumnya Sesuai Strandar Tahun 2024',
  'description': 'Dataset ini berisikan Persentase Sarana Air Minum Yg Diawasi/Diperiksa Kualitas Air Minumnya Sesuai Strandar Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '4227 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 651,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'penemuan-kasus-pneumonia-balita-menurut-jenis-kelamin-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Penemuan Kasus Pneumonia Balita Menurut Jenis Kelamin Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Penemuan Kasus Pneumonia Balita Menurut Jenis Kelamin Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '3174 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 627,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pelayanan-kesehatan-usia-produktif-menurut-jenis-kelamin-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pelayanan Kesehatan Usia Produktif  Menurut Jenis Kelamin Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Pelayanan Kesehatan Usia Produktif  Menurut Jenis Kelamin Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '4982 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 683,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-pelayanan-kesehatan-sd-mi-smp-mts-sma-ma-serta-usia-pendidikan-dasar-provinsi-jateng-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Pelayanan Kesehatan SD/MI, SMP/MTS, SMA/MA Serta Usia Pendidikan Dasar Provinsi Jateng 2024',
  'description': 'Datasets ini berisikan Cakupan Pelayanan Kesehatan SD/MI, SMP/MTS, SMA/MA Serta Usia Pendidikan Dasar Provinsi Jateng 2024  ',
  'format': [
    'CSV'
  ],
  'size': '3452 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 583,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-pelayanan-kesehatan-balita-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Pelayanan Kesehatan Balita Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Cakupan Pelayanan Kesehatan Balita Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '1535 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 291,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'penderita-kronis-filariasis-menurut-jenis-kelamin-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Penderita Kronis Filariasis Menurut Jenis Kelamin Tahun 2024',
  'description': 'Dataset ini berisikan Penderita Kronis Filariasis Menurut Jenis Kelamin Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '2446 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 53,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'imunisasi-dpt-hb-hib-3-polio-4-campak-rubela-dan-imunisasi-dasar-lengkap-pada-bayi-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Imunisasi DPT-HB-Hib 3, Polio 4, Campak Rubela, Dan Imunisasi Dasar Lengkap Pada Bayi Tahun 2024',
  'description': 'Datasets ini berisikan Cakupan Imunisasi DPT-HB-Hib 3, Polio 4, Campak Rubela, Dan Imunisasi Dasar Lengkap Pada Bayi Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '4569 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 67,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-penderita-dan-kematian-pada-klb-menurut-jenis-kejadian-luar-biasa-klb-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Penderita Dan Kematian Pada Klb Menurut Jenis Kejadian Luar Biasa (KLB) Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Penderita Dan Kematian Pada Klb Menurut Jenis Kejadian Luar Biasa (KLB) Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '4932 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 49,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-pelayanan-kesehatan-bayi-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Pelayanan Kesehatan Bayi Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Cakupan Pelayanan Kesehatan Bayi Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '4154 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 245,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kasus-afp-non-polio-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kasus Afp (Non Polio) Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Kasus Afp (Non Polio) Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '2796 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 791,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'bayi-berat-badan-lahir-rendah-bblr-dan-prematur-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Bayi Berat Badan Lahir Rendah (BBLR) Dan Prematur Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Bayi Berat Badan Lahir Rendah (BBLR) Dan Prematur Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '2114 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 958,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kasus-baru-kusta-cacat-tingkat-0-cacat-tingkat-2-penderita-kusta-anak-15-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kasus Baru Kusta Cacat Tingkat 0, Cacat Tingkat 2, Penderita Kusta Anak<15 Tahun 2024',
  'description': 'Dataset ini berisikan Kasus Baru Kusta Cacat Tingkat 0, Cacat Tingkat 2, Penderita Kusta Anak<15 Tahun 2024\r\n\r\n',
  'format': [
    'CSV'
  ],
  'size': '4908 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 625,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kematian-neonatal-post-neonatal-bayi-dan-balita-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kematian Neonatal, Post Neonatal, Bayi, Dan Balita Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Jumlah Kematian Neonatal, Post Neonatal, Bayi, Dan Balita Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '2812 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 37,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'deteksi-dini-hepatitis-b-pada-ibu-hamil-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Deteksi Dini Hepatitis B Pada Ibu Hamil Tahun 2024',
  'description': 'Dataset ini berisikan Deteksi Dini Hepatitis B Pada Ibu Hamil Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '179 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 211,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-dan-proporsi-peserta-kb-pasca-persalinan-menurut-jenis-kontrasepsi-provinsi-jateng-th-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Dan Proporsi Peserta Kb Pasca Persalinan Menurut Jenis Kontrasepsi Provinsi Jateng Th 2024',
  'description': 'Datasets ini berisikan Cakupan Dan Proporsi Peserta Kb Pasca Persalinan Menurut Jenis Kontrasepsi Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '4369 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 505,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kasus-hiv-menurut-jenis-kelamin-dan-kelompok-umur-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kasus Hiv Menurut Jenis Kelamin Dan Kelompok Umur Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Kasus Hiv Menurut Jenis Kelamin Dan Kelompok Umur Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '67 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 630,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-ibu-hamil-yang-mendapatkan-dan-mengonsumsi-tablet-tambah-darah-ttd-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Ibu Hamil Yang Mendapatkan Dan Mengonsumsi Tablet Tambah Darah (TTD) Tahun 2024',
  'description': 'Datasets ini berisikan Jumlah Ibu Hamil Yang Mendapatkan Dan Mengonsumsi Tablet Tambah Darah (TTD) Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1982 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 351,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-terduga-tb-kasus-tb-kasus-tb-anak-menurut-jenis-kelamin-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Terduga TB, Kasus TB, Kasus TB Anak Menurut Jenis Kelamin Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Terduga TB, Kasus TB, Kasus TB Anak Menurut Jenis Kelamin Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '1365 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 146,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-imunisasi-td-pada-ibu-hamil-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Imunisasi Td Pada Ibu Hamil Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Cakupan Imunisasi Td Pada Ibu Hamil Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '3688 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 19,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'calon-pengantin-catin-mendapatkan-layanan-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Calon Pengantin (Catin) Mendapatkan Layanan Tahun 2024',
  'description': 'Dataset ini berisikan Calon Pengantin (Catin) Mendapatkan Layanan Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1630 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 186,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kematian-ibu-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kematian Ibu Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Jumlah Kematian Ibu Provinsi Jawa Tengah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '567 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 891,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-jaminan-kesehatan-penduduk-menurut-jenis-kepesertaan-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Jaminan Kesehatan  Penduduk Menurut Jenis Kepesertaan Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Cakupan Jaminan Kesehatan  Penduduk Menurut Jenis Kepesertaan Provinsi Jawa Tengah Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '2077 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 330,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pelayanan-kesehatan-gigi-dan-mulut-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pelayanan Kesehatan Gigi Dan Mulut Tahun 2024',
  'description': 'Dataset ini berisikan Pelayanan Kesehatan Gigi Dan Mulut Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '4970 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 808,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-tenaga-medis-di-fasilitas-kesehatan-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Tenaga Medis Di Fasilitas Kesehatan Provinsi Jawa Tengah Tahun 2024',
  'description': 'Datasets ini berisikan Jumlah Tenaga Medis Di Fasilitas Kesehatan Provinsi Jawa Tengah Tahun 2024  ',
  'format': [
    'CSV'
  ],
  'size': '4874 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 792,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-balita-ditimbang-menurut-kabupaten-kota-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Balita Ditimbang Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Balita Ditimbang Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3696 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 428,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-ketersediaan-obat-esensial-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Persentase Ketersediaan Obat Esensial Tahun 2024',
  'description': 'datasets ini berisikan Persentase Ketersediaan Obat Esensial Tahun 2024  ',
  'format': [
    'CSV'
  ],
  'size': '284 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 784,
  'license': '',
  'tags': [
    'Kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'angka-kematian-pasien-rumah-sakit-provinsi-jateng-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'ANGKA KEMATIAN PASIEN RUMAH SAKIT PROVINSI JATENG TAHUN 2024',
  'description': 'Datasets ini berisikan Angka Kematian Pasien Rumah Sakit Provinsi Jateng Tahun 2024 ',
  'format': [
    'CSV'
  ],
  'size': '3369 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 530,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-posyandu-dan-posbindu-ptm-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Posyandu Dan Posbindu PTM Tahun 2024',
  'description': 'Dataset Ini Berisikan Jumlah Posyandu Dan Posbindu PTM Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3716 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 80,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'presentase-puskesmas-dengan-ketersediaan-obat-esensial-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Presentase Puskesmas Dengan Ketersediaan Obat Esensial 2024',
  'description': 'Dataset Ini Berisikan Presentase Puskesmas Dengan Ketersediaan Obat Esensial 2024',
  'format': [
    'CSV'
  ],
  'size': '3471 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 645,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'presentase-rs-dengan-kemampuan-pelayanan-gawat-darurat-level-1-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Presentase RS Dengan Kemampuan Pelayanan Gawat Darurat Level 1 2024',
  'description': 'Dataset Ini Berisikan Presentase RS Dengan Kemampuan Pelayanan Gawat Darurat Level 1 2024',
  'format': [
    'CSV'
  ],
  'size': '3673 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 138,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-tenaga-keperawatan-dan-kebidanan-di-fasilitas-kesehatan-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Tenaga Keperawatan Dan Kebidanan Di Fasilitas Kesehatan Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Tenaga Keperawatan Dan Kebidanan Di Fasilitas Kesehatan Provinsi Jawa Tengah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '4482 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 648,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kematian-ibu-menurut-penyebab-dan-kabupaten-kota-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kematian Ibu Menurut Penyebab Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Kematian Ibu Menurut Penyebab Dan Kabupaten/Kota Provinsi Jawa Tengah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3349 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 811,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kematian-neonatal-dan-post-neonatal-menurut-penyebab-utama-provinsi-jawa-tengah-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kematian Neonatal Dan Post Neonatal Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Kematian Neonatal Dan Post Neonatal Menurut Penyebab Utama Provinsi Jawa Tengah 2024',
  'format': [
    'CSV'
  ],
  'size': '2677 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 430,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-desa-kelurahan-universal-child-immunization-uci-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Desa/Kelurahan Universal Child Immunization (UCI) Tahun 2024',
  'description': 'Dataset ini berisikan Cakupan Desa/Kelurahan Universal Child Immunization (Uci) Provinsi Jawa Tengah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1261 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 586,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-imunisasi-dpt-hb-hib-4-campak-rubela-2-pada-baduta-menurut-jenis-kelamin-th-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Imunisasi DPT-HB-Hib 4 & Campak Rubela 2 Pada Baduta Tahun 2024',
  'description': 'Dataset ini berisikan Cakupan imunisasi DPT-HB-Hib 4 & Campak Rubela 2 Pada Baduta menurut jenis kelamin Th 2024',
  'format': [
    'CSV'
  ],
  'size': '3215 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 194,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'cakupan-kunjungan-neonatal-menurut-kabupaten-kota-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Cakupan Kunjungan Neonatal Tahun 2024',
  'description': 'Dataset ini berisikan Cakupan Kunjungan Neonatal Menurut Kabupaten/Kota Provinsi Jawa Tengah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1148 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 547,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kematian-neonatal-dan-post-neonatal-menurut-penyebab-utama-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kematian Neonatal Dan Post Neonatal Menurut Penyebab Utama Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Kematian Neonatal Dan Post Neonatal Menurut Penyebab Utama Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3365 KB',
  'lastUpdated': '2025-07-11',
  'downloads': 449,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-ketersediaan-vaksin-imunisasi-dasar-lengkap-idl-kab-kota-prov-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Persentase Ketersediaan Vaksin Imunisasi Dasar Lengkap (IDL) Tahun 2024',
  'description': 'Dataset ini berisikan Persentase Ketersediaan Vaksin Imunisasi Dasar Lengkap (IDL) Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1734 KB',
  'lastUpdated': '2025-07-11',
  'downloads': 711,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'peserta-kb-aktif-menurut-metode-efek-samping-komplikasi-kegagalan-drop-out-jateng-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Peserta KB Aktif menurut Metode, Efek Samping, Komplikasi/Kegagalan, Drop Out Tahun 2024',
  'description': 'Dataset ini berisikan Peserta KB aktif menurut metode, efek samping, komplikasi/kegagalan, drop out Jateng 2024',
  'format': [
    'CSV'
  ],
  'size': '4779 KB',
  'lastUpdated': '2025-07-11',
  'downloads': 310,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-dan-persentase-komplikasi-kebidanan-kabupaten-kota-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Dan Persentase Komplikasi Kebidanan Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Dan Persentase Komplikasi Kebidanan Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1587 KB',
  'lastUpdated': '2025-07-11',
  'downloads': 321,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-cakupan-imunisasi-td-pada-wanita-usia-subur-yg-tidak-hamil-kab-kota-prov-jateng-thn-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Persentase Cakupan Imunisasi Td Pada Wanita Usia Subur Yg Tidak Hamil Tahun 2024',
  'description': 'Dataset ini berisikan Persentase Cakupan Imunisasi Td Pada Wanita Usia Subur Yg Tidak Hamil Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '1672 KB',
  'lastUpdated': '2025-07-11',
  'downloads': 396,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'alokasi-anggaran-kesehatan-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Alokasi Anggaran Kesehatan Provinsi Jawa Tengah Tahun 2024',
  'description': 'Dataset ini berisikan Alokasi Anggaran Kesehatan Provinsi Jawa Tengah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '2047 KB',
  'lastUpdated': '2025-07-11',
  'downloads': 885,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-tenaga-kefarmasian-di-fasilitas-kesehatan-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Tenaga Kefarmasian Di Fasilitas Kesehatan Provinsi Jawa Tengah Tahun 2024',
  'description': 'Dataset ini berisikan Jumlah Tenaga Kefarmasian Di Fasilitas Kesehatan Provinsi Jawa Tengah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '3250 KB',
  'lastUpdated': '2025-07-11',
  'downloads': 642,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'indikator-kinerja-pelayanan-di-rumah-sakit-provinsi-jawa-tengah-tahun-2024',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Indikator Kinerja Pelayanan Di Rumah Sakit Provinsi Jawa Tengah Tahun 2024',
  'description': 'Dataset ini berisikan Indikator Kinerja Pelayanan Di Rumah Sakit Provinsi Jawa Tengah Tahun 2024',
  'format': [
    'CSV'
  ],
  'size': '2436 KB',
  'lastUpdated': '2025-07-11',
  'downloads': 425,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pemeriksaan-spesimen-dan-alat-di-balabkes-dan-pak-prov-jateng-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pemeriksaan Spesimen Dan Alat Di Balabkes Dan PAK Prov. Jateng S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Pemeriksaan Spesimen Dan Alat Di Balabkes Dan PAK Prov. Jateng S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '748 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 942,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kunjungan-pelanggan-di-balabkes-dan-pak-prov-jateng-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kunjungan Pelanggan Di Balabkes Dan PAK Prov. Jateng S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Kunjungan Pelanggan Di Balabkes Dan PAK Prov. Jateng S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '2342 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 39,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': '5-besar-penyakit-per-klinik-di-bkim-prov-jateng-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': '5 Besar Penyakit Per Klinik Di BKIM Prov. Jateng S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan 5 Besar Penyakit Per Klinik Di BKIM Prov. Jateng S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '2259 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 960,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kegiatan-ukm-di-balkesmas-wil-ambarawa-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kegiatan UKM Di Balkesmas Wil. Ambarawa S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Kegiatan UKM Di Balkesmas Wil. Ambarawa S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '4562 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 765,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': '10-besar-penyakit-berdasarkan-kunjungan-pasien-di-balkesmas-wil-ambarawa-s-d-thn-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': '10 Besar Penyakit Berdasarkan Kunjungan Pasien Di Balkesmas Wil. Ambarawa S.D Thn 2025 Triwulan 1',
  'description': 'Dataset ini berisikan 10 Besar Penyakit Berdasarkan Kunjungan Pasien Di Balkesmas Wil. Ambarawa S.D Thn 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '345 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 830,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'penemuan-tb-dengan-penyakit-penyerta-di-balkesmas-wil-magelang-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Penemuan TB Dengan Penyakit Penyerta Di Balkesmas Wil. Magelang S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Penemuan TB Dengan Penyakit Penyerta Di Balkesmas Wil. Magelang S.D Tahun 2025 Triwulan 1\r\n\r\n',
  'format': [
    'CSV'
  ],
  'size': '1659 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 166,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kasus-ptm-di-wil-kerja-balkesmas-wil-magelang-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kasus PTM Di Wil.Kerja Balkesmas Wil. Magelang S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Jumlah Kasus PTM Di Wil.Kerja Balkesmas Wil. Magelang S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '4078 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 786,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'capaian-kinerja-di-balkesmas-wil-magelang-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Capaian Kinerja Di Balkesmas Wil. Magelang S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Capaian Kinerja Di Balkesmas Wil. Magelang S.D Tahun 2025 Triwulan 1\r\n\r\n',
  'format': [
    'CSV'
  ],
  'size': '374 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 700,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'evaluasi-pengobatan-tbc-di-balkesmas-wil-klaten-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Evaluasi Pengobatan TBC Di Balkesmas Wil. Klaten S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Evaluasi Pengobatan TBC Di Balkesmas Wil. Klaten S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '4137 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 244,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'penemuan-tbc-di-balkesmas-wil-klaten-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Penemuan TBC Di Balkesmas Wil. Klaten S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Penemuan TBC Di Balkesmas Wil. Klaten S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '3060 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 23,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kegiatan-ukm-di-balkesmas-wil-pati-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kegiatan UKM Di Balkesmas Wil. Pati S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Kegiatan UKM Di Balkesmas Wil. Pati S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '4872 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 885,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': '10-besar-penyakit-berdasarkan-kunjungan-pasien-di-balkesmas-wil-pati-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': '10 Besar Penyakit Berdasarkan Kunjungan Pasien  Di Balkesmas Wil. Pati S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan 10 Besar Penyakit Berdasarkan Kunjungan Pasien  Di Balkesmas Wil. Pati S.D Tahun 2025 Triwulan 1 ',
  'format': [
    'CSV'
  ],
  'size': '1631 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 918,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'penemuan-tbc-dengan-penyakit-penyerta-di-balkesmas-wil-semarang-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Penemuan TBC Dengan Penyakit Penyerta Di Balkesmas Wil. Semarang S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Penemuan TBC Dengan Penyakit Penyerta Di Balkesmas Wil. Semarang S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '4036 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 648,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-kasus-ptm-di-wil-kerja-balkesmas-wil-semarang-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Kasus PTM Di Wil.Kerja Balkesmas Wil. Semarang S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Jumlah Kasus PTM Di Wil.Kerja Balkesmas Wil. Semarang S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '2319 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 419,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'capaian-kinerja-di-balkesmas-wil-semarang-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Capaian Kinerja Di Balkesmas Wil. Semarang S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Capaian Kinerja Di Balkesmas Wil. Semarang S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '702 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 70,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pagu-alokasi-dak-kesehatan-tahun-2025-triwulan-1-provinsi-jateng',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Pagu Alokasi Dak Kesehatan Tahun 2025 Triwulan 1 Provinsi Jateng',
  'description': 'Dataset ini berisikan Pagu Alokasi Dak Kesehatan Tahun 2025 Triwulan 1 Provinsi Jateng ',
  'format': [
    'CSV'
  ],
  'size': '1661 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 716,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-tenaga-medis-tenaga-kesehatan-yang-kurang-di-puskesmas-prov-jateng-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Jumlah Tenaga Medis & Tenaga Kesehatan Yang Kurang Di Puskesmas Prov Jateng Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Jumlah Tenaga Medis & Tenaga Kesehatan Yang Kurang Di Puskesmas Prov Jateng Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '2376 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 489,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'capaian-pemenuhan-tenaga-medis-tenaga-kesehatan-di-fasilitas-kesehatan-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Capaian Pemenuhan Tenaga Medis & Tenaga Kesehatan Di Fasilitas Kesehatan S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Capaian Pemenuhan Tenaga Medis & Tenaga Kesehatan Di Fasilitas Kesehatan S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '3545 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 62,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rasio-dokter-spesialis-per-1000-penduduk-s-d-tahun-2025-triwulan-1-di-prov-jateng',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Rasio Dokter Spesialis Per 1000 Penduduk S.D Tahun 2025 Triwulan 1 Di Prov Jateng',
  'description': 'Dataset ini berisikan Rasio Dokter Spesialis Per 1000 Penduduk S.D Tahun 2025 Triwulan 1 Di Prov Jateng ',
  'format': [
    'CSV'
  ],
  'size': '762 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 703,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'sarana-penyalur-farmasi-perbekalan-kesehatan-s-d-tahun-2025-triwulan-1-di-provinsi-jawa-tengah',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Sarana Penyalur, Farmasi & Perbekalan Kesehatan S.D Tahun 2025 Triwulan 1 Di Provinsi Jawa Tengah',
  'description': 'Dataset ini berisikan Sarana Penyalur, Farmasi & Perbekalan Kesehatan S.D Tahun 2025 Triwulan 1 Di Provinsi Jawa Tengah',
  'format': [
    'CSV'
  ],
  'size': '2575 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 302,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'fasilitasi-di-bapelkes-prov-jateng-s-d-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Fasilitasi Di Bapelkes Prov. Jateng S.D Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Fasilitasi Di Bapelkes Prov. Jateng S.D Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '712 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 957,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kab-kota-yang-merujuk-pemeriksaan-difteri-di-balabkes-pak-prov-jateng-s-d-th-2025-tw-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Kab/Kota Yang Merujuk Pemeriksaan Difteri Di Balabkes & Pak Prov. Jateng S.D Th 2025 Tw 1',
  'description': 'Dataset Ini Berisikan Kab/Kota Yang Merujuk Pemeriksaan Difteri Di Balabkes & Pak Prov. Jateng S.D Th 2025 Tw 1',
  'format': [
    'CSV'
  ],
  'size': '684 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 86,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'hasil-pelatihan-di-bapelkes-prov-jateng-tahun-2025-triwulan-1',
  'organizationId': 'dinas-kesehatan-provinsi-jawa-tengah',
  'title': 'Hasil Pelatihan Di Bapelkes Prov. Jateng Tahun 2025 Triwulan 1',
  'description': 'Dataset ini berisikan Hasil Pelatihan Di Bapelkes Prov. Jateng Tahun 2025 Triwulan 1',
  'format': [
    'CSV'
  ],
  'size': '1349 KB',
  'lastUpdated': '2025-05-21',
  'downloads': 688,
  'license': '',
  'tags': [
    'kesehatan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'besaran-emisi-gas-rumah-kaca-grk-untuk-setiap-sektor-provinsi-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Besaran Emisi Gas Rumah Kaca GRK Untuk Setiap Sektor Provinsi Jawa Tengah',
  'description': 'Besaran Emisi Gas Rumah Kaca (GRK) mengacu pada jumlah gas yang dilepaskan ke atmosfer yang berpotensi menyebabkan efek rumah kaca. Efek rumah kaca adalah fenomena yang terjadi ketika gas-gas di atmosfer menyerap dan memerangkap panas yang dipancarkan dari permukaan bumi, sehingga meningkatkan suhu global. Besaran emisi GRK biasanya dihitung dalam satuan ton karbon dioksida ekuivalen (CO2e), yang menyatukan dampak berbagai jenis gas rumah kaca berdasarkan potensi pemanasan globalnya',
  'format': [
    '.xlsx'
  ],
  'size': '538 KB',
  'lastUpdated': '2025-02-24',
  'downloads': 349,
  'license': 'Other (Public Domain)',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'perhutanan-sosial-di-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Perhutanan Sosial di Jawa Tengah',
  'description': 'Perhutanan sosial adalah suatu konsep yang melibatkan masyarakat lokal dalam pengelolaan dan pelestarian sumber daya hutan secara berkelanjutan. Tujuan utamanya adalah memberdayakan masyarakat dengan memberikan akses terhadap hutan untuk mengelola dan memanfaatkan hasil hutan, namun dengan tetap menjaga kelestarian lingkungan. Kegiatan dalam perhutanan sosial bisa mencakup agroforestri, penebangan yang ramah lingkungan, ekowisata, serta pemanfaatan hasil hutan bukan kayu. Melalui pendekatan ini, masyarakat diajak untuk bertanggung jawab terhadap hutan, sekaligus mendapatkan manfaat ekonomi yang dapat meningkatkan kesejahteraan mereka. Perhutanan sosial tidak hanya mendukung pelestarian keanekaragaman hayati, tetapi juga membantu mengurangi kemiskinan dan meningkatkan kondisi sosial ekonomi masyarakat desa.',
  'format': [
    '.xls'
  ],
  'size': '1222 KB',
  'lastUpdated': '2025-02-20',
  'downloads': 328,
  'license': 'Other (Public Domain)',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'sekolah-adiwiyata-provinsi-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Sekolah Adiwiyata Provinsi Jawa Tengah',
  'description': 'Sekolah Adiwiyata adalah sekolah yang telah berhasil melaksanakan gerakan peduli dan berbudaya lingkungan hidup di sekolah. Program Adiwiyata adalah salah satu program Kementerian Lingkungan Hidup untuk mempromosikan pengetahuan dan kesadaran di kalangan warga sekolah untuk melindungi lingkungan. \r\nSekolah Adiwiyata memiliki empat komponen: Kebijakan sekolah berwawasan lingkungan, Kurikulum sekolah berbasis lingkungan, Kegiatan sekolah berbasis partisipatif, Pengelolaan sarana dan prasarana pendukung ramah lingkungan. \r\nSalah satu ciri-ciri sekolah Adiwiyata adalah adanya taman dengan tanaman berwarna-warni untuk mempercantik dan memperindah lingkungan sekolah. Dengan keberadaan taman ini, murid dan guru diharapkan bisa lebih merasa nyaman selama proses belajar dan mengajar. \r\nTujuan didirikannya sekolah Adiwiyata adalah mewujudkan masyarakat sekolah yang peduli dan berbudaya lingkungan',
  'format': [
    '.xlsx'
  ],
  'size': '138 KB',
  'lastUpdated': '2024-09-10',
  'downloads': 398,
  'license': 'Other (Public Domain)',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup',
    'pemerintah provinsi jawa tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-gas-rumah-kaca-menurut-sektor-di-provinsi-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Data Gas Rumah Kaca Menurut Sektor di Provinsi Jawa Tengah',
  'description': 'Gas rumah kaca (GRK) adalah gas yang terdapat di atmosfer bumi dan memerangkap panas. GRK menyerap dan memancarkan radiasi dalam gelombang inframerah termal. GRK berfungsi seperti kaca yang meneruskan cahaya matahari tetapi menangkap energi panas dari dalamnya. GRK menjaga suhu bumi pada rata-rata 14˚C (57˚F). \r\n',
  'format': [
    '.xlsx'
  ],
  'size': '942 KB',
  'lastUpdated': '2024-09-10',
  'downloads': 792,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'sekolah-adiwiyata-di-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Sekolah Adiwiyata di Jawa Tengah',
  'description': 'Sekolah Adiwiyata di Jawa Tengah',
  'format': [
    '.xlsx'
  ],
  'size': '1697 KB',
  'lastUpdated': '2024-09-10',
  'downloads': 606,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'persentase-sampah-yang-tertangani-di-jawa-tengah-tahun-2013-2022',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Persentase Sampah Yang Tertangani di Jawa Tengah Tahun 2013-2022',
  'description': 'Persentase Sampah Yang Tertangani di Jawa Tengah Tahun 2013-2022',
  'format': [
    '.xlsx'
  ],
  'size': '1981 KB',
  'lastUpdated': '2024-09-10',
  'downloads': 938,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pembangunan-fisik-pengelolaan-sampah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Pembangunan Fisik Pengelolaan Sampah',
  'description': 'Pengelolaan sampah adalah kegiatan yang sistematis, menyeluruh, dan berkesinambungan yang meliputi pengurangan dan penanganan sampah (UU Nomor 18 Tahun 2008). Menurut Waste Management (2021), pengelolaan sampah merupakan aktivitas untuk mengelola sampah dari awal hingga pembuangan, meliputi pengumpulan, pengangkutan, perawatan, dan pembuangan, diiringi oleh monitoring dan regulasi manajemen sampah.',
  'format': [
    '.xlsx'
  ],
  'size': '1865 KB',
  'lastUpdated': '2024-09-10',
  'downloads': 34,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'dinas lingkungan hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'program-kampung-iklim',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Program Kampung Iklim',
  'description': 'Program Kampung Iklim',
  'format': [
    '.pptx'
  ],
  'size': '1848 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 139,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan  Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'potensi-penurunan-emisi-gas-rumah-kaca-di-provinsi',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Potensi Penurunan Emisi Gas Rumah Kaca di Provinsi',
  'description': 'Potensi Penurunan Emisi Gas Rumah Kaca di Provinsi',
  'format': [
    '.pptx'
  ],
  'size': '1099 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 358,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kerusakan-kawasan-hutan-di-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Kerusakan Kawasan Hutan di Jawa Tengah',
  'description': 'Kerusakan Kawasan Hutan di Jawa Tengah',
  'format': [
    '.xlsx'
  ],
  'size': '1174 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 64,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'perkembangan-perhutanan-sosial-di-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Perkembangan Perhutanan Sosial di Jawa Tengah',
  'description': 'Perkembangan Perhutanan Sosial di Jawa Tengah',
  'format': [
    '.xlsx'
  ],
  'size': '262 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 319,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rehabilitasi-mangrove-di-provinsi-jawa-tengah-tahun-2018-2022',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Rehabilitasi Mangrove di Provinsi Jawa Tengah Tahun 2018-2022',
  'description': 'Rehabilitasi Mangrove di Provinsi Jawa Tengah Tahun 2018-2022',
  'format': [
    '.xlsx'
  ],
  'size': '701 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 740,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-sipil-teknis-sumber-dana-apbn',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'REKAP SIPIL TEKNIS SUMBER DANA APBN',
  'description': 'REKAP SIPIL TEKNIS SUMBER DANA APBN',
  'format': [
    '.xlsx'
  ],
  'size': '1416 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 309,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-rehabilitasi-bangunan-sipil-teknis-tahun-2017-2022',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Rekap Rehabilitasi Bangunan Sipil Teknis Tahun 2017-2022',
  'description': 'Rekap Rehabilitasi Bangunan Sipil Teknis Tahun 2017-2022',
  'format': [
    '.xlsx'
  ],
  'size': '536 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 999,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-rehabilitasi-lahan-kritis-di-provinsi-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Rekap Rehabilitasi Lahan Kritis di Provinsi Jawa Tengah',
  'description': 'Rekap Rehabilitasi Lahan Kritis di Provinsi Jawa Tengah Tahun 2017-2023',
  'format': [
    '.xlsx'
  ],
  'size': '1902 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 309,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'rehabilitasi-hutan-dan-lahan-di-provinsi-jawa-tengah-tahun-2022',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Rehabilitasi Hutan dan Lahan di Provinsi Jawa Tengah Tahun 2022',
  'description': 'Rehabilitasi Hutan dan Lahan di Provinsi Jawa Tengah Tahun 2022',
  'format': [
    '.xlsx'
  ],
  'size': '466 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 24,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pembinaan-pengawasan-industri-hasil-hutan-pbphh',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Pembinaan Pengawasan Industri Hasil Hutan PBPHH',
  'description': 'Pembinaan Pengawasan Industri Hasil Hutan PBPHH',
  'format': [
    '.xlsx'
  ],
  'size': '389 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 152,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'perda-jateng-nomor-1-tahun-2024-tentang-rpplh',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Perda Jateng Nomor 1 Tahun 2024 tentang RPPLH',
  'description': 'Perda Jateng Nomor 1 Tahun 2024 tentang RPPLH',
  'format': [
    '.pdf'
  ],
  'size': '1225 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 975,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'matrik-isian-propemperda-rpplh-2022',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'MATRIK ISIAN PROPEMPERDA RPPLH 2022',
  'description': 'MATRIK ISIAN PROPEMPERDA RPPLH 2022',
  'format': [
    '.xlsx'
  ],
  'size': '1276 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 667,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'materi-presentasi-lapdal-rpplh-jateng',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'MATERI PRESENTASI  LAPDAL RPPLH JATENG',
  'description': 'MATERI PRESENTASI  LAPDAL RPPLH JATENG',
  'format': [
    '.pdf'
  ],
  'size': '1635 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 128,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kak-pemantapan-isu-strategis-rpplh-19-oktober-2021',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'KAK  PEMANTAPAN ISU STRATEGIS RPPLH 19 OKTOBER 2021',
  'description': 'KAK  PEMANTAPAN ISU STRATEGIS RPPLH 19 OKTOBER 2021',
  'format': [
    '.pdf'
  ],
  'size': '274 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 281,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'dokumen-rencana-pelindungan-dan-pengelolaan-lingkungan-hidup',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Dokumen Rencana Pelindungan dan Pengelolaan Lingkungan Hidup',
  'description': 'Dokumen Rencana Pelindungan dan Pengelolaan Lingkungan Hidup',
  'format': [
    '.pptx'
  ],
  'size': '1805 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 840,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'naskah-akademik-rpplh-jateng-2022-2052',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'NASKAH AKADEMIK RPPLH JATENG 2022-2052',
  'description': 'NASKAH AKADEMIK RPPLH JATENG 2022-2052',
  'format': [
    '.pdf'
  ],
  'size': '688 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 842,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pelayanan-perizinan-persetujuan-teknis-bidang-pemanfaatan-hasil-hutan',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Pelayanan Perizinan Persetujuan Teknis bidang Pemanfaatan Hasil Hutan',
  'description': 'Pelayanan Perizinan Persetujuan Teknis bidang Pemanfaatan Hasil Hutan',
  'format': [
    '.xlsx'
  ],
  'size': '502 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 581,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pendapatan-daerah-dari-perimbangan-keuangan-psdh-bagian-daerah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Pendapatan Daerah dari Perimbangan Keuangan PSDH Bagian Daerah',
  'description': 'Pendapatan Daerah dari Perimbangan Keuangan PSDH Bagian Daerah',
  'format': [
    '.xlsx'
  ],
  'size': '787 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 793,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pnbp-psdh-dari-hasil-hutan',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'PNBP PSDH dari Hasil Hutan',
  'description': 'PNBP PSDH dari Hasil Hutan',
  'format': [
    '.xlsx'
  ],
  'size': '808 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 790,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'penyusunan-dokumen-kehutanan',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Penyusunan Dokumen Kehutanan',
  'description': 'Penyusunan Dokumen Kehutanan',
  'format': [
    '.xlsx'
  ],
  'size': '1857 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 942,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'monitoring-dan-evaluasi-penggunaan-kawasan-hutan',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Monitoring dan Evaluasi  Penggunaan Kawasan Hutan',
  'description': 'Monitoring dan Evaluasi  Penggunaan Kawasan Hutan',
  'format': [
    '.xlsx'
  ],
  'size': '1236 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 568,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pelayanan-perijinan-persetujuan-teknis-penggunaan-kawasan-hutan',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Pelayanan Perijinan Persetujuan Teknis Penggunaan Kawasan Hutan',
  'description': 'Pelayanan Perijinan Persetujuan Teknis Penggunaan Kawasan Hutan',
  'format': [
    '.xlsx'
  ],
  'size': '238 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 411,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'fasilitasi-penandaan-batas-di-kawasan-hutan',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Fasilitasi Penandaan Batas  di Kawasan hutan',
  'description': 'Fasilitasi Penandaan Batas  di Kawasan hutan yang dikelola Kelompok Perhutanan Sosial',
  'format': [
    'XLSX',
    '.xlsx'
  ],
  'size': '1059 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 989,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Kehutanan'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'izin-pplh-diterbitkan-oleh-pemerintah-provinsi-jawa-tengah-tahun-2018-2023',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Pengawasan Usaha dan atau Kegiatan yang Izin Lingkungan Hidup, Izin PPLH diterbitkan oleh Pemerintah Provinsi Jawa Tengah Tahun 2018-2023',
  'description': 'Pengawasan Usaha dan atau Kegiatan yang Izin Lingkungan Hidup, Izin PPLH diterbitkan oleh Pemerintah Provinsi Jawa Tengah Tahun 2018-2023',
  'format': [
    '.xlsx'
  ],
  'size': '276 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 852,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'perkembangan-pelaksanaan-kegiatan-pengawasan-usaha',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Perkembangan Pelaksanaan Kegiatan Pengawasan Usaha',
  'description': 'Perkembangan Pelaksanaan Kegiatan Pengawasan Usaha danatau Kegiatan yang Izin Lingkungan Hidup, Izin PPLH diterbitkan oleh Pemerintah Daerah',
  'format': [
    '.xlsx'
  ],
  'size': '1602 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 295,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'verifikasi-lapangan-terhadap-pengaduan-yang-merupakan-kewenangan-provinsi',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Verifikasi lapangan terhadap pengaduan yang merupakan kewenangan Provinsi',
  'description': 'Verifikasi lapangan terhadap pengaduan yang merupakan kewenangan Provinsi',
  'format': [
    '.xlsx'
  ],
  'size': '1550 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 81,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pengawasan-penaatan-lingkungan-hidup-terhadap-usaha-kegiatan',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Pengawasan Penaatan Lingkungan Hidup terhadap Usaha Kegiatan',
  'description': 'Pengawasan Penaatan Lingkungan Hidup terhadap Usaha Kegiatan',
  'format': [
    '.xlsx'
  ],
  'size': '1626 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 950,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'pembangunan-fisik-ipal',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'PEMBANGUNAN FISIK IPAL',
  'description': 'IPAL adalah singkatan dari Instalasi Pengolahan Air Limbah. IPAL adalah sarana untuk mengolah limbah cair, seperti limbah dari WC, air cuci, dan kamar mandi. IPAL juga bisa mengolah limbah kotoran padat (tinja) dari WC, yang lebih dikenal dengan istilah septic tank.',
  'format': [
    '.xlsx'
  ],
  'size': '794 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 468,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'besaran-emisi-gas-rumah-kaca-menurut-sektor-di-provinsi-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Besaran Emisi Gas Rumah Kaca Menurut Sektor di Provinsi Jawa Tengah',
  'description': 'Besaran Emisi Gas Rumah Kaca Menurut Sektor di Provinsi Jawa Tengah',
  'format': [
    '.xlsx'
  ],
  'size': '1777 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 146,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kronologi-klhs-kendeng',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Kronologi KLHS Kendeng',
  'description': 'Kronologi KLHS Kendeng',
  'format': [
    '.xlsx'
  ],
  'size': '1344 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 198,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'validasi-klhs-rtrw',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Validasi KLHS RTRW',
  'description': 'Validasi KLHS Rencana Tata Ruang Wilayah',
  'format': [
    '.xlsx'
  ],
  'size': '1627 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 442,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'validasi-klhs',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Validasi KLHS',
  'description': 'Validasi KLHS',
  'format': [
    '.xlsx'
  ],
  'size': '1545 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 79,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'kajian-lingkungan-hidup-strategis',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Kajian Lingkungan Hidup Strategis',
  'description': 'Kajian Lingkungan Hidup Strategis (KLHS) merupakan salah satu instrumen untuk memastikan bahwa prinsip Pembangunan Berkelanjutan telah menjadi dasar dan terintegrasi dalam pembangunan suatu wilayah, yang mampu memberikan rekomendasi pertimbangan lingkungan pada tingkatan pengambilan keputusan yang bersifat strategis, yakni pada arah kebijakan, rencana dan program pembangunan (KRP). KLHS Provinsi Jawa Tengah',
  'format': [
    '.xlsx'
  ],
  'size': '452 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 62,
  'license': '',
  'tags': [
    'Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
    'Lingkungan Hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'perda-jateng-no-1-tahun-2024-tentang-rpplh',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Perda Jateng No 1 Tahun 2024 Tentang RPPLH',
  'description': 'Perda Jateng Nomor 1 Tahun 2024 tentang RPPLH\r\nRencana Perlindungan dan Pengelolaan Lingkungan Hidup',
  'format': [
    'PDF',
    '.xlsx',
    '.pptx',
    '.pdf'
  ],
  'size': '765 KB',
  'lastUpdated': '2024-08-23',
  'downloads': 310,
  'license': 'Other (Open)',
  'tags': [
    'indeks kualitas lingkungan hidup'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'ccb-sdjt-data-indeks-kualitas-lingkungan-hidup-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Data Indeks Kualitas Lingkungan Hidup Jawa Tengah',
  'description': 'Indeks Kualitas Lingkungan Hidup (IKLH) merupakan gambaran atau indikasi awal yang memberikan kesimpulan cepat dari suatu kondisi lingkungan hidup pada lingkup dan periode tertentu.',
  'format': [
    'XLSX'
  ],
  'size': '212 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 909,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': '93e-sdjt-data-rehabilitasi-hutan-dan-lahan-di-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Data Rehabilitasi Hutan dan Lahan di Jawa Tengah',
  'description': 'Menjelaskan tentang kegiatan rehabilitasi hutan dan lahan yang dilaksanakan di Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '4063 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 295,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'fdf-sdjt-data-pengelolaan-sampah-di-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Data Pengelolaan Sampah di Jawa Tengah',
  'description': 'Capaian Kinerja Pengelolaan Sampah yang meliputi Pengurangan dan Penanganan Sampah di Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '2810 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 103,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'd71-sdjt-nilai-indeks-pencemar-kualitas-air-sungai-di-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Nilai Indeks Pencemar Kualitas Air Sungai di Jawa Tengah',
  'description': 'Indeks Pencemaran adalah angka yang digunakan untuk menentukan tingkat pencemaran relatif terhadap parameter kualitas air yang diizinkan',
  'format': [
    'XLSX'
  ],
  'size': '1696 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 843,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': '5a8-sdjt-luas-tutupan-lahan-di-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Luas Tutupan Lahan di Jawa Tengah',
  'description': 'Merupakan data luasan tutupan lahan yang ada di Jawa Tengah ',
  'format': [
    'XLSX'
  ],
  'size': '4892 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 941,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'c3e-besaran-emisi-gas-rumah-kaca-grk-untuk-setiap-sektor-provinsi-jawa-tengah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Besaran Emisi Gas Rumah Kaca (GRK) Untuk Setiap Sektor Provinsi Jawa Tengah',
  'description': 'Menjelaskan tentang besaran emisi gas rumah kaca (GRK) pada setiap sektornya',
  'format': [
    'XLSX'
  ],
  'size': '3616 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 989,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'perjanjian-kinerja-dinas-lhk-prov-jateng',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Perjanjian Kinerja Dinas LHK Prov Jateng',
  'description': 'Perjanjian Kinerja Pejabat Dinas LHK Prov Jateng',
  'format': [
    'PDF'
  ],
  'size': '988 KB',
  'lastUpdated': '2022-10-06',
  'downloads': 500,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'https-drive-google-com-file-d-1bb-ikubezzwg7nt0dwtri40oyjy9tlyo-view',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Daftar Informasi Kualitas Pengelolaan Lingkungan Hidup Daerah (IKPLHD)',
  'description': '',
  'format': [
    'PDF'
  ],
  'size': '2153 KB',
  'lastUpdated': '2022-10-06',
  'downloads': 574,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'renja-dlhk-prov-jateng',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Renja Dinas LHK Prov Jateng',
  'description': 'Rencana Kerja Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah',
  'format': [
    '.pdf'
  ],
  'size': '1419 KB',
  'lastUpdated': '2022-09-28',
  'downloads': 745,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'penerbitan-ijin-pembangunan-tol-ruas-solo-yogyakarta',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Penerbitan Ijin  Pembangunan',
  'description': 'Penerbitan Ijin Pembangunan ',
  'format': [
    '.pdf'
  ],
  'size': '610 KB',
  'lastUpdated': '2021-09-28',
  'downloads': 614,
  'license': 'Other (Public Domain)',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'ikplhd-tahun-2019',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'IKPLHD Provinsi Jawa Tengah',
  'description': 'Indeks Kualitas Pengelolaan Lingkungan Hidup Daerah Provinsi Jawa Tengah',
  'format': [
    '.pdf'
  ],
  'size': '1411 KB',
  'lastUpdated': '2021-09-28',
  'downloads': 144,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'produksi',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Produksi Kayu Bulat Asal Hutan Rakyat Tahun 2014-2018',
  'description': 'Berisi Produksi Kayu Bulat Asal Hutan Rakyat Tahun 2014-2018',
  'format': [],
  'size': 'N/A',
  'lastUpdated': '2019-11-26',
  'downloads': 956,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'phpl',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Jumlah Petugas Teknis PHPL Per Kabupaten/Kota di Provinsi Jawa Tengah',
  'description': 'Berisi Jumlah Petugas Teknis PHPL Per Kabupaten/Kota di Provinsi Jawa Tengah',
  'format': [],
  'size': 'N/A',
  'lastUpdated': '2019-11-26',
  'downloads': 60,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-tempat-penampungan-kayu-terdaftar-tpt-per-kabupaten-kota-di-provinsi-jawa-tengah-2018',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Jumlah Tempat Penampungan Kayu Terdaftar (TPT) Per Kabupaten/Kota di Provinsi Jawa Tengah 2018',
  'description': 'Berisi Jumlah Tempat Penampungan Kayu Terdaftar (TPT) Per Kabupaten/Kota di Provinsi Jawa Tengah 2018',
  'format': [],
  'size': 'N/A',
  'lastUpdated': '2019-11-26',
  'downloads': 596,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'jumlah-ijin-usahan-industri-primer-hasil-hutan-kayu',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Jumlah Ijin Usahan Industri Primer Hasil Hutan Kayu (IUIPHHK) menurut Kapasitas Produksi Per Kabupaten/Kota di Provinsi Jawa Tengah',
  'description': 'Berisi Jumlah Ijin Usahan Industri Primer Hasil Hutan Kayu (IUIPHHK) menurut Kapasitas Produksi Per Kabupaten/Kota di Provinsi Jawa Tengah',
  'format': [],
  'size': 'N/A',
  'lastUpdated': '2019-11-26',
  'downloads': 443,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-umum-dan-kepegawaian',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Data Umum Dan Kepegawaian Dinas LHK Prov. Jateng',
  'description': '',
  'format': [
    'CSV'
  ],
  'size': '786 KB',
  'lastUpdated': '2019-11-26',
  'downloads': 229,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'https-drive-google-com-file-d-1n44k5euw7dzar-hmbzmlbzx_9doa14dl-view',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Luas Hutan di Jawa Tengah (Hutan Negara dan Hutan Rakyat)',
  'description': 'Berisi data luas hutan di Jawa Tengah',
  'format': [],
  'size': 'N/A',
  'lastUpdated': '2019-11-26',
  'downloads': 530,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'perkembangan-tukar-menukar-kawasan-hutan-sampai-dengan-tahun-2017',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Perkembangan Tukar Menukar Kawasan Hutan sampai dengan Tahun 2017',
  'description': 'Berisi Perkembangan Tukar Menukar Kawasan Hutan sampai dengan Tahun 2017',
  'format': [],
  'size': 'N/A',
  'lastUpdated': '2019-11-26',
  'downloads': 177,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'pengumuman-permohonan-izin-lingkungan-rencana-pembangunan-gedung-auditorium-universitas-muhammadiyah',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Pengumuman Permohonan Izin Lingkungan Rencana Pembangunan Gedung Auditorium Universitas Muhammadiyah',
  'description': 'Pengumuman Permohonan Izin Lingkungan Rencana Pembangunan Gedung Auditorium Universitas Muhammadiyah di Kota Surakarta dan Kab Karanganyar',
  'format': [],
  'size': 'N/A',
  'lastUpdated': '2019-11-20',
  'downloads': 122,
  'license': 'Other (Public Domain)',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'kumpulan-data-urusan-lingkungan-hidup',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Kumpulan Data urusan Lingkungan Hidup',
  'description': 'Data mengenai Luas Wilayah Menurut Penggunaan Lahan Utama,Menurut Fungsi/Status, Lahan Kritis Di Dalam dan Luar Kawasan Hutan,Kerusakan Tanah di Lahan Kering Akibat Erosi Air, Kerusakan Tanah di Lahan Kering, Kerapatan Tutupan Mangrove, Kerusakan Padang Lamun, Kondisi Terumbu Karang, Pemanfaatan Lahan di Provinsi/Kabupaten/Kota, Produksi Pertambangan Menurut Jenis Bahan Galian, Penghijauan dan Reboisasi, Kondisi  Sungai, Kondisi  Danau/Waduk/Situ/Embung, Kualitas air sungai Serang, Sungai Pemali, Sungai Serayu, Air Sungai Tuntang,Sungai Wulan, Sungai Gung, Air Sungai Lusi, Sungai Garang, Sungai Babon, Sungai Anak Bengawan Solo,  Sungai Kupang,  Sungai Sambong, Air Danau/Waduk/Situ/Embung 2016, Kualitas Air Sumur Jateng, Air Laut, Banyaknya Curah Hujan Menurut Stasiun di Provinsi Jawa Tengah, Jumlah Rumah Tangga dan Sumber Air Minum, Jumlah Rumah Tangga dan Fasilitas Tempat Buang Air Besar, Perkiraan Volume Limbah Padat dan Limbah Cair dari Sumber Pencemar, Suhu Udara Rata-Rata Bulanan, Kualitas Air hujan, Suhu Udara Rata-Rata Bulanan, Kualitas Udara Ambien , Penggunaan Bahan Bakar di Kab/Kota, Penjualan Kendaraan Bermotor,  Dokumen Izin Lingkungan, Perusahaan yang Mendapat Izin Mengelola Limbah B3, Pengawasan Izin Lingkungan (AMDAL, UKL/UPL), Surat Pernyataan Pengelolaan Lingkungan (SPPL), Perkiraan Jumlah  Per Hari Timbunan Sampah, Jumlah Lembaga Swadaya Masyarakat (LSM) Lingkungan Hidup,Jumlah Personil Lembaga Pengelola Lingkungan Hidup menurut Tingkat Pendidikan,  ',
  'format': [
    'XLS'
  ],
  'size': '2163 KB',
  'lastUpdated': '2017-11-23',
  'downloads': 413,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'luas-kawasan-hutan-rakyat-tutupan-lahan-hutan-dan-produksi-kayu-bulat',
  'organizationId': 'dinas-lingkungan-hidup-dan-kehutanan-provinsi-jawa-tengah',
  'title': 'Luas Kawasan Hutan Rakyat Tutupan Lahan Hutan dan Produksi Kayu Bulat',
  'description': 'Data Luas Kawasan Hutan Negara, Hutan Rakyat, Tutupan Lahan Hutan dan Produksi Kayu Bulat dengan Jenisnya di Jawa Tengah',
  'format': [
    'XLS'
  ],
  'size': '75 KB',
  'lastUpdated': '2017-11-23',
  'downloads': 712,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kota-tegal-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kota Tegal 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kota Tegal Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '231 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 441,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kota-surakarta-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kota Surakarta 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kota Surakarta Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3454 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 308,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kota-semarang-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kota Semarang 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kota Semarang Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4573 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 12,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kota-salatiga-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kota Salatiga 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kota Salatiga Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '1020 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 190,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kota-pekalongan-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kota Pekalongan 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kota Pekalongan Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4161 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 427,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kota-magelang-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kota Magelang 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kota Magelang Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '1383 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 822,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-banjarnegara-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Banjarnegara 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Banjarnegara Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3759 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 766,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-wonosobo-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Wonosobo 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Wonosobo Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '2424 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 473,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-wonogiri-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Wonogiri 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Wonogiri Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '2216 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 528,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-temanggung-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab.Temanggung 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Temanggung Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4286 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 735,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-tegal-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Tegal 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Tegal Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '675 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 745,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-sukoharjo-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Sukoharjo 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Sukoharjo Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3763 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 232,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-sragen-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Sragen 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Sragen Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3006 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 763,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-semarang-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Semarang 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Semarang Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '2062 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 755,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-rembang-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Rembang 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Rembang Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3077 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 692,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-purworejo-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Purworejo 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Purworejo Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '2066 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 354,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-purbalingga-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Purbalingga 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Purbalingga Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4114 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 73,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-pemalang-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Pemalang 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Pemalang Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '1386 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 711,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-pekalongan-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Pekalongan 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Pekalongan Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '281 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 834,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-pati-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Pati 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Pati Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3138 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 634,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-magelang-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Magelang 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Magelang Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3093 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 978,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-kudus-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Kudus 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Kudus Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4437 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 76,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-klaten-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Klaten 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Klaten Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3398 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 28,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-kendal-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Kendal 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Kendal Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '67 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 656,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-kebumen-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Kebumen 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Kebumen Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '89 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 267,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-karanganyar-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Karanganyar 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Karanganyar Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3403 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 687,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-jepara-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Jepara 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Jepara Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4671 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 480,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-grobogan-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Grobogan 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Grobogan Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4934 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 692,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-demak-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Demak 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Demak Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '784 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 848,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-cilacap-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab.Cilacap 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Cilacap Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '2544 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 271,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-brebes-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Brebes 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Brebes Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4368 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 951,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-boyolali-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Boyolali 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Boyolali Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '1553 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 958,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-blora-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab.Blora 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Blora Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '734 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 410,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-batang-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab.Batang 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada               Kab. Batang Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3173 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 351,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-kerjasama-satpen-dengan-dudi-kab-banyumas-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Kerjasama Satpen dengan Dudi Kab. Banyumas 2025',
  'description': 'Rekapitulasi Kerjasama Satuan Pendidikan dengan Dunia Industri pada  Kab. Banyumas Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3861 KB',
  'lastUpdated': '2025-07-14',
  'downloads': 897,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'peta-jabatan-disdikbud',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Peta Jabatan Disdikbud',
  'description': 'Peta Jabatan Disdikbud per Bulan April 2024',
  'format': [
    'XLSX'
  ],
  'size': '1847 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 655,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'program-dan-kegiatan-disdikbud-tahun-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Program dan Kegiatan Disdikbud Tahun 2025',
  'description': 'Program dan Kegiatan Disdikbud Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3566 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 961,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-lhkan-lhkpn-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'REKAP LHKAN & LHKPN 2024',
  'description': 'Rekap LHKAN & LHKPN Tahun 2024',
  'format': [
    'XLSX'
  ],
  'size': '890 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 165,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-spp-eskm-tahun-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap SPP ESKM Tahun 2025',
  'description': 'Rekap SPP ESKM Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3767 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 245,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-responden-eskm-tahun-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rekap Responden ESKM Tahun 2025',
  'description': 'Rekap Responden ESKM Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '3449 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 209,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'nilai-indeks-kepuasan-masyarakat-tahun-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Nilai Indeks Kepuasan Masyarakat Tahun 2025',
  'description': 'Nilai Indeks Kepuasan Masyarakat Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '4115 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 803,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'sp-disdikbud-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'SP DISDIKBUD 2024',
  'description': 'Standar Pelayanan Dinas Pendidikan dan Kebudayaan Prov. Jateng Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '1363 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 13,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-inventarisasi-sp-disdikbud',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA INVENTARISASI SP DISDIKBUD',
  'description': 'Data Inventarisasi Standar Pelayanan Disdikbud Jateng',
  'format': [
    'XLSX'
  ],
  'size': '2349 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 220,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'nilai-ikm-semester-i-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'NILAI IKM SEMESTER I 2024',
  'description': 'Nilai Indeks Kepuasan Masyarakat I Tahun 2024',
  'format': [
    'XLSX'
  ],
  'size': '880 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 359,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-aduan-laporsp4n-tahun-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'REKAP ADUAN LAPORSP4N TAHUN 2024',
  'description': 'Rekap Pengaduan SP4N Lapor Tahun 2024',
  'format': [
    'XLSX'
  ],
  'size': '828 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 290,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'nilai-ikm-semester-ii-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'NILAI IKM SEMESTER II 2024',
  'description': 'Nilai Indeks Kepuasan Masyarakat II Tahun 2024',
  'format': [
    'XLSX'
  ],
  'size': '2988 KB',
  'lastUpdated': '2025-07-10',
  'downloads': 992,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-anak-asesmen-kompetensi-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA ANAK ASESMEN KOMPETENSI 2025',
  'description': 'Jumlah data anak yang mengikuti asesmen kompetensi 2025',
  'format': [
    'CSV'
  ],
  'size': '2403 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 864,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-slb-prov-jateng-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA SLB PROV. JATENG 2025',
  'description': 'Data Satuan Pendidikan SLB di Provinsi Jawa Tengah Tahun 2025',
  'format': [
    'CSV'
  ],
  'size': '2168 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 19,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-siswa-sma-smk-slb-prov-jateng-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA SISWA SMA,SMK,SLB PROV. JATENG 2025',
  'description': 'Data Siswa SMA, SMK dan SLB Provinsi Jawa Tengah Tahukn 2025',
  'format': [
    'CSV'
  ],
  'size': '4443 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 12,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-sma-smk-prov-jateng-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA SMA & SMK PROV. JATENG 2025',
  'description': 'Data SMA & SMK di Provinsi Jawa Tengah Tahun 2025',
  'format': [
    'CSV'
  ],
  'size': '1390 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 537,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-lapor-sp4n-disdikbud-2025',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'REKAP LAPOR SP4N DISDIKBUD 2025',
  'description': 'Rekap Aduan Lapor SP4N Disdikbud Prov. Jateng Tahun 2025',
  'format': [
    'XLSX'
  ],
  'size': '210 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 168,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-satuan-pendidikan-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA SATUAN PENDIDIKAN PROV. JATENG',
  'description': 'Data Satuan Pendidikan di Provinsi Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '244 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 254,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-rombel-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA ROMBEL PROV. JATENG',
  'description': 'Data Rombel di Provinsi Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '985 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 757,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-peserta-didik-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA PESERTA DIDIK PROV. JATENG',
  'description': 'Data Peserta Didik di Provinsi Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '2371 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 447,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-pegawai-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA PEGAWAI PROV. JATENG',
  'description': 'Data Pegawai Pemerintah Provinsi Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '206 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 1000,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-guru-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA GURU PROV. JATENG',
  'description': 'Data Guru Provinsi Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '940 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 219,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-smk-negeri-dan-swasta',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Data SMK Negeri dan Swasta',
  'description': 'Data SMK Negeri dan Swasta penerima Dana BOS',
  'format': [
    'XLS'
  ],
  'size': '262 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 221,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-aduan-laporgub-tahun-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'REKAP ADUAN LAPORGUB TAHUN 2024',
  'description': 'Rekap Pengaduan LaporGub Tahun 2024',
  'format': [
    'XLSX'
  ],
  'size': '2809 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 287,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-gtt-ptt-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA GTT & PTT 2024',
  'description': 'Data Guru Tidak Tetap dan Pegawai Tidak Tetap 2024',
  'format': [
    'XLSX'
  ],
  'size': '4108 KB',
  'lastUpdated': '2025-05-26',
  'downloads': 923,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-responden-skm-tahun-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'REKAP RESPONDEN SKM TAHUN 2024',
  'description': 'Rekap Responden SKM Tahun 2024',
  'format': [
    'XLSX'
  ],
  'size': '330 KB',
  'lastUpdated': '2024-10-18',
  'downloads': 846,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'daftar-penerima-smk-pk-th-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DAFTAR PENERIMA SMK PK TH 2024',
  'description': 'SMK Pusat Keunggulan (SMK PK) adalah program pengembangan Sekolah Menengah Kejuruan (SMK) yang bertujuan untuk meningkatkan kualitas dan kinerja sekolah.',
  'format': [
    'XLSX'
  ],
  'size': '1852 KB',
  'lastUpdated': '2024-10-18',
  'downloads': 547,
  'license': '',
  'tags': [
    'DISDIKBUDJATENG',
    'SMKPK'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'juknis-ppdb-sma-dan-smk-negeri-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'JUKNIS PPDB SMA DAN SMK NEGERI PROV. JATENG',
  'description': 'Petunjuk Teknis PPDB SMA dan SMK Negeri Provinsi Jawa Tengah',
  'format': [
    'PDF'
  ],
  'size': '1958 KB',
  'lastUpdated': '2024-10-10',
  'downloads': 899,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-daya-tampung-ppdb-sma-negeri-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA DAYA TAMPUNG PPDB SMA NEGERI PROV. JATENG',
  'description': 'Data Daya Tampung PPDB SMA Negeri Provinsi Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '1028 KB',
  'lastUpdated': '2024-10-10',
  'downloads': 778,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'sk-zonasi-reguler-ppdb-sma-negeri-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'SK ZONASI REGULER PPDB SMA NEGERI PROV. JATENG',
  'description': 'Surat Keputusan Zonasi Reguler PPDB SMA Negeri Provinsi Jawa Tengah',
  'format': [
    'PDF'
  ],
  'size': '418 KB',
  'lastUpdated': '2024-10-10',
  'downloads': 934,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-zonasi-reguler-ppdb-sma-negeri-di-jawa-tengah',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA ZONASI REGULER PPDB SMA NEGERI DI JAWA TENGAH',
  'description': 'Data Zonasi Reguler PPDB SMA Negeri di Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '784 KB',
  'lastUpdated': '2024-10-10',
  'downloads': 343,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'sk-tim-laporgub-sp4nlapor-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'SK TIM LAPORGUB & SP4NLAPOR 2024',
  'description': 'SK Tim Admin LaporGub dan SP4NLapor Disdikbud Jateng Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '2982 KB',
  'lastUpdated': '2024-08-05',
  'downloads': 672,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'aed-data-sekolah-pendidikan-khusus',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Data Sekolah Pendidikan Khusus',
  'description': 'Salah satu bentuk satuan pendidikan formal pada tingkat Sekolah Menengah Atas yang menyelenggarakan pendidikan bagi Anak Berkebutuhan Khusus (ABK).',
  'format': [
    'XLSX'
  ],
  'size': '1203 KB',
  'lastUpdated': '2024-07-09',
  'downloads': 50,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': '735-data-sekolah-jenjang-menengah',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Data Sekolah Jenjang Menengah',
  'description': 'Salah satu bentuk satuan pendidikan formal yang menyelenggarakan pendidikan umum dan pendidikan kejuruan pada jenjang pendidikan menengah sebagai lanjutan dari SMP, MTs, atau bentuk lain yang sederajat atau lanjutan dari hasil belajar yang diakui sama atau setara SMP atau MTs.',
  'format': [
    'XLSX'
  ],
  'size': '4261 KB',
  'lastUpdated': '2024-07-09',
  'downloads': 706,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'fa7-siswa-jenjang-menengah-atas-kejuruan-dan-pendidikan-khusus-provinsi-jawa-tengah',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Siswa Jenjang Menengah Atas, Kejuruan, dan Pendidikan Khusus Provinsi Jawa Tengah',
  'description': 'Siswa Jenjang Menengah Atas, Kejuruan, dan Pendidikan Khusus di Wilayah Provinsi Jawa Tengah',
  'format': [
    'XLSX'
  ],
  'size': '4026 KB',
  'lastUpdated': '2024-07-04',
  'downloads': 634,
  'license': 'Creative Commons Attribution',
  'tags': [
    'Portal Data Jawa Tengah'
  ],
  'fields': [],
  'preview': []
},
  {
  'id': 'lampiran-rekap-laporgub-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'LAMPIRAN REKAP LAPORGUB 2023',
  'description': 'Lampiran Rekap Aduan di Aplikasi Laporgub Tahun 2023',
  'format': [
    'XLSX'
  ],
  'size': '332 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 612,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'lampiran-rekap-laporgub-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'LAMPIRAN REKAP LAPORGUB 2024',
  'description': 'Rekap Aduan dalam aplikasi Lapor Gub Tahun 2024',
  'format': [
    'XLSX'
  ],
  'size': '800 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 641,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-ks-sma-smk-slb-negeri-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA KS SMA/SMK/SLB NEGERI 2024',
  'description': 'Data Kepala Sekolah SMA/SMK/SLB Negeri Tahun 2024',
  'format': [
    'XLSX'
  ],
  'size': '2397 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 840,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'sk-tim-laporgub-dan-sp4nlapor',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'SK TIM LAPORGUB DAN SP4NLAPOR!',
  'description': 'Surat Keputusan Tim Admin Laporgub dan SP4NLapor! Disdikbud Jateng',
  'format': [
    'PDF'
  ],
  'size': '1971 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 376,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'daftar-hadir-rapat-evaluasi-pengaduan-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'LAPORAN SKM SEMESTER I TAHUN 2023',
  'description': 'Laporan Survey Kepuasan Masyarakat Semester I Disdikbud Jateng Tahun 2023',
  'format': [
    'PDF'
  ],
  'size': '2336 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 704,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'surat-edaran-pengelolaan-pendidikan-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Surat Edaran Pengelolaan Pendidikan 2024',
  'description': 'Surat Edaran Kepala Dinas Pengelolaan Pendidikan Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '952 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 85,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'surat-edaran-pembiayaan-pendidikan-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Surat Edaran Pembiayaan Pendidikan 2024',
  'description': 'Surat Edaran Kepala Dinas Pembiayaan Pendidikan Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '2146 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 473,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'sk-tim-penanganan-benturan-kepentingan-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'SK TIM PENANGANAN BENTURAN KEPENTINGAN 2024',
  'description': 'Surat Keputusan Tim Penanganan Benturan Kepentingan Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '1360 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 23,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'sk-pembentukan-tim-skm-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'SK PEMBENTUKAN TIM SKM 2023',
  'description': 'Surat Keputusan Pembentukan Tim SKM Tahun 2023',
  'format': [
    'PDF'
  ],
  'size': '2303 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 744,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'agenda-disdikbud-jateng-tahun-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Agenda Disdikbud Jateng Tahun 2024',
  'description': 'Agenda Disdikbud Jateng Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '2108 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 438,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rencana-kerja-dan-anggaran-tahun-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rencana Kerja dan Anggaran Tahun 2024',
  'description': 'Rencana Kerja dan Anggaran Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '2833 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 626,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'program-dan-kegiatan-disdikbud-jateng-maret-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Program dan Kegiatan Disdikbud Jateng Maret 2024',
  'description': 'Program dan Kegiatan Disdikbud Jateng Maret 2024 ',
  'format': [
    'PDF'
  ],
  'size': '2664 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 983,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rencana-kerja-disdikbud-jateng-tahun-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rencana Kerja DIsdikbud Jateng Tahun 2024',
  'description': 'Rencana Kerja DIsdikbud Jateng Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '500 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 606,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rencana-kinerja-tahunan-rkt-disdikbud-jateng-tahun-2024',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rencana Kinerja Tahunan (RKT) Disdikbud Jateng Tahun 2024',
  'description': 'Rencana Kinerja Tahunan (RKT) Disdikbud Jateng Tahun 2024',
  'format': [
    'PDF'
  ],
  'size': '922 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 842,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rencana-strategis-disdikbud-tahun-2024-2026',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Rencana Strategis Disdikbud Tahun 2024-2026',
  'description': 'Rencana Strategis Disdikbud Tahun 2024-2026',
  'format': [
    'PDF'
  ],
  'size': '1972 KB',
  'lastUpdated': '2024-05-03',
  'downloads': 74,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'spm-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'SPM 2023',
  'description': 'Penerapan dan Pencapaian Standar Pelayanan Minimal Urusan Pendidikan ',
  'format': [
    'PDF'
  ],
  'size': '599 KB',
  'lastUpdated': '2023-11-24',
  'downloads': 803,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rekap-pengaduan-2021-s-d-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'REKAP PENGADUAN 2021 s.d. 2023',
  'description': 'Rekap Pengaduan Masyarakat kepada Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah dalam aplikasi LaporGub Jateng',
  'format': [
    'XLSX'
  ],
  'size': '4548 KB',
  'lastUpdated': '2023-11-23',
  'downloads': 408,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'form-penelaahan',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'FORM PENELAAHAN',
  'description': 'Formulir Penelaahan dan Penglasifikasian (Lembar Disposisi)',
  'format': [
    'PDF'
  ],
  'size': '2706 KB',
  'lastUpdated': '2023-11-23',
  'downloads': 50,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'form-permintaan-informasi-publik',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'FORM PERMINTAAN INFORMASI PUBLIK',
  'description': 'Formulir Permintaan Informasi Publik 2023',
  'format': [
    'PDF'
  ],
  'size': '2903 KB',
  'lastUpdated': '2023-11-23',
  'downloads': 256,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'standar-pelayanan-publik-disdibud-prov-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'STANDAR PELAYANAN PUBLIK DISDIBUD PROV. JATENG',
  'description': 'Standar Pelayanan Publik Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Tahun 2023',
  'format': [
    'PDF'
  ],
  'size': '2635 KB',
  'lastUpdated': '2023-11-23',
  'downloads': 245,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'laporan-akses-informasi-publik-tahun-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'LAPORAN AKSES INFORMASI PUBLIK TAHUN 2023',
  'description': '',
  'format': [
    'PDF'
  ],
  'size': '2586 KB',
  'lastUpdated': '2023-11-23',
  'downloads': 424,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'laporan-pelaksanaan-survei-kepuasan-masyarakat-semester-1-tahun-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Laporan Pelaksanaan Survei Kepuasan Masyarakat Semester 1 Tahun 2023',
  'description': 'Laporan Pelaksanaan Survei Kepuasan Masyarakat (SKM) Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Semester 1 Tahun 2023',
  'format': [
    'PDF'
  ],
  'size': '1535 KB',
  'lastUpdated': '2023-11-23',
  'downloads': 533,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'data-pegawai-disdikbud-jateng',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DATA PEGAWAI DISDIKBUD JATENG',
  'description': 'Data Pegawai Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah',
  'format': [
    '.pdf'
  ],
  'size': '574 KB',
  'lastUpdated': '2023-09-06',
  'downloads': 460,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'profil-disdikbud-jateng-tahun-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'PROFIL DISDIKBUD JATENG TAHUN 2023',
  'description': 'Profil Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Tahun 2023',
  'format': [
    '.pdf'
  ],
  'size': '1288 KB',
  'lastUpdated': '2023-09-06',
  'downloads': 487,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'renstra-disdikbud-tahun-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'RENSTRA DISDIKBUD TAHUN 2023',
  'description': 'Rencana Strategis (RENSTRA) Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Tahun 2023',
  'format': [
    '.pdf'
  ],
  'size': '1205 KB',
  'lastUpdated': '2023-09-06',
  'downloads': 673,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'renja-disdikbud-tahun-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'RENJA DISDIKBUD TAHUN 2023',
  'description': 'Rencana Kerja (RENJA) Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Tahun 2023',
  'format': [
    '.pdf'
  ],
  'size': '1550 KB',
  'lastUpdated': '2023-09-06',
  'downloads': 816,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'transparansi-bantuan-keuangan-tahun-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'TRANSPARANSI BANTUAN KEUANGAN TAHUN 2023',
  'description': 'Transparansi Bantuan Keuangan Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Tahun 2023',
  'format': [
    '.pdf'
  ],
  'size': '1693 KB',
  'lastUpdated': '2023-09-06',
  'downloads': 695,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'dpa-administrasi-umum-perangkat-daerah-tahun-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'DPA Administrasi Umum Perangkat Daerah Tahun 2023',
  'description': 'DPA (Dokumen Pelaksanaan Anggaran) Administrasi Umum Perangkat Daerah Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Tahun 2023',
  'format': [
    '.pdf'
  ],
  'size': '1197 KB',
  'lastUpdated': '2023-09-06',
  'downloads': 371,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'rka-dan-rab-disdikbud-jateng-tahun-2023',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'RKA dan RAB Disdikbud Jateng Tahun 2023',
  'description': 'Rencana Kerja dan Anggarann (RKA) dan Rencana Anggaran Biaya (RAB) Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Tahun 2023',
  'format': [
    '.pdf'
  ],
  'size': '1603 KB',
  'lastUpdated': '2023-09-06',
  'downloads': 205,
  'license': '',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'realisasi-capaian-target-kinerja-keuangan-disdikbud-2020',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Realisasi Capaian Target Kinerja Keuangan Disdikbud 2020',
  'description': 'Realisasi Capaian Target Kinerja Keuangan Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah tahun 2020',
  'format': [
    'PDF'
  ],
  'size': '1595 KB',
  'lastUpdated': '2022-03-25',
  'downloads': 620,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
  {
  'id': 'perubahan-ekuitas-disdikbud-2020',
  'organizationId': 'dinas-pendidikan-dan-kebudayaan-provinsi-jawa-tengah',
  'title': 'Perubahan Ekuitas Disdikbud 2020',
  'description': 'Perubahan Ekuitas Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah tahun 2020',
  'format': [
    'PDF'
  ],
  'size': '1910 KB',
  'lastUpdated': '2022-03-25',
  'downloads': 927,
  'license': 'Creative Commons Attribution',
  'tags': [],
  'fields': [],
  'preview': []
},
];

