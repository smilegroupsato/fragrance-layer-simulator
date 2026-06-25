"use client";

import { useMemo, useState } from "react";
import { EntryCard } from "@/components/EntryCard";
import { GlossaryFilters } from "@/components/GlossaryFilters";
import { fragranceEntries } from "@/data/fragranceEntries";
import type { FragranceEntryType } from "@/types/fragrance";

export function GlossaryView({ initialType = "all" }: { initialType?: "all" | FragranceEntryType }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"all" | FragranceEntryType>(initialType);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return fragranceEntries.filter((entry) => {
      const matchesType = type === "all" || entry.type === type;
      const haystack = [entry.name, entry.type, entry.summary, ...entry.facets, ...(entry.aliases ?? [])].join(" ").toLowerCase();
      return matchesType && (!normalized || haystack.includes(normalized));
    });
  }, [query, type]);

  return (
    <>
      <div className="mt-6">
        <GlossaryFilters query={query} type={type} onQueryChange={setQuery} onTypeChange={setType} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((entry) => <EntryCard key={entry.id} entry={entry} />)}
      </div>
    </>
  );
}
