import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import Social from './components/Social'
import Footer from './components/Footer'

function AppContent() {
  const { isDark } = useTheme()
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#060f07] text-white' : 'bg-[#f5f5f0] text-gray-900'}`}>
      <Navbar />
      <Hero />
      <ProductGrid />
      <Features />
      <Showcase />
      <CTA />
      <Social />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
