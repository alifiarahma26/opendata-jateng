'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { infographics } from '../../../data/infographics';
import toast from 'react-hot-toast';

interface InfographicDetailProps {
  slug: string;
}

export default function InfographicDetail({ slug }: InfographicDetailProps) {
  const [downloadStatus, setDownloadStatus] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const currentData = infographics.find((item) => item.slug === slug) || infographics[0];

  const handleDownload = () => {
    setDownloadStatus('Mengunduh...');
    setTimeout(() => {
      setDownloadStatus('Unduhan berhasil!');
    }, 1500);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(shareUrl);
      toast.success('Link berhasil disalin ke clipboard!');
    }
  };

  const getCategoryColor = (topic: string) => {
    const colors = {
      'Inflasi': 'bg-red-600',
      'Ekspor': 'bg-blue-600',
      'Impor': 'bg-yellow-600',
      'Nilai Tukar Petani': 'bg-green-600',
      'Pariwisata': 'bg-pink-600',
      'Transportasi': 'bg-purple-600',
    };
    return colors[topic as keyof typeof colors] || 'bg-gray-600';
  };

  // Handle jika infografis tidak ditemukan
  if (!currentData && slug) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-12 px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Infografis Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-4">Infografis yang Anda cari tidak tersedia</p>
            <Link href="/infographics" className="text-blue-600 hover:text-blue-700 font-medium">
              Kembali ke Daftar Infografis
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500 space-x-2 flex items-center">
            <Link href="/" className="hover:text-blue-600">Beranda</Link>
            <span>›</span>
            <Link href="/infographics" className="hover:text-blue-600">Infografis</Link>
            <span>›</span>
            <span className="text-gray-900">{currentData.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Image */}
            <div className="bg-white rounded-xl shadow-lg p-4 flex justify-center">
              <img
                src={currentData.image}
                alt={currentData.title}
                className="max-w-full h-auto rounded cursor-pointer"
                onClick={() => setShowPreview(true)}
              />
            </div>

            {/* Detail */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className={`inline-block text-xs font-medium text-white px-3 py-1 rounded-full mb-4 ${getCategoryColor(currentData.topic)}`}>
                {currentData.topic}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentData.title}</h1>
              <p className="text-gray-600 mb-6">{currentData.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="flex items-center text-gray-600"><i className="ri-user-line mr-2"></i>{currentData.author}</div>
                <div className="flex items-center text-gray-600"><i className="ri-calendar-line mr-2"></i>{currentData.date}</div>
                <div className="flex items-center text-gray-600"><i className="ri-map-pin-line mr-2"></i>{currentData.location}</div>
                <div className="flex items-center text-gray-600"><i className="ri-eye-line mr-2"></i>{currentData.viewCount} kali dilihat</div>
                <div className="flex items-center text-gray-600"><i className="ri-download-line mr-2"></i>{currentData.downloadCount} unduhan</div>
                <div className="flex items-center text-gray-600"><i className="ri-image-line mr-2"></i>{currentData.format}</div>
              </div>

              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex justify-center items-center mb-4"
              >
                <i className="ri-download-2-line mr-2"></i>
                Unduh Infografis
              </button>

              {downloadStatus && (
                <div className="text-sm text-center py-2 bg-green-50 text-green-700 rounded">{downloadStatus}</div>
              )}

              {/* Share buttons */}
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

          {/* Deskripsi lengkap */}
          {currentData.fullDescription && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tentang Infografis</h2>
              <p className="text-gray-600 mb-6">{currentData.fullDescription}</p>
              {currentData.details && (
                <ul className="space-y-2">
                  {currentData.details.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2 mt-1"></i>{item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Back link */}
          <div className="text-center">
            <Link href="/infographics" className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg inline-flex items-center">
              <i className="ri-arrow-left-line mr-2"></i>Kembali ke Infografis
            </Link>
          </div>
        </div>
      </div>

      {/* Image preview modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-xl p-4 max-w-3xl w-full">
            <button
              className="absolute top-3 right-3 bg-white text-black text-3xl font-bold hover:text-red-600 hover:bg-gray-100 border border-gray-300 rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition"
              onClick={() => setShowPreview(false)}
            >
              &times;
            </button>
            <img src={currentData.image} alt="Preview" className="w-full aspect-square object-contain rounded-lg" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}