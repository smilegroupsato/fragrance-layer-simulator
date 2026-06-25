import Link from "next/link";
import { getRelatedPerfumeEntries } from "@/lib/analyzePerfume";
import type { FragranceEntry, ReferencePerfume } from "@/types/fragrance";
import { getEntryDisplay, getFacetLabel, getNotesStatusLabel, getOfficialNoteLabel, getPerfumeDisplay } from "@/lib/displayLabels";
import { PerfumeImage } from "@/components/PerfumeImage";
import { PerfumeUserNotes } from "@/components/PerfumeUserNotes";

function TextSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-black/10 bg-white/75 p-5">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-ink/70">{children}</div>
    </section>
  );
}

export function PerfumeDetail({ perfume }: { perfume: ReferencePerfume }) {
  const related = getRelatedPerfumeEntries(perfume);
  const display = getPerfumeDisplay(perfume);

  return (
    <article className="space-y-5">
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_20rem] md:items-start">
        <div>
          <p className="text-sm font-medium text-ink/65">{display.brandPrimary}</p>
          {display.brandSecondary && <p className="mt-1 text-sm text-ink/45">{display.brandSecondary}</p>}
          <h1 className="mt-2 text-4xl font-semibold text-ink">{display.productPrimary}</h1>
          {display.productSecondary && <p className="mt-2 text-lg text-ink/55">{display.productSecondary}</p>}
          <p className="mt-2 text-ink/65">{perfume.concentration ?? "濃度は要確認"}</p>
        </div>
        <PerfumeImage perfume={perfume} />
      </div>
      <TextSection title="基本情報">
        <p>{perfume.shortSummary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {perfume.keyDescriptors.map((item) => (
            <span key={item} className="rounded-md bg-mist px-2 py-1 text-xs text-ink/70">{getFacetLabel(item)}</span>
          ))}
        </div>
      </TextSection>
      <TextSection title="公式情報">
        <p>ノート確認状況：{getNotesStatusLabel(perfume.officialInfo.notesStatus)}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {perfume.officialInfo.notes.map((note) => <li key={note}>{getOfficialNoteLabel(note)}</li>)}
        </ul>
      </TextSection>
      <TextSection title="AI風レイヤー分析">
        <div className="grid gap-4 md:grid-cols-3">
          <div><h3 className="font-medium">トップ</h3><p>{perfume.analyzedLayers.opening.join("、")}</p></div>
          <div><h3 className="font-medium">ミドル</h3><p>{perfume.analyzedLayers.heart.join("、")}</p></div>
          <div><h3 className="font-medium">ラスト</h3><p>{perfume.analyzedLayers.drydown.join("、")}</p></div>
        </div>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {perfume.analyzedLayers.comments.map((comment) => <li key={comment}>{comment}</li>)}
        </ul>
      </TextSection>
      <TextSection title="一般的な言説">
        <ul className="list-disc space-y-1 pl-5">
          {perfume.publicDiscourse.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </TextSection>
      <TextSection title="自分のメモ">
        <ul className="list-disc space-y-1 pl-5">
          {perfume.userNotes.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </TextSection>
      <PerfumeUserNotes perfumeId={perfume.id} />
      <TextSection title="関連項目">
        <div className="flex flex-wrap gap-2">
          {related.map((item) =>
            typeof item === "string" ? (
              <span key={item} className="rounded-md bg-mist px-2 py-1 text-sm text-ink/70">{item}</span>
            ) : (
              <Link key={(item as FragranceEntry).id} href={`/entries/${(item as FragranceEntry).id}`} className="rounded-md bg-mist px-2 py-1 text-sm text-moss underline">
                {getEntryDisplay(item as FragranceEntry).primary}
              </Link>
            )
          )}
        </div>
      </TextSection>
    </article>
  );
}
