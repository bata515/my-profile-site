import { 
  SiOpenjdk, SiSpring, SiMysql, SiAmazon, SiGit, SiDocker, 
  SiIntellijidea, SiNextdotjs, SiTypescript, SiPython 
} from 'react-icons/si'
import { SKILLS } from '@/lib/config'

export default function Skills() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'SiJava': SiOpenjdk,
    'SiSpring': SiSpring,
    'SiMysql': SiMysql,
    'SiAmazonaws': SiAmazon,
    'SiGit': SiGit,
    'SiDocker': SiDocker,
    'SiIntellijidea': SiIntellijidea,
    'SiNextdotjs': SiNextdotjs,
    'SiTypescript': SiTypescript,
    'SiPython': SiPython,
  }

  const categories = [
    { id: 'backend', name: 'Backend', color: 'text-blue-500' },
    { id: 'cloud', name: 'Cloud', color: 'text-purple-400' },
    { id: 'tools', name: 'Tools', color: 'text-amber-500' },
    { id: 'learning', name: 'Learning', color: 'text-slate-400' },
  ]

  const getSkillsByCategory = (category: string) => {
    return SKILLS.filter(skill => skill.category === category)
  }

  const renderStars = (level: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level ? 'bg-blue-500' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-400 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const skills = getSkillsByCategory(category.id)
            
            return (
              <div key={category.id} className="card">
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold ${category.color} mb-2`}>
                    {category.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-current opacity-30"></div>
                </div>

                <div className="space-y-4">
                  {skills.map((skill) => {
                    const IconComponent = skill.icon ? iconMap[skill.icon] : null
                    
                    return (
                      <div key={skill.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {IconComponent && (
                            <IconComponent className="w-5 h-5 text-slate-400" />
                          )}
                          <span className="text-slate-300 text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {renderStars(skill.level)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}