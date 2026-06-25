import { BlendBuilder } from "@/components/BlendBuilder";
import { blendExamples } from "@/data/blendExamples";
import { fragranceEntryMap } from "@/data/fragranceEntries";
import { getEntryDisplay } from "@/lib/displayLabels";

export default function BlendPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold text-ink">簡易ブレンド</h1>
        <p className="mt-3 max-w-3xl text-ink/70">素材や植物を選び、比率を設定して、ratio * intensity による簡易構造を読みます。</p>
      </div>
      <BlendBuilder />
      <section className="rounded-lg border border-black/10 bg-white/75 p-5">
        <h2 className="text-lg font-semibold text-ink">サンプルブレンド</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {blendExamples.map((blend) => (
            <div key={blend.id} className="rounded-md bg-mist p-3 text-sm text-ink/75">
              <strong>{blend.name}</strong>
              <p>{blend.memo}</p>
              <p className="mt-1 text-ink/55">
                {blend.items.map((item) => {
                  const entry = fragranceEntryMap.get(item.entryId);
                  return `${entry ? getEntryDisplay(entry).primary : item.entryId} ${item.ratio}`;
                }).join(" / ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
