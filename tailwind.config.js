/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  safelist: [
    'bg-green-600',
    'bg-stone-600',
    'bg-purple-600',
    'bg-green-500',
    'bg-green-800',
    'bg-blue-800',
    'bg-pink-600',
    'bg-orange-600',
    'bg-blue-700',
    'bg-red-700',
    'bg-blue-600',
    'bg-rose-600',
    'bg-gray-500',
    'bg-teal-600',
    'bg-rose-500',
    'bg-emerald-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
