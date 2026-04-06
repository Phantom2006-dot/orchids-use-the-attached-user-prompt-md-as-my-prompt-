import { useTheme } from '../context/ThemeContext'

const AuthenticIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M6 20v-1a6 6 0 0 1 12 0v1"/>
    <path d="M9 12l1.5 5L12 15l1.5 2L15 12"/>
  </svg>
)

const ArtisanIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3"/>
    <path d="M3 20v-1a6 6 0 0 1 9.33-4.99"/>
    <circle cx="17" cy="14" r="3"/>
    <path d="M14 20v-.5a3 3 0 0 1 6 0v.5"/>
  </svg>
)

const MarketplaceIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 17 9 11 13 15 21 7"/>
    <polyline points="15 7 21 7 21 13"/>
  </svg>
)

const GlobalIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const features = [
  {
    icon: <AuthenticIcon />,
    title: 'Authentic Nigerian-Made',
    description: 'Every product on NaijaKoblas is verified and sourced from skilled Nigerian artisans. No mass production, no imitations — only the real thing.',
  },
  {
    icon: <ArtisanIcon />,
    title: 'Direct Access to Artisans',
    description: 'Connect directly with the skilled craftsmen behind each piece. Understand their story, their techniques, and the culture they carry in their hands.',
  },
  {
    icon: <MarketplaceIcon />,
    title: 'A Growing Marketplace',
    description: "A curated, structured space for quality craftsmanship — built to grow with Nigeria's artisan community and serve buyers across the globe.",
  },
  {
    icon: <GlobalIcon />,
    title: 'Global Reach from Naija',
    description: 'Geography should not limit opportunity. NaijaKoblas bridges the gap — bringing quality Nigerian leather goods to customers wherever they may be.',
  },
]

export default function Features() {
  const { isDark } = useTheme()

  const divider = isDark ? 'border-[#22c55e]/15' : 'border-[#22c55e]/20'
  const cellBg   = isDark ? 'bg-transparent' : 'bg-transparent'

  return (
    <section className={`py-20 lg:py-28 transition-colors duration-300 ${isDark ? 'bg-[#060f07]' : 'bg-[#f5f5f0]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#22c55e]" />
            <p className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              WHAT TO EXPECT
            </p>
          </div>
          <h2 className={`font-display text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.02] tracking-[-0.025em] max-w-2xl mb-6 ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            A marketplace unlike<br />anything before it.
          </h2>
          <p className={`text-[15px] leading-relaxed max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            From handmade leather shoes to premium artisan products — we are building a space where quality, identity and culture meet.
          </p>
        </div>

        {/* 2×2 grid with divider lines — no card backgrounds */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 border-t ${divider}`}>
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${cellBg} px-0 sm:px-8 py-10
                ${i % 2 === 0 ? `sm:border-r ${divider}` : ''}
                ${i < 2 ? `border-b ${divider}` : ''}
                ${i % 2 === 0 && i === 0 ? 'sm:pl-0' : ''}
                ${i % 2 === 1 ? 'sm:pl-8' : ''}
              `}
            >
              {/* Icon — standalone, no background box */}
              <div className="mb-5">
                {feature.icon}
              </div>

              <h3 className={`font-display font-bold text-[18px] sm:text-[20px] mb-3 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                {feature.title}
              </h3>
              <p className={`text-[14px] sm:text-[15px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
