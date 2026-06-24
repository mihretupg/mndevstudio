import React from 'react'
import {navigateToSection, sectionLinks} from '../utils/navigation'

const projectLink = sectionLinks.find(link => link.sectionId === 'projects')
const contactLink = sectionLinks.find(link => link.sectionId === 'contact')

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const heroParticles = [
  {label: 'JavaScript', icon: `${iconBase}/javascript/javascript-original.svg`, top: '8%', left: '8%', delay: '0s'},
  {label: 'React', icon: `${iconBase}/react/react-original.svg`, top: '18%', left: '45%', delay: '0.7s'},
  {label: 'Node.js', icon: `${iconBase}/nodejs/nodejs-original.svg`, top: '12%', left: '78%', delay: '1.4s'},
  {label: 'Docker', icon: `${iconBase}/docker/docker-original.svg`, top: '52%', left: '5%', delay: '2.1s'},
  {label: 'Git', icon: `${iconBase}/git/git-original.svg`, top: '70%', left: '28%', delay: '2.8s'},
  {label: 'Figma', icon: `${iconBase}/figma/figma-original.svg`, top: '78%', left: '58%', delay: '3.5s'},
  {label: 'npm', icon: `${iconBase}/npm/npm-original-wordmark.svg`, top: '40%', left: '88%', delay: '4.2s'},
  {label: 'VS Code', icon: `${iconBase}/vscode/vscode-original.svg`, top: '34%', left: '35%', delay: '4.9s'},
  {label: 'PostgreSQL', icon: `${iconBase}/postgresql/postgresql-original.svg`, top: '84%', left: '86%', delay: '5.6s'},
  {label: 'GitHub', icon: `${iconBase}/github/github-original.svg`, top: '60%', left: '74%', delay: '6.3s'}
]

export default function Hero(){
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center badtz-fade-slide py-16 overflow-hidden">
      <div className="hero-particle-layer" aria-hidden="true">
        {heroParticles.map(particle => (  
          <span
            key={particle.label}
            className="hero-tech-particle"
            style={{top: particle.top, left: particle.left, animationDelay: particle.delay}}
            title={particle.label}
          >
            <img src={particle.icon} alt="" className="hero-tech-particle-icon" loading="lazy" />
          </span>
        ))}
      </div>

      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-4 font-semibold">IT project coordinator & frontend developer</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mt-4">Mihretu <span className="text-brand-4">Petros</span></h1>
        <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">Experienced in frontend engineering and IT project coordination, building responsive React and Tailwind CSS web applications while supporting Agile/Scrum delivery, sprint planning, backlog management, stakeholder communication, documentation, reporting, and timely handoff of reliable digital solutions.</p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a href={projectLink.path} onClick={event => navigateToSection(event, projectLink)} aria-label="View Projects" className="btn btn-primary px-6 py-3 bg-brand-4 text-brand-3 font-semibold rounded-full hover:bg-brand-4/90 hover:shadow-lg shadow-md transition duration-200">View Projects</a>
          <a href={contactLink.path} onClick={event => navigateToSection(event, contactLink)} aria-label="Contact Mihretu" className="btn btn-secondary px-6 py-3 border-2 border-brand-4 text-brand-4 font-semibold rounded-full hover:bg-brand-4/10 transition duration-200">Let's Talk</a>
        </div>
      </div>

      <div className="relative z-10">
        <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-brand-4/10 blur-3xl"></div>
        <div className="relative card-shadow rounded-2xl bg-brand-3/20 backdrop-blur-sm border border-brand-4/30 p-6">
          <pre className="language-js text-sm bg-transparent text-brand-4 overflow-auto rounded font-mono">
{`  
function buildAwesome() {
  return coordinateProject()
    .withReact()
    .withTailwind()
    .trackDelivery()
}

buildAwesome()`}
          </pre>
        </div>
      </div>
    </div>
  )
}
