import { organizations } from '@/data/organizations';
import OrganizationDetail from './OrganizationDetail';

export async function generateStaticParams() {
  return organizations.map((org) => ({
    id: org.id,
  }));
}

// Interface untuk props di Next.js 15
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function OrganizationPage({ params }: PageProps) {
  const { id } = await params;
  
  return <OrganizationDetail organizationId={id} />;
}