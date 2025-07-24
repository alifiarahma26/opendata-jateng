'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { organizations as orgData } from '@/data/organizations';
import { datasets } from '@/data/dataset';
import { topics } from '@/data/topics';
import { useSearchParams } from 'next/navigation';

export default function DatasetPageContent() {
  // States filter dan pencarian
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown dan toast unduh
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState('');

  const searchParams = useSearchParams();
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [itemsPerPage, setItemsPerPage] = useState(10); // default: 10 per halaman

  useEffect(() => {
    const initialSearch = searchParams.get('search') || '';
    const initialTopic = searchParams.get('topic') || '';

    setSearchQuery(initialSearch);
    setSelectedTopic(initialTopic);
  }, [searchParams]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedOrg, selectedTopic, sortOrder, itemsPerPage]);

  // Fungsi dapatkan warna kategori berdasarkan topic
  const getCategoryColor = (topicTitle: string) => {
    const topic = topics.find(t => t.title.toLowerCase() === topicTitle.toLowerCase());
    return topic ? topic.color : 'bg-gray-500';
  };

  // Filter dataset berdasar input dan dropdown
  const filteredDatasets = datasets.filter((dataset) => {
    // Cari organisasi dataset ini
    const org = orgData.find(o => o.id === dataset.organizationId);
    const orgName = org?.name.toLowerCase() ?? '';
    const orgTopic = org?.topic.toLowerCase() ?? '';

    // Filter pencarian (judul atau organisasi)
    const matchesSearch =
      dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      orgName.includes(searchQuery.toLowerCase());

    // Filter organisasi jika dipilih
    const matchesOrg = selectedOrg ? dataset.organizationId === selectedOrg : true;

    // Filter topik jika dipilih
    const matchesTopic = selectedTopic ? orgTopic === selectedTopic.toLowerCase() : true;

    return matchesSearch && matchesOrg && matchesTopic;
  });

  // Sorting berdasarkan pilihan
  const sortedDatasets = filteredDatasets.sort((a, b) => {
    switch (sortOrder) {
      case 'name-asc':
        return a.title.localeCompare(b.title);
      case 'name-desc':
        return b.title.localeCompare(a.title);
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedDatasets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDatasets = sortedDatasets.slice(startIndex, startIndex + itemsPerPage);

  // Reset halaman jika filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedOrg, selectedTopic, sortOrder]);

  const formatTanggal = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Function to check if dataset is new (created within last 30 days)
  const isDatasetNew = (lastUpdated: string) => {
    const updateDate = new Date(lastUpdated);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return updateDate > thirtyDaysAgo;
  };

  // Klik di luar dropdown untuk tutup dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openDropdownId &&
        dropdownRefs.current[openDropdownId] &&
        !dropdownRefs.current[openDropdownId]?.contains(event.target as Node)
      ) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdownId]);

  // Handle download dengan toast notifikasi
  const handleDownload = (datasetTitle: string, format: string) => {
    setToastMessage('');
    setTimeout(() => {
      setToastMessage(`Berhasil mengunduh "${datasetTitle}" dalam format ${format.toUpperCase()}`);
    }, 50);
    setOpenDropdownId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10 flex-1">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Dataset</h2>
          <p className="text-gray-600 mt-1">Cari dan temukan dataset dari berbagai organisasi pemerintah.</p>
        </div>

        {/* Filter bar */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 mb-4 flex flex-col md:flex-row gap-4 items-center">
          {/* Search input */}
          <div className="relative flex-grow md:flex-grow-[4]">
            <input
              type="text"
              placeholder="Cari dataset atau organisasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              aria-label="Cari dataset atau organisasi"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="ri-search-line text-gray-400 text-lg" />
            </div>
          </div>

          {/* Dropdown filter organisasi */}
          <select
            value={selectedOrg}
            onChange={(e) => setSelectedOrg(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none flex-shrink-0"
            aria-label="Filter berdasarkan organisasi"
          >
            <option value="">Semua Organisasi</option>
            {orgData.map((org) => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
          </select>

          {/* Dropdown filter topik */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none flex-shrink-0"
            aria-label="Filter berdasarkan topik"
          >
            <option value="">Semua Topik</option>
            {topics.map((topic) => (
              <option key={topic.title} value={topic.title}>
                {topic.title}
              </option>
            ))}
          </select>
        </div>

        {/* Info hasil + dropdown urutkan */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-gray-600">
            <span className="font-semibold">{sortedDatasets.length}</span> dataset ditemukan
          </p>
          <div>
            <label htmlFor="sortOrder" className="sr-only">
              Urutkan dataset
            </label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              aria-label="Urutkan dataset"
            >
              <option value="newest">Terbaru</option>
              <option value="name-asc">Nama A-Z</option>
              <option value="name-desc">Nama Z-A</option>
            </select>
          </div>
        </div>

        {/* List dataset */}
        <div className="space-y-6">
          {paginatedDatasets.length > 0 ? (
            paginatedDatasets.map((dataset) => {
              const org = orgData.find((o) => o.id === dataset.organizationId);
              const warnaKategori = org ? getCategoryColor(org.topic) : 'bg-gray-500';

              return (
                <div
                  key={dataset.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6 cursor-pointer flex items-start justify-between"
                  onClick={() => window.location.href = `/datasets/${dataset.id}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-3 flex-wrap gap-3">
                      {isDatasetNew(dataset.lastUpdated) && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
                          BARU
                        </span>
                      )}
                      <span
                        className={`text-xs font-semibold text-white px-2 py-1 rounded-full ${warnaKategori} whitespace-nowrap`}
                      >
                        {org?.topic || 'Tidak diketahui'}
                      </span>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-3">{org?.name || 'Instansi tidak diketahui'}</span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">
                      {dataset.title}
                    </h4>

                    <p className="text-gray-600 mb-4 leading-relaxed max-w-prose">{dataset.description}</p>

                    <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center whitespace-nowrap">
                        <i className="ri-calendar-line mr-2"></i>
                        Dipublikasikan {formatTanggal(dataset.lastUpdated)}
                      </div>
                      <div className="flex items-center whitespace-nowrap">
                        <i className="ri-file-line mr-2"></i>
                        {dataset.size}
                      </div>
                      <div className="flex items-center whitespace-nowrap">
                        <i className="ri-code-line mr-2"></i>
                        {dataset.format.join(', ')}
                      </div>
                      <div className="flex items-center whitespace-nowrap">
                        <i className="ri-download-line mr-2"></i>
                        {dataset.downloads.toLocaleString()} kali diunduh
                      </div>
                    </div>
                  </div>

                  {/* Tombol unduh + dropdown */}
                  <div
                    className="relative ml-6 flex-shrink-0"
                    ref={el => { dropdownRefs.current[dataset.id] = el; }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdownId(openDropdownId === dataset.id ? null : dataset.id);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-lg font-medium whitespace-nowrap text-sm inline-flex items-center justify-center transition"
                    >
                      <i className="ri-download-line mr-2"></i>
                      Unduh
                      <i className="ri-arrow-drop-down-line ml-1"></i>
                    </button>

                    {openDropdownId === dataset.id && (
                      <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        {dataset.format.map((format) => (
                          <button
                            key={format}
                            onClick={() => handleDownload(dataset.title, format)}
                            className="block w-full text-left px-4 py-2 hover:bg-blue-600 hover:text-white rounded-md text-sm"
                          >
                            {format.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="ri-search-line text-2xl text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Dataset tidak ditemukan</h3>
              <p className="text-gray-600">Coba gunakan filter atau kata kunci lain.</p>
            </div>
          )}
        </div>

        {/* Pagination & Items Per Page */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 border-t pt-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Tampilkan</span>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {[10, 20, 50, 100].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <span>data per halaman</span>
          </div>

          {totalPages > 1 && (
            <nav
              className="flex items-center gap-2"
              role="navigation"
              aria-label="Pagination Navigation"
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-100 disabled:opacity-50"
                aria-label="Halaman sebelumnya"
              >
                Sebelumnya
              </button>
              <span
                className="px-4 py-2 text-sm text-gray-600"
                aria-live="polite"
                aria-atomic="true"
              >
                Halaman {currentPage} dari {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-100 disabled:opacity-50"
                aria-label="Halaman berikutnya"
              >
                Berikutnya
              </button>
            </nav>
          )}
        </div>
      </main>

      {/* Toast notifikasi */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeinout z-50">
          {toastMessage}
        </div>
      )}

      <Footer />

      <style>{`
        @keyframes fadeinout {
          0% {opacity: 0; transform: translateY(20px);}
          10%, 90% {opacity: 1; transform: translateY(0);}
          100% {opacity: 0; transform: translateY(-20px);}
        }
        .animate-fadeinout {
          animation: fadeinout 3s forwards;
        }
      `}</style>
    </div>
  );
}