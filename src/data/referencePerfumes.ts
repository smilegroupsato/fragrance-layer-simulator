import type { ReferencePerfume } from "@/types/fragrance";

export const referencePerfumes: ReferencePerfume[] = [
  {
    id: "encens-suave-matiere-premiere",
    brand: "MATIERE PREMIERE",
    brandJa: "マティエール プルミエール",
    name: "ENCENS SUAVE",
    nameJa: "アンサン スアーヴ",
    concentration: "Eau de Parfum",
    keyDescriptors: ["incense", "amber", "resinous"],
    shortSummary: "樹脂、煙、アンバーのレイヤーを読むための、インセンス中心の参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["樹脂の明るさ", "ドライな芳香の立ち上がり"],
      heart: ["インセンスの煙", "温かなアンバー"],
      drydown: ["やわらかな樹脂", "低く光る甘さ"],
      comments: ["編集用サンプル分析。公式ノートの断定ではない。"]
    },
    publicDiscourse: ["インセンスの温かさ、樹脂の密度感をめぐって語られやすい。"],
    userNotes: ["メモ：フランキンセンス、ベンゾインの項目と比較する。"],
    relatedEntryIds: ["frankincense", "incense-smoke", "amber", "benzoin", "temple-air"]
  },
  {
    id: "724-maison-francis-kurkdjian",
    brand: "Maison Francis Kurkdjian",
    brandJa: "メゾン フランシス クルジャン",
    name: "724",
    nameJa: "724",
    imageUrl: "/images/perfumes/maison-francis-kurkdjian-724.jpg",
    concentration: "Eau de Parfum",
    keyDescriptors: ["clean", "musky", "bright"],
    shortSummary: "明るさ、ホワイトムスク、空気感のある構造を読むための、クリーンな参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["明るく清潔な立ち上がり", "抽象的なシトラス感"],
      heart: ["やわらかなフローラルの光", "洗い立ての布の空気感"],
      drydown: ["ホワイトムスク", "肌に近い清潔な余韻"],
      comments: ["編集用サンプル分析。公式情報とは分けて読むための補助です。"]
    },
    publicDiscourse: ["清潔、軽やか、使いやすい香りとして語られやすい。"],
    userNotes: ["メモ：クリーンムスクの言葉を読む練習に使う。"],
    relatedEntryIds: ["white-musk", "skin-scent", "bright-citrus", "sillage"]
  },
  {
    id: "aqua-universalis-maison-francis-kurkdjian",
    brand: "Maison Francis Kurkdjian",
    brandJa: "メゾン フランシス クルジャン",
    name: "Aqua Universalis",
    nameJa: "アクア ユニヴェルサリス",
    imageUrl: "/images/perfumes/maison-francis-kurkdjian-aqua-universalis.jpg",
    concentration: "Eau de Toilette / バリエーション要確認",
    keyDescriptors: ["citrus", "clean", "transparent"],
    shortSummary: "シトラス、白い布、静かな拡散感を読むための、透明でクリーンな参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["澄んだシトラス", "新鮮な空気"],
      heart: ["軽いフローラルの清潔感", "水のような透明感"],
      drydown: ["やわらかなムスク", "清潔な布"],
      comments: ["このシードデータでは公式ノートの断定はしない。"]
    },
    publicDiscourse: ["フレッシュ、クリーン、控えめな香りとして語られやすい。"],
    userNotes: ["メモ：ウォータリー、朝の窓のイメージ語と比較する。"],
    relatedEntryIds: ["bright-citrus", "watery", "white-musk", "morning-window", "clear-glass"]
  },
  {
    id: "apom-maison-francis-kurkdjian",
    brand: "Maison Francis Kurkdjian",
    brandJa: "メゾン フランシス クルジャン",
    name: "APOM",
    nameJa: "アポム",
    imageUrl: "/images/perfumes/maison-francis-kurkdjian-apom.jpg",
    concentration: "Eau de Parfum / バリエーション要確認",
    keyDescriptors: ["orange blossom", "amber", "soft"],
    shortSummary: "オレンジブロッサム、温かさ、丸みのある拡散を読むための、やわらかなフローラルアンバーの参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["清潔なフローラルの明るさ"],
      heart: ["オレンジブロッサムのイメージ", "丸みのある花びらの温かさ"],
      drydown: ["アンバーのやわらかさ", "肌のような光"],
      comments: ["編集用サンプル分析。公式ノートの断定ではない。"]
    },
    publicDiscourse: ["明るいフローラルと温かなやわらかさをめぐって語られやすい。"],
    userNotes: ["メモ：オレンジブロッサムがアンバー語彙でどう変わるかを見る。"],
    relatedEntryIds: ["orange-blossom", "amber", "skin-scent", "warm-lamp"]
  },
  {
    id: "mango-skin-vilhelm-parfumerie",
    brand: "Vilhelm Parfumerie",
    brandJa: "ヴィルヘルム パルファムリー",
    name: "Mango Skin",
    nameJa: "マンゴー スキン",
    imageUrl: "/images/perfumes/vilhelm-parfumerie-mango-skin.jpg",
    concentration: "Eau de Parfum",
    keyDescriptors: ["tropical", "fruit", "creamy"],
    shortSummary: "果実、甘さ、明るい官能性を読むための参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["ジューシーな果実の明るさ", "色づいた果皮"],
      heart: ["マンゴーの果肉", "やわらかなトロピカルのクリーミーさ"],
      drydown: ["温かな果実の皮", "穏やかな甘さ"],
      comments: ["果実とラクトン的な言葉を読むための編集用サンプル。"]
    },
    publicDiscourse: ["大胆でトロピカル、遊び心のある香りとして語られやすい。"],
    userNotes: ["メモ：果実系の素材語彙を読むための強いサンプル。"],
    relatedEntryIds: ["mango", "creamy", "mandarin", "silk-scarf"]
  }
];

export const referencePerfumeMap = new Map(referencePerfumes.map((perfume) => [perfume.id, perfume]));
