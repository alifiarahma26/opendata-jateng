'use client';
//
import { useState, useEffect } from 'react';

export default function StrategicIndicators() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

const indicators = [
  {
    title: 'Nilai Tukar Petani (NTP)',
    number: '113,72',
    description: 'Nilai Tukar Petani Juni 2025 naik 1.83% dibanding periode lalu Mei 2025, menunjukkan peningkatan daya beli petani dan kesejahteraan sektor pertanian',
    color: 'bg-green-600',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80',
    unit: 'indeks',
    trend: '+1.83%',
    trendColor: 'text-green-600'
  },
  {
    title: 'Ekspor',
    number: '3.821,19',
    description: 'Nilai ekspor Jateng Januari–April 2025 tercatat US$ 3.821,19 juta, naik 7,46 % YoY, memperlihatkan kekuatan ekspor non‑migas provinsi.',
    color: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop',
    unit: 'juta USD',
    trend: '+5,96% YoY',
    trendColor: 'text-green-600'
  },
  {
    title: 'Impor',
    number: '1.059,39',
    unit: 'juta USD (Mar 2025)',
    trend: '↓ 10,9%',
    trendColor: 'text-red-500',
    color: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=300&fit=crop',
    description: 'Nilai impor Jateng Maret 2025 sebesar USD 1.059,39 juta—turun 10,92 % dari Februari yang mencapai USD 1.189,45 juta.'
  },
  {
    title: 'Pertumbuhan Ekonomi',
    number: '4,96%',
    description: 'Ekonomi Jateng tumbuh 4,96 % YoY di Triwulan I 2025—lebih tinggi dari nasional.',
    color: 'bg-emerald-600',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=300&fit=crop',
    unit: 'y-o-y (Triw I 2025)',
    trend: 'Stabil',
    trendColor: 'text-blue-600'
  },
  {
    title: 'Indeks Pembangunan Manusia',
    number: '72,8',
    description: 'IPM Jateng naik menjadi 73,87 pada 2024 (+0,48 poin YoY).',
    color: 'bg-indigo-600',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=300&fit=crop',
    unit: 'poin',
    trend: 'Naik',
    trendColor: 'text-green-600'
  },
  {
    title: 'Tingkat Pengangguran Terbuka',
    number: '4,33%',
    description: 'TPT Jateng turun menjadi 4,33 % pada Feb 2025.',
    color: 'bg-indigo-600',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop',
    unit: 'Februari 2025',
    trend: 'Turun',
    trendColor: 'text-green-600'
  },
  {
    title: 'Inflasi',
    number: '0.24%',
    description: 'Inflasi bulan Juni 2025 tercatat 0,24% (m-to-m).',
    color: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop',
    unit: 'm-to-m (Juni 2025)',
    trend: 'Naik',
    trendColor: 'text-red-500'
  },
  {
    title: 'Indeks Persepsi Kualitas Pelayanan',
    number: '3.8784',
    unit: 'Indeks (Triw I 2024)',
    trend: 'Sangat Baik',
    trendColor: 'text-green-600',
    color: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop',
    description: 'IPKP Jateng tercatat 3,8784 (Sangat Baik).'
  },
  {
    title: 'Neraca Perdagangan',
    number: 'USD 6,55 M',
    description: 'Surplus neraca perdagangan Jawa Tengah pada 2023.',
    color: 'bg-cyan-600',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=300&fit=crop',
    unit: 'Surplus',  
    trend: '+3.4% dari 2022',
    trendColor: 'text-green-600'
  },
  {
    title: 'Kemiskinan',
    number: '9.58%',
    unit: 'Sep 2024',
    trend: '↓ 0,89 poin',
    trendColor: 'text-green-600',
    color: 'bg-yellow-600',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=300&fit=crop',
    description: 'Tingkat kemiskinan Jawa Tengah turun ke 9,58%.'
  },
  {
    title: 'Gini Ratio',
    number: '0,364',
    unit: 'Sep 2024',
    trend: '↓ 0,003 poin',
    trendColor: 'text-green-600',
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=300&fit=crop',
    description: 'Gini Ratio Jateng turun menjadi 0,364.'
  }
];


  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % indicators.length);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + indicators.length) % indicators.length);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % indicators.length);
        setTimeout(() => setIsAnimating(false), 700);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const getVisibleIndicators = () => {
    const prevIndex = (currentSlide - 1 + indicators.length) % indicators.length;
    const nextIndex = (currentSlide + 1) % indicators.length;
    return [
      { data: indicators[prevIndex], position: 'prev' },
      { data: indicators[currentSlide], position: 'current' },
      { data: indicators[nextIndex], position: 'next' }
    ];
  };

  const visibleIndicators = getVisibleIndicators();
  const currentIndicator = indicators[currentSlide];

  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Indikator Strategis</h2>
          <p className="text-gray-600">Indikator dari data Badan Pusat Statistik Jawa Tengah</p>
        </div>

        <div className="relative">
          <button 
            onClick={prevSlide} 
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide} 
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Layout - Single Card */}
          <div className="block md:hidden px-8">
            <div className="flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-out">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={currentIndicator.image}
                    alt={currentIndicator.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-900 leading-tight">
                      {currentIndicator.title}
                    </h3>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${currentIndicator.trendColor}
                        ${currentIndicator.trendColor === 'text-green-600' ? 'bg-green-50' :
                          currentIndicator.trendColor === 'text-blue-600' ? 'bg-blue-50' :
                          currentIndicator.trendColor === 'text-red-500' ? 'bg-red-50' : 'bg-gray-100'}`}
                    >
                      {currentIndicator.trend}
                    </div>  
                  </div>

                  <div className="mb-4">
                    <div className="font-bold text-3xl text-blue-700">
                      {currentIndicator.number}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {currentIndicator.unit}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {currentIndicator.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Three Cards */}
          <div className="hidden md:flex items-center justify-center gap-6 px-16">
            {visibleIndicators.map((item, index) => {
              const isCenter = item.position === 'current';
              const cardSize = isCenter ? 'w-72 h-[420px]' : 'w-64 h-[380px]';
              const cardOpacity = isCenter ? 'opacity-100' : 'opacity-70 hover:opacity-90';
              const cardScale = isCenter ? 'scale-100' : 'scale-95 hover:scale-100';

              return (
                <div
                  key={`${item.position}-${currentSlide}`}
                  className={`${cardSize} ${cardOpacity} ${cardScale} bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-out cursor-pointer`}
                  onClick={() => !isCenter && goToSlide((currentSlide + (item.position === 'next' ? 1 : -1) + indicators.length) % indicators.length)}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={item.data.image}
                      alt={item.data.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`font-bold text-gray-900 leading-tight ${isCenter ? 'text-lg' : 'text-base'}`}>
                        {item.data.title}
                      </h3>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-semibold
                          ${item.data.trendColor}
                          ${item.data.trendColor === 'text-green-600' ? 'bg-green-50' :
                            item.data.trendColor === 'text-blue-600' ? 'bg-blue-50' :
                            item.data.trendColor === 'text-red-500' ? 'bg-red-50' : 'bg-gray-100'}`}
                      >
                        {item.data.trend}
                      </div>  
                    </div>

                    <div className="mb-4">
                      <div className={`font-bold ${isCenter ? 'text-3xl' : 'text-2xl'} text-blue-700`}>
                        {item.data.number}
                      </div>
                      <div className={`text-gray-500 ${isCenter ? 'text-sm' : 'text-xs'}`}>
                        {item.data.unit}
                      </div>
                    </div>

                    <p className={`text-gray-600 leading-relaxed ${isCenter ? 'text-sm' : 'text-xs'} ${isCenter ? 'line-clamp-none' : 'line-clamp-4'}`}>
                      {item.data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {indicators.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Terakhir diperbarui:{' '}
              {new Date().toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}