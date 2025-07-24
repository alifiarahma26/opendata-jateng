'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HeroSection() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchInput.trim()) {
      router.push(`/datasets?search=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20government%20building%20in%20Central%20Java%20Indonesia%20with%20traditional%20Javanese%20architecture%20elements%2C%20official%20government%20complex%20with%20beautiful%20landscaping%2C%20clear%20blue%20sky%2C%20professional%20government%20photography%20style%2C%20clean%20minimalist%20background%20perfect%20for%20overlaying%20white%20text%20content%20on%20the%20left%20side%2C%20image%20should%20be%20cropped%20to%20show%20less%20building%20details%20to%20avoid%20interfering%20with%20text%20readability&width=1200&height=600&seq=hero-jateng-cropped-1&orientation=landscape')`,
      }}
    >
      <div className="bg-white/60 backdrop-blur-md p-10 rounded-xl max-w-3xl shadow-lg z-10 ml-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Portal Data
          <span className="block text-blue-800">Jawa Tengah</span>
        </h1>
        <p className="text-xl mb-8 text-gray-800 leading-relaxed">
          Akses data, statistik, dan informasi Jawa Tengah secara terbuka dan mudah. Transparansi pemerintahan untuk masyarakat, akademisi, dan bisnis.
        </p>

        {/* Search Bar */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-inner">
          <div className="flex items-center">
            <i className="ri-search-line text-gray-500 mr-3 text-lg"></i>
            <input
              type="text"
              placeholder="Cari data atau statistik pemerintah..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium whitespace-nowrap cursor-pointer"
            >
              Cari
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
