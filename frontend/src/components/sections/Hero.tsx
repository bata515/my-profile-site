'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiExternalLink } from 'react-icons/fi'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/config'
import { getAnimationDuration } from '@/lib/utils'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    'Publishing industry',
    'Coffee',
    'Backend Engineer'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration('medium') / 1000 }
    }
  }

  const socialLinks = [
    { href: SOCIAL_LINKS.github, icon: FiGithub, label: 'GitHub' },
    { href: SOCIAL_LINKS.twitter, icon: FiTwitter, label: 'Twitter' },
    { href: SOCIAL_LINKS.zenn, icon: FiExternalLink, label: 'Zenn' },
    { href: SOCIAL_LINKS.qiita, icon: FiExternalLink, label: 'Qiita' },
  ]

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-surface to-background"
    >
      {/* パーティクル背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 font-mono text-xs sm:text-sm"
            initial={{ 
              x: Math.random() * 1000,
              y: Math.random() * 800,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 1000,
              y: Math.random() * 800,
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {['{}', '<>', '[]', '//', '()'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* メインコンテンツ */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
          variants={itemVariants}
        >
          <span className="text-text">Hello, I'm </span>
          <span className="text-primary">{PERSONAL_INFO.name}</span>
        </motion.h1>

        {/* タイピングアニメーション */}
        <motion.div
          className="text-xl sm:text-2xl lg:text-3xl mb-6 h-12 flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="text-muted">From </span>
          <motion.span
            key={currentRole}
            className="text-accent font-semibold ml-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.span>
        </motion.div>

        {/* 説明文 */}
        <motion.p
          className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          {PERSONAL_INFO.description}
        </motion.p>

        {/* CTAボタン群 */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-surface/80 hover:bg-primary/20 border border-border rounded-lg transition-all duration-300 focus-ring hover-glow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <link.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
              <span className="text-text group-hover:text-accent transition-colors">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero