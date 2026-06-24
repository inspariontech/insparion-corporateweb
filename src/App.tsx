import { motion, useScroll, useSpring } from 'framer-motion'
import { LanguageProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Stats from './components/Stats'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import Approach from './components/Approach'
import Lifecycle from './components/Lifecycle'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-ink-900">
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand-sky via-brand-violet to-brand-fuchsia"
        />

        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Stats />
          <Manifesto />
          <Services />
          <Approach />
          <Lifecycle />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
