import { notFound } from "next/navigation";
import { PerfumeDetail } from "@/components/PerfumeDetail";
import { referencePerfumeMap, referencePerfumes } from "@/data/referencePerfumes";

export function generateStaticParams() {
  return referencePerfumes.map((perfume) => ({ id: perfume.id }));
}

export default async function PerfumePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const perfume = referencePerfumeMap.get(id);
  if (!perfume) notFound();
  return <PerfumeDetail perfume={perfume} />;
}
