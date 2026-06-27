import type { FragranceEntry, FragranceEntryType, FragrancePhase, ReferencePerfume } from "@/types/fragrance";

export const typeLabels: Record<"all" | FragranceEntryType, string> = {
  all: "すべて",
  descriptor: "香調語",
  material: "香料・素材",
  plant: "植物",
  molecule: "分子",
  physiology: "身体・生理",
  image: "イメージ"
};

export const phaseLabels: Record<string, string> = {
  top: "トップ",
  middle: "ミドル",
  base: "ベース",
  multi: "複合",
  skin: "肌",
  none: "未分類",
  smoke: "煙",
  steam: "湯気",
  ambient: "空間",
  unknown: "未分類"
};

export const volatilityLabels: Record<string, string> = {
  low: "低い",
  medium: "中くらい",
  high: "高い",
  variable: "変化しやすい",
  unknown: "未分類"
};

const entryNameJa: Record<string, string> = {
  "bright-citrus": "シトラス",
  green: "グリーン",
  powdery: "パウダリー",
  amber: "アンバー",
  "incense-smoke": "インセンス",
  creamy: "クリーミー",
  metallic: "メタリック",
  "skin-scent": "スキンセント",
  animalic: "アニマリック",
  watery: "ウォータリー",
  bergamot: "ベルガモット精油",
  "lemon-peel": "レモン精油",
  mandarin: "マンダリン精油",
  "pink-pepper": "ピンクペッパー",
  cardamom: "カルダモン",
  galbanum: "ガルバナム",
  "violet-leaf": "バイオレットリーフ",
  rose: "ローズ",
  jasmine: "ジャスミン",
  "orange-blossom": "オレンジブロッサム",
  orris: "オリス",
  patchouli: "パチョリ",
  vetiver: "ベチバー",
  cedarwood: "シダーウッド",
  sandalwood: "白檀",
  vanilla: "バニラ",
  benzoin: "ベンゾイン",
  labdanum: "ラブダナム",
  frankincense: "乳香",
  myrrh: "没薬",
  "white-musk": "ホワイトムスク",
  ambroxan: "アンブロキサン",
  lavender: "ラベンダー精油",
  mint: "ミント",
  "tea-leaf": "茶葉",
  "fig-leaf": "フィグリーフ",
  mango: "マンゴー",
  hinoki: "檜",
  linalool: "リナロール",
  geraniol: "ゲラニオール",
  "phenethyl-alcohol": "フェネチルアルコール",
  indole: "インドール",
  vanillin: "バニリン",
  "iso-e-super": "Iso E Super",
  "aldehyde-c12-mna": "アルデヒド C-12 MNA",
  anosmia: "嗅覚消失",
  adaptation: "嗅覚順応",
  "trigeminal-cooling": "冷感刺激",
  sillage: "シアージュ",
  "morning-window": "朝の窓",
  "rain-on-leaves": "雨に濡れた葉",
  "pressed-powder": "プレストパウダー",
  "warm-lamp": "暖かなランプ",
  "temple-air": "寺院の空気",
  "silk-scarf": "シルクスカーフ",
  "clear-glass": "透明なガラス",
  "dark-soil": "湿った土",
  "cedar-box": "シダーの箱",
  "steam-over-cup": "湯気の立つカップ",
  "petal-shadow": "花びらの影"
};

