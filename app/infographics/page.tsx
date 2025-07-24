'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { infographics } from '@/data/infographics';

export default function InfographicsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const allTopics = Array.from(new Set(infographics.map((i) => i.topic)));
  const topics = ['all', ...allTopics];

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

  const normalize = (str: string) => str?.trim().toLowerCase();
  const filteredInfographics = infographics.filter((infographic) => {
    const matchesSearch =
      infographic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      infographic.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic =
      selectedTopic === 'all' ||
      normalize(infographic.topic) === normalize(selectedTopic);
    return matchesSearch && matchesTopic;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredInfographics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInfographics = filteredInfographics.slice(startIndex, startIndex + itemsPerPage);

  const handleChangePage = (direction: 'prev' | 'next') => {
    setCurrentPage((prev) =>
      direction === 'prev' ? Math.max(prev - 1, 1) : Math.min(prev + 1, totalPages)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Infografis</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Representasi visual statistik utama Provinsi Jawa Tengah dalam format infografis interaktif dan mudah dipahami.
          </p>
        </div>

        {/* Filter dan Pencarian */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
            <i className="ri-search-line text-gray-500 mr-3 text-lg"></i>
            <input
              type="text"
              placeholder="Cari infografis..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  setSelectedTopic(topic);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedTopic === topic
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {topic === 'all' ? 'Semua Topik' : topic}
              </button>
            ))}
          </div>
        </div>

        {/* Info hasil pencarian */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredInfographics.length} infografis ditemukan
          </p>
        </div>

        {/* Kartu infografis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedInfographics.map((infographic) => (
            <Link
              key={infographic.id}
              href={`/infographics/${infographic.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={infographic.image}
                  alt={infographic.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tidak ditemukan */}
        {filteredInfographics.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-file-search-line text-6xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Infografis tidak ditemukan</h3>
            <p className="text-gray-500">Coba sesuaikan kata kunci pencarian atau filter yang digunakan</p>
          </div>
        )}

        {/* Dropdown jumlah per halaman + pagination */}
        {filteredInfographics.length > 0 && (
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Tampilkan</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                {[10, 20, 50].map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
              <span> infografis per halaman</span>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => handleChangePage('prev')}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded border border-gray-300 text-sm text-gray-700 disabled:opacity-40"
              >
                &larr; Sebelumnya
              </button>
              <span className="text-sm text-gray-600">
                Halaman {currentPage} dari {totalPages}
              </span>
              <button
                onClick={() => handleChangePage('next')}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded border border-gray-300 text-sm text-gray-700 disabled:opacity-40"
              >
                Berikutnya &rarr;
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
