'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CAREER_STEPS } from '@/lib/config'
import { formatPeriod, getAnimationDuration } from '@/lib/utils'

const Career = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: getAnimationDuration('medium') / 1000,
        staggerChildren: 0.4
      }
    }
  }

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { 
        duration: getAnimationDuration('slow') / 1000,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: getAnimationDuration('medium') / 1000 }
    }
  }

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: getAnimationDuration('medium') / 1000 }
    }
  }

  return (
    <section id="career" className="py-section bg-background">
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
              Career <span className="text-primary">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              異業種からエンジニアへのキャリアチェンジストーリー
            </p>
          </motion.div>

          {/* タイムライン */}
          <div className="relative">
            {/* 中央の線 */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent h-full origin-top"
              variants={timelineVariants}
            />

            {/* キャリアステップ */}
            <div className="space-y-16">
              {CAREER_STEPS.map((step, index) => {
                const isLeft = index % 2 === 0
                return (
                  <motion.div
                    key={step.id}
                    variants={isLeft ? itemVariants : itemVariantsRight}
                    className={`relative flex items-center ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:gap-8`}
                  >
                    {/* コンテンツカード */}
                    <motion.div
                      className={`w-full lg:w-5/12 ${
                        isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="glass p-6 rounded-lg border border-primary/20 hover-glow">
                        {/* 期間 */}
                        <div className="text-accent font-semibold mb-2">
                          {formatPeriod(step.period.start, step.period.end)}
                        </div>
                        
                        {/* 役職・会社 */}
                        <h3 className="text-xl font-bold text-text mb-1">
                          {step.title}
                        </h3>
                        <h4 className="text-primary font-semibold mb-3">
                          {step.company}
                        </h4>
                        
                        {/* 説明 */}
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>
                        
                        {/* スキル */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-text mb-2">習得スキル:</h5>
                          <div className="flex flex-wrap gap-2">
                            {step.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* 実績 */}
                        {step.achievements && (
                          <div>
                            <h5 className="text-sm font-semibold text-text mb-2">主な実績:</h5>
                            <ul className="text-xs text-muted space-y-1">
                              {step.achievements.map((achievement) => (
                                <li key={achievement} className="flex items-center">
                                  <span className="text-accent mr-2">▪</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* アイコン（中央） */}
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-surface border-4 border-primary rounded-full flex items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        delay: index * 0.4 + 0.5, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(148, 163, 184, 0.5)"
                      }}
                    >
                      <span className="text-2xl">{step.icon}</span>
                    </motion.div>

                    {/* スペーサー（モバイル用） */}
                    <div className="w-full lg:w-5/12"></div>
                  </motion.div>
                )
              })}
            </div>

            {/* 終点のアイコン */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ 
                delay: CAREER_STEPS.length * 0.4 + 1, 
                duration: 0.4
              }}
            >
              <span className="text-background font-bold text-lg">Now</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Career