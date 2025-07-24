'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-search-2-line',
      title: 'Data Search & Discovery',
      description: 'Advanced search capabilities to find specific datasets across all government agencies',
      link: '/datasets'
    },
    {
      icon: 'ri-api-line',
      title: 'API Access',
      description: 'RESTful APIs for developers to integrate government data into applications',
      link: '/api'
    },
    {
      icon: 'ri-download-cloud-line',
      title: 'Bulk Data Download',
      description: 'Download large datasets in multiple formats including CSV, JSON, and XML',
      link: '/downloads'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Data Visualization',
      description: 'Interactive charts and dashboards to visualize government statistics',
      link: '/statistics'
    },
    {
      icon: 'ri-notification-line',
      title: 'Data Alerts',
      description: 'Subscribe to notifications when specific datasets are updated',
      link: '/alerts'
    },
    {
      icon: 'ri-question-answer-line',
      title: 'Support & Documentation',
      description: 'Comprehensive guides and support for using government open data',
      link: '/support'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and services to help you access, analyze, and utilize Central Java government data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.link}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
                <i className={`${service.icon} text-blue-600 group-hover:text-white text-xl transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                Learn More
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}