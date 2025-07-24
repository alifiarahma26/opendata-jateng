import Link from 'next/link';
import type { Dataset } from '@/data/datasets'; 

interface DatasetCardProps {
  dataset: Dataset;
}

export function DatasetCard({ dataset }: DatasetCardProps) {
  return (
    <Link 
      href={`/datasets/${dataset.id}`}
      className="block bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="mb-4">
        {/* Menampilkan nama organisasi dari data */}
        <p className="text-xs font-semibold text-blue-600 uppercase">{dataset.organization}</p>
        <h3 className="text-lg font-bold text-gray-900 mt-1">{dataset.title}</h3>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">
        {dataset.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
        <div className="flex gap-2 flex-wrap">
          {/* Menampilkan format file */}
          {dataset.resources.map(res => (
            <span key={res.id} className="bg-gray-100 px-2 py-1 rounded-md font-medium">{res.format}</span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <i className="ri-download-2-line"></i>
          {/* Menampilkan jumlah unduhan */}
          <span>{dataset.downloads}</span>
        </div>
      </div>
    </Link>
  );
}