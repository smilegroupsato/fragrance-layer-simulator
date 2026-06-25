export type FragranceEntryType =
  | "descriptor"
  | "material"
  | "plant"
  | "molecule"
  | "physiology"
  | "image";

export type FragrancePhase = "top" | "middle" | "base" | "multi" | "skin" | "none";

export interface FragranceEntry {
  id: string;
  name: string;
  nameJa?: string;
  nameOriginal?: string;
  aliases?: string[];
  type: FragranceEntryType;
  summary: string;
  facets: string[];
  phase?: FragrancePhase;
  intensity?: number;
  volatility?: "low" | "medium" | "high" | "variable";
  usageContexts?: string[];
  releaseModes?: string[];
  culturalLayers?: string[];
  relatedMaterials?: string[];
  relatedMolecules?: string[];
  relatedDescriptors?: string[];
  relatedImages?: string[];
  relatedPhysiology?: string[];
  safetyNotes?: string[];
  culturalNotes?: string[];
  sourceUrls?: string[];
}

export interface ReferencePerfume {
  id: string;
  brand: string;
  brandJa?: string;
  name: string;
  nameJa?: string;
  imageUrl?: string;
  concentration?: string;
  keyDescriptors: string[];
  shortSummary: string;
  officialInfo: {
    notesStatus: "confirmed" | "to be confirmed";
    notes: string[];
    sourceUrls?: string[];
  };
  analyzedLayers: {
    opening: string[];
    heart: string[];
    drydown: string[];
    comments: string[];
  };
  publicDiscourse: string[];
  userNotes: string[];
  relatedEntryIds: string[];
}

export type UserPerfumeNoteContext = {
  testedOn?: "skin" | "paper" | "unknown";
  season?: string;
  weather?: string;
  place?: string;
};

export interface UserPerfumeNote {
  id: string;
  perfumeId: string;
  createdAt: string;
  updatedAt?: string;
  text: string;
  context?: UserPerfumeNoteContext;
}

export interface BlendItem {
  entryId: string;
  ratio: number;
}

export interface Blend {
  id: string;
  name: string;
  items: BlendItem[];
  memo?: string;
}

export interface BlendAnalysis {
  dominantFacets: string[];
  phases: Record<string, number>;
  sensoryImages: string[];
  comments: string[];
}
