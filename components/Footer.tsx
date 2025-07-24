'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom Logo dan Deskripsi */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Logo Open Data Jawa Tengah"
                className="w-10 h-10 rounded bg-white p-1"
              />

              <div>
                <h3 className="text-lg font-bold">Open Data</h3>
                <p className="text-sm text-gray-400">Provinsi Jawa Tengah</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Portal data resmi yang menyediakan akses transparan terhadap data, statistik, dan layanan publik dari Pemerintah Provinsi Jawa Tengah untuk masyarakat dan peneliti.
            </p>
          </div>

          {/* Kolom Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-start">
                <i className="ri-map-pin-line mr-2 mt-1 flex-shrink-0"></i>
                <span>Jl. Menteri Supeno I/2 Semarang – Kota Semarang, Jawa Tengah 50243</span>
              </p>
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                <span>Telp: 024 - 8319140 | Fax: 024 - 8443916</span>
              </p>
              <p className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                <span>diskominfo@jatengprov.go.id</span>
              </p>
            </div>
          </div>

          {/* Kolom Sosial Media dan Lokasi */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Temukan Kami</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Twitter" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2!2d110.4!3d-6.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnMTIuMCJTIDExMMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Pemerintah Jawa Tengah"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2018 - 2025 Pemerintah Provinsi Jawa Tengah</p>
        </div>
      </div>
    </footer>
  );
}
