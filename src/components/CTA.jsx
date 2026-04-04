import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="early-access" className="bg-[#060f07] py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-[#22c55e]/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
          — BE AMONG THE FIRST
        </p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Be the first<br />to know.
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Join our early access list and be the first to experience NaijaKoblas when we go live. Exclusive first access. No spam.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="General address"
              required
              className="flex-1 bg-[#0d1f0f] border border-white/10 text-white placeholder-gray-500 text-sm px-4 py-3.5 rounded-md focus:outline-none focus:border-[#22c55e]/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-sm px-6 py-3.5 rounded-md transition-all duration-200 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
            >
              + Join Early Access
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 bg-[#0d2a12] border border-[#22c55e]/30 rounded-md px-6 py-4 max-w-lg mx-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span className="text-[#22c55e] text-sm font-medium">You're on the list! We'll reach out soon.</span>
          </div>
        )}

        <p className="text-gray-600 text-xs mt-5">
          There won't be many spots. Just the access when we drop.
        </p>
      </div>
    </section>
  )
}
