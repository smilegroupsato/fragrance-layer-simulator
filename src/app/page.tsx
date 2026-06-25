import { HomeCards } from "@/components/HomeCards";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-wide text-moss">香りをレイヤーで読む</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-normal text-ink">Fragrance Layer Simulator</h1>
        <p className="mt-5 leading-7 text-ink/70">
          香りの言葉、素材、分子、文化レイヤー、感覚イメージ、簡単なブレンド構造を読むための v0.1 プロトタイプです。
        </p>
      </section>
      <HomeCards />
    </div>
  );
}
