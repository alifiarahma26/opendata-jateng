export interface InfographicItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  details?: string[];
  image: string;
  topic: string;
  viewCount: string;
  downloadCount: string;
  fileSize: string;
  format: string;
  author: string;
  date: string;
  location: string;
}

export const infographics: InfographicItem[] = [
  {
    id: 1,
    title: 'Inflasi Jawa Tengah 2024',
     slug: 'inflasi-jawa-tengah-2024',
    description: 'Jumlah nilai/persentase inflasi di Provinsi Jawa Tengah bulan Desember tahun 2024.',
    fullDescription: 'Infografis ini menampilkan data komprehensif mengenai tingkat inflasi di Jawa Tengah bulan Desember 2024.',
    details: [
      'Tingkat inflasi bulanan: 2.3%',
      'Inflasi year-on-year: 4.1%',
      'Sektor penyumbang tertinggi: Makanan dan Minuman (1.2%)'
    ],
    image: '/images/infografis1.jpg',
    topic: 'Inflasi',
    viewCount: '5.6K',
    downloadCount: '2.1K',
    fileSize: '1.8 MB',
    format: 'JPG',
    author: 'Admin',
    date: '6-1-2025',
    location: 'Kabupaten Cilacap'
  },
  {
    id: 2,
    title: 'Statistik Ekspor Provinsi Jateng 2024',
     slug: 'statistik-ekspor-provinsi-jateng-2024',
    description: 'Nilai dan volume ekspor berdasarkan komoditas dan negara tujuan.',
    fullDescription: 'Infografis ini menyajikan tren ekspor Jawa Tengah sepanjang tahun 2024 berdasarkan komoditas utama dan negara tujuan.',
    details: [
      'Total nilai ekspor: Rp 12,5 Triliun',
      'Komoditas utama: Tekstil, Makanan Olahan',
      'Negara tujuan utama: Jepang, Amerika Serikat'
    ],
    image: '/images/infografis2.jpg',
    topic: 'Ekspor',
    viewCount: '4.2K',
    downloadCount: '1.2K',
    fileSize: '2.3 MB',
    format: 'JPG',
    author: 'BPS',
    date: '3-1-2025',
    location: 'Semarang'
  },
  {
    id: 3,
    title: 'Statistik Impor Jateng 2024',
    slug: 'statistik-impor-jateng-2024',
    description: 'Data tren impor berdasarkan kategori barang dan negara asal.',
    fullDescription: 'Menampilkan rincian impor Jawa Tengah tahun 2024 dari negara utama serta jenis barang yang paling banyak diimpor.',
    details: [
      'Total nilai impor: Rp 9,8 Triliun',
      'Barang utama: Mesin dan peralatan elektronik',
      'Negara asal utama: Tiongkok, Korea Selatan'
    ],
    image: '/images/infografis3.jpg',
    topic: 'Impor',
    viewCount: '3.9K',
    downloadCount: '1.8K',
    fileSize: '1.9 MB',
    format: 'JPG',
    author: 'BPS',
    date: '30-12-2024',
    location: 'Semarang'
  },
  {
    id: 4,
    title: 'Nilai Tukar Petani 2024',
    slug: 'nilai-tukar-petani-2024',
    description: 'Perbandingan harga hasil pertanian dengan barang dan jasa yang dikonsumsi petani.',
    fullDescription: 'Membahas pergerakan nilai tukar petani sebagai indikator kesejahteraan petani di Jawa Tengah tahun 2024.',
    details: [
      'NTP Desember: 105,2',
      'Kenaikan dibanding tahun lalu: 2,8%',
      'Komoditas penyumbang: Padi dan Sayuran'
    ],
    image: '/images/infografis4.jpg',
    topic: 'Nilai Tukar Petani',
    viewCount: '3.1K',
    downloadCount: '950',
    fileSize: '1.5 MB',
    format: 'JPG',
    author: 'Dinas Pertanian',
    date: '27-12-2024',
    location: 'Boyolali'
  },
  {
    id: 5,
    title: 'Kunjungan Wisata Jateng 2024',
    slug: 'kunjungan-wisata-jateng-2024',
    description: 'Jumlah wisatawan domestik dan mancanegara, serta tujuan favorit.',
    fullDescription: 'Infografis ini memperlihatkan statistik kunjungan wisata ke Jawa Tengah sepanjang tahun 2024.',
    details: [
      'Total wisatawan: 5,2 juta',
      'Wisatawan mancanegara: 240 ribu',
      'Tujuan terpopuler: Candi Borobudur, Dieng, Karimunjawa'
    ],
    image: '/images/infografis5.jpg',
    topic: 'Pariwisata',
    viewCount: '6.5K',
    downloadCount: '3.2K',
    fileSize: '2.7 MB',
    format: 'JPG',
    author: 'Dispar',
    date: '22-12-2024',
    location: 'Magelang'
  },
  {
    id: 6,
    title: 'Transportasi Umum dan Jalan di Jateng',
    slug: 'tranportasi-umum-dan-jalan-di-jateng',
    description: 'Kondisi jaringan jalan dan data moda transportasi publik.',
    fullDescription: 'Mencakup kondisi infrastruktur jalan dan penggunaan transportasi umum di Jawa Tengah pada tahun 2024.',
    details: [
      'Panjang jalan provinsi: 2.300 km',
      'Kondisi baik: 78%',
      'Moda umum aktif: Bus AKDP, BRT, angkutan desa'
    ],
    image: '/images/infografis6.jpg',
    topic: 'Transportasi',
    viewCount: '4.8K',
    downloadCount: '1.6K',
    fileSize: '2.2 MB',
    format: 'JPG',
    author: 'Dishub',
    date: '18-12-2024',
    location: 'Solo'
  }
];
