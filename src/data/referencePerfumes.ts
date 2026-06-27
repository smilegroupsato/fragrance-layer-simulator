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
  },
  {
    id: "muskara-rosa-fueguia-1833",
    brand: "FUEGUIA 1833 / Patagonia",
    brandJa: "フエギア 1833 / パタゴニア",
    name: "Muskara Rosa",
    nameJa: "ムスカラ ローサ",
    concentration: "要確認",
    collection: "Muskara Collection",
    displayCategory: "Floral / Intimate",
    oneLineSummary: "薔薇を贈る香水ではなく、薔薇を肌の秘密にする香水。",
    userImpression: "これぞ薔薇の香り",
    cardNotes: ["主題：Rosa"],
    keyDescriptors: ["floral", "rosy", "skin"],
    shortSummary: "薔薇を肌の近くで読むための、親密なフローラル参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["ローズの輪郭", "肌に近い明るさ"],
      heart: ["薔薇の密度", "親密なフローラル感"],
      drydown: ["肌に残るやわらかな余韻"],
      comments: ["提供メモにもとづく編集用サンプル分析。公式ノートの断定ではない。"]
    },
    publicDiscourse: ["FUEGUIA 1833のMuskara Collectionとして、親密な肌感と花の主題を分けて読むための参照。"],
    userNotes: ["実香メモ：これぞ薔薇の香り"],
    relatedEntryIds: ["rose", "skin-scent", "petal-shadow"]
  },
  {
    id: "alma-fueguia-1833",
    brand: "FUEGUIA 1833 / Patagonia",
    brandJa: "フエギア 1833 / パタゴニア",
    name: "Alma",
    nameJa: "アルマ",
    concentration: "要確認",
    collection: "Destinos Collection",
    displayCategory: "Floral / Herbal",
    oneLineSummary: "花を飾る香水ではなく、島の魂を肌に置く香水。",
    userImpression: "カモミールの香り",
    cardNotes: [
      "構成表示：Jasmin del País / Mansanilla de Mahon / Romerillo",
      "注記：Mansanilla はカード読み取り上の表記。一般表記として Manzanilla の可能性あり。",
      "店頭メモ：夏を乗り切るために使った"
    ],
    keyDescriptors: ["floral", "herbal", "soft"],
    shortSummary: "花とハーブのあいだにある、カモミールの印象を読むための参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["やわらかなハーバル感", "淡い花の立ち上がり"],
      heart: ["カモミールの印象", "島の空気を思わせる落ち着き"],
      drydown: ["肌に残る静かなハーブ"],
      comments: ["提供メモにもとづく編集用サンプル分析。公式ノートの断定ではない。"]
    },
    publicDiscourse: ["Destinos Collectionの文脈で、土地や記憶のイメージと重ねて読みたい参照。"],
    userNotes: ["実香メモ：カモミールの香り", "店頭メモ：夏を乗り切るために使った"],
    relatedEntryIds: ["jasmine", "tea-leaf", "skin-scent", "steam-over-cup"]
  },
  {
    id: "muskara-boswellia-fueguia-1833",
    brand: "FUEGUIA 1833 / Patagonia",
    brandJa: "フエギア 1833 / パタゴニア",
    name: "Muskara Boswellia",
    nameJa: "ムスカラ ボスウェリア",
    concentration: "要確認",
    collection: "Muskara Collection",
    displayCategory: "Amber / Musk",
    oneLineSummary: "花ではなく、樹脂が静かに灯る香水。",
    userImpression: "これが好き。お寺のような、神聖な儀式。リラックス。",
    cardNotes: ["主題：Boswellia / Olibanum", "補助表示：Muskara Phero J."],
    keyDescriptors: ["amber", "incense", "resinous", "skin"],
    shortSummary: "ボスウェリアの樹脂感と肌に近い静けさを読むための参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["樹脂の静かな灯り", "ドライな儀式感"],
      heart: ["お寺のような空気", "神聖なインセンス"],
      drydown: ["肌に近いムスク", "リラックスする余韻"],
      comments: ["提供メモにもとづく編集用サンプル分析。公式ノートの断定ではない。"]
    },
    publicDiscourse: ["ボスウェリア、オリバナム、インセンスの語彙を肌感と分けて読むための参照。"],
    userNotes: ["実香メモ：これが好き。お寺のような、神聖な儀式。リラックス。"],
    relatedEntryIds: ["frankincense", "incense-smoke", "temple-air", "amber", "skin-scent"]
  },
  {
    id: "pampa-humeda-fueguia-1833",
    brand: "FUEGUIA 1833 / Patagonia",
    brandJa: "フエギア 1833 / パタゴニア",
    name: "Pampa Húmeda",
    nameJa: "パンパ ウメダ",
    concentration: "要確認",
    collection: "Destinos Collection",
    displayCategory: "Green / Earthy",
    oneLineSummary: "雨の日に踏んだ草の青さが、足元から立ち上がる香水。",
    userImpression: "雨の日に草を足で踏んだときの青くさい匂い",
    cardNotes: ["構成表示：Pasto de la Pampa / Eucalipto / Salvia"],
    keyDescriptors: ["green", "earthy", "wet", "herbal"],
    shortSummary: "濡れた草、土、青さを足元から読むためのグリーンアーシーな参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["雨に濡れた草の青さ", "踏みしめた葉の立ち上がり"],
      heart: ["湿った大地", "ユーカリやセージを思わせるハーバルな空気"],
      drydown: ["足元に残る土と草の余韻"],
      comments: ["提供メモにもとづく編集用サンプル分析。公式ノートの断定ではない。"]
    },
    publicDiscourse: ["湿った草地や土のイメージを、グリーンとアーシーの境界で読むための参照。"],
    userNotes: ["実香メモ：雨の日に草を足で踏んだときの青くさい匂い"],
    relatedEntryIds: ["green", "rain-on-leaves", "dark-soil", "mint", "tea-leaf"]
  },
  {
    id: "basilicum-fueguia-1833",
    brand: "FUEGUIA 1833 / Patagonia",
    brandJa: "フエギア 1833 / パタゴニア",
    name: "Basilicum",
    nameJa: "バジリクム",
    concentration: "要確認",
    collection: "Linneo Collection",
    displayCategory: "Aromatic / Herbal",
    oneLineSummary: "バジルが、草でも料理でも薬草でもなく、いくつもの宇宙へ姿を変える香水。",
    userImpression: "現時点では写真と説明カードにもとづく初期記録。実香メモは後で追記。",
    cardNotes: ["構成表示：Albahaca del Campo / Timbó / Mandarina"],
    keyDescriptors: ["aromatic", "herbal", "green", "citrus"],
    shortSummary: "バジルのハーバルな輪郭を、草、料理、薬草のあいだで読むための参照香水。",
    officialInfo: { notesStatus: "to be confirmed", notes: ["to be confirmed"] },
    analyzedLayers: {
      opening: ["バジルを思わせる青い輪郭", "マンダリンの可能性を含む明るさ"],
      heart: ["草と薬草のあいだのハーバル感", "植物の密度"],
      drydown: ["穏やかなグリーンの余韻"],
      comments: ["写真と説明カードにもとづく初期記録。公式ノートの断定ではない。"]
    },
    publicDiscourse: ["Linneo Collectionの植物参照として、バジルの多面性を読むための初期サンプル。"],
    userNotes: ["実香メモ：現時点では写真と説明カードにもとづく初期記録。実香メモは後で追記。"],
    relatedEntryIds: ["green", "mint", "mandarin", "rain-on-leaves"]
  }
];

export const referencePerfumeMap = new Map(referencePerfumes.map((perfume) => [perfume.id, perfume]));
