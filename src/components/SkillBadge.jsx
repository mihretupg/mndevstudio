import React from 'react'

function ConceptIcon({type}){
  if (type === 'responsive') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="9" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'design') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M4 7.5A3.5 3.5 0 0 1 7.5 4h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 14.5 10.4 9l2.2 4 1.5-2.2L16 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 9h4M4 15h4M16 9h4M16 15h4M9 4v4M15 4v4M9 16v4M15 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function SkillBadge({skill, index = 0}){
  return (
    <span
      className="skill-icon-tile group"
      aria-label={skill.label}
      title={skill.label}
      style={{animationDelay: `${index * 0.16}s`}}
    >
      {skill.icons ? (
        <span className="flex items-center" aria-hidden="true">
          {skill.icons.map(icon => (
            <img key={icon} src={icon} alt="" className="skill-icon-image object-contain" loading="lazy" />
          ))}
        </span>
      ) : (
        <span className="skill-icon-image grid place-items-center text-brand-4" aria-hidden="true">
          <ConceptIcon type={skill.iconType} />
        </span>
      )}
    </span>
  )
}
