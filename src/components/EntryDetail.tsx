import Link from "next/link";
import { fragranceEntryMap } from "@/data/fragranceEntries";
import type { FragranceEntry } from "@/types/fragrance";
import { getEntryDisplay, getEntrySummary, getFacetLabel, getPhaseLabel, getTypeLabel, getVolatilityLabel } from "@/lib/displayLabels";

function ValueList({ title, values }: { title: string; values?: string[] }) {
  if (!values || values.length === 0) return null;
  return (
    <section className="rounded-lg border border-black/10 bg-white/70 p-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/55">{title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {values.map((value) => (
          <span key={value} className="rounded-md bg-mist px-2 py-1 text-sm text-ink/75">
            {value}
          </span>
        ))}
      </div>
    </section>
  );
}

function RelatedList({ title, ids }: { title: string; ids?: string[] }) {
  if (!ids || ids.length === 0) return null;
  return (
    <section className="rounded-lg border border-black/10 bg-white/70 p-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/55">{title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {ids.map((id) => {
          const related = fragranceEntryMap.get(id);
          const relatedDisplay = related ? getEntryDisplay(related) : undefined;
          return related ? (
            <Link key={id} href={`/entries/${id}`} className="rounded-md bg-mist px-2 py-1 text-sm text-moss underline">
              {relatedDisplay?.primary}
            </Link>
          ) : (
            <span key={id} className="rounded-md bg-mist px-2 py-1 text-sm text-ink/75">
              {id}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export function EntryDetail({ entry }: { entry: FragranceEntry }) {
  const display = getEntryDisplay(entry);

  return (
    <article className="space-y-5">
      <div>
        <p className="text-sm uppercase tracking-wide text-ink/55">{getTypeLabel(entry.type)}</p>
        <h1 className="mt-2 text-4xl font-semibold text-ink">{display.primary}</h1>
        {display.secondary && <p className="mt-2 text-lg text-ink/55">{display.secondary}</p>}
        <p className="mt-4 max-w-3xl leading-7 text-ink/75">{getEntrySummary(entry)}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <ValueList title="別名" values={entry.aliases} />
        <ValueList title="香調タグ" values={entry.facets.map(getFacetLabel)} />
        <section className="rounded-lg border border-black/10 bg-white/70 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/55">基本情報</h2>
          <dl className="mt-3 space-y-2 text-sm text-ink/75">
            <div><dt className="inline font-medium">フェーズ: </dt><dd className="inline">{getPhaseLabel(entry.phase)}</dd></div>
            <div><dt className="inline font-medium">強度: </dt><dd className="inline">{entry.intensity ?? "未分類"}</dd></div>
            <div><dt className="inline font-medium">揮発性: </dt><dd className="inline">{getVolatilityLabel(entry.volatility)}</dd></div>
          </dl>
        </section>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <ValueList title="使用文脈" values={entry.usageContexts} />
        <ValueList title="放出形式" values={entry.releaseModes} />
        <ValueList title="文化レイヤー" values={entry.culturalLayers} />
        <RelatedList title="関連素材" ids={entry.relatedMaterials} />
        <RelatedList title="関連分子" ids={entry.relatedMolecules} />
        <RelatedList title="関連語彙" ids={entry.relatedDescriptors} />
        <RelatedList title="関連イメージ" ids={entry.relatedImages} />
        <RelatedList title="関連する身体・生理" ids={entry.relatedPhysiology} />
        <ValueList title="注意メモ" values={entry.safetyNotes} />
        <ValueList title="文化メモ" values={entry.culturalNotes} />
        <ValueList title="参照URL" values={entry.sourceUrls} />
      </div>
    </article>
  );
}
