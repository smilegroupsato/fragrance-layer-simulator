"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { EntryCard } from "@/components/EntryCard";
import { GlossaryFilters } from "@/components/GlossaryFilters";
import { fragranceEntries } from "@/data/fragranceEntries";
import { getEntrySummary, getFacetLabel } from "@/lib/displayLabels";
import type { FragranceEntryType } from "@/types/fragrance";

const validTypes = new Set(["descriptor", "material", "plant", "molecule", "physiology", "image"]);

export function GlossaryView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") ?? "";
  const requestedType = searchParams.get("type");
  const type: "all" | FragranceEntryType = requestedType && validTypes.has(requestedType) ? (requestedType as FragranceEntryType) : "all";
  const facet = searchParams.get("facet") ?? "";

  function updateFilters(next: { q?: string; type?: "all" | FragranceEntryType; facet?: string }) {
    const params = new URLSearchParams(searchParams.toString());
    const nextQuery = next.q ?? query;
    const nextType = next.type ?? type;
    const nextFacet = next.facet ?? facet;

    if (nextQuery.trim()) {
      params.set("q", nextQuery.trim());
    } else {
      params.delete("q");
    }

    if (nextType === "all") {
      params.delete("type");
    } else {
      params.set("type", nextType);
    }

    if (nextFacet) {
      params.set("facet", nextFacet);
    } else {
      params.delete("facet");
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  }

  const facetOptions = useMemo(() => {
    const values = new Set<string>();
    fragranceEntries.forEach((entry) => entry.facets.forEach((entryFacet) => values.add(entryFacet)));
    return [...values].sort((a, b) => getFacetLabel(a).localeCompare(getFacetLabel(b), "ja"));
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return fragranceEntries.filter((entry) => {
      const matchesType = type === "all" || entry.type === type;
      const matchesFacet = !facet || entry.facets.includes(facet);
      const haystack = [entry.name, entry.nameJa, entry.nameOriginal, entry.type, entry.summary, getEntrySummary(entry), ...entry.facets, ...entry.facets.map(getFacetLabel), ...(entry.aliases ?? [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return matchesType && matchesFacet && (!normalized || haystack.includes(normalized));
    });
  }, [facet, query, type]);

  return (
    <>
      <div className="mt-6">
        <GlossaryFilters
          query={query}
          type={type}
          facet={facet}
          facetOptions={facetOptions}
          onQueryChange={(nextQuery) => updateFilters({ q: nextQuery })}
          onTypeChange={(nextType) => updateFilters({ type: nextType })}
          onFacetChange={(nextFacet) => updateFilters({ facet: nextFacet })}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((entry) => <EntryCard key={entry.id} entry={entry} />)}
      </div>
    </>
  );
}
