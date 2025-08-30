# 設定管理システム設計書

## 📋 概要

CLAUDE.mdで指定された**設定管理原則**に基づいて、プロフィールサイトの全ての設定値を型安全に一元管理するシステムの設計書です。

## 🚨 設定管理原則の実装

### 原則1: 一元管理
- `lib/config.ts` で全設定を構造化管理
- 関連設定を論理的にグループ化
- 環境別設定の分離

### 原則2: 意味的実装  
- 具体値ではなく意味名で制御
- `ANIMATION_DURATION_FAST` > `200`
- `SKILL_LEVEL_EXPERT` > `5`

### 原則3: ハードコード禁止
- 全具体値を設定ファイル経由で注入
- コンポーネント内に数値リテラルを記載しない
- 色彩値もconfig経由で管理

### 原則4: 型安全性
- 全設定項目にTypeScript型定義
- 実行時エラーの防止
- IntelliSenseによる開発体験向上

## 📁 ファイル構成

```
lib/
├── config.ts          # メイン設定ファイル
├── constants.ts       # 定数定義
├── types.ts           # 型定義
└── utils.ts           # 設定関連ユーティリティ
```

## 🏗️ 型定義 (lib/types.ts)

```typescript
// 個人情報型定義
export interface PersonalInfo {
  name: string
  title: string
  description: string
  location: string
}

// SNSリンク型定義
export interface SocialLinks {
  github: string
  twitter: string
  zenn: string
  qiita: string
}

// スキル型定義
export interface Skill {
  name: string
  level: 1 | 2 | 3 | 4 | 5  // 星評価
  category: 'backend' | 'cloud' | 'tools' | 'learning'
  description?: string
  icon?: string
}

// キャリア型定義
export interface CareerStep {
  id: string
  title: string
  company: string
  period: {
    start: string
    end: string | 'present'
  }
  description: string
  icon: string
  skills: string[]
  achievements?: string[]
}

// プロジェクト型定義
export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  featured: boolean
}

// アニメーション設定型定義
export interface AnimationConfig {
  duration: {
    fast: number
    medium: number
    slow: number
  }
  easing: {
    smooth: [number, number, number, number]
    bounce: [number, number, number, number]
  }
  delays: {
    stagger: number
    section: number
  }
}

// テーマ設定型定義
export interface ThemeConfig {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    muted: string
    border: string
  }
  fonts: {
    heading: string
    body: string
    mono: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

// メタデータ型定義
export interface SiteMetadata {
  title: string
  description: string
  keywords: string[]
  author: string
  siteUrl: string
  ogImage: string
}
```

## ⚙️ 設定定義 (lib/config.ts)

