import Link from "next/link";

const cards = [
  { eyebrow: "GLOSSARY", title: "香りの言葉を知る", href: "/glossary?type=descriptor", body: "言葉、素材、イメージを静かに行き来する。" },
  { eyebrow: "PERFUMES", title: "香水を眺める", href: "/perfumes", body: "公式情報、言説、自分の記録を分けて読む。" },
  { eyebrow: "BLEND", title: "香りを重ねてみる", href: "/blend", body: "素材と比率から、重なりの輪郭を見る。" },
  { eyebrow: "MATERIALS", title: "原料から読む", href: "/glossary?type=material", body: "植物、樹脂、分子を棚の裏側として眺める。" }
];

export function HomeCards() {
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group min-h-48 border border-stone-200/80 bg-[#f8f1e8]/85 p-5 transition hover:bg-white/90"
        >
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-ink/40">{card.eyebrow}</p>
          <h2 className="mt-9 text-lg font-semibold text-ink">{card.title}</h2>
          <p className="mt-3 text-sm leading-6 text-ink/60">{card.body}</p>
          <span className="mt-7 inline-block text-lg text-ink/40 transition group-hover:translate-x-1 group-hover:text-ink" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </section>
  );
}
