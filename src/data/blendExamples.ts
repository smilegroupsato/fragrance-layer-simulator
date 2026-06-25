import type { Blend } from "@/types/fragrance";

export const blendExamples: Blend[] = [
  {
    id: "quiet-incense",
    name: "静かなインセンス",
    memo: "樹脂とウッドの簡単なスタディ。",
    items: [
      { entryId: "frankincense", ratio: 4 },
      { entryId: "cedarwood", ratio: 2 },
      { entryId: "benzoin", ratio: 1 }
    ]
  },
  {
    id: "clean-morning",
    name: "クリーンな朝",
    memo: "フレッシュなシトラスとムスクのスケッチ。",
    items: [
      { entryId: "bergamot", ratio: 3 },
      { entryId: "lemon-peel", ratio: 2 },
      { entryId: "white-musk", ratio: 2 }
    ]
  }
];