```typescript
import type {
  PersonalInfo,
  SocialLinks,
  Skill,
  CareerStep,
  Project,
  AnimationConfig,
  ThemeConfig,
  SiteMetadata
} from './types'

// 個人情報設定
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Your Name',
  title: 'Backend Engineer',
  description: '出版業界からカフェチェーン、そして未経験でエンジニアに転職し、SESで経験を積んだ後、自社SaaS開発企業でエンジニアとして奮闘中。',
  location: 'Tokyo, Japan'
}

// SNSリンク設定
export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/username',
  twitter: 'https://twitter.com/username',
  zenn: 'https://zenn.dev/username',
  qiita: 'https://qiita.com/username'
}

// スキル設定
export const SKILLS: Skill[] = [
  // Backend
  { name: 'Java', level: 4, category: 'backend', icon: 'SiJava' },
  { name: 'Spring Boot', level: 4, category: 'backend', icon: 'SiSpring' },
  { name: 'MySQL', level: 3, category: 'backend', icon: 'SiMysql' },
  
  // Cloud
  { name: 'AWS EC2', level: 3, category: 'cloud', icon: 'SiAmazonaws' },
  { name: 'AWS S3', level: 3, category: 'cloud', icon: 'SiAmazonaws' },
  { name: 'AWS RDS', level: 2, category: 'cloud', icon: 'SiAmazonaws' },
  
  // Tools
  { name: 'Git', level: 4, category: 'tools', icon: 'SiGit' },
  { name: 'Docker', level: 3, category: 'tools', icon: 'SiDocker' },
  { name: 'IntelliJ IDEA', level: 4, category: 'tools', icon: 'SiIntellijidea' },
  
  // Learning
  { name: 'Next.js', level: 2, category: 'learning', icon: 'SiNextdotjs' },
  { name: 'TypeScript', level: 2, category: 'learning', icon: 'SiTypescript' },
  { name: 'Python', level: 1, category: 'learning', icon: 'SiPython' }
]

// キャリア設定
export const CAREER_STEPS: CareerStep[] = [
  {
    id: 'publishing',
    title: '編集者',
    company: '出版社',
    period: { start: '2018-04', end: '2020-03' },
    description: '書籍の企画・編集・校正業務を担当。読者のニーズを深く理解し、質の高いコンテンツ制作を学ぶ。',
    icon: '📚',
    skills: ['企画力', '編集技術', 'コミュニケーション'],
    achievements: ['年間20冊の書籍編集', '売上前年比120%達成']
  },
  {
    id: 'cafe',
    title: '店舗マネージャー',
    company: 'カフェチェーン',
    period: { start: '2020-04', end: '2022-03' },
    description: '店舗運営、スタッフ管理、売上管理を担当。効率的なオペレーション設計とチームマネジメントを習得。',
    icon: '☕',
    skills: ['チームマネジメント', '業務効率化', '数値分析'],
    achievements: ['店舗売上25%向上', 'スタッフ満足度向上']
  },
  {
    id: 'ses',
    title: 'システムエンジニア',
    company: 'SES企業',
    period: { start: '2022-04', end: '2025-08' },
    description: '未経験からJava/Spring Bootでのシステム開発に従事。基礎から実践まで幅広い開発スキルを習得。',
    icon: '💻',
    skills: ['Java', 'Spring Boot', 'MySQL', 'AWS'],
    achievements: ['3つの大規模プロジェクト参画', 'チームリーダー昇格']
  },
  {
    id: 'saas',
    title: 'バックエンドエンジニア',
    company: 'SaaS開発企業',
    period: { start: '2025-09', end: 'present' },
    description: '自社SaaSプロダクトのバックエンド開発を担当。スケーラブルなシステム設計と開発に注力。',
    icon: '🚀',
    skills: ['システム設計', 'API開発', 'パフォーマンス最適化'],
    achievements: ['新機能リリース', 'システム性能50%改善']
  }
]

// アニメーション設定
export const ANIMATION_CONFIG: AnimationConfig = {
  duration: {
    fast: 200,
    medium: 600,
    slow: 1000
  },
  easing: {
    smooth: [0.25, 0.1, 0.25, 1.0],
    bounce: [0.68, -0.55, 0.265, 1.55]
  },
  delays: {
    stagger: 100,
    section: 300
  }
}

// テーマ設定
export const THEME_CONFIG: ThemeConfig = {
  colors: {
    primary: '#94a3b8',    // スレートブルー
    secondary: '#c084fc',  // ライラック
    accent: '#f59e0b',     // ハニーアンバー
    background: '#020617', // ミッドナイトネイビー
    surface: '#0f172a',    // ダークスレート
    text: '#f1f5f9',       // アイスホワイト
    muted: '#64748b',      // クールグレー
    border: '#1e293b'      // スレートグレー
  },
  fonts: {
    heading: 'Inter, "Noto Sans JP", sans-serif',
    body: 'Inter, "Noto Sans JP", sans-serif',
    mono: 'JetBrains Mono, Monaco, "Consolas", monospace'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
}

// サイトメタデータ
export const SITE_METADATA: SiteMetadata = {
  title: 'Your Name | Backend Engineer',
  description: 'エンジニア未経験からバックエンドエンジニアへキャリアチェンジした魅力を伝える、プロフェッショナルなポートフォリオサイト。',
  keywords: ['バックエンドエンジニア', 'Java', 'Spring Boot', 'AWS', 'キャリアチェンジ', 'エンジニア転職'],
  author: 'Your Name',
  siteUrl: 'https://your-domain.vercel.app',
  ogImage: '/images/og-image.jpg'
}
```

