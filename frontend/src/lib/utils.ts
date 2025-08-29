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

// cn関数 - Tailwind CSS クラス結合用
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}