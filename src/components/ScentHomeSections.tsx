import Link from "next/link";

const stateTags = [
  "清潔に整えたい",
  "少し甘さが欲しい",
  "体をゆるめたい",
  "気分を上げたい",
  "静かに休みたい",
  "女っぽく満たされたい",
  "木の部屋に戻りたい",
  "白い空気に包まれたい",
  "深く静まりたい",
  "足元の現実に戻りたい"
];

const currentNeeds = [
  "724の清潔感に、花の蜜・桃・蜂蜜の甘さを少し足す方向。",
  "Almaの静けさより、もう少し満足感がある香り。",
  "Muskara Rosaとは違う方向の甘さ。"
];

const scentCategories = [
  "白い空気",
  "肌に残る甘さ",
  "木の静けさ",
  "花の蜜",
  "桃・ネクター",
  "お茶とハーブ",
  "気分を上げる柑橘",
  "体をゆるめる木",
  "女っぽく満たす薔薇",
  "深く静まる樹脂",
  "足元の現実に戻る草",
  "白花と余韻"
];

export function StateSelector() {
  return (
    <section className="space-y-5">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.26em] text-ink/45">State Selector</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink">いまの状態から選ぶ</h2>
        <p className="mt-3 text-sm leading-6 text-ink/62">
          商品名からではなく、戻りたい空気から手を伸ばすための入口。
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {stateTags.map((tag) => (
          <Link
            key={tag}
            href="/perfumes"
            className="rounded-full border border-stone-200/85 bg-white/65 px-4 py-2 text-sm text-ink/70 transition hover:border-clay/35 hover:bg-[#fffaf3] hover:text-ink"
          >
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CurrentNeed() {
  return (
    <section className="grid gap-6 border-y border-stone-200/80 py-8 md:grid-cols-[0.75fr_1.25fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.26em] text-ink/45">Current Need</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink">今探している空気</h2>
      </div>
      <div className="space-y-3">
        {currentNeeds.map((need) => (
          <p key={need} className="rounded-sm bg-white/55 px-4 py-3 text-sm leading-6 text-ink/72">
            {need}
          </p>
        ))}
      </div>
    </section>
  );
}

export function ScentCabinetCategories() {
  return (
    <section className="space-y-5">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.26em] text-ink/45">Scent Cabinet Categories</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink">香りの薬箱</h2>
        <p className="mt-3 text-sm leading-6 text-ink/62">
          ブランド別ではなく、体調、気分、空気の作用で分類しておく。
        </p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {scentCategories.map((category) => (
          <Link
            key={category}
            href="/perfumes"
            className="border border-stone-200/75 bg-[#fbf7f0]/70 px-4 py-3 text-sm text-ink/70 transition hover:bg-white/80 hover:text-ink"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
