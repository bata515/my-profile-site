'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'
import { PROJECTS } from '@/lib/config'
import { getAnimationDuration } from '@/lib/utils'
import type { Project } from '@/lib/types'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState<string>('all')
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS)

  // 全技術の取得
  const allTechnologies = Array.from(
    new Set(PROJECTS.flatMap(project => project.technologies))
  )

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: getAnimationDuration('medium') / 1000 }
    }
  }

  const handleFilter = (tech: string) => {
    setFilter(tech)
    if (tech === 'all') {
      setFilteredProjects(PROJECTS)
    } else {
      setFilteredProjects(
        PROJECTS.filter(project => 
          project.technologies.includes(tech)
        )
      )
    }
  }

  const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
      <motion.div
        variants={cardVariants}
        className="group perspective-1000"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: index * 0.2 }}
        layout
      >
        <motion.div
          className="relative bg-surface/50 rounded-lg border border-primary/20 overflow-hidden transform-gpu transition-all duration-300 group-hover:border-primary/50"
          whileHover={{ 
            rotateX: 5,
            rotateY: 5,
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(148, 163, 184, 0.2)"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Featured バッジ */}
          {project.featured && (
            <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 rounded-full text-xs font-semibold z-10">
              Featured
            </div>
          )}

          {/* プロジェクト画像プレースホルダー */}
          <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <motion.div
              className="text-6xl text-primary/30"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              💻
            </motion.div>
          </div>

          {/* コンテンツ */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            
            <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* 技術タグ */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: string) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(148, 163, 184, 0.2)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* リンク */}
            <div className="flex gap-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text hover:text-primary transition-colors focus-ring px-3 py-2 bg-surface/50 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </motion.a>
              )}
              
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text hover:text-accent transition-colors focus-ring px-3 py-2 bg-accent/10 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </motion.a>
              )}
            </div>
          </div>

          {/* ホバー効果のオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="py-section bg-background">
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              これまでに取り組んだプロジェクトの一部をご紹介します
            </p>
          </motion.div>

          {/* フィルター */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => handleFilter('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus-ring ${
                filter === 'all'
                  ? 'bg-primary text-background shadow-lg'
                  : 'bg-surface/50 text-muted hover:text-text hover:bg-surface'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFilter className="w-4 h-4" />
              All Projects
            </motion.button>
            
            {allTechnologies.slice(0, 6).map((tech) => (
              <motion.button
                key={tech}
                onClick={() => handleFilter(tech)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 focus-ring ${
                  filter === tech
                    ? 'bg-primary text-background shadow-lg'
                    : 'bg-surface/50 text-muted hover:text-text hover:bg-surface'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </motion.div>

          {/* プロジェクトグリッド */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* フィルター結果が空の場合 */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted text-lg">
                該当するプロジェクトが見つかりませんでした。
              </p>
            </motion.div>
          )}

          {/* GitHub CTA */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-surface/30 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-text mb-4">
                More Projects on GitHub
              </h3>
              <p className="text-muted mb-6">
                その他のプロジェクトやコントリビューション活動はGitHubでご確認いただけます
              </p>
              <motion.a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-colors focus-ring"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-5 h-5" />
                Visit GitHub Profile
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects