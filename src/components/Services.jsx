import React from 'react'

function ServiceIcon({type}){
  const iconProps = {
    className: 'h-7 w-7',
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true
  }

  if (type === 'website') {
    return (
      <svg {...iconProps}>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 8.5h16M8 15.5h5M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="7" cy="6.6" r="0.65" fill="currentColor" />
        <circle cx="9.4" cy="6.6" r="0.65" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'app') {
    return (
      <svg {...iconProps}>
        <path d="M8 8.5 4.5 12 8 15.5M16 8.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m13.5 6.5-3 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="3.5" y="4.5" width="17" height="15" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      </svg>
    )
  }

  if (type === 'design') {
    return (
      <svg {...iconProps}>
        <path d="M5 19.2h4.4L19 9.6a2.35 2.35 0 0 0-3.3-3.35L6.05 15.9 5 19.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m14.2 7.75 2.05 2.05M4.8 21h14.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'backend') {
    return (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5.7" rx="6.5" ry="2.7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 5.7v6.6c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7V5.7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 12.3v4.5c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7v-4.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10.7c1.1.55 2.5.85 4 .85s2.9-.3 4-.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    )
  }

  if (type === 'commerce') {
    return (
      <svg {...iconProps}>
        <path d="M6.4 9.2h11.2l-.85 9.3a2 2 0 0 1-2 1.8h-5.5a2 2 0 0 1-2-1.8L6.4 9.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 9.2V8a3 3 0 0 1 6 0v1.2M8.8 14h6.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16.8 5.2h2.7l1 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <path d="M12 3.8v3M12 17.2v3M5.8 7.2l2.1 2.1M16.1 14.7l2.1 2.1M3.8 12h3M17.2 12h3M5.8 16.8l2.1-2.1M16.1 9.3l2.1-2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4.9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.2 12.1 11.45 13.35 14.1 10.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const services = [
  {
    title: 'Custom Website Development',
    icon: 'website',
    description: 'We build modern, responsive, and professional websites for businesses, personal brands, and organizations.'
  },
  {
    title: 'Full-Stack Web Applications',
    icon: 'app',
    description: 'We develop complete web applications with frontend interfaces, backend systems, databases, and secure user features.'
  },
  {
    title: 'UI/UX & Frontend Engineering',
    icon: 'design',
    description: 'We design and build clean, user-friendly interfaces that work smoothly across desktop, tablet, and mobile devices.'
  },
  {
    title: 'Backend APIs & Database Systems',
    icon: 'backend',
    description: 'We create secure APIs, authentication systems, dashboards, and database-powered software solutions.'
  },
  {
    title: 'E-Commerce & Payment Integration',
    icon: 'commerce',
    description: 'We build online stores, product pages, checkout flows, and integrate payment systems for digital businesses.'
  },
  {
    title: 'Deployment, Maintenance & Support',
    icon: 'support',
    description: 'We help launch, maintain, update, and improve websites and applications after development.'
  }
]

export default function Services(){
  return (
    <section>
      <h2 className="section-title text-3xl font-semibold text-white">Services</h2>
      <p className="mt-3 text-gray-300">What we offer to help your project succeed.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map(service => (
          <article key={service.title} className="p-6 rounded-3xl panel-light border border-brand-4/20 shadow-lg backdrop-blur-sm flex gap-4 items-start badtz-pop">
            <div className="w-10 flex-shrink-0 pt-1 text-brand-4" aria-hidden="true">
              <ServiceIcon type={service.icon} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
