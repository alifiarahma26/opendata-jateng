'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { datasets } from '@/data/dataset';
import { topics } from '@/data/topics';
import { organizations } from '@/data/organizations';

export default function NewestDatasets() {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState('');

  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const sortedDatasets = [...datasets].sort(
    (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  );

  const getOrganizationById = (orgId: string) =>
    organizations.find(org => org.id === orgId);

  const getWarnaKategoriBerdasarkanOrgId = (orgId: string) => {
    const org = getOrganizationById(orgId);
    if (!org) return 'bg-gray-500';

    const topic = topics.find(
      t => t.title.toLowerCase() === org.topic.toLowerCase()
    );
    return topic ? topic.color : 'bg-gray-500';
  };

  const getTopicTitleByOrgId = (orgId: string) => {
    const org = getOrganizationById(orgId);
    if (!org) return 'Tidak diketahui';
    const topic = topics.find(t => t.title.toLowerCase() === org.topic.toLowerCase());
    return topic ? topic.title : 'Tidak diketahui';
  };

  const formatTanggal = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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

  // Fungsi handle download dan munculkan toast
  const handleDownload = (datasetTitle: string, format: string) => {
    setToastMessage('');
    setTimeout(() => {
      setToastMessage(`Berhasil mengunduh "${datasetTitle}" dalam format ${format.toUpperCase()}`);
    }, 50);
    setOpenDropdownId(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dataset Terbaru</h2>
            <p className="text-xl text-gray-600 max-w-xl">
              Dataset terbaru dan terupdate dari berbagai instansi pemerintah di Jawa Tengah
            </p>
          </div>
          <Link
            href="/datasets?sort=newest"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition"
          >
            Lihat Semua Dataset Terbaru
          </Link>
        </div>

        <div className="space-y-6">
          {sortedDatasets.slice(0, 6).map((dataset) => {

            const warnaKategori = getWarnaKategoriBerdasarkanOrgId(dataset.organizationId);
            const organisasi = getOrganizationById(dataset.organizationId);

            return (
              <div
                key={dataset.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6 cursor-pointer flex items-start justify-between"
                onClick={() => window.location.href = `/datasets/${dataset.id}`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-3 flex-wrap gap-3">
                    <span
                      className={`text-xs font-semibold text-white px-2 py-1 rounded-full ${warnaKategori} whitespace-nowrap`}
                    >
                      {getTopicTitleByOrgId(dataset.organizationId)}
                    </span>
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      {organisasi?.name || 'Instansi tidak diketahui'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {dataset.title}
                  </h3>

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
          })}
        </div>
      </div>

      {/* Toast notifikasi */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeinout z-50">
          {toastMessage}
        </div>
      )}

      <style>{`
        @keyframes fadeinout {
          0% {opacity: 0; transform: translateY(20px);}
          10%, 90% {opacity: 1; transform: translateY(0);}
          100% {opacity: 0; transform: translateY(20px);}
        }
        .animate-fadeinout {
          animation: fadeinout 3s forwards;
        }
      `}</style>
    </section>
  );
}