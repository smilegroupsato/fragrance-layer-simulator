import Link from "next/link";
import type { FragranceEntry } from "@/types/fragrance";
import { getEntryDisplay, getEntrySummary, getFacetLabel, getPhaseLabel, getTypeLabel } from "@/lib/displayLabels";

export function EntryCard({ entry }: { entry: FragranceEntry }) {
  const display = getEntryDisplay(entry);

  return (
    <article className="rounded-lg border border-black/10 bg-white/75 p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-ink/55">
        <span>{getTypeLabel(entry.type)}</span>
        <span>フェーズ: {getPhaseLabel(entry.phase)}</span>
      </div>
      <h2 className="mt-2 text-lg font-semibold text-ink">{display.primary}</h2>
      {display.secondary && <p className="mt-1 text-sm text-ink/55">{display.secondary}</p>}
      <p className="mt-2 text-sm leading-6 text-ink/70">{getEntrySummary(entry)}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink/50">香調タグ</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {entry.facets.map((facet) => (
          <span key={facet} className="rounded-md bg-mist px-2 py-1 text-xs text-ink/70">
            {getFacetLabel(facet)}
          </span>
        ))}
      </div>
      <Link href={`/entries/${entry.id}`} className="mt-4 inline-block text-sm font-medium text-moss underline">
        詳細を見る
      </Link>
    </article>
  );
}
