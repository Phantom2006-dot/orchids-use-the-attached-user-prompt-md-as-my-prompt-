import { useState } from 'react'

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 80 C15 80 15 20 15 20 C15 20 35 55 50 55 C65 55 85 20 85 20 L85 80" stroke="#22c55e" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <path d="M38 80 L38 48" stroke="#22c55e" strokeWidth="14" strokeLinecap="round"/>
      <path d="M62 80 L62 48" stroke="#22c55e" strokeWidth="14" strokeLinecap="round"/>
    </svg>
    <div className="flex flex-col leading-none">
      <span className="text-white text-sm font-bold tracking-wide">Naija</span>
      <span className="text-white text-sm font-bold tracking-wide">Koblas</span>
    </div>
  </div>
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
  Company: ['About Us', 'Careers', 'Press', 'Become a Vendor', 'Vendors'],
  Support: ['Help Center', 'Order Status', 'Returns', 'Shipping Info', 'Returns'],
}

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) setSubscribed(true)
  }

  return (
    <footer className="bg-[#060f07] border-t border-white/5">
      {/* Newsletter top strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white text-sm font-semibold">Stay Updated</p>
              <p className="text-gray-500 text-xs mt-0.5">Subscribe to our newsletter for new collections & exclusive offers</p>
            </div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-[#0d1f0f] border border-white/10 text-white placeholder-gray-600 text-xs px-3 py-2.5 rounded-md focus:outline-none focus:border-[#22c55e]/50 w-48 sm:w-56 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-black text-xs font-semibold px-4 py-2.5 rounded-md transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-[#22c55e] text-xs font-medium">Subscribed!</p>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed mt-5 max-w-xs">
              Connecting craftsmanship, culture, and commerce. Premium African leather goods from hands that know the craft.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-[#0d1f0f] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#22c55e] hover:border-[#22c55e]/30 transition-all">
                <InstagramIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0d1f0f] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#22c55e] hover:border-[#22c55e]/30 transition-all">
                <LinkedInIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0d1f0f] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#22c55e] hover:border-[#22c55e]/30 transition-all">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
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
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© 2026 NaijaKoblas. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
