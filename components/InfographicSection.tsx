'use client';

import Link from 'next/link';
import { infographics } from '@/data/infographics';

export default function InfographicSection() {
  const getCategoryColor = (topic: string) => {
    const colors: { [key: string]: string } = {
      'Inflasi': 'bg-red-500',
            'Ekspor': 'bg-green-600',
            'Impor': 'bg-blue-600',
            'Nilai Tukar Petani': 'bg-yellow-500',
            'Pariwisata': 'bg-pink-500',
            'Transportasi': 'bg-indigo-600',
            'Kemiskinan': 'bg-orange-500',
            'Gini Ratio': 'bg-purple-600',
            'Index Pembangunan Manusia': 'bg-teal-600',
      'Tingkat Pengangguran Terbuka': 'bg-rose-500',
      'Pertumbuhan Ekonomi': 'bg-emerald-600'
    };
    return colors[topic] || 'bg-gray-400';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Infografis</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Representasi visual statistik utama Provinsi Jawa Tengah dalam format infografis interaktif dan mudah dipahami.
          </p>
        </div>

        {/* Kartu Infografis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infographics.slice(0, 9).map((infographic) => (

            <Link
             key={infographic.id}
                           href={`/infographics/${infographic.slug}`}
                           className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={infographic.image}
                  alt={infographic.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 text-xs font-medium text-white px-2 py-1 rounded-full ${getCategoryColor(infographic.topic)}`}>
                  {infographic.topic}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-gray-900">{infographic.format}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {infographic.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{infographic.description}</p>

                <div className="space-y-2 mb-4 text-xs text-gray-500">
                  <div className="flex items-center justify-between">
                    <span><i className="ri-user-line mr-1"></i>{infographic.author}</span>
                    <span><i className="ri-calendar-line mr-1"></i>{infographic.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span><i className="ri-map-pin-line mr-1"></i>{infographic.location}</span>
                    <span><i className="ri-eye-line mr-1"></i>{infographic.viewCount} kali dilihat</span>
                  </div>
                  {/* <div className="flex items-center justify-end">
                    <i className="ri-download-line mr-1"></i>{infographic.downloadCount} unduh
                  </div> */}
                </div>
              </div>
            </Link>
          ))}
        </div>


        <div className="mt-12 text-center">
          <Link
            href="/infographics"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold whitespace-nowrap inline-flex items-center"
          >
            <i className="ri-image-line mr-2"></i>
            Lihat Semua Infografis
          </Link>
        </div>
      </div>
    </section>
  );
}
