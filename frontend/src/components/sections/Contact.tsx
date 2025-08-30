import { FiGithub, FiTwitter, FiExternalLink, FiMapPin } from 'react-icons/fi'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/config'

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: SOCIAL_LINKS.github,
      icon: FiGithub,
      description: 'コードとプロジェクト'
    },
    {
      name: 'X (Twitter)',
      href: SOCIAL_LINKS.twitter,
      icon: FiTwitter,
      description: '技術情報と日常'
    },
    {
      name: 'Zenn',
      href: SOCIAL_LINKS.zenn,
      icon: FiExternalLink,
      description: '技術記事の投稿'
    },
    {
      name: 'Qiita',
      href: SOCIAL_LINKS.qiita,
      icon: FiExternalLink,
      description: '開発ノウハウ共有'
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-400 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            新しい挑戦やコラボレーションの機会があれば、ぜひお気軽にご連絡ください。
            技術について語り合ったり、プロジェクトについて相談したりできることを楽しみにしています。
          </p>
        </div>

        {/* Contact Info */}
        <div className="card mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FiMapPin className="w-5 h-5 text-blue-500" />
            <span className="text-slate-300">
              <span className="font-semibold">Location:</span> {PERSONAL_INFO.location}
            </span>
          </div>
          <p className="text-slate-300">
            現在は{PERSONAL_INFO.title}として、Java/Spring Bootを中心とした
            バックエンド開発に従事しています。
          </p>
        </div>

        {/* Social Links */}
        <div className="grid sm:grid-cols-2 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-center gap-4 p-6 hover:border-blue-500/50 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <link.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {link.name}
                </h3>
                <p className="text-slate-400 text-sm">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-400">
            Thank you for visiting my portfolio! 🚀
          </p>
        </div>
      </div>
    </section>
  )
}