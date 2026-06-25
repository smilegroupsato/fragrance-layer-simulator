"use client";

import type { FragranceEntryType } from "@/types/fragrance";
import { getTypeLabel } from "@/lib/displayLabels";

const filterOptions: Array<"all" | FragranceEntryType> = ["all", "descriptor", "material", "plant", "molecule", "physiology", "image"];

interface GlossaryFiltersProps {
  query: string;
  type: "all" | FragranceEntryType;
  onQueryChange: (query: string) => void;
  onTypeChange: (type: "all" | FragranceEntryType) => void;
}

export function GlossaryFilters({ query, type, onQueryChange, onTypeChange }: GlossaryFiltersProps) {
  return (
    <div className="mb-6 rounded-lg border border-black/10 bg-white/70 p-4">
      <label className="block text-sm font-medium text-ink" htmlFor="glossary-search">
        検索
      </label>
      <input
        id="glossary-search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-moss"
        placeholder="名前、香調タグ、概要..."
      />
      <p className="mt-4 text-sm font-medium text-ink">種別</p>
      <div className="mt-2 flex flex-wrap gap-2" aria-label="種別フィルター">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onTypeChange(option)}
            className={`rounded-md px-3 py-2 text-sm ${type === option ? "bg-moss text-white" : "bg-mist text-ink/75 hover:bg-mist/70"}`}
          >
            {getTypeLabel(option)}
          </button>
        ))}
      </div>
    </div>
  );
}
