import { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const items = [
  { src: '/images/sneakers.jpg', alt: 'Artisan Sneakers', label: 'ARTISAN SHOES' },
  { src: '/images/belt.jpg', alt: 'Premium Belts', label: 'PREMIUM BELTS' },
  { src: '/images/boots.jpg', alt: 'Artisan Boots', label: 'ARTISAN BOOTS' },
]

export default function ProductGrid() {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)
  const { isDark } = useTheme()

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.offsetWidth)
    setActive(idx)
  }

  return (
    <section className={`pb-0 transition-colors duration-300 ${isDark ? 'bg-[#060f07]' : 'bg-[#f5f5f0]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2.5">
        <p className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>MERCH</p>
      </div>

      {/* Mobile: horizontal snap carousel */}
      <div className="sm:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, i) => (
            <div key={i} className="snap-start flex-none w-full relative cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 pt-2.5 pb-1">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                scrollRef.current?.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: 'smooth' })
                setActive(i)
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? 'w-5 bg-[#22c55e]' : `w-1.5 ${isDark ? 'bg-white/25' : 'bg-black/20'}`}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid layout */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-2">

          {/* Sneakers — 2 cols wide */}
          <div className="col-span-2 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/images/sneakers.jpg" alt="Artisan Sneakers" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">ARTISAN SHOES</span>
            </div>
          </div>

          {/* Belt */}
          <div className="col-span-1 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/images/belt.jpg" alt="Premium Belts" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">PREMIUM BELTS</span>
            </div>
          </div>

          {/* Boots */}
          <div className="col-span-1 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/images/boots.jpg" alt="Artisan Boots" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">ARTISAN BOOTS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