const facetLabels: Record<string, string> = {
  fresh: "フレッシュ",
  sparkling: "きらめき",
  zesty: "果皮感",
  leafy: "葉のような",
  stemmy: "茎っぽい",
  cool: "涼しい",
  soft: "やわらかい",
  dry: "ドライ",
  cosmetic: "化粧品的",
  warm: "温かい",
  resinous: "樹脂的",
  sweet: "甘い",
  smoky: "煙っぽい",
  mineral: "ミネラル",
  smooth: "なめらか",
  milky: "ミルキー",
  rounded: "丸み",
  shiny: "光沢",
  abstract: "抽象的",
  close: "近い",
  bodily: "身体的",
  deep: "深い",
  transparent: "透明感",
  wet: "濡れた",
  clean: "清潔感",
  citrus: "柑橘",
  aromatic: "アロマティック",
  bitter: "苦み",
  sharp: "シャープ",
  juicy: "ジューシー",
  sunny: "明るい",
  spicy: "スパイシー",
  rosy: "ローズ調",
  green: "グリーン",
  "white floral": "ホワイトフローラル",
  luminous: "明るく発光する",
  indolic: "インドール感",
  floral: "フローラル",
  petal: "花びら",
  honeyed: "蜂蜜感",
  rooty: "根のような",
  earthy: "土っぽい",
  woody: "ウッディ",
  dark: "暗い",
  pencil: "鉛筆の木",
  creamy: "クリーミー",
  balsamic: "バルサム",
  leathery: "レザー調",
  incense: "インセンス",
  skin: "肌",
  ambery: "アンバー調",
  herbal: "ハーバル",
  tannic: "タンニン",
  steamy: "湯気",
  tropical: "トロピカル",
  lactonic: "ラクトン的",
  intimate: "親密",
  musk: "ムスク",
  perception: "知覚",
  individual: "個人差",
  threshold: "閾値",
  time: "時間変化",
  fading: "薄れ",
  tactile: "触覚的",
  diffusion: "拡散",
  trail: "残り香",
  space: "空間",
  clear: "澄んだ",
  bright: "明るい",
  amber: "アンバー",
  quiet: "静けさ",
  watery: "水っぽい",
  structured: "構造感",
  tea: "茶",
  shadowed: "陰影",
  "vanilla": "バニラ",
  aldehydic: "アルデヒド",
  "metallic": "メタリック",
  "animalic": "アニマリック"
};

const entrySummaryJa: Record<string, string> = {
  "bright-citrus": "レモンやベルガモットのような、すばやく立ち上がる明るい柑橘感。",
  green: "砕いた茎や清潔な葉を思わせる、植物的な印象。",
  powdery: "イリス、ムスク、スミレ調、化粧品イメージにつながる、やわらかく乾いた質感。",
  amber: "単一素材ではなく、温かく甘い樹脂的なスタイルを指す言葉。",
  "incense-smoke": "樹脂、ウッド、儀式的な空気に結びつく、乾いた煙とミネラル感。",
  creamy: "フローラル、ウッド、ムスク、果実の角を丸める、なめらかな質感。",
  metallic: "フローラルやアルデヒド、ムスクを抽象的に見せる、冷たく光るエッジ。",
  "skin-scent": "清潔な肌、体温、布との接触として感じられる、近くで香る印象。",
  animalic: "奥行きや緊張感を与える、温かく身体的なレジスター。",
  watery: "クリーンなフローラルやアクアティック構造で使われる、透明で濡れた印象。",
  bergamot: "明るくアロマティックで、軽い苦みをもつ柑橘素材。",
  "lemon-peel": "果皮、ゼスト、清掃感の連想をもつ、シャープな柑橘参照。",
  mandarin: "ジューシーでやわらかな輪郭をもつ、甘めの柑橘印象。",
  "pink-pepper": "重いスパイスにせず、ロージーなきらめきを加える素材。",
  cardamom: "グリーン、カンファー、茶のような表情をもつ涼しいスパイス。",
  galbanum: "切った茎や鋭い葉を思わせる、苦みのあるグリーン樹脂素材。",
  "violet-leaf": "キュウリのような水っぽさとメタリック感をもつグリーンリーフ。",
  rose: "フレッシュ、ジャム、スパイス、蜂蜜、パウダーなど幅広く読めるフローラル参照。",
  jasmine: "明るい花びら、果実感、インドールの深みをもつリッチな白花参照。",
  "orange-blossom": "清潔感、蜂蜜感、ソープ感を含みうる、白花と柑橘のイメージ。",
  orris: "化粧品的、スミレ的、エレガントに読まれやすい粉っぽい根の参照。",
  patchouli: "ウッディ、カンファー、チョコレートのような側面をもつ深い土っぽさ。",
  vetiver: "煙、ナッツ、ミネラル、ウッドを帯びる、根のような乾いた草の素材。",
  cedarwood: "構造と拡散を支える、鉛筆の木を思わせるドライウッド。",
  sandalwood: "温かさと磨かれた質感をもつ、クリーミーでやわらかなウッド参照。",
  vanilla: "菓子、樹脂、やわらかな安心感にまたがる、甘く温かい素材参照。",
  benzoin: "バニラのような温かさと、やわらかなアンバー効果をもつバルサム樹脂。",
  labdanum: "粘り、暗さ、アニマリックなニュアンスをもつレザー調アンバー樹脂。",
  frankincense: "レモン様のリフト、ミネラルな煙、儀式的空間に結びつく樹脂素材。",
  myrrh: "薬草的、苦み、煙の温かさをもつ暗い樹脂参照。",
  "white-musk": "洗濯物、肌、持続感に結びつく、清潔でやわらかなムスク参照。",
  ambroxan: "放射感、ミネラルな温かさ、長い残り香に結びつくドライなアンバーウッド。",
  lavender: "ハーバル、フローラル、清潔感、カンファー感をもつアロマティックな植物参照。",
  mint: "フレッシュ、グリーン、歯磨き粉的、料理的にも読める冷感ハーブ。",
  "tea-leaf": "緑茶の透明感から紅茶のタンニン、湯気まで広がる植物イメージ。",
  "fig-leaf": "樹液、木陰、クリーミーな果皮を思わせるグリーンでミルキーな葉。",
  mango: "ジューシー、ラクトン的、果皮、時に樹脂感もあるトロピカルフルーツ参照。",
  hinoki: "清潔な木、浴室空間、静かな透明感に結びつく日本の檜の参照。",
  linalool: "フローラル、柑橘、ラベンダー様の効果を読むための分子参照。",
  geraniol: "ローズ調のフローラル感を読むための分子参照。",
  "phenethyl-alcohol": "ローズのボリュームを説明する時に使いやすい、やわらかなローズ調分子参照。",
  indole: "文脈によって白花の深みやアニマリック感を支える分子参照。",
  vanillin: "甘く温かいバニラ様の印象に結びつく分子参照。",
  "iso-e-super": "透明なシダー様の拡散感で語られやすい、ウッディアンバーの分子参照。",
  "aldehyde-c12-mna": "メタリック、柑橘、抽象的な明るさをもつアルデヒド参照。",
  anosmia: "特定のにおいを感じにくい、または感じない状態を指す知覚用語。",
  adaptation: "同じにおいに触れ続けた時、知覚が変化していくこと。",
  "trigeminal-cooling": "においだけでなく触覚にも関わる、涼しさとして感じる刺激。",
  sillage: "香りをまとう人の周囲に残る軌跡や空気感。",
  "morning-window": "透明な柑橘の光と清潔な空気を読むための感覚イメージ。",
  "rain-on-leaves": "葉のフレッシュさや植物表面を読むための濡れたグリーンイメージ。",
  "pressed-powder": "イリス、スミレ、ムスクの乾いたやわらかさにつながる化粧品イメージ。",
  "warm-lamp": "やわらかな樹脂の光を読むための温かなアンバーイメージ。",
  "temple-air": "インセンスや樹脂素材を読むための、静かなミネラル煙のイメージ。",
  "silk-scarf": "なめらかでクリーミーな拡散を読むための触覚イメージ。",
  "clear-glass": "清潔で透明な水っぽさを読むためのイメージ。",
  "dark-soil": "パチョリ、根、湿った奥行きを読むための土のイメージ。",
  "cedar-box": "鉛筆の木や構造感を読むための乾いた木箱のイメージ。",
  "steam-over-cup": "茶、タンニン、湯気の温かさを読むための静かなイメージ。",
  "petal-shadow": "明るさだけでなく奥行きのある花びらを読むためのフローラルイメージ。"
};

