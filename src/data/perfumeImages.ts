import type { PerfumeImageItem, ReferencePerfume } from "@/types/fragrance";

export const perfumeImageItems: PerfumeImageItem[] = [
  {
    id: "fueguia-1833-muskara-rosa-user-01",
    perfumeId: "fueguia-1833-muskara-rosa",
    imageUrl: "/images/perfumes/fueguia-1833-muskara-rosa.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-alma-user-01",
    perfumeId: "fueguia-1833-alma",
    imageUrl: "/images/perfumes/fueguia-1833-alma.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-muskara-boswellia-user-01",
    perfumeId: "fueguia-1833-muskara-boswellia",
    imageUrl: "/images/perfumes/fueguia-1833-muskara-boswellia.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-pampa-humeda-user-01",
    perfumeId: "fueguia-1833-pampa-humeda",
    imageUrl: "/images/perfumes/fueguia-1833-pampa-humeda.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-basilicum-user-01",
    perfumeId: "fueguia-1833-basilicum",
    imageUrl: "/images/perfumes/fueguia-1833-basilicum.jpg",
    source: "user",
    sortOrder: 1
  },
  {
    id: "fueguia-1833-amalia-gourmand-user-01",
    perfumeId: "fueguia-1833-amalia-gourmand",
    imageUrl: "/images/perfumes/fueguia-1833-amalia-gourmand.jpg",
    source: "user",
    sortOrder: 1,
    createdAt: "2026-06-28"
  },
  {
    id: "fueguia-1833-amalia-gourmand-user-02",
    perfumeId: "fueguia-1833-amalia-gourmand",
    imageUrl: "/images/perfumes/fueguia-1833-amalia-gourmand-02.jpg",
    source: "user",
    sortOrder: 2,
    createdAt: "2026-06-28"
  },
  {
    id: "fueguia-1833-tinta-roja-user-01",
    perfumeId: "fueguia-1833-tinta-roja",
    imageUrl: "/images/perfumes/fueguia-1833-tinta-roja.jpg",
    source: "user",
    sortOrder: 1,
    createdAt: "2026-06-28"
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
