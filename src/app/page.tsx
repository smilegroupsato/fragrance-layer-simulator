import { HomeCards } from "@/components/HomeCards";
import { HomeHero } from "@/components/HomeHero";
import { PerfumeShelf } from "@/components/PerfumeShelf";
import { referencePerfumes } from "@/data/referencePerfumes";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HomeHero perfumes={referencePerfumes} />
      <PerfumeShelf perfumes={referencePerfumes} />
      <HomeCards />
      <section className="mx-auto max-w-2xl py-8 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/40">Scent Dictionary</p>
        <p className="mt-5 text-xl leading-9 text-ink/75">
          香りは、名前だけではなく、置かれた時間、肌との距離、記憶の湿度で変わる。
          FLSはその変化を、静かな棚として眺めるための場所です。
        </p>
      </section>
    </div>
  );
}
