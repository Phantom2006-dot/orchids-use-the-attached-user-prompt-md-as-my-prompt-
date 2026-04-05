import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Logo = ({ isDark }) => (
  <a href="#">
    <img
      src={isDark ? '/images/logo-white.webp' : '/images/logo.webp'}
      alt="NaijaKoblas"
      className="h-7 w-auto object-contain"
    />
  </a>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M4 20L20 4"/>
  </svg>
)

const footerLinks = {
  Products: ['Home', 'Shoes', 'Bags', 'Belts', 'New In'],
  Company: ['About', 'Become a Vendor', 'Vendors', 'Contact', 'Blog'],
  Support: ['Help Center', 'Order Status', 'Shipping Info', 'Returns'],
}

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { isDark } = useTheme()

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) setSubscribed(true)
  }

  return (
    <footer className={`border-t transition-colors duration-300 ${isDark ? 'bg-[#060f07] border-white/5' : 'bg-[#f5f5f0] border-black/5'}`}>
      {/* Newsletter top strip */}
      <div className={`border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#111111]'}`}>Stay Updated</p>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Subscribe to our newsletter for new collections & exclusive offers</p>
            </div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`flex-1 border text-xs px-3 py-2.5 rounded-md focus:outline-none sm:w-56 transition-colors ${isDark ? 'bg-[#0d1f0f] border-white/10 text-white placeholder-gray-600 focus:border-[#22c55e]/50' : 'bg-white border-black/10 text-gray-900 placeholder-gray-400 focus:border-[#22c55e]/50'}`}
                />
                <button
                  type="submit"
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-black text-xs font-semibold px-4 py-2.5 rounded-md transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-[#16a34a] text-xs font-medium">Subscribed!</p>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-2">
            <Logo isDark={isDark} />
            <p className={`text-sm leading-relaxed mt-5 max-w-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Connecting craftsmanship, culture, and commerce. Premium African leather goods from hands that know the craft.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[InstagramIcon, LinkedInIcon, TwitterIcon].map((Icon, i) => (
                <a key={i} href="#" className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isDark ? 'bg-[#0d1f0f] border-white/10 text-gray-400 hover:text-[#22c55e] hover:border-[#22c55e]/30' : 'bg-white border-black/10 text-gray-500 hover:text-[#22c55e] hover:border-[#22c55e]/40'}`}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className={`text-sm font-semibold mb-4 tracking-wide ${isDark ? 'text-white' : 'text-[#111111]'}`}>{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-[#111111]'}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`border-t ${isDark ? 'border-white/5' : 'border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>© 2026 NaijaKoblas. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((label) => (
              <a key={label} href="#" className={`text-xs transition-colors ${isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'}`}>{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
