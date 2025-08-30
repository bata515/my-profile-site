# プロフィールサイト実装計画書

## 📋 プロジェクト概要

エンジニア未経験からバックエンドエンジニアへキャリアチェンジした魅力を伝える、オシャレで機能的な名刺代わりのプロフィールサイトを構築する。

## 🎯 実装目標

- **技術スタック**: Next.js 14+ (App Router) + TypeScript + Tailwind CSS + Framer Motion
- **デプロイ環境**: Vercel
- **パフォーマンス目標**: Lighthouse スコア 90 以上
- **レスポンシブ対応**: モバイルファースト設計

## 🚨 最重要原則

### 設定管理原則
- **一元管理**: 設定値は `lib/config.ts` で構造化管理
- **意味的実装**: 具体値ではなく意味名で制御 (`ANIMATION_DURATION` など)
- **ハードコード禁止**: 全ての具体値を設定ファイル経由で注入
- **型安全性**: TypeScript による厳密な型定義
- **パッケージ管理**: npm による依存関係管理

## 📁 プロジェクト構成

```
portfolio-site/
├── app/
│   ├── layout.tsx          # メインレイアウト
│   ├── page.tsx            # トップページ
│   ├── globals.css         # グローバルスタイル
│   ├── not-found.tsx       # 404カスタムページ
│   └── components/         # コンポーネント
│       ├── ui/             # UI基盤コンポーネント
│       ├── sections/       # セクション別コンポーネント
│       └── animations/     # アニメーション関連
├── lib/
│   ├── config.ts           # 設定一元管理
│   ├── constants.ts        # 定数定義
│   ├── types.ts            # 型定義
│   └── utils.ts            # ユーティリティ関数
├── public/
│   ├── images/             # 画像アセット
│   └── icons/              # アイコン
├── doc/                    # ドキュメント
│   ├── implementation-plan.md  # 実装計画書
│   └── api-design.md          # API設計書
└── package.json
```

## 🎨 デザイン仕様

### カラーパレット
```typescript
colors: {
  primary: '#94a3b8',      // スレートブルー - 静謐な技術美
  secondary: '#c084fc',    // ライラック - 優雅な創造性
  accent: '#f59e0b',       // ハニーアンバー - 洗練された温もり
  background: '#020617',   // ミッドナイトネイビー
  surface: '#0f172a',      // ダークスレート
  text: '#f1f5f9',         // アイスホワイト
  muted: '#64748b',        // クールグレー
  border: '#1e293b'        // スレートグレー
}
```

### レスポンシブブレークポイント
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px

## 🏗️ 実装フェーズ

## Phase 1: プロジェクト基盤構築

### 1.1 Next.js プロジェクト初期化
- [ ] `npx create-next-app@latest` でプロジェクト作成
- [ ] TypeScript, Tailwind CSS, App Router 有効化
- [ ] 必要パッケージのインストール

### 1.2 依存パッケージ
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^10.0.0",
    "react-icons": "^4.0.0",
    "@vercel/analytics": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

## Phase 2: 設定管理システム構築

### 2.1 設定ファイル作成
- [ ] `lib/config.ts` - アプリケーション設定一元管理
- [ ] `lib/constants.ts` - 定数定義  
- [ ] `lib/types.ts` - TypeScript型定義
- [ ] `lib/utils.ts` - 共通ユーティリティ

### 2.2 設定項目
```typescript
// 個人情報設定
personalInfo: {
  name: string
  title: string
  email?: never  // 個人情報保護のため非公開
  career: CareerStep[]
}

// SNS設定  
socialLinks: {
  github: string
  twitter: string
  zenn: string
  qiita: string
}

// アニメーション設定
animations: {
  duration: {
    fast: number
    medium: number
    slow: number
  }
  easing: string
}

// スキル設定
skills: {
  backend: Skill[]
  cloud: Skill[]
  tools: Skill[]
  learning: Skill[]
}
```

## Phase 3: 基本レイアウトとスタイリング

### 3.1 レイアウト実装
- [ ] `app/layout.tsx` - メインレイアウト
- [ ] `app/globals.css` - グローバルスタイル
- [ ] Tailwind CSS カスタムテーマ設定
- [ ] フォント最適化 (Inter, Noto Sans JP, JetBrains Mono)

### 3.2 共通UIコンポーネント
- [ ] `Button` - CTAボタン
- [ ] `Card` - グラスモーフィズムカード
- [ ] `ProgressBar` - スキル表示用
- [ ] `Timeline` - キャリア表示用

## Phase 4: セクション別コンポーネント開発

### 4.1 Navigation Component
- [ ] 固定ヘッダーナビゲーション
- [ ] スムーススクロール実装
- [ ] モバイル対応ハンバーガーメニュー

