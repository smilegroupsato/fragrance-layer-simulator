"use client";

import type { FragranceEntryType } from "@/types/fragrance";
import { getFacetLabel, getTypeLabel } from "@/lib/displayLabels";

const filterOptions: Array<"all" | FragranceEntryType> = ["all", "descriptor", "material", "plant", "molecule", "physiology", "image"];

interface GlossaryFiltersProps {
  query: string;
  type: "all" | FragranceEntryType;
  facet: string;
  facetOptions: string[];
  onQueryChange: (query: string) => void;
  onTypeChange: (type: "all" | FragranceEntryType) => void;
  onFacetChange: (facet: string) => void;
}

export function GlossaryFilters({ query, type, facet, facetOptions, onQueryChange, onTypeChange, onFacetChange }: GlossaryFiltersProps) {
  return (
    <div className="mb-6 rounded-lg border border-rose-100 bg-white/80 p-4 shadow-sm">
      <label className="block text-sm font-medium text-ink" htmlFor="glossary-search">
        検索
      </label>
      <input
        id="glossary-search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        className="mt-2 w-full rounded-md border border-rose-100 bg-white px-3 py-2 text-sm outline-none focus:border-clay"
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
      <label className="mt-4 block text-sm font-medium text-ink" htmlFor="facet-filter">
        香調タグ
      </label>
      <select
        id="facet-filter"
        value={facet}
        onChange={(event) => onFacetChange(event.target.value)}
        className="mt-2 w-full rounded-md border border-rose-100 bg-white px-3 py-2 text-sm outline-none focus:border-clay"
      >
        <option value="">すべて</option>
        {facetOptions.map((option) => (
          <option key={option} value={option}>
            {getFacetLabel(option)}
          </option>
        ))}
      </select>
    </div>
  );
}
