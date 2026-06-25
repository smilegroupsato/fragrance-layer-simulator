"use client";

import { useMemo, useState } from "react";
import { fragranceEntries, fragranceEntryMap } from "@/data/fragranceEntries";
import { analyzeBlend } from "@/lib/analyzeBlend";
import type { BlendAnalysis, BlendItem } from "@/types/fragrance";
import { BlendAnalysisView } from "@/components/BlendAnalysisView";
import { getEntryDisplay, getPhaseLabel } from "@/lib/displayLabels";

const selectableEntries = fragranceEntries.filter((entry) => entry.type === "material" || entry.type === "plant");

export function BlendBuilder() {
  const [entryId, setEntryId] = useState(selectableEntries[0]?.id ?? "");
  const [ratio, setRatio] = useState(1);
  const [items, setItems] = useState<BlendItem[]>([]);
  const [analysis, setAnalysis] = useState<BlendAnalysis>(() => analyzeBlend([]));

  const currentItems = useMemo(
    () => items.map((item) => ({ ...item, entry: fragranceEntryMap.get(item.entryId) })),
    [items]
  );

  function addItem() {
    if (!entryId || ratio <= 0) return;
    setItems((current) => {
      const existing = current.find((item) => item.entryId === entryId);
      if (existing) {
        return current.map((item) => item.entryId === entryId ? { ...item, ratio } : item);
      }
      return [...current, { entryId, ratio }];
    });
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.entryId !== id));
  }

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-black/10 bg-white/75 p-5">
        <h2 className="text-lg font-semibold text-ink">素材を追加</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_8rem_auto] md:items-end">
          <label>
            <span className="text-sm font-medium text-ink/70">素材を選択</span>
            <select value={entryId} onChange={(event) => setEntryId(event.target.value)} className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-moss">
              {selectableEntries.map((entry) => (
                <option key={entry.id} value={entry.id}>{getEntryDisplay(entry).primary}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="text-sm font-medium text-ink/70">比率</span>
            <input type="number" min="0.1" step="0.1" value={ratio} onChange={(event) => setRatio(Number(event.target.value))} className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-moss" />
          </label>
          <button type="button" onClick={addItem} className="rounded-md bg-moss px-4 py-2 text-sm font-medium text-white">
            追加
          </button>
        </div>
      </section>
      <section className="rounded-lg border border-black/10 bg-white/75 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-ink">現在のブレンド</h2>
          <button type="button" onClick={() => setAnalysis(analyzeBlend(items))} className="rounded-md bg-clay px-4 py-2 text-sm font-medium text-white">
            分析する
          </button>
        </div>
        <div className="mt-4 grid gap-3">
          {currentItems.length === 0 ? (
            <p className="text-sm text-ink/60">素材を追加してください。</p>
          ) : currentItems.map(({ entryId: id, ratio: itemRatio, entry }) => (
            <div key={id} className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-mist px-3 py-2 text-sm text-ink/75">
              <span>{entry ? getEntryDisplay(entry).primary : id} <span className="text-ink/50">フェーズ: {getPhaseLabel(entry?.phase)}</span></span>
              <span>比率 {itemRatio}</span>
              <button type="button" onClick={() => removeItem(id)} className="rounded-md px-2 py-1 text-ink/60 underline">削除</button>
            </div>
          ))}
        </div>
      </section>
      <BlendAnalysisView analysis={analysis} />
    </div>
  );
}
