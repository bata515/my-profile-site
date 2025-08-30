'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi'
import { PERSONAL_INFO } from '@/lib/config'
import { getAnimationDuration } from '@/lib/utils'

export default function NotFound() {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number]
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <motion.div
        className="container mx-auto text-center relative z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 イラスト */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-primary/20 select-none">
              404
            </div>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiSearch className="w-16 h-16 sm:w-20 sm:h-20 text-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* メッセージ */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            ページが見つかりません
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
            お探しのページは存在しないか、移動した可能性があります。<br />
            以下のボタンから他のページへ移動してください。
          </p>
        </motion.div>

        {/* ナビゲーションボタン */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-colors focus-ring cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiHome className="w-5 h-5" />
              ホームに戻る
            </motion.div>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 px-8 py-4 bg-surface/80 text-text border border-primary/30 rounded-lg font-semibold hover:bg-surface hover:border-primary/50 transition-all focus-ring"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft className="w-5 h-5" />
            前のページに戻る
          </motion.button>
        </motion.div>

        {/* サイトマップ */}
        <motion.div
          className="bg-surface/30 p-8 rounded-lg border border-primary/20 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-text mb-6">
            サイトマップ
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
            {[
              { href: '/#home', label: 'ホーム' },
              { href: '/#about', label: 'About' },
              { href: '/#career', label: 'キャリア' },
              { href: '/#skills', label: 'スキル' },
              { href: '/#projects', label: 'プロジェクト' },
              { href: '/#contact', label: 'お問い合わせ' },
            ].map((link, index) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  className="text-primary hover:text-accent transition-colors cursor-pointer py-2 px-3 rounded hover:bg-primary/5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* フッター情報 */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <p className="text-muted">
            {PERSONAL_INFO.name} - Portfolio Site
          </p>
          <p className="text-sm text-muted/70 mt-2">
            技術的なお問い合わせはSNSのDMまでお気軽にどうぞ
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}