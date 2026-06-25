import Link from "next/link";
import type { ReferencePerfume } from "@/types/fragrance";
import { getFacetLabel, getPerfumeDisplay } from "@/lib/displayLabels";

export function PerfumeCard({ perfume }: { perfume: ReferencePerfume }) {
  const display = getPerfumeDisplay(perfume);

  return (
    <article className="rounded-lg border border-black/10 bg-white/75 p-4 shadow-sm">
      <p className="text-sm font-medium text-ink/65">{display.brandPrimary}</p>
      {display.brandSecondary && <p className="mt-0.5 text-xs text-ink/45">{display.brandSecondary}</p>}
      <h2 className="mt-2 text-lg font-semibold text-ink">{display.productPrimary}</h2>
      {display.productSecondary && <p className="mt-0.5 text-sm text-ink/55">{display.productSecondary}</p>}
      <p className="mt-2 text-sm text-ink/60">{perfume.concentration ?? "濃度は要確認"}</p>
      <p className="mt-3 text-sm leading-6 text-ink/70">{perfume.shortSummary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {perfume.keyDescriptors.map((descriptor) => (
          <span key={descriptor} className="rounded-md bg-mist px-2 py-1 text-xs text-ink/70">
            {getFacetLabel(descriptor)}
          </span>
        ))}
      </div>
      <Link href={`/perfumes/${perfume.id}`} className="mt-4 inline-block text-sm font-medium text-moss underline">
        詳細を見る
      </Link>
    </article>
  );
}
