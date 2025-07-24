'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  User,
  Lock,
  Mail,
  Send,
  Info,
  XCircle,
  CheckCircle,
  X
} from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [loginError, setLoginError] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [resetInput, setResetInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi login gagal
    setLoginError(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCloseModal = () => {
    setLoginError(false);
    setFormData({
      username: '',
      password: '',
      rememberMe: false
    });
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi kirim permintaan reset
    setResetSent(true);
    setTimeout(() => {
      setShowResetModal(false);
      setResetSent(false);
      setResetInput('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Masuk Akun</h2>
            <p className="text-gray-500 text-sm mt-1">Silakan login untuk melanjutkan</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Pengguna
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama pengguna"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan kata sandi"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Ingat saya</span>
              </label>
              <button
                type="button"
                onClick={() => setShowResetModal(true)}
                className="text-blue-600 hover:underline"
              >
                Lupa kata sandi?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>

      <Footer />

      {/* MODAL ERROR LOGIN */}
      {loginError && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm relative animate-fade-in">
            <button
              onClick={handleCloseModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
               >
              <XCircle className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center space-y-3">
              <XCircle className="text-red-600 w-10 h-10" />
              <h3 className="text-lg font-semibold text-gray-800">Login Gagal</h3>
              <p className="text-sm text-gray-600">
                Nama pengguna atau kata sandi salah. Silakan coba lagi.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL RESET PASSWORD */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowResetModal(false)}
            >
              <XCircle className="w-5 h-5" />
            </button>

            {!resetSent ? (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Reset Kata Sandi
                </h3>

                <div className="bg-blue-50 text-blue-800 text-sm rounded-lg p-3 flex items-start gap-2 mb-4">
                  <Info className="mt-1 w-5 h-5" />
                  <div>
                    <strong>Bagaimana ini bekerja?</strong><br />
                    Masukkan email atau nama pengguna Anda. Kami akan mengirimkan tautan untuk mengganti kata sandi Anda.
                  </div>
                </div>

                <form onSubmit={handleResetSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="resetInput" className="text-sm font-medium text-gray-700 mb-1 block">
                      Email atau Nama Pengguna
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                      <input
                        id="resetInput"
                        type="text"
                        value={resetInput}
                        onChange={(e) => setResetInput(e.target.value)}
                        required
                        placeholder="Masukkan email atau nama pengguna"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-2 rounded-lg transition"
                  >
                    <Send size={16} />
                    Kirim Permintaan Reset
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <CheckCircle className="w-8 h-8 mx-auto text-green-600 mb-2" />
                <p className="text-green-700 font-medium">
                  Permintaan reset telah dikirim. Silakan periksa email Anda.
                </p>
                <p className="text-sm text-gray-500 mt-1">Menutup otomatis dalam beberapa detik...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
