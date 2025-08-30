'use client'

import { FiGithub, FiTwitter, FiExternalLink } from 'react-icons/fi'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/config'

export default function Hero() {
  const socialLinks = [
    { href: SOCIAL_LINKS.github, icon: FiGithub, label: 'GitHub' },
    { href: SOCIAL_LINKS.twitter, icon: FiTwitter, label: 'X (Twitter)' },
    { href: SOCIAL_LINKS.zenn, icon: FiExternalLink, label: 'Zenn' },
    { href: SOCIAL_LINKS.qiita, icon: FiExternalLink, label: 'Qiita' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Hello, I'm{' '}
          <span className="text-gradient">{PERSONAL_INFO.name}</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl mb-6 text-slate-300">
          Backend Engineer
        </p>
        
        {/* Career Journey */}
        <p className="text-lg mb-8 text-slate-400 max-w-2xl mx-auto">
          Publishing industry → Coffee shop → Backend Engineer
        </p>
        
        {/* Description */}
        <p className="text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {PERSONAL_INFO.description}
        </p>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary focus-ring"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-6 h-10 border-2 border-slate-500 rounded-full relative focus-ring"
            aria-label="Scroll to next section"
          >
            <div className="w-1 h-3 bg-slate-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
          </button>
        </div>
      </div>
    </section>
  )
}