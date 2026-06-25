"use client";

import { useMemo, useState } from "react";
import { fragranceEntries, fragranceEntryMap } from "@/data/fragranceEntries";
import { analyzeBlend } from "@/lib/analyzeBlend";
import type { BlendAnalysis, BlendItem } from "@/types/fragrance";
import { BlendAnalysisView } from "@/components/BlendAnalysisView";
import { getEntryDisplay, getPhaseLabel } from "@/lib/displayLabels";

const selectableEntries = fragranceEntries.filter((entry) => entry.type === "material" || entry.type === "plant");

function normalizeRatio(value: number) {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(100, value));
}

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
    if (!entryId) return;
    const normalizedRatio = normalizeRatio(ratio);
    setItems((current) => {
      const existing = current.find((item) => item.entryId === entryId);
      if (existing) {
        return current.map((item) => item.entryId === entryId ? { ...item, ratio: normalizedRatio } : item);
      }
      return [...current, { entryId, ratio: normalizedRatio }];
    });
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.entryId !== id));
  }

  function updateItemRatio(id: string, nextRatio: number) {
    const normalizedRatio = normalizeRatio(nextRatio);
    setItems((current) => current.map((item) => item.entryId === id ? { ...item, ratio: normalizedRatio } : item));
  }

  const totalRatio = items.reduce((sum, item) => sum + item.ratio, 0);

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-black/10 bg-white/75 p-5">
        <h2 className="text-lg font-semibold text-ink">素材を追加</h2>
        <p className="mt-2 text-sm leading-6 text-ink/65">
          比率は相対値として扱います。合計が100でなくても分析できます。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <label>
            <span className="text-sm font-medium text-ink/70">素材を選択</span>
            <select value={entryId} onChange={(event) => setEntryId(event.target.value)} className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-moss">
              {selectableEntries.map((entry) => (
                <option key={entry.id} value={entry.id}>{getEntryDisplay(entry).primary}</option>
              ))}
            </select>
          </label>
          <button type="button" onClick={addItem} className="rounded-md bg-moss px-4 py-2 text-sm font-medium text-white">
            追加
          </button>
        </div>
        <label className="mt-4 block">
          <span className="text-sm font-medium text-ink/70">比率：{ratio}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={ratio}
            onChange={(event) => setRatio(normalizeRatio(Number(event.target.value)))}
            className="mt-2 w-full accent-clay"
          />
        </label>
      </section>
      <section className="rounded-lg border border-black/10 bg-white/75 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-ink">現在のブレンド</h2>
          <button type="button" onClick={() => setAnalysis(analyzeBlend(items))} className="rounded-md bg-clay px-4 py-2 text-sm font-medium text-white">
            分析する
          </button>
        </div>
        <p className="mt-2 text-sm text-ink/65">合計比率: {totalRatio}</p>
        <div className="mt-4 grid gap-3">
          {currentItems.length === 0 ? (
            <p className="text-sm text-ink/60">素材を追加してください。</p>
          ) : currentItems.map(({ entryId: id, ratio: itemRatio, entry }) => (
            <div key={id} className="grid gap-3 rounded-md bg-mist px-3 py-3 text-sm text-ink/75 md:grid-cols-[1fr_8rem_auto] md:items-center">
              <div>
                <p>{entry ? getEntryDisplay(entry).primary : id}</p>
                <p className="text-ink/50">フェーズ: {getPhaseLabel(entry?.phase)}</p>
              </div>
              <label>
                <span className="text-xs text-ink/55">比率 {itemRatio}</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  value={itemRatio}
                  onChange={(event) => updateItemRatio(id, Number(event.target.value))}
                  className="mt-1 w-full rounded-md border border-rose-100 bg-white px-2 py-1.5 text-sm outline-none focus:border-clay"
                />
              </label>
              <button type="button" onClick={() => removeItem(id)} className="rounded-md px-2 py-1 text-ink/60 underline">削除</button>
              <label className="md:col-span-3">
                <span className="sr-only">比率スライダー</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={itemRatio}
                  onChange={(event) => updateItemRatio(id, Number(event.target.value))}
                  className="w-full accent-clay"
                />
              </label>
            </div>
          ))}
        </div>
      </section>
      <BlendAnalysisView analysis={analysis} />
    </div>
  );
}
