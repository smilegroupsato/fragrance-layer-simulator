import Link from "next/link";
import { getPrimaryPerfumeImageUrl } from "@/data/perfumeImages";
import type { ReferencePerfume } from "@/types/fragrance";
import { getPerfumeDisplay } from "@/lib/displayLabels";

export function HomeHero({ perfumes }: { perfumes: ReferencePerfume[] }) {
  const heroPerfumes = perfumes.filter((perfume) => getPrimaryPerfumeImageUrl(perfume)).slice(0, 4);

  return (
    <section className="overflow-hidden rounded-sm border border-stone-200/70 bg-[#fbf7f0] shadow-[0_24px_80px_rgba(120,104,88,0.06)]">
      <div className="grid min-h-[32rem] md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between px-7 py-10 sm:px-10 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-ink/50">Fragrance Layer Simulator</p>
            <h1 className="mt-8 max-w-md text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              今日は、どんな空気に戻りたい？
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-ink/70">
              香水を選ぶことは、いまの自分の空気を整えること。
              清潔な空気、肌に残る甘さ、木の静けさへ手を伸ばすための棚。
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-ink/42">
              A quiet cabinet for tuning your air.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-5">
            <Link href="/perfumes" className="border-b border-ink/40 pb-1 text-sm text-ink transition hover:border-ink">
              香りの棚へ
            </Link>
            <Link href="/glossary" className="text-sm text-ink/55 transition hover:text-ink">
              香りの言葉へ
            </Link>
          </div>
        </div>
        <div className="relative flex items-end justify-center bg-[linear-gradient(180deg,#fbf7f0_0%,#ede2d4_100%)] px-6 pt-10">
          <div className="absolute inset-x-8 bottom-20 h-px bg-stone-400/35" />
          <div className="absolute inset-x-8 bottom-16 h-10 bg-[linear-gradient(180deg,rgba(120,104,88,0.10),rgba(255,255,255,0))]" />
          <div className="relative z-10 flex w-full max-w-2xl items-end justify-center gap-2 sm:gap-5">
            {heroPerfumes.map((perfume, index) => {
              const display = getPerfumeDisplay(perfume);
              const imageUrl = getPrimaryPerfumeImageUrl(perfume);
              if (!imageUrl) return null;
              return (
                <Link
                  key={perfume.id}
                  href={`/perfumes/${perfume.id}`}
                  className={`group flex min-w-0 flex-1 flex-col items-center ${index % 2 === 0 ? "pb-2" : "pb-8"}`}
                >
                  <img
                    src={imageUrl}
                    alt={`${display.productPrimary} bottle`}
                    className="h-48 w-full object-contain drop-shadow-[0_22px_22px_rgba(47,36,40,0.16)] transition duration-300 group-hover:-translate-y-1 sm:h-64"
                  />
                  <span className="mt-4 hidden max-w-full truncate text-center text-[0.65rem] uppercase tracking-[0.16em] text-ink/60 sm:block">
                    {display.productPrimary}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
