'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { topics } from '@/data/topics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopicMegaMenuOpen, setIsTopicMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-6 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain rounded" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Beranda
            </Link>

            {/* Dropdown Topik */}
            <div
              className="relative"
              onMouseEnter={() => setIsTopicMegaMenuOpen(true)}
              onMouseLeave={() => setIsTopicMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center font-medium transition-colors ${
                  isActive('/topics') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Topik
                <i
                  className={`ri-arrow-down-s-line ml-1 transition-transform duration-200 ${
                    isTopicMegaMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isTopicMegaMenuOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-screen max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"
                  style={{ left: '-280px' }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {topics.map((topic, index) => (
                      <Link
                        key={index}
                        href={`/datasets?topic=${encodeURIComponent(topic.title)}`}
                        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                        onClick={() => setIsTopicMegaMenuOpen(false)}
                      >
                        <i className={`${topic.icon} text-blue-600 group-hover:text-blue-700 flex-shrink-0`} />
                        <span className="text-sm text-gray-700 group-hover:text-blue-700 font-medium leading-tight">
                          {topic.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/datasets"
              className={`font-medium transition-colors ${
                isActive('/datasets') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Dataset
            </Link>

            <Link
              href="/infographics"
              className={`font-medium transition-colors ${
                isActive('/infographics') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Infografis
            </Link>

            <Link
              href="/organization"
              className={`font-medium transition-colors ${
                isActive('/organization') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Organisasi
            </Link>

            <Link
              href="/data-request"
              className={`font-medium transition-colors ${
                isActive('/data-request') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Permintaan Data
            </Link>
          </nav>

          {/* Tombol Masuk dan Hamburger */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
            >
              Masuk
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center"
            >
              <i className="ri-menu-line text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Topik', href: '/topics' },
                { label: 'Dataset', href: '/datasets' },
                { label: 'Infografis', href: '/infographics' },
                { label: 'Organisasi', href: '/organization' },
                { label: 'Permintaan Data', href: '/data-request' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
