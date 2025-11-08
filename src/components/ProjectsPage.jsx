import { useState } from 'react'
import { Server, ArrowRight, Sparkles, TrendingUp, Clock, FileText, Rocket } from 'lucide-react'
import projectsBg from '../assets/projectsbg.jpg'

const projects = [
  {
    id: 1,
    title: 'Thinky',
    icon: Sparkles,
    year: '2024-2025',
    domain: 'thinky.sh',
    url: '',
    description: 'AI-powered website builder platform',
    role: ['Front-end', 'Back-end'],
    fullDescription: 'Personal project - an AI-powered website builder similar to vo, loveable, and bolt. Build modern websites with AI assistance, featuring intuitive drag-and-drop interface and real-time collaboration.',
    tech: ['TypeScript', 'React', 'Node.js', 'Vite'],
    category: 'other',
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 2,
    title: 'Reintra',
    icon: TrendingUp,
    year: '2024-2025',
    domain: 'reintra.ai',
    url: '',
    description: 'AI agent for real-time stock market learning',
    role: ['Front-end', 'Back-end'],
    fullDescription: 'Personal project - an AI agent that learns the stock market in real-time using charts and technical analysis. Continuously analyzes market patterns, trends, and indicators to make intelligent trading predictions.',
    tech: ['TypeScript', 'React', 'Python', 'TensorFlow'],
    category: 'other',
    gradient: 'from-green-500/20 to-emerald-500/20'
  }
]

const upcomingProjects = [
  {
    id: 1,
    title: 'PPT Generator',
    icon: FileText,
    description: 'Generate professional presentations with just one prompt',
    fullDescription: 'AI-powered platform that creates complete PowerPoint presentations from a single prompt. Automatically generates slides, designs, layouts, and content tailored to your needs.',
    tech: ['TypeScript', 'React', 'Node.js', 'OpenAI'],
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 2,
    title: 'Deploy Platform',
    icon: Rocket,
    description: 'Modern hosting and deployment platform',
    fullDescription: 'A comprehensive deployment platform similar to Vercel, Heroku, Netlify, and Render. Features seamless CI/CD, automatic scaling, global CDN, and support for multiple frameworks and languages.',
    tech: ['TypeScript', 'React', 'Go', 'Docker', 'Kubernetes'],
    gradient: 'from-blue-500/20 to-indigo-500/20'
  }
]

export default function ProjectsPage() {
  const [showMessage, setShowMessage] = useState({})

  const handleViewClick = (project) => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer')
    } else {
      setShowMessage(prev => ({ ...prev, [project.id]: true }))
      setTimeout(() => {
        setShowMessage(prev => ({ ...prev, [project.id]: false }))
      }, 7000)
    }
  }

  return (
    <section id="projects" className="min-h-screen py-20 sm:py-24 lg:py-32 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10 relative rounded-lg -mx-4 sm:-mx-2 overflow-hidden min-h-[150px] sm:min-h-[180px] md:min-h-[200px]" style={{ maxHeight: '250' }}>
          <div 
            className="absolute inset-0 bg-no-repeat"
            style={{ 
              backgroundImage: `url(${projectsBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" style={{ background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0, 0, 0, 0.31) 60%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.2) 85%, transparent 100%)' }} />
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 max-w-3xl">
              <div className="flex-1 min-w-0 w-full">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 break-words lg:-mx-4">My projects.</h1>
                <p className="text-gray-300 text-sm xs:text-base sm:text-lg mb-4 sm:mb-6 max-w-3xl leading-relaxed break-words">
                  A selection of my work: fullstack apps, frontend & UI design. I focus on building clean, fast, and user-friendly experiences. Most of these were freelance projects, others were built for fun or learning. Also working on my own projects at the same time.
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <Server className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span>Active Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative p-4 sm:p-6 rounded-lg border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-sm hover:border-white/20 transition-all duration-300 group w-full overflow-hidden`}
              >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <project.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold break-words">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-400 truncate">{project.domain}</p>
                      </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold whitespace-nowrap flex-shrink-0 break-words">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 mb-3 break-words">{project.description}</p>

                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {project.role.map((r, idx) => (
                      <span key={idx} className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap">
                        {r === 'Front-end' ? (
                          <Sparkles className="w-3 h-3 flex-shrink-0" />
                        ) : (
                          <Server className="w-3 h-3 flex-shrink-0" />
                        )}
                        {r}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed break-words">{project.fullDescription}</p>

                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-white/5 border border-white/10 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleViewClick(project)}
                    className="flex items-center gap-2 text-xs sm:text-sm hover:text-white transition-all duration-300 group-hover:translate-x-1 w-full sm:w-auto"
                  >
                    <span className="transition-all duration-300 break-words">
                      {showMessage[project.id] ? "Sorry brah, the project isn't opensource or not hosted yet (no money)" : "View"}
                    </span>
                    {!showMessage[project.id] && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-opacity duration-300 flex-shrink-0" />}
                  </button>
                </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 flex-wrap">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="break-words">Upcoming Projects</span>
          </h2>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg mb-4 sm:mb-6 max-w-3xl leading-relaxed break-words">
            Projects I'm currently working on or planning to build. These are ambitious ideas that I'm excited to bring to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-full">
            {upcomingProjects.map((project) => (
              <div
                key={project.id}
                className={`relative p-4 sm:p-6 rounded-lg border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-sm hover:border-white/20 transition-all duration-300 group w-full overflow-hidden`}
              >
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold break-words">{project.title}</h3>
                    </div>
                  </div>
                  <span className="px-2 sm:px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold whitespace-nowrap flex-shrink-0 break-words">
                    Coming Soon
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-300 mb-3 break-words">{project.description}</p>

                <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed break-words">{project.fullDescription}</p>

                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-white/5 border border-white/10 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

