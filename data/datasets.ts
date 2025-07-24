// File: data/datasets.ts

export interface Resource {
    id: string;
    name: string;
    format: 'PDF' | 'CSV' | 'JSON' | 'Excel' | 'XLSX' | 'PPT';
    size: string;
    url: string;
  }
  
  export interface Dataset {
    id: string;
    title: string;
    description: string;
    organization: string;
    organizationId: string;
    category: string;
    lastUpdated: string; // Gunakan format YYYY-MM-DD untuk sorting
    downloads: number;
    tags: string[];
    resources: Resource[];
    // Properti opsional untuk preview dari kode teman Anda
    fields?: { name: string; type: string; description:string }[];
    preview?: any[];
  }
  
  export const allDatasets: Record<string, Dataset> = {
    // --- Data yang sudah ada ---
    'pedoman-pengelolaan-kepegawaian': {
      id: 'pedoman-pengelolaan-kepegawaian',
      title: 'Pedoman Pengelolaan Kepegawaian',
      description: 'Dokumen ini berisi pedoman lengkap terkait manajemen Aparatur Sipil Negara (ASN) di lingkungan Pemerintah Provinsi Jawa Tengah.',
      organization: 'Badan Kepegawaian Daerah',
      organizationId: 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
      category: 'Pemerintahan',
      lastUpdated: '2025-01-15',
      downloads: 1572,
      tags: ['kepegawaian', 'ASN', 'regulasi'],
      resources: [
        { id: 'res1', name: 'Dokumen Utama', format: 'PDF', size: '2.1 MB', url: '#' },
        { id: 'res2', name: 'Lampiran', format: 'PPT', size: '5.5 MB', url: '#' },
        { id: 'res3', name: 'Data Terkait', format: 'CSV', size: '850 KB', url: '#' }
      ]
    },
    'data-pegawai-asn-2024': {
      id: 'data-pegawai-asn-2024',
      title: 'Data Pegawai ASN Provinsi Jawa Tengah 2024',
      description: 'Dataset berisi informasi lengkap pegawai Aparatur Sipil Negara di lingkungan Pemerintah Provinsi Jawa Tengah per tahun 2024.',
      organization: 'Badan Kepegawaian Daerah',
      organizationId: 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
      category: 'Kepegawaian',
      lastUpdated: '2025-01-10',
      downloads: 1248,
      tags: ['pegawai', 'ASN', 'data'],
      resources: [
        { id: 'res1', name: 'Data Pegawai 2024', format: 'CSV', size: '3.2 MB', url: '#' }
      ]
    },
    'data-anggaran-daerah-2024': {
      id: 'data-anggaran-daerah-2024',
      title: 'Data Anggaran Daerah 2024',
      description: 'Informasi lengkap mengenai anggaran pendapatan dan belanja daerah Provinsi Jawa Tengah tahun anggaran 2024.',
      organization: 'Badan Pengelolaan Keuangan Daerah',
      organizationId: 'badan-pengelola-keuangan-dan-aset-daerah-provinsi-jawa-tengah',
      category: 'Keuangan',
      lastUpdated: '2024-01-05',
      downloads: 892,
      tags: ['anggaran', 'APBD', 'keuangan'],
      resources: [
        { id: 'res1', name: 'Rincian APBD', format: 'PDF', size: '10.2 MB', url: '#' },
        { id: 'res2', name: 'Data Belanja', format: 'XLSX', size: '4.1 MB', url: '#' },
        { id: 'res3', name: 'Data Pendapatan', format: 'CSV', size: '2.8 MB', url: '#' }
      ]
    },
    'statistik-penduduk-2023': {
      id: 'statistik-penduduk-2023',
      title: 'Statistik Penduduk Jawa Tengah 2023',
      description: 'Data statistik kependudukan meliputi jumlah penduduk, demografi, dan sebaran penduduk di 35 kabupaten/kota di Jawa Tengah.',
      organization: 'Dinas Kependudukan dan Pencatatan Sipil',
      organizationId: 'dinas-kependudukan-dan-pencatatan-sipil-provinsi-jawa-tengah',
      category: 'Kependudukan',
      lastUpdated: '2023-12-20',
      downloads: 2156,
      tags: ['penduduk', 'demografi', 'statistik'],
      resources: [
        { id: 'res1', name: 'Statistik Penduduk Jateng', format: 'PDF', size: '1.8 MB', url: '#' },
        { id: 'res2', name: 'Data Mentah per Kab/Kota', format: 'CSV', size: '5.6 MB', url: '#' },
        { id: 'res3', name: 'Data JSON', format: 'JSON', size: '7.1 MB', url: '#' }
      ]
    },
  
    // --- DATA BARU DARI SCREENSHOT & TAMBAHAN ---
    'pedoman-organisasi-personil': {
      id: 'pedoman-organisasi-personil',
      title: 'Pedoman Pengelolaan Organisasi dan Personil',
      description: 'Pedoman Pengelolaan Organisasi dan Personil di lingkungan Pemerintah Provinsi Jawa Tengah.',
      organization: 'Badan Kepegawaian Daerah',
      organizationId: 'badan-kepegawaian-daerah-provinsi-jawa-tengah',
      category: 'Pemerintahan',
      lastUpdated: '2024-11-10',
      downloads: 980,
      tags: ['organisasi', 'personil', 'manajemen'],
      resources: [
        { id: 'res1', name: 'Dokumen Pedoman', format: 'PDF', size: '1.5 MB', url: '#' }
      ]
    },
    'pengelolaan-keuangan-jateng': {
      id: 'pengelolaan-keuangan-jateng',
      title: 'Pengelolaan Keuangan Provinsi Jawa Tengah',
      description: 'Pengelolaan Keuangan Provinsi Jawa Tengah.',
      organization: 'Badan Pengelolaan Keuangan Daerah',
      organizationId: 'badan-pengelola-keuangan-dan-aset-daerah-provinsi-jawa-tengah',
      category: 'Keuangan',
      lastUpdated: '2025-02-25',
      downloads: 1120,
      tags: ['keuangan', 'provinsi', 'pengelolaan'],
      resources: [
        { id: 'res1', name: 'Laporan Keuangan', format: 'PDF', size: '3.1 MB', url: '#' }
      ]
    },
    'data-kekerasan-perempuan-2025': {
      id: 'data-kekerasan-perempuan-2025',
      title: 'Data kekerasan perempuan jawa tengah juni 2025',
      description: 'This dataset has no description',
      organization: 'Dinas Sosial',
      organizationId: 'dinas-sosial-provinsi-jawa-tengah',
      category: 'Sosial',
      lastUpdated: '2025-06-30',
      downloads: 450,
      tags: ['kekerasan', 'perempuan', 'sosial'],
      resources: [
        { id: 'res1', name: 'Laporan Juni 2025', format: 'XLSX', size: '350 KB', url: '#' }
      ]
    },
    'data-kekerasan-anak-2025': {
      id: 'data-kekerasan-anak-2025',
      title: 'Data kekerasan anak nasional juni 2025',
      description: 'This dataset has no description',
      organization: 'Dinas Sosial',
      organizationId: 'dinas-sosial-provinsi-jawa-tengah',
      category: 'Sosial',
      lastUpdated: '2025-06-30',
      downloads: 512,
      tags: ['kekerasan', 'anak', 'nasional'],
      resources: [
        { id: 'res1', name: 'Laporan Nasional Juni 2025', format: 'XLSX', size: '420 KB', url: '#' }
      ]
    },
    'data-inflasi-bulanan': {
      id: 'data-inflasi-bulanan',
      title: 'Data Inflasi Bulanan Jawa Tengah',
      description: 'Data perkembangan inflasi bulanan (month-to-month) di Provinsi Jawa Tengah.',
      organization: 'Biro Perekonomian',
      organizationId: 'biro-perekonomian-provinsi-jawa-tengah',
      category: 'Ekonomi',
      lastUpdated: '2025-07-01',
      downloads: 3045,
      tags: ['ekonomi', 'inflasi', 'bulanan'],
      resources: [
        { id: 'res1', name: 'Data Inflasi 2025', format: 'CSV', size: '1.1 MB', url: '#' },
        { id: 'res2', name: 'Laporan Analisis', format: 'PDF', size: '2.0 MB', url: '#' }
      ]
    },
  };