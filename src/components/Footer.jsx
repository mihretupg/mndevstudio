import React from 'react'
import {navigateToSection, sectionLinks} from '../utils/navigation'

export default function Footer(){
  const footerLinks = sectionLinks.filter(link => ['home', 'projects', 'contact'].includes(link.sectionId))

  return (
    <footer className="mt-12 border-t border-brand-4/20 py-8 bg-dark-bg/50" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/70">&copy; 2026 MN Dev Studio. All rights reserved.</div>
         
      </div>
    </footer>
  )
}
