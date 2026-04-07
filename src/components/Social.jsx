import { useTheme } from "../context/ThemeContext";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const socials = [
  { label: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/naijakoblas?igsh=dnJxeXBwZG5iaWg5&utm_source=qr", target: "_blank" },
  { label: "X (Twitter)", icon: <XIcon />, href: "https://x.com/naijakoblas?s=21", target: "_blank" },
  { label: "Facebook", icon: <FacebookIcon />, href: "https://www.facebook.com/share/1G3rLV3UtM/?mibextid=wwXIfr", target: "_blank" },
  { label: "WhatsApp", icon: <WhatsAppIcon />, href: "https://wa.me/2348058180874", target: "_blank" },
];

export default function Social() {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-20 border-t transition-colors duration-300 ${isDark ? "bg-[#060f07] border-white/5" : "bg-[#f5f5f0] border-black/5"}`}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#22c55e] text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">
          — STAY CONNECTED
        </p>
        <h2
          className={`font-display text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold mb-4 leading-[1.1] tracking-[-0.02em] ${isDark ? "text-white" : "text-[#111111]"}`}
        >
          Follow the journey
          <br />
          as we build.
        </h2>
        <p
          className={`text-[15px] mb-9 ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          Get behind-the-scenes updates, artisan stories, and launch news before
          anyone else.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.target}
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 border text-sm font-medium px-5 py-3 rounded-lg transition-all duration-200 will-change-transform ${
                isDark
                  ? "bg-[#0d1f0f] border-white/10 hover:border-[#22c55e]/40 hover:bg-[#0f2512] text-white"
                  : "bg-white border-black/10 hover:border-[#22c55e]/50 hover:bg-[#f0fdf4] text-gray-900"
              }`}
            >
              <span className="text-[#22c55e] flex-shrink-0">{s.icon}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
