'use client';

import SurveyModal from '@/components/SurveyModal';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  MapPin,
  FileText,
  ArrowRight,
  ArrowLeft,
  Send,
  CheckCircle,
  X
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const steps = ['Informasi Pribadi', 'Alamat', 'Identitas', 'Permintaan Data'];

// Interface untuk form data
interface FormData {
  namaLengkap: string;
  email: string;
  phone: string;
  alamat: string;
  kota: string;
  provinsi: string;
  kodePos: string;
  pekerjaan: string;
  noIdentitas: string;
  uploadIdentitas: File | null;
  dataDibutuhkan: string;
  alasan: string;
  caraMemperoleh: string;
  caraSalinan: string;
}

export default function DataRequestPage() {
  const provinsiList = [
    "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau", "Jambi", "Bengkulu", "Sumatera Selatan", "Kepulauan Bangka Belitung",
    "Lampung", "Banten", "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur",
    "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur",
    "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
    "Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Gorontalo", "Sulawesi Barat",
    "Maluku", "Maluku Utara", "Papua", "Papua Barat"
  ];

  const [submitted, setSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [currentStep, setCurrentStep] = useState(0);

  // Initial form data dengan tipe yang konsisten
  const [formData, setFormData] = useState<FormData>({
    namaLengkap: '',
    email: '',
    phone: '',
    alamat: '',
    kota: '',
    provinsi: '',
    kodePos: '',
    pekerjaan: '',
    noIdentitas: '',
    uploadIdentitas: null,
    dataDibutuhkan: '',
    alasan: '',
    caraMemperoleh: '',
    caraSalinan: '',
  });

  const handleSubmit = () => {
    if (isStepValid()) {
      setSubmitted(true);
      setShowSuccessModal(true);

      // Tutup modal sukses setelah 2.5 detik
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2500);

      // Tampilkan survey setelah 3 detik
      setTimeout(() => {
        setShowSurveyModal(true);
      }, 3000);

      setCurrentStep(0);
      setFormData({
        namaLengkap: '',
        email: '',
        phone: '',
        alamat: '',
        kota: '',
        provinsi: '',
        kodePos: '',
        pekerjaan: '',
        noIdentitas: '',
        uploadIdentitas: null,
        dataDibutuhkan: '',
        alasan: '',
        caraMemperoleh: '',
        caraSalinan: '',
      });
    }
  };

  const isStepValid = () => {
    const newErrors: { [key: string]: string } = {};

    switch (currentStep) {
      case 0:
        if (!formData.namaLengkap.trim()) newErrors.namaLengkap = 'Nama lengkap wajib diisi';
        if (!formData.email.trim()) newErrors.email = 'Email wajib diisi';
        if (!formData.phone.trim()) newErrors.phone = 'Nomor telepon wajib diisi';
        break;
      case 1:
        if (!formData.alamat.trim()) newErrors.alamat = 'Alamat wajib diisi';
        if (!formData.kota.trim()) newErrors.kota = 'Kota wajib diisi';
        if (!formData.provinsi.trim()) newErrors.provinsi = 'Provinsi wajib diisi';
        if (!formData.kodePos.trim()) newErrors.kodePos = 'Kode Pos wajib diisi';
        break;
      case 2:
        if (!formData.pekerjaan.trim()) newErrors.pekerjaan = 'Pekerjaan wajib diisi';
        if (!formData.noIdentitas.trim()) newErrors.noIdentitas = 'Nomor identitas wajib diisi';
        if (!formData.uploadIdentitas) newErrors.uploadIdentitas = 'Unggah identitas terlebih dahulu';
        break;
      case 3:
        if (!formData.dataDibutuhkan.trim()) newErrors.dataDibutuhkan = 'Data yang dibutuhkan wajib diisi';
        if (!formData.alasan.trim()) newErrors.alasan = 'Alasan wajib diisi';
        if (!formData.caraMemperoleh) newErrors.caraMemperoleh = 'Pilih cara memperoleh data';
        if (!formData.caraSalinan) newErrors.caraSalinan = 'Pilih cara mendapatkan salinan';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (isStepValid()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));

    // Hapus error untuk field yang sedang diisi ulang
    if (errors[name]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handler khusus untuk file upload dengan tipe yang benar
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, uploadIdentitas: file }));

    if (errors.uploadIdentitas) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.uploadIdentitas;
        return newErrors;
      });
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Formulir Permintaan Data</h2>
              <p className="text-gray-600">
                Silakan isi formulir berikut ini untuk mengajukan permintaan data secara resmi.
                Setiap isian akan membantu kami memahami dan memproses kebutuhan Anda.
              </p>
            </div>

            {/* Step Indicator */}
            <div className="flex justify-center mb-8 space-x-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border text-sm font-medium ${
                      index === currentStep
                        ? 'bg-blue-600 text-white'
                        : 'border-gray-300 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className={`${index === currentStep ? 'text-blue-600 font-semibold' : 'text-gray-400 hidden sm:inline-block'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >

                  {currentStep === 0 && (
                    <>
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <User className="w-5 h-5 text-blue-600" />
                        Informasi Pribadi
                      </h2>

                      {/* Nama Lengkap */}
                      <div className="mt-4">
                        <label className="block font-medium mb-1">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="namaLengkap"
                          placeholder="Masukkan nama lengkap"
                          value={formData.namaLengkap}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.namaLengkap ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.namaLengkap && <p className="text-sm text-red-600 mt-1">{errors.namaLengkap}</p>}
                      </div>

                      {/* Email */}
                      <div className="mt-4">
                        <label className="block font-medium mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="nama@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                      </div>

                      {/* Nomor Telepon */}
                      <div className="mt-4">
                        <label className="block font-medium mb-1">
                          Nomor Telepon <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="08xxxxxxxxxx"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                      </div>
                    </>
                  )}

                  {currentStep === 1 && (
                    <>
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        Alamat
                      </h2>

                      {/* Provinsi */}
                      <div className="mt-4 relative">
                        <label htmlFor="provinsi" className="block text-sm font-medium text-gray-700 mb-1">
                          Provinsi <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="provinsi"
                          name="provinsi"
                          value={formData.provinsi}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 bg-white appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.provinsi ? 'border-red-500' : 'border-gray-300'} z-10`}
                        >
                          <option value="">-- Pilih Provinsi --</option>
                          {provinsiList.map((provinsi) => (
                            <option key={provinsi} value={provinsi}>
                              {provinsi}
                            </option>
                          ))}
                        </select>
                        {errors.provinsi && (
                          <p className="text-sm text-red-600 mt-1">{errors.provinsi}</p>
                        )}
                      </div>

                      {/* Kota */}
                      <div className="mt-4">
                        <label className="block font-medium mb-1">
                          Kota <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="kota"
                          placeholder="Contoh: Semarang"
                          value={formData.kota}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.kota ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.kota && <p className="text-sm text-red-600 mt-1">{errors.kota}</p>}
                      </div>

                      {/* Alamat Lengkap */}
                      <div className="mt-4">
                        <label className="block font-medium mb-1">
                          Alamat Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="alamat"
                          placeholder="Contoh: Jl. Merdeka No. 123"
                          value={formData.alamat}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.alamat ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.alamat && <p className="text-sm text-red-600 mt-1">{errors.alamat}</p>}
                      </div>

                      {/* Kode Pos */}
                      <div className="mt-4">
                        <label className="block font-medium mb-1">
                          Kode Pos <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="kodePos"
                          placeholder="Contoh: 50123"
                          value={formData.kodePos}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.kodePos ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.kodePos && <p className="text-sm text-red-600 mt-1">{errors.kodePos}</p>}
                      </div>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        Identitas Pemohon
                      </h2>

                      {/* Pekerjaan */}
                      <div>
                        <label className="block font-medium text-gray-700 mb-1">
                          Pekerjaan <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="pekerjaan"
                          placeholder="Contoh: Mahasiswa, Peneliti, Jurnalis"
                          value={formData.pekerjaan}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.pekerjaan ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.pekerjaan && <p className="text-sm text-red-600 mt-1">{errors.pekerjaan}</p>}
                      </div>

                      {/* No Identitas */}
                      <div>
                        <label className="block font-medium text-gray-700 mb-1">
                          Nomor Identitas (KTP/SIM/KTM/KTA)
                        </label>
                        <input
                          type="text"
                          name="noIdentitas"
                          value={formData.noIdentitas}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.noIdentitas ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.noIdentitas && (
                          <p className="text-sm text-red-600 mt-1">{errors.noIdentitas}</p>
                        )}
                      </div>

                      {/* Upload Identitas */}
                      <div>
                        <label className="block font-medium text-gray-700 mb-1">
                          Unggah Identitas <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          name="uploadIdentitas"
                          onChange={handleFileChange}
                          className={`block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100
                            ${errors.uploadIdentitas ? 'border border-red-500' : ''}`}
                        />
                        {errors.uploadIdentitas && <p className="text-sm text-red-600 mt-1">{errors.uploadIdentitas}</p>}
                      </div>
                    </>
                  )}

                  {currentStep === 3 && (
                    <>
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        Detail Permintaan Data
                      </h2>

                      {/* Data yang dibutuhkan */}
                      <div>
                        <label className="block font-medium text-gray-700 mb-1">
                          Data yang dibutuhkan <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="dataDibutuhkan"
                          value={formData.dataDibutuhkan}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 ${errors.dataDibutuhkan ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.dataDibutuhkan && <p className="text-sm text-red-600 mt-1">{errors.dataDibutuhkan}</p>}
                      </div>

                      {/* Alasan penggunaan data */}
                      <div>
                        <label className="block font-medium text-gray-700 mb-1">
                          Alasan penggunaan data <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="alasan"
                          placeholder="Contoh: untuk penulisan skripsi, penelitian, laporan media, dll"
                          value={formData.alasan}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 h-28 resize-none ${errors.alasan ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.alasan && <p className="text-sm text-red-600 mt-1">{errors.alasan}</p>}
                      </div>

                      {/* Cara memperoleh data */}
                      <div>
                        <label className="block font-medium text-gray-700 mb-1">
                          Cara memperoleh data <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="caraMemperoleh"
                          value={formData.caraMemperoleh}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 bg-white ${errors.caraMemperoleh ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">-- Pilih salah satu --</option>
                          <option value="email">Melalui Email</option>
                          <option value="langsung">Ambil Langsung ke Kantor</option>
                        </select>
                        {errors.caraMemperoleh && <p className="text-sm text-red-600 mt-1">{errors.caraMemperoleh}</p>}
                      </div>

                      {/* Cara mendapatkan salinan */}
                      <div>
                        <label className="block font-medium text-gray-700 mb-1">
                          Cara mendapatkan salinan data <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="caraSalinan"
                          value={formData.caraSalinan}
                          onChange={handleChange}
                          className={`w-full border rounded-lg px-4 py-2 bg-white ${errors.caraSalinan ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">-- Pilih salah satu --</option>
                          <option value="langsung">Mengambil Langsung</option>
                          <option value="email">Email</option>
                          <option value="pos">Kurir/Pos</option>
                          <option value="faximile">Faximile</option>
                        </select>
                        {errors.caraSalinan && <p className="text-sm text-red-600 mt-1">{errors.caraSalinan}</p>}
                      </div>
                    </>
                  )}

                </motion.div>
              </AnimatePresence>

              {/* Navigasi Step */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 text-blue-600 hover:underline disabled:opacity-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Sebelumnya
                </button>
                {currentStep < steps.length - 1 ? (
                  <button
                    onClick={nextStep}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition"
                  >
                    Selanjutnya
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Permintaan
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />

        {/* Modal sukses */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-xl animate-fade-in">
              <CheckCircle className="text-green-500 w-10 h-10 mx-auto mb-3" />
              <p className="text-green-700 font-medium">
                Permintaan Dikirim. Silakan periksa email Anda secara berkala.
              </p>
              <p className="text-sm text-gray-500 mt-1">Menutup otomatis dalam beberapa detik...</p>
            </div>
          </div>
        )}

        {/* Survey Modal - menggunakan interface yang benar */}
        <SurveyModal
          isOpen={showSurveyModal}
          onClose={() => setShowSurveyModal(false)}
        />

      </div>
    </>
  );
}