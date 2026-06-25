import { GlossaryView } from "@/components/GlossaryView";
import type { FragranceEntryType } from "@/types/fragrance";

const validTypes = new Set(["descriptor", "material", "plant", "molecule", "physiology", "image"]);

export default async function GlossaryPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const params = await searchParams;
  const initialType = params.type && validTypes.has(params.type) ? (params.type as FragranceEntryType) : "all";

  return (
    <div>
      <h1 className="text-4xl font-semibold text-ink">用語集</h1>
      <p className="mt-3 max-w-3xl text-ink/70">香りを読むための静的 TypeScript データです。説明文は編集用サンプルであり、科学的な断定ではありません。</p>
      <GlossaryView initialType={initialType} />
    </div>
  );
}
