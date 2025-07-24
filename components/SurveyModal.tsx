'use client';

import { useState } from 'react';
import { CheckCircle, X, Star } from 'lucide-react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const [responses, setResponses] = useState<number[]>([]);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredQuestion, setHoveredQuestion] = useState<number | null>(null);
  const [hoveredScore, setHoveredScore] = useState<number | null>(null);

  const questions = [
    'Portal Open Data mudah diakses dan digunakan',
    'Dataset yang tersedia sesuai dengan kebutuhan saya',
    'Metadata setiap dataset jelas dan lengkap',
    'Data tersedia dalam format terbuka dan mudah diolah',
    'Informasi pada portal ini akurat dan dapat dipercaya',  
    'Data pada portal ini diperbarui secara berkala',
    'Saya merasa terbantu dengan data yang tersedia di Portal Open Data ini',
    'Saya puas dengan layanan secara keseluruhan'
  ];

  const handleScoreChange = (questionIndex: number, score: number) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = score;
    setResponses(newResponses);
  };

  const handleSubmit = async () => {
    // Validasi: pastikan semua pertanyaan dijawab
    if (responses.length < questions.length || responses.some(r => r === undefined)) {
      alert('Mohon jawab semua pertanyaan sebelum mengirim');
      return;
    }

    setIsSubmitting(true);

    // Simulasi pengiriman data
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Survey Data:', {
        responses,
        feedback,
        timestamp: new Date().toISOString()
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Auto close setelah 3 detik
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      alert('Terjadi kesalahan saat mengirim survei. Silakan coba lagi.');
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state setelah modal ditutup
    setTimeout(() => {
      setIsSubmitted(false);
      setResponses([]);
      setFeedback('');
      setIsSubmitting(false);
    }, 300);
  };

  const getScoreColor = (score: number) => {
    const colors = {
      1: 'from-red-500 to-red-600',
      2: 'from-orange-500 to-orange-600', 
      3: 'from-yellow-500 to-yellow-600',
      4: 'from-blue-500 to-blue-600',
      5: 'from-green-500 to-green-600'
    };
    return colors[score as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getScoreText = (score: number) => {
    const scoreTexts = {
      1: 'Sangat Tidak Setuju',
      2: 'Tidak Setuju', 
      3: 'Netral',
      4: 'Setuju',
      5: 'Sangat Setuju'
    };
    return scoreTexts[score as keyof typeof scoreTexts];
  };

  const getProgressPercentage = () => {
    return (responses.filter(r => r !== undefined).length / questions.length) * 100;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        
        {/* Header dengan tombol close */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Survei Kepuasan Pengguna
            </h2>
            <p className="text-blue-100">
              Bantu kami meningkatkan layanan Portal Open Data
            </p>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {isSubmitted ? (
            // Success State
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Terima Kasih!
              </h3>
              <p className="text-green-700 font-medium mb-2">
                Survei Anda telah berhasil dikirim
              </p>
              <p className="text-gray-600">
                Feedback Anda sangat berharga untuk perbaikan layanan kami
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Modal akan tertutup otomatis...
              </div>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">
                    {responses.filter(r => r !== undefined).length}/{questions.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getProgressPercentage()}%` }}
                  />
                </div>
              </div>

              {/* Skala Penilaian Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-800">Skala Penilaian:</span>
                </div>
                <div className="grid grid-cols-5 gap-2 text-xs">
                  {[1, 2, 3, 4, 5].map(num => (
                    <div key={num} className="text-center">
                      <div className={`w-6 h-6 bg-gradient-to-r ${getScoreColor(num)} rounded-full text-white text-xs font-bold flex items-center justify-center mx-auto mb-1`}>
                        {num}
                      </div>
                      <span className="text-gray-600">{getScoreText(num)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4 mb-6">
                {questions.map((question, qIndex) => (
                  <div
                    key={qIndex}
                    className={`bg-gray-50 rounded-xl p-4 transition-all duration-300 ${
                      responses[qIndex] ? 'ring-2 ring-blue-500/20 bg-blue-50/50' : ''
                    }`}
                    onMouseEnter={() => setHoveredQuestion(qIndex)}
                    onMouseLeave={() => setHoveredQuestion(null)}
                  >
                    <div className="flex items-center justify-between gap-6">
                      {/* Question */}
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{qIndex + 1}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <p className="text-base font-medium text-gray-800">
                            {question}
                          </p>
                          <span className="text-red-500 text-sm">*</span>
                        </div>
                      </div>

                      {/* Rating Buttons */}
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            onClick={() => handleScoreChange(qIndex, num)}
                            onMouseEnter={() => setHoveredScore(num)}
                            onMouseLeave={() => setHoveredScore(null)}
                            className={`group relative w-10 h-10 flex items-center justify-center rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                              responses[qIndex] === num
                                ? `bg-gradient-to-r ${getScoreColor(num)} text-white border-transparent shadow-lg scale-105`
                                : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                          >
                            <span className="text-sm font-bold">{num}</span>

                            {/* Tooltip */}
                            {hoveredScore === num && hoveredQuestion === qIndex && (
                              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap z-10">
                                {getScoreText(num)}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selected Answer Indicator */}
                    {responses[qIndex] && (
                      <div className="mt-3 flex justify-center">
                        <span className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200 text-sm text-gray-700">
                          <span className={`w-5 h-5 bg-gradient-to-r ${getScoreColor(responses[qIndex])} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                            {responses[qIndex]}
                          </span>
                          {getScoreText(responses[qIndex])}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Feedback Section */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 mb-6">
                <label className="flex items-center gap-3 text-base font-semibold text-gray-800 mb-3">
                  <Star className="w-5 h-5 text-blue-600" />
                  Saran dan Masukan (Opsional)
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Bagikan pengalaman Anda menggunakan portal ini atau saran untuk perbaikan..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-700 placeholder-gray-500"
                  rows={4}
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">
                    Masukan Anda akan membantu kami meningkatkan layanan
                  </span>
                  <span className="text-sm text-gray-500">
                    {feedback.length}/500
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={responses.filter(r => r !== undefined).length < questions.length || isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                  responses.filter(r => r !== undefined).length < questions.length || isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-3" />
                    Mengirim Survei...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Star className="w-5 h-5 mr-3" />
                    Kirim Survei
                  </span>
                )}
              </button>

              {/* Validation Message */}
              {responses.filter(r => r !== undefined).length < questions.length && (
                <p className="text-center text-sm text-red-600 mt-3">
                  Mohon jawab semua pertanyaan yang bertanda bintang (*) sebelum mengirim
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}