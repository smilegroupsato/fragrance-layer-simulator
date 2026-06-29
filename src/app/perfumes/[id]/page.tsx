import { notFound, redirect } from "next/navigation";
import { PerfumeDetail } from "@/components/PerfumeDetail";
import { referencePerfumeMap, referencePerfumes } from "@/data/referencePerfumes";

const legacyPerfumeIdRedirects: Record<string, string> = {
  "muskara-rosa-fueguia-1833": "fueguia-1833-muskara-rosa",
  "alma-fueguia-1833": "fueguia-1833-alma",
  "muskara-boswellia-fueguia-1833": "fueguia-1833-muskara-boswellia",
  "pampa-humeda-fueguia-1833": "fueguia-1833-pampa-humeda",
  "basilicum-fueguia-1833": "fueguia-1833-basilicum"
};

export function generateStaticParams() {
  return referencePerfumes.map((perfume) => ({ id: perfume.id }));
}

export default async function PerfumePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const redirectId = legacyPerfumeIdRedirects[id];
  if (redirectId) redirect(`/perfumes/${redirectId}`);

  const perfume = referencePerfumeMap.get(id);
  if (!perfume) notFound();
  return <PerfumeDetail perfume={perfume} />;
}
