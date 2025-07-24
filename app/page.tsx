
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import DatasetTopics from '../components/DatasetTopics';
import StrategicIndicators from '../components/StrategicIndicators';
import NewestDatasets from '../components/NewestDatasets';
import InfographicSection from '../components/InfographicSection';

import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DatasetTopics />
      <StrategicIndicators />
      <NewestDatasets />
      <InfographicSection />
      
      <FAQSection />
      <Footer />
    </div>
  );
}
