import { 
  Wrench, Lightbulb, Server, Link2, Globe, Palette, FileCode, Circle, 
  Zap, Star, Target, Database, Moon, Box, Settings, Github
} from 'lucide-react'
import skillsetBg from '../assets/skillsetbg.jpg'

const skills = {
  frontend: {
    title: 'Frontend development.',
    icon: Lightbulb,
    description: 'I design responsive and accessible websites with an emphasis on clean aesthetics, fluid user experience, and precise detail.',
    technologies: [
      { name: 'HTML', icon: Globe, color: 'from-orange-500/20 to-orange-600/20 border-orange-500/30' },
      { name: 'CSS', icon: Palette, color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
      { name: 'TypeScript', icon: FileCode, color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
      { name: 'React', icon: Circle, color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30' },
      { name: 'Vue', icon: Circle, color: 'from-green-500/20 to-green-600/20 border-green-500/30' },
      { name: 'Nuxt', icon: Zap, color: 'from-green-500/20 to-green-600/20 border-green-500/30' },
      { name: 'Astro', icon: Star, color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30' },
      { name: 'Tailwind', icon: Target, color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30' }
    ],
    keyIcons: [FileCode, Circle, Zap]
  },
  backend: {
    title: 'Backend development.',
    icon: Server,
    description: 'I develop stable and efficient backend systems that deliver consistent performance and integrate smoothly with other services.',
    technologies: [
      { name: 'TypeScript', icon: FileCode, color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
      { name: 'Python', icon: FileCode, color: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30' },
      { name: 'Java', icon: FileCode, color: 'from-orange-500/20 to-orange-600/20 border-orange-500/30' },
      { name: 'Golang', icon: FileCode, color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30' },
      { name: 'Bun', icon: Circle, color: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30' },
      { name: 'Node', icon: Circle, color: 'from-green-500/20 to-green-600/20 border-green-500/30' },
      { name: 'Express', icon: Zap, color: 'from-gray-500/20 to-gray-600/20 border-gray-500/30' },
      { name: 'MongoDB', icon: Database, color: 'from-green-500/20 to-green-600/20 border-green-500/30' },
      { name: 'MERN Stack', icon: Star, color: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30' },
      { name: 'Firebase', icon: Zap, color: 'from-orange-500/20 to-orange-600/20 border-orange-500/30' },
      { name: 'PostgreSQL', icon: Database, color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
      { name: 'Redis', icon: Database, color: 'from-red-500/20 to-red-600/20 border-red-500/30' },
      { name: 'Prisma ORM', icon: Box, color: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30' },
      { name: 'Fastify', icon: Zap, color: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30' },
      { name: 'Elysia', icon: Moon, color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30' }
    ],
    keyIcons: [FileCode, Circle, Zap]
  },
  environment: {
    title: 'Environment and CI/CD.',
    icon: Link2,
    description: 'I leverage modern tools to streamline development and deployment, aiming for smooth workflows and dependable infrastructure.',
    technologies: [
      { name: 'Docker', icon: Box, color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
      { name: 'GitHub', icon: Github, color: 'from-gray-500/20 to-gray-600/20 border-gray-500/30' },
      { name: 'AWS', icon: Server, color: 'from-orange-500/20 to-orange-600/20 border-orange-500/30' },
      { name: 'Azure', icon: Server, color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
      { name: 'GCP', icon: Server, color: 'from-red-500/20 to-red-600/20 border-red-500/30' },
      { name: 'Nginx', icon: Server, color: 'from-green-500/20 to-green-600/20 border-green-500/30' },
      { name: 'Caddy', icon: Box, color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30' },
      { name: 'PM2', icon: Settings, color: 'from-orange-500/20 to-orange-600/20 border-orange-500/30' }
    ],
    keyIcons: [Box, Github, Settings]
  }
}

export default function SkillsetPage() {
  return (
    <section id="skillset" className="min-h-screen py-20 sm:py-24 lg:py-32 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="mb-10 relative rounded-lg -mx-4 sm:-mx-2 lg:-mx-0 overflow-hidden min-h-[200px] sm:min-h-[250px] lg:-mx-0">
        <div 
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url(${skillsetBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap lg:-mx-4">
            <Wrench className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold italic break-words">My skillset.</h1>
          </div>
          
          <p className="text-sm xs:text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed break-words">
            I build fast, reliable, and scalable web platforms. My frontend stack centers on TypeScript, Vue, and Nuxt, 
            while I use TypeScript with Bun on the backend and experiment with Go. I'm experienced in CI/CD, containerization, 
            and modern deployment, aiming for efficient, maintainable infrastructure.
            <Wrench className="inline-block w-3 h-3 xs:w-4 xs:h-4 ml-2" />
          </p>
        </div>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {Object.entries(skills).map(([key, skill]) => {
          const IconComponent = skill.icon
          return (
            <section key={key} className="space-y-4 sm:space-y-6 w-full">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                <IconComponent className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">{skill.title}</h2>
                <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                  {skill.keyIcons.map((IconComponent, idx) => (
                    <IconComponent key={idx} className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm xs:text-base sm:text-lg max-w-3xl leading-relaxed break-words">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 max-w-full">
                {skill.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className={`group relative px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-lg border backdrop-blur-xl bg-gradient-to-br ${tech.color} hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0`}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <tech.icon className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="font-mono text-xs sm:text-sm font-medium whitespace-nowrap break-words">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
      </div>
    </section>
  )
}

