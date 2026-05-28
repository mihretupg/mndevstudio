import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {sectionLinks} from './utils/navigation'

export default function App(){
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!revealElements.length) return

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          entry.target.classList.remove('reveal-hidden')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    revealElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const scrollToCurrentPath = () => {
      const link = sectionLinks.find(item => item.path === window.location.pathname)
      if (!link) return

      window.requestAnimationFrame(() => {
        document.getElementById(link.sectionId)?.scrollIntoView({block: 'start'})
      })
    }

    scrollToCurrentPath()
    window.addEventListener('popstate', scrollToCurrentPath)
    return () => window.removeEventListener('popstate', scrollToCurrentPath)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="hyperspace-background" aria-hidden="true" />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-black/70 px-3 py-2 rounded">Skip to content</a>
      <Navbar />
      <main id="main-content" className="relative max-w-6xl mx-auto px-6">
        <section id="home" className="pt-24 section-panel reveal-hidden" data-reveal>
          <Hero />
        </section>
        <section id="about" className="pt-20 section-panel section-divider reveal-hidden" data-reveal>
          <About />
        </section>
        <section id="techstack" className="pt-20 section-panel section-divider reveal-hidden" data-reveal>
          <Skills />
        </section>
        <section id="projects" className="pt-20 section-panel section-divider reveal-hidden" data-reveal>
          <Projects />
        </section>
        <section id="services" className="pt-20 section-panel section-divider reveal-hidden" data-reveal>
          <Services />
        </section>
        <section id="testimonials" className="pt-20 section-panel section-divider reveal-hidden" data-reveal>
          <Testimonials />
        </section>
        <section id="contact" className="pt-20 pb-20 section-panel section-divider reveal-hidden" data-reveal>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