## 📊 定数定義 (lib/constants.ts)

```typescript
// アニメーション関連定数
export const ANIMATION_DURATION_FAST = 200
export const ANIMATION_DURATION_MEDIUM = 600
export const ANIMATION_DURATION_SLOW = 1000

// スキルレベル定数
export const SKILL_LEVEL_BEGINNER = 1
export const SKILL_LEVEL_NOVICE = 2
export const SKILL_LEVEL_INTERMEDIATE = 3
export const SKILL_LEVEL_ADVANCED = 4
export const SKILL_LEVEL_EXPERT = 5

// レイアウト定数
export const HEADER_HEIGHT = 64
export const SECTION_PADDING = 80
export const MOBILE_SECTION_PADDING = 40

// パフォーマンス定数
export const PAGE_LOAD_TARGET_MS = 3000
export const LIGHTHOUSE_TARGET_SCORE = 90

// コンテンツ定数
export const MAX_PROJECTS_FEATURED = 6
export const TYPING_ANIMATION_DELAY = 100
export const PARALLAX_SCROLL_MULTIPLIER = 0.5
```

## 🛠️ ユーティリティ関数 (lib/utils.ts)

```typescript
import { THEME_CONFIG, ANIMATION_CONFIG } from './config'
import type { Skill, CareerStep } from './types'

// 設定値取得ユーティリティ
export const getAnimationDuration = (speed: keyof typeof ANIMATION_CONFIG.duration) => {
  return ANIMATION_CONFIG.duration[speed]
}

export const getColor = (colorKey: keyof typeof THEME_CONFIG.colors) => {
  return THEME_CONFIG.colors[colorKey]
}

// スキル関連ユーティリティ
export const getSkillsByCategory = (skills: Skill[], category: Skill['category']) => {
  return skills.filter(skill => skill.category === category)
}

export const getSkillLevelText = (level: number): string => {
  const levelMap = {
    1: '基礎',
    2: '応用',
    3: '実践',
    4: '上級',
    5: '専門'
  }
  return levelMap[level as keyof typeof levelMap] || '不明'
}

// キャリア関連ユーティリティ
export const getCurrentCareerStep = (careerSteps: CareerStep[]) => {
  return careerSteps.find(step => step.period.end === 'present')
}

export const formatPeriod = (start: string, end: string | 'present'): string => {
  const formatDate = (date: string) => {
    const [year, month] = date.split('-')
    return `${year}年${month}月`
  }
  
  const startFormatted = formatDate(start)
  const endFormatted = end === 'present' ? '現在' : formatDate(end)
  
  return `${startFormatted} - ${endFormatted}`
}

// 設定検証ユーティリティ
export const validateConfig = () => {
  const requiredFields = ['PERSONAL_INFO', 'SOCIAL_LINKS', 'SKILLS', 'CAREER_STEPS']
  const missingFields = requiredFields.filter(field => !field)
  
  if (missingFields.length > 0) {
    throw new Error(`Missing configuration fields: ${missingFields.join(', ')}`)
  }
}
```

## 🎯 使用例

```typescript
// コンポーネントでの設定値利用例
import { THEME_CONFIG, ANIMATION_CONFIG, PERSONAL_INFO } from '@/lib/config'
import { getAnimationDuration, getColor } from '@/lib/utils'

export default function HeroSection() {
  const primaryColor = getColor('primary')
  const animationDuration = getAnimationDuration('medium')
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: animationDuration / 1000 }}
      style={{ color: primaryColor }}
    >
      <h1>{PERSONAL_INFO.name}</h1>
      <p>{PERSONAL_INFO.title}</p>
    </motion.section>
  )
}
```

## ✅ 実装チェックポイント

- [ ] 全ての設定値がconfig.ts経由で管理されている
- [ ] ハードコードされた値が存在しない  
- [ ] TypeScript型安全性が確保されている
- [ ] 意味的な命名規則に従っている
- [ ] 設定変更時の影響範囲が明確
- [ ] 環境別設定が適切に分離されている

この設計に従うことで、保守性・拡張性・型安全性を兼ね備えた設定管理システムを構築できます。