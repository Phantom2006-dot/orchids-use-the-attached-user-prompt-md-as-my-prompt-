const AuthenticIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

const ArtisanIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const MarketplaceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const GlobalIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const features = [
  {
    icon: <AuthenticIcon />,
    title: 'Authentic Nigerian-Made',
    description:
      'Every product on NaijaKoblas is verified and sourced from skilled Nigerian artisans. No mass-production, no imitations — only the real thing.',
  },
  {
    icon: <ArtisanIcon />,
    title: 'Direct Access to Artisans',
    description:
      'Connect directly with the skilled craftsmen behind each piece. Understand their story, their techniques, and the culture they carry in their hands.',
  },
  {
    icon: <MarketplaceIcon />,
    title: 'A Growing Marketplace',
    description:
      'A curated, structured space for quality craftsmanship — built to grow with Nigeria\'s artisan community and serve buyers across the globe.',
  },
  {
    icon: <GlobalIcon />,
    title: 'Global Reach from Naija',
    description:
      'Geography should not limit opportunity. NaijaKoblas bridges the gap — bringing quality Nigerian leather goods to customers wherever they may be.',
  },
]

export default function Features() {
  return (
    <section className="bg-[#060f07] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-500 text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">WHY WE EXIST</p>
          <h2 className="font-display text-[38px] sm:text-[48px] lg:text-[54px] font-extrabold text-white leading-[1.05] tracking-[-0.02em] max-w-2xl mb-5">
            A marketplace unlike anything before it.
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-lg">
            From handmade leather shoes to premium artisan products — we are building a space where quality, identity and culture meet.
          </p>
        </div>
        {/* Feature 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#0d1f0f] border border-[#22c55e]/15 rounded-xl p-6 hover:border-[#22c55e]/35 transition-all duration-300 hover:bg-[#0f2412] group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-[#22c55e]/10 rounded-lg flex items-center justify-center group-hover:bg-[#22c55e]/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15px] mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
