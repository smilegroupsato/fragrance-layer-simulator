import Link from "next/link";

const cards = [
  { eyebrow: "PERFUMES", title: "香りの棚を見る", href: "/perfumes", body: "いま必要な空気に近い一本を探す。" },
  { eyebrow: "BLEND", title: "足りない空気を足す", href: "/blend", body: "清潔感、甘さ、木の静けさを少し重ねる。" },
  { eyebrow: "GLOSSARY", title: "香りの言葉を知る", href: "/glossary?type=descriptor", body: "状態や空気を表す言葉をたどる。" },
  { eyebrow: "MATERIALS", title: "原料から読む", href: "/glossary?type=material", body: "花、樹脂、草、分子の感触を見る。" }
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
