'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiTwitter, FiExternalLink, FiMail, FiMapPin } from 'react-icons/fi'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/config'
import { getAnimationDuration } from '@/lib/utils'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const socialLinks = [
    {
      name: 'GitHub',
      href: SOCIAL_LINKS.github,
      icon: FiGithub,
      description: 'コードとプロジェクト',
      color: 'hover:text-white hover:bg-gray-800'
    },
    {
      name: 'Twitter',
      href: SOCIAL_LINKS.twitter,
      icon: FiTwitter,
      description: '技術情報と日常',
      color: 'hover:text-white hover:bg-blue-500'
    },
    {
      name: 'Zenn',
      href: SOCIAL_LINKS.zenn,
      icon: FiExternalLink,
      description: '技術記事とアウトプット',
      color: 'hover:text-white hover:bg-blue-600'
    },
    {
      name: 'Qiita',
      href: SOCIAL_LINKS.qiita,
      icon: FiExternalLink,
      description: '学習記録と知識共有',
      color: 'hover:text-white hover:bg-green-500'
    }
  ]

  return (
    <section id="contact" className="py-section bg-gradient-to-br from-surface/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* セクションタイトル */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              新しい機会や技術的な議論、協業について、お気軽にご連絡ください
            </p>
          </motion.div>

          {/* メインコンテンツ */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 連絡先情報 */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-surface/50 p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-bold text-text mb-6">
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FiMapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text">Location</h4>
                      <p className="text-muted">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <FiMail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text">Contact</h4>
                      <p className="text-muted">SNSでのDMをお待ちしています</p>
                    </div>
                  </div>
                </div>

                {/* 興味のある分野 */}
                <div className="mt-8">
                  <h4 className="font-semibold text-text mb-4">興味のある分野</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'バックエンド開発',
                      'システム設計',
                      'クラウド技術',
                      'キャリア相談',
                      '技術交流',
                      'メンタリング'
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SNSリンク */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-text mb-8 text-center lg:text-left">
                Follow Me
              </h3>
              
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-6 bg-surface/50 rounded-lg border border-primary/20 transition-all duration-300 focus-ring hover-glow ${social.color}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="w-6 h-6 text-primary group-hover:text-current transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text group-hover:text-current transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-muted text-sm group-hover:text-current/80 transition-colors">
                        {social.description}
                      </p>
                    </div>
                    <FiExternalLink className="w-5 h-5 text-muted group-hover:text-current opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* フッターメッセージ */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-surface/30 p-8 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-text mb-4">
                Thank You for Visiting! 🚀
              </h3>
              <p className="text-muted leading-relaxed">
                このポートフォリオサイトをご覧いただき、ありがとうございます。<br />
                新しい技術への挑戦と、チームでの価値創造を大切にしています。<br />
                一緒に素晴らしいプロダクトを作り上げませんか？
              </p>
            </div>
          </motion.div>

          {/* 装飾要素 */}
          <div className="absolute top-1/4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact