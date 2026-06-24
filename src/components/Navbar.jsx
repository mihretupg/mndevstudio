import React, {useState} from 'react'
import {navigateToSection, sectionLinks} from '../utils/navigation'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  const handleNavigation = link => event => {
    navigateToSection(event, link)
    setOpen(false)
  }

  return (
    <header className="fixed w-full z-40 bg-dark-bg/95 backdrop-blur-sm border-b border-brand-4/20" role="banner">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 badtz-pop">
 
          <div className="font-semibold text-white">Mihretu Petros</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80" aria-label="Primary navigation">
          {sectionLinks.map(l=> (
            <a key={l.path} href={l.path} onClick={handleNavigation(l)} className="hover:text-brand-4 transition focus:outline-none focus:ring-2 focus:ring-brand-4 rounded px-2 py-1" aria-label={l.label}>{l.label}</a>
          ))}
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)} className="p-2 rounded-md bg-brand-4/20 focus:outline-none focus:ring-2 focus:ring-brand-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#CCFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-dark-bg/95 backdrop-blur-sm border-t border-brand-4/20" role="dialog" aria-label="Mobile menu">
          <div className="px-6 py-6 space-y-4">
            {sectionLinks.map(l=> (
              <a key={l.path} href={l.path} onClick={handleNavigation(l)} className="block text-lg text-white hover:text-brand-4 transition focus:outline-none focus:ring-2 focus:ring-brand-4 rounded px-2 py-1">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
