import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTheme } from '../context/ThemeContext'

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { isDark } = useTheme()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const subscriberTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_SUBSCRIBER_ID
    const adminTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (serviceId && subscriberTemplate && adminTemplate && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          subscriberTemplate,
          {
            to_email: email,
            subject: 'Welcome to NaijaKoblas — You\'re on the list!',
            message: `Hi there,\n\nThank you for joining the NaijaKoblas early access list!\n\nWe're building something truly special — a marketplace that brings Nigerian craftsmanship to the world. Quality, identity, and culture in every stitch.\n\nYou'll be the first to know when we launch. Stay tuned.\n\nWith love,\nThe NaijaKoblas Team\ninfo@naijakoblas.com`,
          },
          publicKey
        )
        await emailjs.send(
          serviceId,
          adminTemplate,
          {
            to_email: 'info@naijakoblas.com',
            subject: 'New NaijaKoblas Waitlist Sign-up',
            message: `A new user has joined the NaijaKoblas waitlist.\n\nEmail address: ${email}\n\nLogin to your dashboard to view all sign-ups.`,
          },
          publicKey
        )
      } catch (err) {
        console.error('Email send error:', err)
      }
    }

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={`min-h-screen pt-28 overflow-hidden relative transition-colors duration-300 ${isDark ? 'bg-[#060f07]' : 'bg-[#f5f5f0]'}`}>
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-br from-[#0c2010] via-[#060f07] to-[#060f07]' : 'bg-gradient-to-br from-[#d4f7de] via-[#f5f5f0] to-[#f5f5f0]'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        <div className="grid lg:grid-cols-2 items-center min-h-[calc(100vh-64px)]">

          {/* Left Content */}
          <div className="py-16 lg:py-0 pr-0 lg:pr-4 z-10 flex flex-col justify-center">

            <div className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-7 self-start border ${isDark ? 'bg-[#0d2a12] border-[#22c55e]/30' : 'bg-[#dcfce7] border-[#22c55e]/40'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[#16a34a] text-[11px] font-semibold tracking-[0.18em] uppercase">Coming Soon</span>
            </div>

            <h1 className={`font-display text-[44px] sm:text-[60px] lg:text-[68px] xl:text-[76px] font-extrabold leading-[0.93] tracking-[-0.02em] mb-7 ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              <span className="block">Built from</span>
              <span className="text-[#22c55e] block">culture.</span>
              <span className="block">Worn with</span>
              <span className="block">purpose.</span>
            </h1>

            <p className={`text-[15px] sm:text-base leading-relaxed max-w-[400px] mb-7 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              NaijaKoblas is creating a platform that brings Nigerian craftsmanship to the world. Quality, identity and culture — in every stitch.
            </p>

            <div className={`flex items-center gap-2 text-[13px] mb-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <ClockIcon />
              <span>Our full platform is currently in development</span>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-[420px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={loading}
                  className={`flex-1 border text-sm px-4 py-3 rounded-md focus:outline-none transition-colors ${isDark ? 'bg-[#0b1c0d] border-white/10 text-white placeholder-gray-600 focus:border-[#22c55e]/50' : 'bg-white border-black/10 text-gray-900 placeholder-gray-400 focus:border-[#22c55e]/60'}`}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-sm px-5 py-3 rounded-md transition-all duration-200 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Joining...' : '+ Join Early Access'}
                </button>
              </form>
            ) : (
              <div className={`flex items-center gap-3 border rounded-md px-4 py-3 max-w-[420px] ${isDark ? 'bg-[#0d2a12] border-[#22c55e]/30' : 'bg-[#dcfce7] border-[#22c55e]/40'}`}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-[#16a34a] text-sm font-medium">You're on the list! We'll be in touch.</span>
              </div>
            )}

            <p className={`text-xs mt-3.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              No spam. Just the access when we go live.
            </p>
          </div>

          {/* Right — Bag Image */}
          <div className="hidden lg:flex relative items-center justify-end h-[calc(100vh-64px)] overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/images/bag-adjusted.png"
                alt="NaijaKoblas Premium Leather Bag"
                className="w-full h-[92%] object-contain object-right scale-[1.3] origin-right"
                style={{ filter: isDark ? 'drop-shadow(0 32px 64px rgba(0,0,0,0.55))' : 'drop-shadow(0 32px 64px rgba(0,0,0,0.2))' }}
              />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <span className={`text-[9px] font-semibold tracking-[0.25em] uppercase ${isDark ? 'text-white' : 'text-gray-800'}`}>Scroll</span>
        <div className={`w-px h-10 ${isDark ? 'bg-white/40' : 'bg-black/30'}`} />
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-28 pointer-events-none bg-gradient-to-t ${isDark ? 'from-[#060f07]' : 'from-[#f5f5f0]'} to-transparent`} />
    </section>
  )
}
