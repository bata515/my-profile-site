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