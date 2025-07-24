'use client';

import { clsx } from 'clsx';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { organizations } from '@/data/organizations';
import { datasets as allDatasets } from '@/data/dataset';
import { topics } from '@/data/topics';

interface OrganizationDetailProps {
  organizationId: string;
}

export default function OrganizationDetail({ organizationId }: OrganizationDetailProps) {
  const [activeTab, setActiveTab] = useState<'datasets' | 'activity'>('datasets');
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState('');

  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const getOrganizationById = (orgId: string) => {
    return organizations.find(org => org.id === orgId) || null;
  };

  const getTopicByOrgId = (orgId: string) => {
    const org = getOrganizationById(orgId);
    if (!org) return null;

    const orgTopic = org.topic.trim().toLowerCase();
    return topics.find(t => t.title.trim().toLowerCase() === orgTopic);
  };

  const getWarnaKategoriBerdasarkanOrgId = (orgId: string) => {
    const topic = getTopicByOrgId(orgId);
    return topic ? topic.color : 'bg-gray-500'; // fallback
  };

  const getTopicTitleByOrgId = (orgId: string) => {
    const topic = getTopicByOrgId(orgId);
    return topic ? topic.title : 'Tidak diketahui';
  };

  const currentOrg = getOrganizationById(organizationId);
  const currentOrgDatasets = allDatasets.filter(ds => ds.organizationId === organizationId);

  const activityStream = [
    {
      type: 'dataset_updated',
      title: 'Dataset "Data Pegawai ASN 2024" diperbarui',
      time: '2 jam yang lalu',
      icon: 'ri-refresh-line'
    },
    {
      type: 'dataset_created',
      title: 'Dataset baru "Rekrutmen CPNS 2024" ditambahkan',
      time: '1 hari yang lalu',
      icon: 'ri-add-circle-line'
    },
    {
      type: 'dataset_downloaded',
      title: 'Dataset "Data Diklat Pegawai" diunduh 50 kali',
      time: '2 hari yang lalu',
      icon: 'ri-download-line'
    },
    {
      type: 'organization_updated',
      title: 'Informasi organisasi diperbarui',
      time: '3 hari yang lalu',
      icon: 'ri-building-line'
    }
  ];

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

  const handleDownload = (datasetTitle: string, format: string) => {
    setToastMessage('');
    setTimeout(() => {
      setToastMessage(`Berhasil mengunduh "${datasetTitle}" dalam format ${format.toUpperCase()}`);
    }, 50);
    setOpenDropdownId(null);
  };

  const formatTanggal = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (!currentOrg) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Organisasi Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-4">Organisasi yang Anda cari tidak tersedia</p>
          <Link href="/organization" className="text-blue-600 hover:text-blue-700 font-medium">
            Kembali ke Daftar Organisasi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/organization" className="hover:text-blue-600">Organisasi</Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="text-gray-900">{currentOrg.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="lg:w-80 flex-shrink-0">
              <div className="h-full max-h-[700px]">
                <img
                  src={currentOrg.image || '/placeholder-org.png'}
                  alt={currentOrg.name}
                  className="w-full h-full object-cover object-top rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentOrg.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{currentOrg.fullName}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{currentOrg.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <i className="ri-map-pin-line text-gray-400"></i>
                  <span className="text-gray-700">{currentOrg.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-phone-line text-gray-400"></i>
                  <span className="text-gray-700">{currentOrg.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-gray-400"></i>
                  <a href={`mailto:${currentOrg.email}`} className="text-blue-600 hover:text-blue-700">
                    {currentOrg.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-global-line text-gray-400"></i>
                  <a
                    href={currentOrg.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Website Resmi
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Kepala Badan:</span>
                    <p className="font-medium text-gray-900">{currentOrg.head}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Didirikan:</span>
                    <p className="font-medium text-gray-900">{currentOrg.established}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('datasets')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'datasets'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Dataset ({currentOrgDatasets.length})
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'activity'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Activity Stream
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'datasets' && (
              <div className="space-y-6">
                {currentOrgDatasets.map((dataset) => {
                  const warnaKategori = getWarnaKategoriBerdasarkanOrgId(dataset.organizationId);
                  const organisasi = getOrganizationById(dataset.organizationId);

                  return (
                    <article
                      key={dataset.id}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 p-6 cursor-pointer flex flex-col md:flex-row justify-between"
                      onClick={() => window.location.href = `/datasets/${dataset.id}`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center mb-3 flex-wrap gap-3">
                          <span className={`text-xs font-semibold text-white px-2 py-1 rounded-full ${warnaKategori}`}>
                            {getTopicTitleByOrgId(dataset.organizationId)}
                          </span>
                          <span className="text-sm text-gray-500">
                            {organisasi?.name || 'Instansi tidak diketahui'}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                          {dataset.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">{dataset.description}</p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <i className="ri-calendar-line mr-2" />
                            Diperbarui {formatTanggal(dataset.lastUpdated)}
                          </div>
                          <div className="flex items-center">
                            <i className="ri-file-line mr-2" />
                            {dataset.size}
                          </div>
                          <div className="flex items-center">
                            <i className="ri-code-line mr-2" />
                            {dataset.format.join(', ')}
                          </div>
                          <div className="flex items-center">
                            <i className="ri-download-line mr-2" />
                            {dataset.downloads.toLocaleString()} kali diunduh
                          </div>
                        </div>
                      </div>

                      {/* Dropdown tombol unduh */}
                      <div
                        className="relative mt-4 md:mt-0 md:ml-6 flex-shrink-0"
                        ref={el => { dropdownRefs.current[dataset.id] = el; }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDropdownId(openDropdownId === dataset.id ? null : dataset.id);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
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
                                className="block w-full text-left px-4 py-2 hover:bg-blue-600 hover:text-white text-sm"
                              >
                                {format.toUpperCase()}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-4">
                {activityStream.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <i className={`${activity.icon} text-blue-600`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeinout">
          {toastMessage}
        </div>
      )}

      <Footer />

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
    </div>
  );
}