export function getTypeLabel(type: "all" | FragranceEntryType) {
  return typeLabels[type] ?? type;
}

export function getPhaseLabel(phase?: FragrancePhase | string) {
  return phaseLabels[phase ?? "unknown"] ?? phaseLabels.unknown;
}

export function getVolatilityLabel(volatility?: string) {
  return volatilityLabels[volatility ?? "unknown"] ?? volatilityLabels.unknown;
}

export function getFacetLabel(facet: string) {
  return facetLabels[facet] ?? facet;
}

export function getEntryDisplay(entry: FragranceEntry) {
  const primary = entry.nameJa ?? entryNameJa[entry.id] ?? entry.name;
  const secondary = entry.nameOriginal ?? (entry.name !== primary ? entry.name : undefined);
  return { primary, secondary };
}

export function getEntrySummary(entry: FragranceEntry) {
  return entrySummaryJa[entry.id] ?? entry.summary;
}

export function getPerfumeDisplay(perfume: ReferencePerfume) {
  return {
    brandPrimary: perfume.brand,
    brandSecondary: perfume.brandJa,
    productPrimary: perfume.name,
    productSecondary: perfume.nameJa
  };
}

export function getNotesStatusLabel(status: ReferencePerfume["officialInfo"]["notesStatus"]) {
  return status === "to be confirmed" ? "要確認" : "確認済み";
}

export function getOfficialNoteLabel(note: string) {
  return note === "to be confirmed" ? "要確認" : note;
}
