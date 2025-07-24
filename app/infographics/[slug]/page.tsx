import InfographicDetail from './InfographicDetail';
import { infographics } from '@/data/infographics';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return infographics.map((infographic) => ({
    slug: infographic.slug,
  }));
}

export default async function InfographicPage({ params }: PageProps) {
  const { slug } = await params;
  
  return <InfographicDetail slug={slug} />;
}