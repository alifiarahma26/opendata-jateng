'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { datasets } from '@/data/dataset';
import { organizations } from '@/data/organizations';

interface DatasetDetailProps {
  datasetId: string;
}

export default function DatasetDetail({ datasetId }: DatasetDetailProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'structure' | 'activity'>('preview');
  const [openDropdown, setOpenDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentDataset = datasets.find(dataset => dataset.id === datasetId);
  const organization = organizations.find(org => org.id === currentDataset?.organizationId);

  // Handle dropdown click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Set share link
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleDownload = (title: string, format: string) => {
    setToastMessage('');
    setTimeout(() => {
      setToastMessage(`Berhasil mengunduh "${title}" dalam format ${format.toUpperCase()}`);
    }, 50);
    setOpenDropdown(false);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(shareUrl);
      toast.success('Link berhasil disalin ke clipboard!');
    }
  };

  if (!currentDataset) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dataset Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-4">Dataset yang Anda cari tidak tersedia</p>
          <Link href="/datasets" className="text-blue-600 hover:text-blue-700 font-medium">
            Kembali ke Daftar Dataset
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/datasets" className="hover:text-blue-600">Dataset</Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="text-gray-900">{currentDataset.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Detail */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentDataset.title}</h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{currentDataset.description}</p>

              {currentDataset.tags && currentDataset.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {currentDataset.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <InfoCard label="Unduhan" value={currentDataset.downloads} />
                <InfoCard label="Ukuran" value={currentDataset.size} />
                <InfoCard label="Format" value={currentDataset.format?.length || 0} />
                <InfoCard label="Kolom" value={currentDataset.fields?.length || 0} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Informasi Dataset</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-600">Organisasi:</span>
                    {organization ? (
                      <Link
                        href={`/organization/${organization.id}`}
                        className="block font-medium text-blue-600 hover:text-blue-700"
                      >
                        {organization.name}
                      </Link>
                    ) : (
                      <p className="font-medium text-gray-900">{currentDataset.organizationId}</p>
                    )}
                  </div>

                  <div>
                    <span className="text-gray-600">Format:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {currentDataset.format.map((fmt, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {fmt}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-600">Terakhir Diperbarui:</span>
                    <p className="font-medium text-gray-900">{currentDataset.lastUpdated}</p>
                  </div>

                  <div>
                    <span className="text-gray-600">Lisensi:</span>
                    <p className="font-medium text-gray-900">{currentDataset.license}</p>
                  </div>
                </div>

                {/* Dropdown Download */}
                <div className="relative mt-6" ref={dropdownRef}>
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <i className="ri-download-line mr-2"></i>
                    Unduh Dataset
                    <i className="ri-arrow-drop-down-line ml-2 text-lg"></i>
                  </button>

                  {openDropdown && (
                    <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      {currentDataset.format.map((format: string) => (
                        <button
                          key={format}
                          onClick={() => handleDownload(currentDataset.title, format)}
                          className="block w-full text-left px-4 py-2 hover:bg-blue-600 hover:text-white text-sm"
                        >
                          {format.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Share */}
                <div className="mt-6">
                  <span className="text-gray-600 text-sm font-medium mb-2 block">Bagikan:</span>
                  <div className="flex gap-4">
                    <button
                      onClick={handleCopyLink}
                      className="text-gray-700 hover:text-blue-600 flex items-center text-sm"
                    >
                      <i className="ri-link mr-1"></i>Salin Link
                    </button>
                    {shareUrl && (
                      <>
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-green-600 flex items-center text-sm"
                        >
                          <i className="ri-whatsapp-line mr-1"></i>WhatsApp
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-blue-500 flex items-center text-sm"
                        >
                          <i className="ri-twitter-x-line mr-1"></i>Twitter
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <nav className="flex space-x-8 px-6 border-b border-gray-200">
            {(['preview', 'structure', 'activity'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'preview' && 'Preview Data'}
                {tab === 'structure' && 'Struktur Data'}
                {tab === 'activity' && 'Activity Stream'}
              </button>
            ))}
          </nav>

          <div className="p-6">
            {activeTab === 'preview' && currentDataset.preview && currentDataset.preview.length > 0 && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {Object.keys(currentDataset.preview[0]).map((key) => (
                        <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {key.replace('_', ' ')}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentDataset.preview.slice(0, 5).map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        {Object.values(row).map((value, i) => (
                          <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-4">Menampilkan 5 baris pertama dari dataset</p>
              </div>
            )}

            {activeTab === 'preview' && (!currentDataset.preview || currentDataset.preview.length === 0) && (
              <p className="text-gray-500 text-center py-8">Tidak ada preview data tersedia</p>
            )}

            {activeTab === 'structure' && (
              <div className="space-y-4">
                {currentDataset.fields?.map((field, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{field.name}</h4>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{field.type}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{field.description}</p>
                  </div>
                )) || (
                  <p className="text-gray-500 text-center py-8">Tidak ada informasi struktur data tersedia</p>
                )}
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-4">
                <ActivityItem icon="refresh" color="green" title="Dataset diperbarui" time="2 jam yang lalu" />
                <ActivityItem icon="download" color="blue" title="Dataset diunduh 15 kali hari ini" time="5 jam yang lalu" />
                <ActivityItem icon="eye" color="yellow" title="Dataset dilihat 234 kali" time="1 hari yang lalu" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeinout z-50">
          {toastMessage}
        </div>
      )}
      <style jsx>{`
        @keyframes fadeinout {
          0% {opacity: 0; transform: translateY(20px);}
          10%, 90% {opacity: 1; transform: translateY(0);}
          100% {opacity: 0; transform: translateY(20px);}
        }
        .animate-fadeinout {
          animation: fadeinout 3s forwards;
        }
      `}</style>

      <Footer />
    </div>
  );
}

// Components
const InfoCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className="text-center p-4 bg-gray-50 rounded-lg">
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const ActivityItem = ({
  icon,
  color,
  title,
  time,
}: {
  icon: string;
  color: 'green' | 'blue' | 'yellow';
  title: string;
  time: string;
}) => {
  const colorMap = {
    green: 'bg-green-50 text-green-600',
    blue: 'bg-blue-50 text-blue-600',
    yellow: 'bg-yellow-50 text-yellow-600',
  };

  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorMap[color]}`}>
        <i className={`ri-${icon}-line`}></i>
      </div>
      <div>
        <p className="text-gray-900 font-medium">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
};