'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const questions = [
  'Portal Open Data mudah diakses dan digunakan',
  'Dataset yang tersedia sesuai dengan kebutuhan saya',
  'Metadata setiap dataset jelas dan lengkap',
  'Data tersedia dalam format terbuka dan mudah diolah',
  'Informasi pada portal ini akurat dan dapat dipercaya',
  'Data pada portal ini diperbarui secara berkala',
  'Saya merasa terbantu dengan data yang tersedia di Portal Open Data ini',
  'Saya puas dengan layanan secara keseluruhan',
];

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [ratings, setRatings] = useState<number[]>(Array(questions.length).fill(0));
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleRatingChange = (index: number, value: number) => {
    const updated = [...ratings];
    updated[index] = value;
    setRatings(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ratings.includes(0) || feedback.trim() === '') {
      alert('Harap isi semua pertanyaan dan kritik/saran.');
      return;
    }

    setSubmitted(true);
    alert('Terima kasih atas feedback Anda!');
    setRatings(Array(questions.length).fill(0));
    setFeedback('');
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Beri Feedback
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-auto max-h-[90vh] p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold mb-6">Survey Pengguna Open Data</h2>

            {submitted ? (
              <div className="text-green-700 text-lg font-semibold">
                Feedback terkirim. Terima kasih!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {questions.map((q, idx) => (
                  <div key={idx}>
                    <label className="block font-medium mb-2">
                      {q} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <label key={num} className="flex items-center gap-1">
                          <input
                            type="radio"
                            name={`rating-${idx}`}
                            value={num}
                            checked={ratings[idx] === num}
                            onChange={() => handleRatingChange(idx, num)}
                            className="accent-blue-600"
                          />
                          <span>{num}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block font-medium mb-2">
                    Kritik dan Saran <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full border rounded p-3"
                    rows={4}
                    placeholder="Tulis kritik dan saran Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>

                <p className="text-sm text-gray-500 mt-2">
                  Jangan isi informasi rahasia seperti PIN, password, dsb.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}