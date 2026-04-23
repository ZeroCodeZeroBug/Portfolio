import { Github } from 'lucide-react'
import footerBg from '../assets/footer.jpg'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const githubUrl = 'https://github.com/ZeroCodeZeroBug/Portfolio'

  return (
    <footer className="w-full pt-12 pb-20 sm:pt-16 sm:pb-10 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url(${footerBg})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 text-sm sm:text-base hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>ZeroCodeZeroBug</span>
          </a>
          <p className="text-gray-500 text-xs sm:text-sm">
            do not steal the website's idea please :&lt;
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            made with ❤️ by Deyo Dyalan
          </p>
        </div>
      </div>
    </footer>
  )
}
