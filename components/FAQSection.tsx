'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Apa itu Open Data?",
    answer:
      "Open Data adalah data yang tersedia secara terbuka untuk diakses, digunakan, dimodifikasi, dan dibagikan oleh siapa pun tanpa batasan, selama tetap mematuhi ketentuan lisensi yang berlaku.",
  },
  {
    question: "Siapa yang mengelola Open Data Jawa Tengah?",
    answer:
      "Open Data Jawa Tengah dikelola oleh Pemerintah Provinsi Jawa Tengah melalui Dinas Komunikasi dan Informatika (Diskominfo) Jawa Tengah.",
  },
  {
    question: "Data pada Open Data Jawa Tengah berasal dari mana?",
    answer:
      "Data berasal dari berbagai Organisasi Perangkat Daerah (OPD) di lingkungan Pemerintah Provinsi Jawa Tengah, serta instansi terkait lainnya.",
  },
  {
    question: "Apakah boleh mengunduh data dari Open Data Jawa Tengah?",
    answer:
      "Ya, data dapat diunduh secara bebas sesuai format yang tersedia, dengan tetap memperhatikan ketentuan penggunaan data (data license).",
  },
  {
    question: "Apakah data yang tersedia dijamin akurat dan terkini?",
    answer:
      "Data yang tersedia merupakan data resmi dari instansi pemerintah dan diperbarui secara berkala. Namun, pengguna tetap disarankan untuk memeriksa tanggal pembaruan data.",
  },
  {
    question: "Apakah saya perlu registrasi untuk mengakses data?",
    answer:
      "Sebagian besar data dapat diakses tanpa registrasi, tetapi untuk memanfaatkan fitur tertentu seperti API key mungkin diperlukan pendaftaran akun.",
  },
  {
    question: "Dalam format apa data disediakan?",
    answer:
      "Data disediakan dalam berbagai format terbuka seperti CSV, XLSX, JSON, atau melalui akses API agar mudah diolah.",
  },
  {
    question: "Bagaimana jika data yang saya butuhkan tidak tersedia?",
    answer:
      "Anda dapat mengajukan permintaan data melalui menu Permintaan Data pada portal, atau menghubungi admin Open Data Jawa Tengah.",
  },
  {
    question: "Apakah saya boleh menggunakan data untuk keperluan komersial?",
    answer:
      "Pada umumnya, data dapat digunakan untuk keperluan apapun, termasuk komersial, selama mematuhi ketentuan lisensi dan mencantumkan sumber data.",
  },
  {
    question: "Bagaimana cara menghubungi pengelola Open Data Jawa Tengah?",
    answer:
      "Anda dapat menghubungi melalui email resmi Diskominfo Jawa Tengah atau formulir kontak yang tersedia di portal Open Data.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-800">Pertanyaan yang Sering Diajukan</h2>
          <p className="mt-2 text-slate-600">
            Temukan jawaban tentang data terbuka dan penggunaannya di platform ini.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-md overflow-hidden border transition-all duration-300 ${
                  isOpen ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-800 font-semibold hover:bg-slate-50 transition"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-blue-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-slate-600 text-sm"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}