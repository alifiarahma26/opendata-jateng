'use client';

export default function StatsOverview() {
  const stats = [
    {
      icon: 'ri-database-2-line',
      number: '2,847',
      label: 'Open Datasets',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-government-line',
      number: '35',
      label: 'Government Agencies',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-user-line',
      number: '34.5M',
      label: 'Population',
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-map-line',
      number: '29',
      label: 'Cities/Regencies',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data at a Glance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key statistics and metrics about Central Java Province's open data initiatives and demographics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${stat.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}