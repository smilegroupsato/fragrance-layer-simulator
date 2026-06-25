import { fragranceEntryMap } from "@/data/fragranceEntries";
import type { ReferencePerfume } from "@/types/fragrance";

export function getRelatedPerfumeEntries(perfume: ReferencePerfume) {
  return perfume.relatedEntryIds.map((id) => fragranceEntryMap.get(id) ?? id);
}
