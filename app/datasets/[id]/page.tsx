import DatasetDetail from '@/components/DatasetDetail';
import { datasets } from '@/data/dataset';

export async function generateStaticParams() {
  return datasets.map((dataset) => ({
    id: dataset.id,
  }));
}

// Interface untuk props di Next.js 15
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DatasetPage({ params }: PageProps) {
  // Await params karena sekarang asinkron di Next.js 15
  const { id } = await params;
  
  return <DatasetDetail datasetId={id} />;
}