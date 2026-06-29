import Link from "next/link";
import { getPrimaryPerfumeImageUrl } from "@/data/perfumeImages";
import type { ReferencePerfume } from "@/types/fragrance";
import { getFacetLabel, getPerfumeDisplay } from "@/lib/displayLabels";

export function PerfumeCard({ perfume }: { perfume: ReferencePerfume }) {
  const display = getPerfumeDisplay(perfume);
  const imageUrl = getPrimaryPerfumeImageUrl(perfume);

  return (
    <article className="grid gap-4 rounded-lg border border-black/10 bg-white/75 p-4 shadow-sm sm:grid-cols-[9rem_1fr]">
      <Link href={`/perfumes/${perfume.id}`} className="flex aspect-[4/5] items-center justify-center rounded-md border border-rose-100 bg-rose-50/55 p-3">
        {imageUrl ? (
          <img src={imageUrl} alt={`${display.productPrimary} bottle`} className="h-full w-full object-contain" />
        ) : (
          <span className="text-xs text-ink/45">画像未登録</span>
        )}
      </Link>
      <div>
        <p className="text-sm font-medium text-ink/65">{display.brandPrimary}</p>
        {display.brandSecondary && <p className="mt-0.5 text-xs text-ink/45">{display.brandSecondary}</p>}
        <h2 className="mt-2 text-lg font-semibold text-ink">{display.productPrimary}</h2>
        {display.productSecondary && <p className="mt-0.5 text-sm text-ink/55">{display.productSecondary}</p>}
        <p className="mt-2 text-sm text-ink/60">{perfume.concentration ?? "濃度は要確認"}</p>
        {(perfume.collection || perfume.displayCategory) && (
          <p className="mt-1 text-xs text-ink/45">
            {[perfume.collection, perfume.displayCategory].filter(Boolean).join(" / ")}
          </p>
        )}
        <p className="mt-3 text-sm leading-6 text-ink/70">{perfume.currentRole ?? perfume.shortSummary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(perfume.stateTags?.slice(0, 3) ?? perfume.keyDescriptors).map((descriptor) => (
            <span key={descriptor} className="rounded-md bg-mist px-2 py-1 text-xs text-ink/70">
              {getFacetLabel(descriptor)}
            </span>
          ))}
        </div>
        <Link href={`/perfumes/${perfume.id}`} className="mt-4 inline-block text-sm font-medium text-moss underline">
          詳細を見る
        </Link>
      </div>
    </article>
  );
}
