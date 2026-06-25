import { PerfumeCard } from "@/components/PerfumeCard";
import { PerfumeForm } from "@/components/PerfumeForm";
import { referencePerfumes } from "@/data/referencePerfumes";

export default function PerfumesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold text-ink">参照香水</h1>
        <p className="mt-3 max-w-3xl text-ink/70">公式情報、AI風レイヤー分析、一般的な言説、自分のメモを分けて表示します。</p>
      </div>
      <PerfumeForm />
      <div className="grid gap-4 md:grid-cols-2">
        {referencePerfumes.map((perfume) => <PerfumeCard key={perfume.id} perfume={perfume} />)}
      </div>
    </div>
  );
}
