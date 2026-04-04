import { useTheme } from '../context/ThemeContext'

export default function Showcase() {
  const { isDark } = useTheme()

  const cardBg = isDark ? 'bg-[#0a1a0c]' : 'bg-[#e8ede9]'

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#060f07]' : 'bg-[#f5f5f0]'}`}>

      {/* Main split row: Large loafer image LEFT | Quote RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — Large loafer image */}
        <div className="relative overflow-hidden group">
          <div className="aspect-square lg:aspect-auto lg:h-[520px] overflow-hidden">
            <img
              src="/images/loafers.jpg"
              alt="Premium Loafers"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right — Belt image top + Quote below */}
        <div className="flex flex-col">
          {/* Belt image top-right */}
          <div className="relative overflow-hidden group flex-shrink-0" style={{ height: '200px' }}>
            <img
              src="/images/belt.jpg"
              alt="Premium Belt"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </div>

          {/* Quote panel */}
          <div className={`flex-1 flex flex-col justify-center px-8 sm:px-10 lg:px-12 py-10 ${cardBg}`}>
            <p className="text-[#22c55e] text-[10px] font-semibold tracking-[0.22em] uppercase mb-5">
              — CRAFTED WITH PRIDE
            </p>
            <blockquote className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-6 font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
              "Behind every product is a maker whose craft deserves a{' '}
              <span className="text-[#22c55e]">wider stage.</span>"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#22c55e]" />
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>The NaijaKoblas Promise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: 3 equal images — belt/accessories | boots | briefcase */}
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="relative overflow-hidden group cursor-pointer">
          <div className="aspect-square sm:h-64 overflow-hidden">
            <img
              src="/images/belt.jpg"
              alt="Belts & Accessories"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">BELTS & ACCESSORIES</span>
          </div>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <div className="aspect-square sm:h-64 overflow-hidden">
            <img
              src="/images/boots.jpg"
              alt="Artisan Boots"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">ARTISAN BOOTS</span>
          </div>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <div className="aspect-square sm:h-64 overflow-hidden">
            <img
              src="/images/briefcase.jpg"
              alt="Leather Bags"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">LEATHER BAGS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
