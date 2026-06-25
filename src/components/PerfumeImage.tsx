import type { ReferencePerfume } from "@/types/fragrance";

export function PerfumeImage({ perfume }: { perfume: ReferencePerfume }) {
  const label = `${perfume.brand} ${perfume.name}`;

  return (
    <section className="flex aspect-[4/3] min-h-64 items-center justify-center overflow-hidden rounded-lg border border-rose-100 bg-white/75 p-4 shadow-sm">
      {perfume.imageUrl ? (
        <img src={perfume.imageUrl} alt={`${label} image`} className="h-full w-full object-contain" />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-rose-200 bg-rose-50/70 text-sm text-ink/55">
          画像未登録
        </div>
      )}
    </section>
  );
}
