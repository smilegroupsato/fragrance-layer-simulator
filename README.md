# Fragrance Layer Simulator v0.1

## 概要 / Overview

Fragrance Layer Simulator v0.1 は、香りの言葉、香料・素材、植物、分子、文化レイヤー、感覚イメージ、既存香水、簡単なブレンド構造をブラウザで読むための小さな Web アプリです。

This is a small browser-based reading tool for fragrance language and static fragrance reference data.

## 目的 / Purpose

v0.1 の目的は、香りを正確に予測することではありません。香りを「レイヤー」として読み、公式情報、編集用の分析、一般的な言説、自分のメモを混ぜずに扱うための、静的データ中心の UI を作ることです。

The goal is not precise smell prediction. The goal is a clean static UI for reading fragrance layers.

## 主な機能 / Main Features

- 用語集：香調語、香料・素材、植物、分子、身体・生理、感覚イメージを閲覧できます。
- 用語集フィルタ：検索語、種別、香調タグを URL query に同期して復元できます。
- 詳細ページ：関連素材、関連分子、関連語彙、関連イメージなどを表示します。
- 参照香水：公式情報、AI風レイヤー分析、一般的な言説、自分のメモを分けて表示します。
- 香水メモ：同じブラウザ内の `localStorage` に保存され、ページリロード後も残ります。
- 簡易ブレンド：素材と比率を選び、`ratio * intensity` の簡易スコアで構造を読みます。
- 表示言語：UI は日本語中心です。内部 ID、route、TypeScript field 名は英語のままです。

## v0.1でやらないこと / Out of Scope

- 認証は追加しません。
- データベースは追加しません。
- 外部 API は使いません。
- 香水メモは GitHub 上の静的データには書き込みません。
- Web スクレイピングはしません。
- 画像アップロードは追加しません。
- 公式香水ノートを推測・捏造しません。
- 自動的な安全性判断はしません。

## セットアップ / Setup

```bash
pnpm install
```

Node.js と pnpm が必要です。このプロジェクトでは `pnpm-lock.yaml` を正本として扱います。

## ローカル起動 / Local Development

```bash
pnpm run dev
```

通常は `http://localhost:3000` または `http://127.0.0.1:3000` を開きます。

## ビルド確認 / Build Check

```bash
pnpm run build
```

変更完了前には必ず build を通してください。

## 運用方針 / Repository Policy

- GitHub リポジトリを正本として扱います。
- `main` ブランチには build が通る状態を push します。
- `node_modules/`、`.next/`、`.pnpm-store/` などの生成物は Git に含めません。
- 公式情報、AI風レイヤー分析、一般的な言説、自分のメモは混ぜずに管理します。
- 用語集の表示名は日本語を主、原語・英語名を副として扱います。
- 参照香水の商品名・ブランド名は原語を主、日本語・カナ表記を副として扱います。
