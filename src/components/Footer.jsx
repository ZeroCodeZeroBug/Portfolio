import footerBg from '../assets/footer.jpg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
          <p className="text-gray-400 text-sm sm:text-base">
            © {currentYear} deyo.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            do not steal the website's idea please :&lt;
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            made with ❤️ by deyo
          </p>
        </div>
      </div>
    </footer>
  )
}
