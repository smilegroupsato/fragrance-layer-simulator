import Link from "next/link";

const cards = [
  { title: "言葉から読む", href: "/glossary?type=descriptor", body: "香調語、感覚イメージ、身体感覚の言葉から香りを読む。" },
  { title: "原料から読む", href: "/glossary?type=material", body: "香料・素材と植物を、静的データのレイヤーで眺める。" },
  { title: "既存香水を読む", href: "/perfumes", body: "公式情報、分析、言説、自分のメモを分けて参照する。" },
  { title: "組み合わせてみる", href: "/blend", body: "素材と比率を選び、簡易スコアでブレンド構造を見る。" }
];

export function HomeCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <Link key={card.href} href={card.href} className="rounded-lg border border-black/10 bg-white/75 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <h2 className="text-xl font-semibold text-ink">{card.title}</h2>
          <p className="mt-3 text-sm leading-6 text-ink/70">{card.body}</p>
        </Link>
      ))}
    </div>
  );
}