### 4.2 Hero Section
```typescript
実装要素:
- アニメーションタイピング効果
- 職歴遷移表示: "Publishing industry" → "Coffee" → "Backend Engineer"
- CTAボタン群 (GitHub, X, Zenn, Qiita)
- パーティクル背景アニメーション
- Framer Motion による登場アニメーション
```

### 4.3 About Section  
```typescript
実装要素:
- プロフィール写真 (円形, グラデーション枠)
- キャリアチェンジストーリー
- 現在の目標・ビジョン
- スクロール連動フェードインアニメーション
```

### 4.4 Career Timeline
```typescript
実装要素:
- 縦型タイムライン (左右交互配置)
- キャリアステップアイコン:
  - 📚 出版業界
  - ☕ カフェチェーン  
  - 💻 SESエンジニア
  - 🚀 SaaS開発
- ホバー時詳細展開
- レスポンシブ対応
```

### 4.5 Skills Section
```typescript
実装要素:
- カテゴリ別スキル表示
  - Backend: Java, Spring Boot, MySQL
  - Cloud: AWS (EC2, S3, RDS)  
  - Tools: Git, Docker, IntelliJ IDEA
  - Learning: Next.js, TypeScript, Python
- プログレスバーアニメーション
- 星評価システム (1-5段階)
```

### 4.6 Projects Section
```typescript
実装要素:
- 3D回転効果プロジェクトカード
- 技術タグフィルター機能
- GitHub/デモリンク
- レスポンシブグリッドレイアウト
```

### 4.7 Contact Section
```typescript
実装要素:
- SNSリンク集 (アイコン付き)
- ホバーアニメーション
- 個人情報保護準拠
```

## Phase 5: 高度な機能実装

### 5.1 テーマ切り替え機能
- [ ] ダーク/ライトモード
- [ ] システム設定連動
- [ ] LocalStorage 永続化
- [ ] なめらかな切り替えアニメーション

### 5.2 アクセシビリティ対応
- [ ] WAI-ARIA 準拠
- [ ] キーボードナビゲーション
- [ ] スクリーンリーダー対応
- [ ] フォーカス管理

### 5.3 パフォーマンス最適化
- [ ] Next.js Image コンポーネント
- [ ] フォント最適化
- [ ] コンポーネント遅延読み込み
- [ ] バンドルサイズ最適化

## Phase 6: SEO・メタデータ対策

### 6.1 SEO設定
- [ ] メタデータ最適化
- [ ] OGP画像設定  
- [ ] 構造化データ (JSON-LD)
- [ ] サイトマップ生成

### 6.2 カスタム404ページ
- [ ] ブランドに合った404デザイン
- [ ] ナビゲーションへの誘導
- [ ] UX向上施策

## Phase 7: デプロイ・運用

### 7.1 Vercel デプロイ
- [ ] Vercel プロジェクト作成
- [ ] 環境変数設定
- [ ] ビルド最適化
- [ ] カスタムドメイン設定

### 7.2 Analytics 設定
- [ ] Vercel Analytics 導入
- [ ] パフォーマンス監視
- [ ] ユーザー行動分析

## 📊 品質保証チェックリスト

### パフォーマンス
- [ ] Lighthouse Performance 90+
- [ ] Core Web Vitals 改善
- [ ] 初回読み込み 3秒以内

### レスポンシブ
- [ ] モバイル (320px-768px)
- [ ] タブレット (768px-1024px)  
- [ ] デスクトップ (1024px+)

### ブラウザ対応
- [ ] Chrome (最新版)
- [ ] Firefox (最新版)
- [ ] Safari (最新版)  
- [ ] Edge (最新版)

### アクセシビリティ
- [ ] WCAG 2.1 AA準拠
- [ ] キーボードナビゲーション
- [ ] カラーコントラスト比 4.5:1以上

## 🔧 開発ツール設定

### 推奨VSCode拡張機能
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### Git管理
- コミットメッセージ規約: Conventional Commits
- ブランチ戦略: GitHub Flow
- プルリクエストテンプレート

## 📝 実装時の注意事項

1. **設定管理原則の厳守**: 全ての具体値は config.ts 経由で管理
2. **型安全性の確保**: TypeScript の厳密な型チェック活用
3. **レスポンシブ優先**: モバイルファースト設計
4. **個人情報保護**: メールアドレスや電話番号は表示しない
5. **パフォーマンス重視**: 初回読み込み速度の最適化
6. **アクセシビリティ**: 全ユーザーが利用可能な設計

---

この実装計画に従って段階的に開発を進め、各フェーズ完了時に品質チェックを実施することで、プロフェッショナルで魅力的なポートフォリオサイトを構築します。