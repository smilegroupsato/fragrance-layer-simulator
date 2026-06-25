import type { BlendAnalysis } from "@/types/fragrance";
import { getFacetLabel, getPhaseLabel } from "@/lib/displayLabels";

export function BlendAnalysisView({ analysis }: { analysis: BlendAnalysis }) {
  return (
    <section className="rounded-lg border border-black/10 bg-white/75 p-5">
      <h2 className="text-lg font-semibold text-ink">分析結果</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/55">支配的な香調タグ</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {analysis.dominantFacets.length > 0 ? analysis.dominantFacets.map((facet) => (
              <span key={facet} className="rounded-md bg-mist px-2 py-1 text-sm text-ink/75">{getFacetLabel(facet)}</span>
            )) : <span className="text-sm text-ink/55">なし</span>}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/55">フェーズ</h3>
          <dl className="mt-2 space-y-1 text-sm text-ink/75">
            {Object.entries(analysis.phases).map(([phase, score]) => (
              <div key={phase} className="flex justify-between gap-3 rounded-md bg-mist px-3 py-2">
                <dt>{getPhaseLabel(phase)}</dt>
                <dd>{score}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/55">感覚イメージ</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {analysis.sensoryImages.length > 0 ? analysis.sensoryImages.map((image) => (
              <span key={image} className="rounded-md bg-mist px-2 py-1 text-sm text-ink/75">{image}</span>
            )) : <span className="text-sm text-ink/55">なし</span>}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/55">コメント</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/75">
            {analysis.comments.map((comment) => <li key={comment}>{comment}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
