import Link from "next/link";
import { getPrimaryPerfumeImageUrl } from "@/data/perfumeImages";
import type { ReferencePerfume } from "@/types/fragrance";
import { getPerfumeDisplay } from "@/lib/displayLabels";

export function PerfumeShelf({ perfumes }: { perfumes: ReferencePerfume[] }) {
  const shelfPerfumes = perfumes.filter((perfume) => getPrimaryPerfumeImageUrl(perfume));

  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-ink/45">Aiko's Scent Cabinet</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink">自分の空気を整える棚</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-ink/60">
            香水を眺める棚ではなく、いまの状態に必要な空気へ手を伸ばすための小さな薬箱。
          </p>
        </div>
        <Link href="/perfumes" className="shrink-0 text-sm text-ink/60 underline transition hover:text-ink">
          すべて見る
        </Link>
      </div>
      <div className="relative overflow-hidden rounded-sm border border-stone-200/80 bg-[#fbf7f0] px-2 pb-4 pt-8 shadow-[0_16px_48px_rgba(47,36,40,0.06)]">
        <div className="pointer-events-none absolute inset-x-0 bottom-24 h-px bg-stone-400/35" />
        <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:gap-8">
          {shelfPerfumes.map((perfume) => {
            const display = getPerfumeDisplay(perfume);
            const imageUrl = getPrimaryPerfumeImageUrl(perfume);
            if (!imageUrl) return null;
            return (
              <Link
                key={perfume.id}
                href={`/perfumes/${perfume.id}`}
                className="group flex min-w-[9.5rem] snap-start flex-col items-center text-center sm:min-w-[11rem]"
              >
                <div className="flex h-52 w-full items-end justify-center sm:h-64">
                  <img
                    src={imageUrl}
                    alt={`${display.productPrimary} bottle`}
                    className="max-h-full w-full object-contain drop-shadow-[0_18px_18px_rgba(47,36,40,0.14)] transition duration-300 group-hover:-translate-y-1"
                  />
                </div>
                <div className="mt-4 min-h-16">
                  <p className="text-xs uppercase tracking-[0.12em] text-ink/75">{display.productPrimary}</p>
                  <p className="mt-1 text-[0.7rem] leading-4 text-ink/45">{display.brandPrimary}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
