import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const SearchIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
)

const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const CartIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const navLinks = ['Home', 'Products', 'Why Kolabs', 'Contact Us', 'Become a Vendor']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isDark ? 'bg-[#060f07]/95 border-white/5' : 'bg-white/95 border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={isDark ? '/images/logo-white.webp' : '/images/logo.webp'}
              alt="NaijaKoblas"
              className="h-7 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`text-[13px] font-medium transition-colors duration-200 whitespace-nowrap ${
                  isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-600 hover:text-green-500'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-0.5">
            <button className={`hidden md:flex p-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:text-green-400 hover:bg-white/5' : 'text-gray-500 hover:text-green-500 hover:bg-black/5'}`}>
              <SearchIcon />
            </button>

            {/* Sun/Moon toggle */}
            <button
              onClick={toggle}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`hidden md:flex p-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:text-green-400 hover:bg-white/5' : 'text-gray-500 hover:text-green-500 hover:bg-black/5'}`}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button className={`hidden md:flex p-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:text-green-400 hover:bg-white/5' : 'text-gray-500 hover:text-green-500 hover:bg-black/5'}`}>
              <CartIcon />
            </button>

            <a
              href="#early-access"
              className="hidden sm:flex bg-[#22c55e] hover:bg-[#16a34a] text-black text-[13px] font-semibold px-4 py-2 rounded-md transition-all duration-200 ml-2 whitespace-nowrap"
            >
              Get Started
            </a>

            <button
              className={`lg:hidden p-1.5 ml-1 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-500 hover:text-green-500'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`lg:hidden border-t px-4 pb-4 ${isDark ? 'bg-[#0a1a0c] border-white/10' : 'bg-gray-50 border-black/10'}`}>
          <div className="flex flex-col pt-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`py-2.5 text-sm font-medium border-b transition-colors ${
                  isDark ? 'text-gray-300 hover:text-green-400 border-white/5' : 'text-gray-600 hover:text-green-500 border-black/5'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <button className={isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-500 hover:text-green-500'}><SearchIcon /></button>
              <button className={isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-500 hover:text-green-500'} onClick={toggle}>
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
              <button className={isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-500 hover:text-green-500'}><CartIcon /></button>
            </div>
            <a
              href="#early-access"
              className="mt-3 bg-[#22c55e] hover:bg-[#16a34a] text-black text-sm font-semibold px-4 py-2.5 rounded-md text-center transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
