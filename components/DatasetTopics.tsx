'use client';

import { useState } from 'react';
import Link from 'next/link';
import { topics } from '@/data/topics';
import { organizations } from '@/data/organizations';
import { datasets } from '@/data/dataset';

interface EnrichedTopic {
  title: string;
  description: string;
  color: string;
  icon: string;
  image: string;
  datasetCount: number;
}

interface TopicCardProps {
  topic: EnrichedTopic;
  index: number;
}

export default function DatasetTopics() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // Buat mapping: orgId → topicTitle
  const orgIdToTopicTitle: Record<string, string> = {};
  organizations.forEach((org) => {
    orgIdToTopicTitle[org.id] = org.topic;
  });

  // Hitung jumlah dataset berdasarkan topicTitle
  const topicCounts: Record<string, number> = {};
  datasets.forEach((dataset) => {
    const topicTitle = orgIdToTopicTitle[dataset.organizationId];
    if (topicTitle) {
      topicCounts[topicTitle] = (topicCounts[topicTitle] || 0) + 1;
    }
  });

  // Gabungkan data topik dengan jumlah dataset berdasarkan title
  const enrichedTopics: EnrichedTopic[] = topics.map((topic) => ({
    ...topic,
    datasetCount: topicCounts[topic.title] || 0,
  }));

  const totalPages = Math.ceil(enrichedTopics.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const getCurrentTopics = () => {
    const startIndex = currentPage * itemsPerPage;
    return enrichedTopics.slice(startIndex, startIndex + itemsPerPage);
  };

  const TopicCard = ({ topic, index }: TopicCardProps) => {
    const topicParam = encodeURIComponent(topic.title);

    return (
      <Link
        href={`/datasets?topic=${topicParam}`}
        key={`carousel-${currentPage}-${index}`}
        className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className={`absolute top-3 left-3 w-10 h-10 ${topic.color} rounded-lg flex items-center justify-center`}>
            <i className={`${topic.icon} text-white text-lg`}></i>
          </div>
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-gray-900">
              {topic.datasetCount} dataset
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {topic.title}
          </h3>
          <p className="text-gray-600 mb-3 text-sm leading-relaxed">{topic.description}</p>
          <div className="flex items-center text-blue-600 font-medium text-sm">
            Jelajahi Topik
            <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Topik Dataset</h2>
        </div>

        <div className="relative px-12">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getCurrentTopics().map((topic, index) => (
                <TopicCard key={`carousel-${currentPage}-${index}`} topic={topic} index={index} />
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:shadow-xl z-10 border border-gray-200"
              >
                <i className="ri-arrow-left-line text-lg text-gray-700"></i>
              </button>
              <button
                onClick={nextPage}
                className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:shadow-xl z-10 border border-gray-200"
              >
                <i className="ri-arrow-right-line text-lg text-gray-700"></i>
              </button>
            </>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentPage ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Halaman {currentPage + 1} dari {totalPages}
          </p>
        </div>
      </div>
    </section>
  );
}