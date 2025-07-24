import { Suspense } from 'react';
import DatasetPageContent from './DatasetPageContent';

// Loading component
function DatasetPageLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-10 flex-1">
        <div className="text-center mb-10">
          <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
        </div>
        
        {/* Filter bar skeleton */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 mb-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="w-48 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-32 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
        
        {/* Dataset cards skeleton */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-pulse">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3 gap-3">
                    <div className="h-6 bg-blue-200 rounded-full w-16"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="flex space-x-6">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="h-10 bg-blue-200 rounded-lg w-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DatasetPage() {
  return (
    <Suspense fallback={<DatasetPageLoading />}>
      <DatasetPageContent />
    </Suspense>
  );
}