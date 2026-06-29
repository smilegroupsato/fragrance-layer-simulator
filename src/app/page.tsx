import { HomeCards } from "@/components/HomeCards";
import { HomeHero } from "@/components/HomeHero";
import { PerfumeShelf } from "@/components/PerfumeShelf";
import { CurrentNeed, ScentCabinetCategories, StateSelector } from "@/components/ScentHomeSections";
import { referencePerfumes } from "@/data/referencePerfumes";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HomeHero perfumes={referencePerfumes} />
      <StateSelector />
      <PerfumeShelf perfumes={referencePerfumes} />
      <CurrentNeed />
      <ScentCabinetCategories />
      <HomeCards />
      <section className="mx-auto max-w-2xl py-8 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/40">Air Tuning Notes</p>
        <p className="mt-5 text-xl leading-9 text-ink/75">
          香りは、所有物ではなく、空気を整える生活道具でもある。
          いまの体温、気分、部屋の光に合わせて、必要な一本へ近づいていく。
        </p>
      </section>
    </div>
  );
}
