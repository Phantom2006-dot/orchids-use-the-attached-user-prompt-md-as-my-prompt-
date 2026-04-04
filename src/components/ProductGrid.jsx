import { useTheme } from '../context/ThemeContext'

export default function ProductGrid() {
  const { isDark } = useTheme()

  return (
    <section className={`py-0 transition-colors duration-300 ${isDark ? 'bg-[#060f07]' : 'bg-[#f5f5f0]'}`}>
      {/* MERCH label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 pt-2">
        <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>MERCH</p>
      </div>

      {/* Grid — matches reference exactly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Sneakers (2/3) | Belt (1/3) */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {/* Sneakers — wide */}
          <div className="col-span-2 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/sneakers.jpg"
                alt="Artisan Sneakers"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">ARTISAN SHOES</span>
            </div>
          </div>

          {/* Belt — square */}
          <div className="col-span-1 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/belt.jpg"
                alt="Premium Belts"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">PREMIUM BELTS</span>
            </div>
          </div>
        </div>

        {/* Row 2: Boots (1/3) | Loafers (2/3) */}
        <div className="grid grid-cols-3 gap-2">
          {/* Boots — square */}
          <div className="col-span-1 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/boots.jpg"
                alt="Artisan Boots"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">ARTISAN SHOES</span>
            </div>
          </div>

          {/* Loafers — wide */}
          <div className="col-span-2 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/loafers.jpg"
                alt="Leather Loafers"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">LEATHER LOAFERS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
