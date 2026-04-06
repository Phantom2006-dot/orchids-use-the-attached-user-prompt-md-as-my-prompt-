import { useTheme } from '../context/ThemeContext'

export default function Showcase() {
  const { isDark } = useTheme()

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#060f07]' : 'bg-[#f5f5f0]'}`}>

      {/* Main split: Loafer image (left) | Belt image + Quote (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 lg:gap-0">

        {/* Left — loafer/monk-strap image, full height */}
        <div className="relative overflow-hidden group">
          <div className="h-[340px] sm:h-[420px] lg:h-[520px] overflow-hidden">
            <img
              src="/images/loafers.jpg"
              alt="Premium Loafers"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right — quote panel only */}
        <div className="flex flex-col">
          {/* Quote panel */}
          <div className={`flex-1 flex flex-col justify-center px-8 sm:px-10 lg:px-12 py-10 transition-colors duration-300 ${isDark ? 'bg-[#0a1a0c]' : 'bg-[#e8f5eb]'}`}>
            <p className="text-[#22c55e] text-[10px] font-semibold tracking-[0.22em] uppercase mb-5">
              — CRAFTED WITH PRIDE
            </p>
            <blockquote className={`font-editorial text-[26px] sm:text-[30px] lg:text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] mb-6 ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              "Behind every product is a maker whose craft deserves a{' '}
              <span className="text-[#22c55e]">wider stage.</span>"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#22c55e]" />
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>The NaijaKoblas Promise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: left half = Belts + Boots stacked, right half = Leather Bags */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">

        {/* Left half — Belts & Boots stacked */}
        <div className="flex flex-col gap-0.5">
          <div className="relative overflow-hidden group cursor-pointer">
            <div className="h-[110px] sm:h-32 overflow-hidden">
              <img
                src="/images/belt.jpg"
                alt="Belts & Accessories"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-2 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">BELTS & ACCESSORIES</span>
            </div>
          </div>

          <div className="relative overflow-hidden group cursor-pointer">
            <div className="h-[110px] sm:h-32 overflow-hidden">
              <img
                src="/images/boots.jpg"
                alt="Artisan Boots"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-2 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">ARTISAN BOOTS</span>
            </div>
          </div>
        </div>

        {/* Right half — Leather Bags full height */}
        <div className="relative overflow-hidden group cursor-pointer">
          <div className="h-[220px] sm:h-64 overflow-hidden">
            <img
              src="/images/briefcase.jpg"
              alt="Premium Briefcase"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
