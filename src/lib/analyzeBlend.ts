import { fragranceEntryMap } from "@/data/fragranceEntries";
import { getEntryDisplay } from "@/lib/displayLabels";
import type { BlendAnalysis, BlendItem } from "@/types/fragrance";

export function analyzeBlend(items: BlendItem[]): BlendAnalysis {
  const facetScores = new Map<string, number>();
  const phaseScores = new Map<string, number>();
  const imageIds = new Set<string>();
  const comments: string[] = [];

  for (const item of items) {
    const entry = fragranceEntryMap.get(item.entryId);
    if (!entry) {
      comments.push(`未登録の項目: ${item.entryId}`);
      continue;
    }

    const score = item.ratio * (entry.intensity ?? 3);
    phaseScores.set(entry.phase ?? "none", (phaseScores.get(entry.phase ?? "none") ?? 0) + score);

    for (const facet of entry.facets) {
      facetScores.set(facet, (facetScores.get(facet) ?? 0) + score);
    }

    entry.relatedImages?.forEach((id) => imageIds.add(id));
  }

  const dominantFacets = [...facetScores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([facet]) => facet);

  const phases = Object.fromEntries([...phaseScores.entries()].sort((a, b) => b[1] - a[1]));
  const sensoryImages = [...imageIds]
    .map((id) => {
      const entry = fragranceEntryMap.get(id);
      return entry ? getEntryDisplay(entry).primary : id;
    })
    .slice(0, 8);

  if (items.length === 0) {
    comments.push("素材を選ぶと、ratio * intensity の簡易スコアで構造を表示します。");
  } else {
    comments.push("この v0.1 分析は読み取り補助であり、科学的な予測ではありません。");
  }

  return { dominantFacets, phases, sensoryImages, comments };
}
