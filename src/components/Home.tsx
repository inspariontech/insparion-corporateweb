import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from './Marquee'
import About from './About'
import Stats from './Stats'
import Manifesto from './Manifesto'
import Services from './Services'
import Approach from './Approach'
import Lifecycle from './Lifecycle'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  const location = useLocation()

  // Hash ile gelindiğinde (ör. footer'dan /#about) ilgili bölüme kaydır.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const scroll = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      const t = setTimeout(scroll, 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [location])

  return (
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
  )
}
