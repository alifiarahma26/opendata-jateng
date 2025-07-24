'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { organizations as orgData } from '@/data/organizations';
import { datasets } from '@/data/dataset'; // pastikan ini sesuai nama file

export default function OrganizationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
  const itemsPerPageOptions = [10, 20, 50, 100];


  // Hitung jumlah dataset berdasarkan organizationId
  const organizations = orgData.map((org) => {
    const datasetsCount = datasets.filter((d) => d.organizationId === org.id).length;
    return { ...org, datasetsCount };
  });

  const filteredOrganizations = organizations
    .filter((org) =>
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOrder) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'datasets-asc':
          return a.datasetsCount - b.datasetsCount;
        case 'datasets-desc':
          return b.datasetsCount - a.datasetsCount;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredOrganizations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrganizations = filteredOrganizations.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortOrder, itemsPerPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Judul dan Deskripsi */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Organisasi</h2>
          <p className="text-gray-600 mt-1">
            Temukan organisasi pemerintah dan dataset yang mereka kelola.
          </p>
        </div>

{/* Filter & Sort */}
<div className="bg-white border border-gray-200 rounded-xl shadow p-6 mb-8">
  <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Cari organisasi..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <i className="ri-search-line text-gray-400 text-lg" />
      </div>
    </div>

    <div className="flex items-center gap-2 flex-shrink-0">
      <label htmlFor="sortOrder" className="text-sm text-gray-600 whitespace-nowrap">
        Urutkan:
      </label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="name-asc">Nama A-Z</option>
        <option value="name-desc">Nama Z-A</option>
        <option value="datasets-desc">Dataset Terbanyak</option>
        <option value="datasets-asc">Dataset Tersedikit</option>
      </select>
    </div>
  </div>
</div>


        <p className="text-gray-600 mb-6">
          <span className="font-semibold">{filteredOrganizations.length}</span> organisasi ditemukan
        </p>

        {paginatedOrganizations.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {paginatedOrganizations.map((org) => (
              <Link
                key={org.id}
                href={`/organization/${org.id}`}
                className="block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="p-5 flex gap-5 items-start">
                  <div className="w-32 h-24 overflow-hidden rounded-lg flex-shrink-0 bg-gray-100">
                    <img
                      src={org.image}
                      alt={`Gambar ${org.name}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                        {org.name}
                      </h3>
                      <span className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                        <i className="ri-database-2-line mr-1" />
                        {org.datasetsCount}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{org.description}</p>
                    <div className="text-blue-600 text-sm mt-2 inline-flex items-center font-medium hover:underline">
                      Lihat Detail <i className="ri-arrow-right-line ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="ri-search-line text-2xl text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Tidak ada organisasi ditemukan</h3>
            <p className="text-gray-600">Coba gunakan kata kunci pencarian yang berbeda.</p>
          </div>
        )}

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
      {itemsPerPageOptions.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <span>organisasi per halaman</span>
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

      <Footer />
    </div>
  );
}
