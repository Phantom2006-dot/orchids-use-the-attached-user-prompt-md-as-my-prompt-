import { useState } from 'react'

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="min-h-screen bg-[#060f07] pt-16 overflow-hidden relative">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c2010] via-[#060f07] to-[#060f07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        <div className="grid lg:grid-cols-2 items-center min-h-[calc(100vh-64px)]">

          {/* ── Left Content ── */}
          <div className="py-16 lg:py-0 pr-0 lg:pr-12 z-10 flex flex-col justify-center">

            {/* Coming Soon badge */}
            <div className="inline-flex items-center gap-2 bg-[#0d2a12] border border-[#22c55e]/30 rounded-full px-3.5 py-1.5 mb-7 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[#22c55e] text-[11px] font-semibold tracking-[0.18em] uppercase">Coming Soon</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[44px] sm:text-[60px] lg:text-[68px] xl:text-[76px] font-extrabold leading-[0.93] tracking-[-0.02em] mb-7">
              <span className="text-white block">Built from</span>
              <span className="text-[#22c55e] block">culture.</span>
              <span className="text-white block">Worn with</span>
              <span className="text-white block">purpose.</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed max-w-[400px] mb-7">
              NaijaKoblas is creating a platform that brings Nigerian craftsmanship to the world. Quality, identity and culture — in every stitch.
            </p>

            {/* Platform notice */}
            <div className="flex items-center gap-2 text-gray-500 text-[13px] mb-8">
              <ClockIcon />
              <span>Our full platform is currently in development</span>
            </div>

            {/* Email signup */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-[420px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-[#0b1c0d] border border-white/10 text-white placeholder-gray-600 text-sm px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-sm px-5 py-3 rounded-md transition-all duration-200 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
                >
                  + Join Early Access
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 bg-[#0d2a12] border border-[#22c55e]/30 rounded-md px-4 py-3 max-w-[420px]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-[#22c55e] text-sm font-medium">You're on the list! We'll be in touch.</span>
              </div>
            )}

            <p className="text-gray-600 text-xs mt-3.5">
              No spam. Just the access when we go live.
            </p>
          </div>

          {/* ── Right — Bag Image ── */}
          <div className="hidden lg:flex relative items-center justify-end h-[calc(100vh-64px)]">
            {/* Bag PNG fills right column — sized to match design */}
            <div className="relative w-full h-full flex items-center justify-end">
              <img
                src="/images/bag.png"
                alt="NaijaKoblas Premium Leather Bag"
                className="w-full h-[92%] object-contain object-right"
                style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.55))' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <span className="text-white text-[9px] font-semibold tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/40" />
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#060f07] to-transparent pointer-events-none" />
    </section>
  )
}
