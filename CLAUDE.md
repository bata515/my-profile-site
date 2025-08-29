# CLAUDE.md

このファイルは、[Claude Code](https://www.anthropic.com/claude-code) がこのリポジトリのコードを扱う際のガイダンスを提供します。

## プロジェクト概要

自己プロフィールサイトを Next.js 14+ (App Router)で構築するための詳細な要件定義書。

## 目的

エンジニア未経験からバックエンドエンジニアへキャリアチェンジしたの魅力を伝える、オシャレで機能的な名刺代わりのプロフィールサイトを構築する。

## 🚨 **最重要事項**

Claude Code は次の原則を**絶対基準**として実装に従う。コード・設定・命名・タスク処理すべてが、この基準を背骨として段階的に進む。

### 設定管理原則

- **一元管理**：設定値は意味ごとに構造化し `lib/config.ts` または `config/` ディレクトリで一元管理
- **意味的実装**：コードは具体値ではなく意味名（例 `ANIMATION_DURATION`）で制御し、定数は `constants/` で管理
- **ハードコード禁止**：具体値はすべて`lib/config.ts` または `config/`経由で注入することで動的に制御する
- **型安全性**：すべての設定値に TypeScript の型定義を付与し、実行時エラーを防ぐ
- **パッケージ管理**：`npm` を推奨し、`package.json` で依存関係を厳密にバージョン管理する

### ターゲット

- 採用担当者・リクルーター
- 同業エンジニア
- 技術コミュニティのメンバー
- 同じ未経験からエンジニアを目指す人

### デプロイ環境

- Vercel

### 基本プロフィール

- 職種: バックエンドエンジニア
- 専門: Java, Spring
- キャリアパス: 出版業界 → カフェチェーン → SES エンジニア → SaaS 開発企業（2025 年 9 月〜）
- SNS: 設定ファイルで動的にリンクを挿入できるようにする
  - X (Twitter): アカウントあり
  - GitHub: アカウントあり
  - Zenn: アカウントあり
  - Qiita: アカウントあり

### キャリアストーリー

異業種の出版 → カフェ → 未経験でエンジニアに転職し、SES で経験を積んだ後、自社 SaaS 開発企業でエンジニアとして奮闘中。

## 技術要件

プロフィールサイトを構築するための詳細な技術要件。

### 必須技術スタック

```
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (アニメーション)
- React Icons
- Vercel Analytics
```

### プロジェクト構成

```
portfolio-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Career.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Navigation.tsx
├── public/
│   └── images/
├── lib/
│   └── constants.ts
└── package.json
```

## デザイン要件

### デザインコンセプト

エンジニアとしての信頼感と技術力を伝える、モダンで洗練されたデザイン。ダークモードを基調とし、グラスモーフィズムやマイクロインタラクションを活用して、動的で魅力的なユーザー体験を提供する。

### カラーパレット

```css
主要カラー:
- Primary: #94a3b8 (スレートブルー - 静謐な技術美)
- Secondary: #c084fc (ライラック - 優雅な創造性)
- Accent: #f59e0b (ハニーアンバー - 洗練された温もり)
- Background: #020617 (ミッドナイトネイビー)
- Surface: #0f172a (ダークスレート)
- Text: #f1f5f9 (アイスホワイト)
- Muted: #64748b (クールグレー)
- Border: #1e293b (スレートグレー)
```

### デザイン原則

1. **ダークモード前提** - エンジニアらしいモダンな印象
2. **グラスモーフィズム** - 半透明のガラス質感で洗練された印象
3. **マイクロインタラクション** - ホバー時の滑らかなアニメーション
4. **レスポンシブデザイン** - モバイルファースト

## セクション詳細仕様

### 1. Hero Section

```typescript
要素:
- アニメーションタイピング効果で表示される肩書き
- \"Publishing industry\" → \"Coffee\" → \"Backend Engineer\"
- 大きなCTAボタン（GitHub、X、技術ブログ）
- パーティクル背景アニメーション（コード記号が浮遊）
```

### 2. About Section

```typescript
要素:
- プロフィール写真（円形、グラデーション枠）
- 自己紹介文（キャリアチェンジストーリー）
- 現在の目標・ビジョン
- アニメーション: スクロールで要素がフェードイン
```

### 3. Career Timeline

```typescript
要素:
- 縦型タイムライン（左右交互配置）
- 各キャリアステップにアイコン配置
  - 📚 出版業界
  - ☕ カフェチェーン
  - 💻 SESエンジニア
  - 🚀 SaaS開発
- ホバーで詳細情報展開
```

### 4. Skills Section

```typescript
要素:
- スキルカテゴリー別表示
  - Backend: Java, Spring Boot, MySQL
  - Cloud: AWS (EC2, S3, RDS)
  - Tools: Git, Docker, IntelliJ IDEA
  - Learning: Next.js, TypeScript, Python
- プログレスバーアニメーション
- スキルレベル表示（1-5の星評価）
```

### 5. Projects Section

```typescript
要素:
- プロジェクトカード（3D回転効果）
- 各カードに含む情報:
  - プロジェクト名
  - 使用技術タグ
  - 概要説明
  - GitHub/デモリンク
- フィルター機能（技術別）
```

### 6. Contact Section

```typescript
要素:
- SNSリンク（アイコン付き）
```

## 実装詳細指示

### アニメーション実装

```typescript
// Framer Motion設定例
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// スクロールトリガー
useInView hookを使用してスクロール連動アニメーション実装
```

### レスポンシブ対応

```css
ブレークポイント:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
```

### パフォーマンス最適化

1. 画像は Next.js Image コンポーネント使用
2. フォントは Next.js Font Optimization 使用
3. コンポーネントの遅延読み込み実装
4. Lighthouse スコア 90 以上を目標

### SEO 対策

```typescript
メタデータ設定:
- title: \"Your Name | Backend Engineer\"
- description: \"キャリアチェンジエンジニア...\"
- OGP画像設定
- 構造化データ（JSON-LD）実装
```

## 特別な機能要件

### 1. テーマ切り替え

- ダーク/ライトモード切り替え
- システム設定連動
- LocalStorage 保存

### 2. 多言語対応（オプション）

- 日本語/英語切り替え
- next-i18n 使用

### 3. アクセシビリティ

- WAI-ARIA 準拠
- キーボードナビゲーション対応
- スクリーンリーダー対応

## 開発手順

### Phase 1: 基礎構築

1. Next.js プロジェクト作成
2. 必要パッケージインストール
3. 基本レイアウト実装
4. Tailwind 設定

### Phase 2: コンポーネント開発

1. 各セクションコンポーネント作成
2. アニメーション実装
3. レスポンシブ対応

### Phase 3: 機能追加

1. コンタクトフォーム実装
2. アナリティクス設定
3. SEO 最適化

### Phase 4: デプロイ

1. Vercel へのデプロイ
2. カスタムドメイン設定
3. パフォーマンステスト

TODO:

## 追加リソース

### 参考デザイン

- https://brittanychiang.com/ (エンジニアポートフォリオ)
- https://www.joshwcomeau.com/ (インタラクティブデザイン)

### アイコン・アセット

- React Icons
- Heroicons
- Tabler Icons

### フォント推奨

- 見出し: Inter, Noto Sans JP
- 本文: Inter, Noto Sans JP
- コード: JetBrains Mono

## 最終チェックリスト

- [ ] レスポンシブデザイン確認（全デバイス）
- [ ] アニメーション動作確認
- [ ] SEO メタデータ設定
- [ ] OGP 画像設定
- [ ] アクセシビリティチェック
- [ ] クロスブラウザテスト
- [ ] 404 ページ作成。存在しないページにアクセスされたときのエラーページをカスタマイズして UX 改善

## 注意事項

1. **個人情報保護**: メールアドレスや電話番号は表示しない
2. **著作権**: 使用する画像・アイコンのライセンス確認
3. **パフォーマンス**: 初回読み込み 3 秒以内を目標
4. **更新性**: コンテンツを簡単に更新できる設計

---

このガイドラインに従って、魅力的でプロフェッショナルなポートフォリオサイトを構築してください。不明な点があれば、各セクションを段階的に実装し、継続的に改善していくアプローチを推奨します。
