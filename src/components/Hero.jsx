import { useState } from 'react'

const PlatformIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="min-h-screen bg-[#060f07] pt-16 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a12] via-[#060f07] to-[#060f07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-64px)]">
          {/* Left Content */}
          <div className="py-16 lg:py-0 pr-0 lg:pr-8 z-10">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0d2a12] border border-[#22c55e]/30 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[#22c55e] text-xs font-semibold tracking-widest uppercase">Coming Soon</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              <span className="text-white block">Built from</span>
              <span className="text-[#22c55e] block">culture.</span>
              <span className="text-white block">Worn with</span>
              <span className="text-white block">purpose.</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mb-8">
              NaijaKoblas is creating a platform that brings Nigerian craftsmanship to the world. Quality identity and culture — in every stitch.
            </p>

            {/* Platform notice */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
              <PlatformIcon />
              <span>Our platform is currently in development</span>
            </div>

            {/* Email signup */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-[#0d1f0f] border border-white/10 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]/60 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-sm px-5 py-3 rounded-md transition-all duration-200 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
                >
                  + Join Early Access
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 bg-[#0d2a12] border border-[#22c55e]/30 rounded-md px-4 py-3 max-w-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-[#22c55e] text-sm font-medium">You're on the list! We'll be in touch.</span>
              </div>
            )}

            <p className="text-gray-600 text-xs mt-4">
              No spam. Just the access when we go live.
            </p>
          </div>

          {/* Right — Product Image */}
          <div className="relative flex items-center justify-center lg:justify-end lg:h-screen overflow-visible">
            {/* Glow behind image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-[520px] aspect-[3/4] lg:h-[75vh] overflow-hidden rounded-2xl">
              <img
                src="/images/briefcase.jpg"
                alt="NaijaKoblas Premium Leather Briefcase"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060f07]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060f07] to-transparent pointer-events-none" />
    </section>
  )
}
