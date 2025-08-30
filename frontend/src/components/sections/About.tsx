import { PERSONAL_INFO } from '@/lib/config'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-64 h-64 rounded-full bg-slate-800 border-4 border-blue-500/20 flex items-center justify-center">
              <div className="text-6xl text-slate-400">👤</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              キャリアチェンジエンジニア
            </h3>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                出版業界で編集者としてキャリアをスタートし、コンテンツ制作の基礎を学びました。
                その後、カフェチェーンで店舗マネージャーとして効率的なオペレーション設計と
                チームマネジメントのスキルを習得。
              </p>
              
              <p>
                未経験からエンジニアに転職し、SES企業でJava/Spring Bootを中心とした
                システム開発に従事。基礎から実践まで幅広い開発スキルを身につけ、
                現在は自社SaaS開発企業でバックエンドエンジニアとして活動中。
              </p>
              
              <p>
                異業種での経験を活かし、ユーザー視点に立った開発と、
                効率的なチームワークを大切にしています。
              </p>
            </div>

            {/* Current Goals */}
            <div className="card">
              <h4 className="text-xl font-semibold text-blue-500 mb-4">
                🎯 現在の目標
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• スケーラブルなシステム設計スキルの向上</li>
                <li>• モダンな技術スタック（Next.js, TypeScript）の習得</li>
                <li>• チームリードとしてのマネジメントスキル強化</li>
                <li>• オープンソース活動への積極的な参加</li>
              </ul>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><span className="text-blue-500 font-semibold">拠点:</span> {PERSONAL_INFO.location}</p>
                <p><span className="text-blue-500 font-semibold">専門:</span> Java, Spring Boot</p>
              </div>
              <div className="space-y-2">
                <p><span className="text-blue-500 font-semibold">職種:</span> {PERSONAL_INFO.title}</p>
                <p><span className="text-blue-500 font-semibold">趣味:</span> プログラミング学習</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}