import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section
      id="early-access"
      className="relative overflow-hidden py-28 lg:py-36"
      style={{
        backgroundImage: 'url(/images/sneakers.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/72" />
      {/* Green tint glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060f07]/80 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#22c55e] text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">
          — JOIN EARLY ACCESS
        </p>

        <h2 className="font-editorial text-[44px] sm:text-[56px] lg:text-[64px] font-semibold leading-[1.1] tracking-[-0.01em] mb-6 text-white">
          Be the first<br />to know.
        </h2>

        <p className="text-[15px] leading-relaxed max-w-md mx-auto mb-9 text-gray-300">
          Join our early access list and be the first to experience NaijaKoblas when we go live. Exclusive first access. No spam.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 text-sm px-4 py-3.5 rounded-md focus:outline-none focus:border-[#22c55e]/70 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-sm px-6 py-3.5 rounded-md transition-all duration-200 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
            >
              + Join Early Access
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 bg-[#22c55e]/15 backdrop-blur-sm border border-[#22c55e]/40 rounded-md px-6 py-4 max-w-lg mx-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span className="text-[#4ade80] text-sm font-medium">You're on the list! We'll reach out soon.</span>
          </div>
        )}

        <p className="text-xs mt-5 text-gray-500">
          There won't be many spots. Just the access when we drop.
        </p>
      </div>
    </section>
  )
}
