"use client";

import { useMemo, useState } from "react";
import { getPerfumeImageItems } from "@/data/perfumeImages";
import type { ReferencePerfume } from "@/types/fragrance";

export function PerfumeImageCarousel({ perfume }: { perfume: ReferencePerfume }) {
  const label = `${perfume.brand} ${perfume.name}`;
  const images = useMemo(() => getPerfumeImageItems(perfume), [perfume]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentIndex];

  function showPrevious() {
    if (!hasMultipleImages) return;
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNext() {
    if (!hasMultipleImages) return;
    setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    event.currentTarget.dataset.touchStartX = String(event.touches[0]?.clientX ?? 0);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    if (!hasMultipleImages) return;
    const startX = Number(event.currentTarget.dataset.touchStartX ?? 0);
    const endX = event.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) {
      showPrevious();
    } else {
      showNext();
    }
  }

  return (
    <section
      className="relative flex aspect-[4/3] min-h-64 touch-pan-y items-center justify-center overflow-hidden rounded-lg border border-rose-100 bg-white/75 p-4 shadow-sm"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label={`${label} image carousel`}
    >
      {hasImages ? (
        <>
          <img src={currentImage.imageUrl} alt={`${label} image ${currentIndex + 1}`} className="h-full w-full object-contain" />
          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg text-ink shadow-sm"
                aria-label="前の画像"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg text-ink shadow-sm"
                aria-label="次の画像"
              >
                ›
              </button>
            </>
          )}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs text-ink/70 shadow-sm">
            <span>{currentIndex + 1} / {images.length}</span>
            {hasMultipleImages && (
              <span className="flex gap-1" aria-hidden="true">
                {images.map((image, index) => (
                  <span key={image.id} className={`h-1.5 w-1.5 rounded-full ${index === currentIndex ? "bg-clay" : "bg-rose-200"}`} />
                ))}
              </span>
            )}
          </div>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-rose-200 bg-rose-50/70 text-sm text-ink/55">
          画像未登録
        </div>
      )}
    </section>
  );
}
