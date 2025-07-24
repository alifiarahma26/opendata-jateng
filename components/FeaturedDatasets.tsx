'use client';

import Link from 'next/link';

export default function FeaturedDatasets() {
  const datasets = [
    {
      title: 'Population Demographics 2024',
      description: 'Comprehensive population data including age distribution, gender statistics, and regional demographics across all cities and regencies.',
      category: 'Demographics',
      lastUpdated: 'Updated 2 days ago',
      downloads: '12.5K',
      format: 'CSV, JSON',
      icon: 'ri-group-line',
      color: 'bg-blue-500'
    },
    {
      title: 'Economic Growth Indicators',
      description: 'GDP, inflation rates, employment statistics, and economic development metrics for Central Java province over the past decade.',
      category: 'Economics',
      lastUpdated: 'Updated 1 week ago',
      downloads: '8.3K',
      format: 'Excel, PDF',
      icon: 'ri-line-chart-line',
      color: 'bg-green-500'
    },
    {
      title: 'Education Statistics',
      description: 'School enrollment rates, literacy levels, educational infrastructure data, and academic performance indicators.',
      category: 'Education',
      lastUpdated: 'Updated 3 days ago',
      downloads: '6.7K',
      format: 'CSV, XML',
      icon: 'ri-book-line',
      color: 'bg-purple-500'
    },
    {
      title: 'Healthcare Facilities',
      description: 'Complete directory of hospitals, clinics, health centers, and medical facilities with capacity and service information.',
      category: 'Healthcare',
      lastUpdated: 'Updated 5 days ago',
      downloads: '9.1K',
      format: 'JSON, API',
      icon: 'ri-hospital-line',
      color: 'bg-red-500'
    },
    {
      title: 'Transportation Infrastructure',
      description: 'Road networks, public transportation routes, traffic statistics, and infrastructure development projects.',
      category: 'Infrastructure',
      lastUpdated: 'Updated 1 day ago',
      downloads: '4.2K',
      format: 'GeoJSON, CSV',
      icon: 'ri-roadster-line',
      color: 'bg-orange-500'
    },
    {
      title: 'Environmental Monitoring',
      description: 'Air quality indices, water quality measurements, forest coverage data, and environmental conservation metrics.',
      category: 'Environment',
      lastUpdated: 'Updated 6 hours ago',
      downloads: '5.8K',
      format: 'CSV, API',
      icon: 'ri-leaf-line',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Datasets</h2>
            <p className="text-xl text-gray-600">
              Most popular and recently updated datasets from Central Java government agencies
            </p>
          </div>
          <Link href="/datasets" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
            View All Datasets
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datasets.map((dataset, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${dataset.color} rounded-lg flex items-center justify-center`}>
                    <i className={`${dataset.icon} text-white text-xl`}></i>
                  </div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {dataset.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dataset.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{dataset.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    {dataset.lastUpdated}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-download-line mr-2"></i>
                    {dataset.downloads} downloads
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-file-line mr-2"></i>
                    {dataset.format}
                  </div>
                </div>
                
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 px-4 rounded-lg font-medium whitespace-nowrap cursor-pointer transition-colors">
                  <i className="ri-external-link-line mr-2"></i>
                  View Dataset
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}