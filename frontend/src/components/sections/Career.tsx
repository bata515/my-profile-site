import { CAREER_STEPS } from '@/lib/config'

export default function Career() {
  const formatPeriod = (start: string, end: string) => {
    if (end === 'present') {
      return `${start} - 現在`
    }
    return `${start} - ${end}`
  }

  return (
    <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Career <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-400 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-600"></div>

          {/* Career Steps */}
          <div className="space-y-12">
            {CAREER_STEPS.map((step, index) => (
              <div key={step.id} className="relative flex items-start gap-8">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-800 border-4 border-blue-500 rounded-full flex items-center justify-center text-2xl z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="card flex-1 min-h-0">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-100 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-1">
                      {step.company}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {formatPeriod(step.period.start, step.period.end)}
                    </p>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">
                      主要スキル:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {step.achievements && step.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-2">
                        主な成果:
                      </h4>
                      <ul className="space-y-1">
                        {step.achievements.map((achievement, i) => (
                          <li key={i} className="text-slate-300 text-sm">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}