import { Suspense } from "react";
import { GlossaryView } from "@/components/GlossaryView";

export default function GlossaryPage() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-ink">用語集</h1>
      <p className="mt-3 max-w-3xl text-ink/70">香りを読むための静的 TypeScript データです。説明文は編集用サンプルであり、科学的な断定ではありません。</p>
      <Suspense fallback={<p className="mt-6 text-sm text-ink/60">用語集を読み込んでいます。</p>}>
        <GlossaryView />
      </Suspense>
    </div>
  );
}
