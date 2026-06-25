import { notFound } from "next/navigation";
import { EntryDetail } from "@/components/EntryDetail";
import { fragranceEntries, fragranceEntryMap } from "@/data/fragranceEntries";

export function generateStaticParams() {
  return fragranceEntries.map((entry) => ({ id: entry.id }));
}

export default async function EntryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = fragranceEntryMap.get(id);
  if (!entry) notFound();
  return <EntryDetail entry={entry} />;
}
