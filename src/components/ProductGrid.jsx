export default function ProductGrid() {
  return (
    <section className="bg-[#060f07] pb-0">
      {/* MERCH label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2.5">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-600">MERCH</p>
      </div>

      {/* Single-row: sneakers (wide, 2 cols) | belt | boots — matches design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-2">

          {/* Sneakers — 2 cols wide */}
          <div className="col-span-2 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/sneakers.jpg"
                alt="Artisan Sneakers"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">ARTISAN SHOES</span>
            </div>
          </div>

          {/* Belt */}
          <div className="col-span-1 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/belt.jpg"
                alt="Premium Belts"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">PREMIUM BOOTS</span>
            </div>
          </div>

          {/* Boots */}
          <div className="col-span-1 group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/boots.jpg"
                alt="Artisan Boots"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-[10px] font-bold tracking-[0.18em] uppercase">ARTISAN GOODS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
