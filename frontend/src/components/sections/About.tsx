'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/config'
import { getAnimationDuration } from '@/lib/utils'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: getAnimationDuration('medium') / 1000,
        staggerChildren: 0.3
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: getAnimationDuration('slow') / 1000 }
    }
  }

  return (
    <section id="about" className="py-section bg-gradient-to-br from-surface/30 to-background">
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
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* プロフィール画像 */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-surface to-background border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                    {/* プロフィール画像のプレースホルダー */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <span className="text-6xl text-primary/60">👤</span>
                    </div>
                  </div>
                </div>
                {/* 装飾要素 */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* コンテンツ */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-text mb-4">
                キャリアチェンジエンジニア
              </h3>
              
              <div className="space-y-4 text-muted leading-relaxed">
                <p className="text-lg">
                  出版業界で編集者としてキャリアをスタートし、コンテンツ制作の基礎を学びました。
                  その後、カフェチェーンで店舗マネージャーとして効率的なオペレーション設計と
                  チームマネジメントのスキルを習得。
                </p>
                
                <p className="text-lg">
                  未経験からエンジニアに転職し、SES企業でJava/Spring Bootを中心とした
                  システム開発に従事。基礎から実践まで幅広い開発スキルを身につけ、
                  現在は自社SaaS開発企業でバックエンドエンジニアとして活動中。
                </p>
                
                <p className="text-lg">
                  異業種での経験を活かし、ユーザー視点に立った開発と、
                  効率的なチームワークを大切にしています。
                </p>
              </div>

              {/* 現在の目標 */}
              <motion.div
                className="bg-surface/50 p-6 rounded-lg border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-xl font-semibold text-primary mb-3">
                  🎯 現在の目標
                </h4>
                <ul className="space-y-2 text-muted">
                  <li>• スケーラブルなシステム設計スキルの向上</li>
                  <li>• モダンな技術スタック（Next.js, TypeScript）の習得</li>
                  <li>• チームリードとしてのマネジメントスキル強化</li>
                  <li>• オープンソース活動への積極的な参加</li>
                </ul>
              </motion.div>

              {/* 基本情報 */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p><span className="text-primary font-semibold">拠点:</span> {PERSONAL_INFO.location}</p>
                  <p><span className="text-primary font-semibold">専門:</span> Java, Spring Boot</p>
                </div>
                <div className="space-y-2">
                  <p><span className="text-primary font-semibold">職種:</span> {PERSONAL_INFO.title}</p>
                  <p><span className="text-primary font-semibold">趣味:</span> プログラミング学習</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About