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

// プロジェクト設定
export const PROJECTS: Project[] = [
  {
    id: 'portfolio-site',
    name: 'Portfolio Site',
    description: 'Next.js 14とTypeScriptで構築したプロフィールサイト。Framer Motionによるアニメーションとレスポンシブデザインが特徴。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/username/portfolio-site',
    demo: 'https://portfolio-site.vercel.app',
    featured: true
  },
  {
    id: 'task-management-api',
    name: 'Task Management API',
    description: 'Spring Bootで構築したRESTful API。JWT認証、データベース連携、テスト自動化を実装。',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JUnit'],
    github: 'https://github.com/username/task-api',
    featured: true
  },
  {
    id: 'learning-tracker',
    name: 'Learning Progress Tracker',
    description: '学習進捗を管理するWebアプリケーション。進捗の可視化と目標設定機能を提供。',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'Bootstrap'],
    github: 'https://github.com/username/learning-tracker',
    featured: false
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