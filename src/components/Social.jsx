const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

const socials = [
  { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
  { label: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
  { label: 'WhatsApp', icon: <WhatsAppIcon />, href: '#' },
]

export default function Social() {
  return (
    <section className="bg-[#060f07] py-20 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
          — STAY CONNECTED
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
          Follow the journey<br />as we build.
        </h2>
        <p className="text-gray-400 text-base mb-10">
          Get behind-the-scenes updates, or share ideas, and launch news before anyone else.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-2.5 bg-[#0d1f0f] border border-white/10 hover:border-[#22c55e]/40 hover:bg-[#0f2512] text-white text-sm font-medium px-5 py-3 rounded-lg transition-all duration-200 hover:scale-[1.03]"
            >
              <span className="text-[#22c55e]">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
