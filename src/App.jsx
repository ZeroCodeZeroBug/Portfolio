import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsPage from './components/ProjectsPage'
import AboutPage from './components/AboutPage'
import SkillsetPage from './components/SkillsetPage'
import Footer from './components/Footer'
import LightRays from './components/LightRays'
import bgGif from './assets/bg.png'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden w-full max-w-full">
      <LightRays 
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={1}
        rayLength={2}
        followMouse={true}
        mouseInfluence={0.15}
      />
      <Header />
      <main className="w-full max-w-full overflow-x-hidden">
        <div className="hero-background w-full max-w-full" style={{ backgroundImage: `url(${bgGif})` }}>
          <HeroSection />
        </div>
        <div className="dotted-pattern w-full max-w-full">
          <AboutPage />
        </div>
        <div className="grid-pattern w-full max-w-full">
          <ProjectsPage />
        </div>
        <div className="dotted-pattern w-full max-w-full">
          <SkillsetPage />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App



