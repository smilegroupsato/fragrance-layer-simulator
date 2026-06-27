import type { PerfumeImageItem, ReferencePerfume } from "@/types/fragrance";

export const perfumeImageItems: PerfumeImageItem[] = [
  {
    id: "fueguia-1833-muskara-rosa-user-1",
    perfumeId: "muskara-rosa-fueguia-1833",
    imageUrl: "/images/perfumes/fueguia-1833-muskara-rosa.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-alma-user-1",
    perfumeId: "alma-fueguia-1833",
    imageUrl: "/images/perfumes/fueguia-1833-alma.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-muskara-boswellia-user-1",
    perfumeId: "muskara-boswellia-fueguia-1833",
    imageUrl: "/images/perfumes/fueguia-1833-muskara-boswellia.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-pampa-humeda-user-1",
    perfumeId: "pampa-humeda-fueguia-1833",
    imageUrl: "/images/perfumes/fueguia-1833-pampa-humeda.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-basilicum-user-1",
    perfumeId: "basilicum-fueguia-1833",
    imageUrl: "/images/perfumes/fueguia-1833-basilicum.jpg",
    source: "user",
    sortOrder: 1
  }
];

export function getPerfumeImageItems(perfume: ReferencePerfume): PerfumeImageItem[] {
  const officialItems: PerfumeImageItem[] = perfume.imageUrl
    ? [
        {
          id: `${perfume.id}-official-image`,
          perfumeId: perfume.id,
          imageUrl: perfume.imageUrl,
          source: "official",
          sortOrder: 0
        }
      ]
    : [];

  return [...officialItems, ...perfumeImageItems.filter((item) => item.perfumeId === perfume.id)]
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPrimaryPerfumeImageUrl(perfume: ReferencePerfume) {
  return getPerfumeImageItems(perfume)[0]?.imageUrl;
}
