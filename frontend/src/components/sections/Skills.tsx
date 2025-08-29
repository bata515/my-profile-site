'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  SiOpenjdk, SiSpring, SiMysql, SiAmazon, SiGit, SiDocker, 
  SiIntellijidea, SiNextdotjs, SiTypescript, SiPython 
} from 'react-icons/si'
import { SKILLS } from '@/lib/config'
import { getSkillsByCategory, getSkillLevelText, getAnimationDuration } from '@/lib/utils'
import type { Skill } from '@/lib/types'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState<string>('backend')

  const categories = [
    { id: 'backend', name: 'Backend', color: 'from-primary to-primary/50' },
    { id: 'cloud', name: 'Cloud', color: 'from-secondary to-secondary/50' },
    { id: 'tools', name: 'Tools', color: 'from-accent to-accent/50' },
    { id: 'learning', name: 'Learning', color: 'from-muted to-muted/50' },
  ]

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'SiJava': SiOpenjdk,
    'SiSpring': SiSpring,
    'SiMysql': SiMysql,
    'SiAmazonaws': SiAmazon,
    'SiGit': SiGit,
    'SiDocker': SiDocker,
    'SiIntellijidea': SiIntellijidea,
    'SiNextdotjs': SiNextdotjs,
    'SiTypescript': SiTypescript,
    'SiPython': SiPython,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: getAnimationDuration('medium') / 1000,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration('medium') / 1000 }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${(level / 5) * 100}%`,
      transition: { 
        duration: getAnimationDuration('slow') / 1000,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
        delay: 0.2
      }
    })
  }

  const StarRating = ({ level }: { level: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ 
              delay: star * 0.1, 
              duration: 0.3,
              type: "spring"
            }}
          >
            <span
              className={`text-sm ${
                star <= level ? 'text-accent' : 'text-muted/30'
              }`}
            >
              ⭐
            </span>
          </motion.div>
        ))}
      </div>
    )
  }

  const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
    const IconComponent = iconMap[skill.icon as keyof typeof iconMap]
    
    return (
      <motion.div
        variants={itemVariants}
        className="bg-surface/50 p-6 rounded-lg border border-primary/20 hover-glow group"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.2 }}
        custom={index}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {IconComponent && (
              <IconComponent className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
            )}
            <div>
              <h4 className="font-semibold text-text group-hover:text-accent transition-colors">
                {skill.name}
              </h4>
              <span className="text-xs text-muted">
                {getSkillLevelText(skill.level)}
              </span>
            </div>
          </div>
          <StarRating level={skill.level} />
        </div>

        {/* プログレスバー */}
        <div className="relative">
          <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              variants={progressVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={skill.level}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted">
            <span>基礎</span>
            <span>専門</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="py-section bg-gradient-to-br from-surface/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* セクションタイトル */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              これまでの学習と実務で習得した技術スキル
            </p>
          </motion.div>

          {/* カテゴリータブ */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus-ring ${
                  activeCategory === category.id
                    ? 'bg-primary text-background shadow-lg'
                    : 'bg-surface/50 text-muted hover:text-text hover:bg-surface'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* スキル一覧 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {getSkillsByCategory(SKILLS, activeCategory as any).map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${activeCategory}`}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>

          {/* スキル習得への取り組み */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-surface/30 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-text mb-4">
                継続的な学習への取り組み
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">📚</div>
                  <h4 className="font-semibold text-primary mb-2">実践学習</h4>
                  <p className="text-sm text-muted">
                    業務での実装を通じて実践的なスキルを習得
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <h4 className="font-semibold text-primary mb-2">継続改善</h4>
                  <p className="text-sm text-muted">
                    新しい技術トレンドをキャッチアップし、スキルアップを継続
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="font-semibold text-primary mb-2">知識共有</h4>
                  <p className="text-sm text-muted">
                    学んだ内容をブログやコミュニティで共有し、アウトプット
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills